import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "i6rvgdeu"
const dataset = import.meta.env.VITE_SANITY_DATASET || "production"

export default defineConfig({
  name: "default",
  title: "My Sanity Studio",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: [],
  },
})
