export type PricingBadge = "Free" | "MIT" | "Freemium" | "Paid"

export interface ResourceCategory {
  _id: string
  _type?: "resourceCategory"
  title: string
  slug: {
    current: string
  }
  icon?: string
  color?:
    | {
        hex?: string
      }
    | string
  order?: number
}

export interface ResourceImage {
  url: string
  alt?: string
}

export interface Resource {
  _id: string
  _type?: "resource"
  title: string
  slug: {
    current: string
  }
  url: string
  description: string
  coverImage: ResourceImage
  logo?: ResourceImage
  category: ResourceCategory
  pricing: PricingBadge
  isFeatured?: boolean
  publishedAt: string
}

export type ResourceSortOption = "featured" | "newest" | "title"
