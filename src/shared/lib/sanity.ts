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

export interface SanitySiteSettings {
  _id: string
  _updatedAt?: string
  siteTitle?: string
  siteName?: string
  siteDescription?: string
  siteUrl?: string
  keywords?: string[]
  author?: string
  ogImage?: {
    asset?: {
      _ref?: string
      _type?: string
    }
    alt?: string
  }
  twitterCard?: "summary_large_image" | "summary"
  twitterHandle?: string
  favicon?: {
    asset?: {
      _ref?: string
      _type?: string
    }
  }
  favicon16?: {
    asset?: {
      _ref?: string
      _type?: string
    }
  }
  favicon32?: {
    asset?: {
      _ref?: string
      _type?: string
    }
  }
  appleTouchIcon?: {
    asset?: {
      _ref?: string
      _type?: string
    }
  }
  androidChrome192?: {
    asset?: {
      _ref?: string
      _type?: string
    }
  }
  androidChrome512?: {
    asset?: {
      _ref?: string
      _type?: string
    }
  }
  safariMaskIcon?: {
    asset?: {
      _ref?: string
      _type?: string
    }
  }
  themeColor?: {
    hex?: string
  }
  backgroundColor?: {
    hex?: string
  }
  githubUrl?: string
  linkedinUrl?: string
  twitterUrl?: string
  email?: string
  phone?: string
}

export const SITE_SETTINGS_QUERY = `*[_type == "setting"][0]`

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  try {
    return await client.fetch<SanitySiteSettings | null>(SITE_SETTINGS_QUERY)
  } catch (error) {
    console.error("Error fetching site settings from Sanity:", error)
    return null
  }
}
