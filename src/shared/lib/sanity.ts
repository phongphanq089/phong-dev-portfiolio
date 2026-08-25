import { createClient } from "@sanity/client"
import type { SanityImageSource } from "@sanity/image-url"
import imageUrlBuilder from "@sanity/image-url"

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    throw new Error(errorMessage)
  }
  return v
}

export const projectId = assertValue(
  import.meta.env.VITE_SANITY_PROJECT_ID,
  "Missing environment variable: VITE_SANITY_PROJECT_ID"
)

export const dataset = assertValue(
  import.meta.env.VITE_SANITY_DATASET,
  "Missing environment variable: VITE_SANITY_DATASET"
)

export const apiVersion =
  import.meta.env.VITE_SANITY_API_VERSION || "2024-03-24"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const imageBuilder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source)
}
