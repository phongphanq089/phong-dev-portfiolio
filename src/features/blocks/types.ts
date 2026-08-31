export type BlockCategoryId = "all" | "marketing" | "application" | "ecommerce"

export interface BlockCategory {
  id: BlockCategoryId
  label: string
  count?: number
}

export type BlockSchematicType =
  | "not-found-brick"
  | "social-proof-logos"
  | "social-links-grid"
  | "benefits-alternating"
  | "benefits-cards"
  | "hero-marketing"
  | "pricing-matrix"
  | "dashboard-overview"
  | "feature-grid"
  | "cta-banner"
  | "testimonial-cards"
  | "product-grid"
  | "faq-accordion"
  | "stats-metrics"

export interface BlockItem {
  id: string
  title: string
  slug: string
  category: "marketing" | "application" | "ecommerce"
  description: string
  isPro?: boolean
  schematicType: BlockSchematicType
  badge?: string
}
