import { codeInput } from "@sanity/code-input"
import { colorInput } from "@sanity/color-input"
import { table } from "@sanity/table"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { schemaTypes } from "./sanity/schema-types"
import { dataset, projectId } from "./src/shared/lib/sanity"

export default defineConfig({
  name: "default",
  title: "Phong Phan Portfolio Studio",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [structureTool(), colorInput(), table(), codeInput()],

  schema: {
    types: schemaTypes,
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
