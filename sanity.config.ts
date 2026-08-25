import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { dataset, projectId } from "./src/shared/lib/sanity"

export default defineConfig({
  name: "default",
  title: "Phong Phan Portfolio Studio",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: [],
  },
})
