import { createClient } from "next-sanity"

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "i6rvgdeu"
const dataset = import.meta.env.VITE_SANITY_DATASET || "production"
const apiVersion = "2024-03-24"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
