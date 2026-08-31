import { createClient } from "@sanity/client"
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url"

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

const imageBuilder = createImageUrlBuilder(client)

/**
 * Raw url builder for advanced custom image transforms
 */
export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source)
}

/**
 * Standard Sanity Image structure returned from Sanity schemas
 */
export interface SanityImage {
  asset?: {
    _ref?: string
    _type?: string
    _id?: string
    url?: string
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  url?: string
  [key: string]: unknown
}

export interface SanityImageUrlOptions {
  /** Desired image width in px */
  width?: number
  /** Desired image height in px */
  height?: number
  /** Quality between 1 and 100 (default: 85) */
  quality?: number
  /** Crop / fit behavior (default: 'crop') */
  fit?: "crop" | "clip" | "fill" | "fillmax" | "max" | "scale" | "min"
  /** Format to output, e.g. 'webp', 'jpg', 'png' or 'auto' (default: 'auto') */
  format?: "webp" | "jpg" | "png" | "auto"
  /** Blur intensity (1 to 200) */
  blur?: number
  /** Fallback URL if image is missing or invalid */
  fallback?: string
}

/**
 * Universal helper to safely extract and optimize Sanity Image URLs.
 * Handles:
 * 1. Sanity image objects with asset ref: { asset: { _ref: 'image-...' } }
 * 2. Sanity image objects with expanded asset: { asset: { url: 'https://...' } }
 * 3. Pre-formatted string URLs: 'https://...', '/images/...'
 * 4. Image asset IDs: 'image-8300adc89b5b13eca9d839f0775651acc8fba41c-1200x619-jpg'
 * 5. Complete fallback support if source is missing or invalid.
 *
 * @example
 * // Get responsive cover image with width & height
 * const coverUrl = getSanityImageUrl(post.coverImage, { width: 1200, height: 630 })
 *
 * @example
 * // With fallback
 * const avatarUrl = getSanityImageUrl(user.avatar, { width: 80, height: 80, fallback: '/avatar.png' })
 */
export function getSanityImageUrl(
  source: SanityImage | SanityImageSource | string | null | undefined,
  options?: SanityImageUrlOptions
): string {
  const fallback = options?.fallback || ""

  if (!source) {
    return fallback
  }

  // 1. If source is already a string
  if (typeof source === "string") {
    const trimmed = source.trim()
    if (!trimmed) return fallback

    // If it's already a full URL or relative path
    if (
      trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      trimmed.startsWith("/") ||
      trimmed.startsWith("./")
    ) {
      return trimmed
    }

    // If it's a Sanity asset reference string e.g. "image-abc...-1200x800-jpg"
    try {
      let builder = imageBuilder.image(trimmed)
      if (options?.width) builder = builder.width(options.width)
      if (options?.height) builder = builder.height(options.height)
      if (options?.quality) builder = builder.quality(options.quality)
      if (options?.fit) builder = builder.fit(options.fit)
      if (options?.format && options.format !== "auto") {
        builder = builder.format(options.format)
      }
      if (options?.format === "auto" || !options?.format) {
        builder = builder.auto("format")
      }
      if (options?.blur) builder = builder.blur(options.blur)
      return builder.url() || fallback
    } catch {
      return fallback
    }
  }

  // 2. If source is an object
  if (typeof source === "object") {
    // If it has a direct url property
    const directUrl =
      (source as { url?: string }).url ||
      (source as { asset?: { url?: string } }).asset?.url

    // Check if it has a valid Sanity asset reference
    const hasAssetRef = Boolean(
      (source as { asset?: { _ref?: string; _id?: string } }).asset?._ref ||
      (source as { asset?: { _ref?: string; _id?: string } }).asset?._id ||
      (source as { _id?: string })._id
    )

    if (hasAssetRef) {
      try {
        let builder = imageBuilder.image(source as SanityImageSource)
        if (options?.width) builder = builder.width(options.width)
        if (options?.height) builder = builder.height(options.height)
        if (options?.quality) builder = builder.quality(options.quality)
        if (options?.fit) builder = builder.fit(options.fit)
        if (options?.format && options.format !== "auto") {
          builder = builder.format(options.format)
        }
        if (options?.format === "auto" || !options?.format) {
          builder = builder.auto("format")
        }
        if (options?.blur) builder = builder.blur(options.blur)
        const generatedUrl = builder.url()
        return generatedUrl || directUrl || fallback
      } catch {
        return directUrl || fallback
      }
    }

    if (directUrl && typeof directUrl === "string" && directUrl.trim() !== "") {
      return directUrl.trim()
    }
  }

  return fallback
}

/**
 * Safely extracts the alt text from a Sanity image object with fallback
 */
export function getSanityImageAlt(
  source: { alt?: string } | null | undefined,
  fallbackAlt = ""
): string {
  return source?.alt?.trim() || fallbackAlt
}

export interface SanitySiteSettings {
  _id: string
  _updatedAt?: string
  coverImage?: SanityImage
  siteTitle?: string
  siteName?: string
  siteDescription?: string
  siteUrl?: string
  keywords?: string[]
  author?: string
  ogImage?: SanityImage
  twitterCard?: "summary_large_image" | "summary"
  twitterHandle?: string
  favicon?: SanityImage
  favicon16?: SanityImage
  favicon32?: SanityImage
  appleTouchIcon?: SanityImage
  androidChrome192?: SanityImage
  androidChrome512?: SanityImage
  safariMaskIcon?: SanityImage
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

export const siteSettingsQueryOptions = () => ({
  queryKey: ["siteSettings"] as const,
  queryFn: () => getSiteSettings(),
  staleTime: 1000 * 60 * 10,
})
