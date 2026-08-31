import { codeInput } from "@sanity/code-input"
import { colorInput } from "@sanity/color-input"
import { CogIcon } from "@sanity/icons"
import { table } from "@sanity/table"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { schemaTypes } from "./sanity/schema-types"
import { dataset, projectId } from "./src/shared/lib/sanity"

// Define singleton types
const singletonTypes = new Set(["setting"])

export default defineConfig({
  name: "default",
  title: "Phong Phan Portfolio Studio",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content & Settings")
          .items([
            S.listItem()
              .title("Site Settings")
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType("setting")
                  .documentId("settings")
                  .title("Site Settings")
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId() || "")
            ),
          ]),
    }),
    colorInput(),
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global "Create new document" menu (+)
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton documents, remove delete and duplicate to prevent accidental deletion
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(
            ({ action }) => action && !["delete", "duplicate"].includes(action)
          )
        : input,
  },

  beta: {
    form: {
      // @ts-expect-error - Runtime flag keeps object dialogs stable in embedded studio
      enhancedObjectDialog: {
        enabled: true,
      },
    },
  },
})
