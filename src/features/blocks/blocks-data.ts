import type { BlockCategory, BlockItem } from "./types"

export const BLOCK_CATEGORIES: BlockCategory[] = [
  { id: "all", label: "ALL" },
  { id: "marketing", label: "MARKETING" },
  { id: "application", label: "APPLICATION" },
  { id: "ecommerce", label: "ECOMMERCE" },
]

export const BLOCKS_DATA: BlockItem[] = [
  // 1. Not Found 01 (Image 1)
  {
    id: "block-not-found-01",
    title: "Not Found 01",
    slug: "not-found-01",
    category: "application",
    description: "A 404 page with a playable brick breaker game.",
    schematicType: "not-found-brick",
  },
  // 2. Social Proof 01 (Image 1)
  {
    id: "block-social-proof-01",
    title: "Social Proof 01",
    slug: "social-proof-01",
    category: "marketing",
    description: "A social proof section with a logos carousel.",
    schematicType: "social-proof-logos",
  },
  // 3. Social Links 01 (Image 1)
  {
    id: "block-social-links-01",
    title: "Social Links 01",
    slug: "social-links-01",
    category: "marketing",
    description: "A social links section with a lined grid layout.",
    schematicType: "social-links-grid",
  },
  // 4. Benefits 1 (Image 2)
  {
    id: "block-benefits-01",
    title: "Benefits 1",
    slug: "benefits-01",
    category: "marketing",
    description:
      "Alternating rows with feature text and analytics dashboard preview.",
    isPro: true,
    schematicType: "benefits-alternating",
  },
  // 5. Hero Section 01
  {
    id: "block-hero-01",
    title: "Hero Section 01",
    slug: "hero-section-01",
    category: "marketing",
    description:
      "Modern landing hero with badge, dual CTA buttons, and app preview.",
    schematicType: "hero-marketing",
  },
  // 6. Pricing Matrix 01
  {
    id: "block-pricing-01",
    title: "Pricing Matrix 01",
    slug: "pricing-matrix-01",
    category: "marketing",
    description:
      "3-tier subscription pricing comparison table with highlighted tier.",
    schematicType: "pricing-matrix",
  },
  // 7. Dashboard Overview 01
  {
    id: "block-dashboard-01",
    title: "Dashboard Overview 01",
    slug: "dashboard-overview-01",
    category: "application",
    description:
      "Executive analytics dashboard with chart visualizers and metrics.",
    isPro: true,
    schematicType: "dashboard-overview",
  },
  // 8. Feature Grid 01
  {
    id: "block-feature-grid-01",
    title: "Feature Grid 01",
    slug: "feature-grid-01",
    category: "marketing",
    description: "3-column bento feature matrix with glowing gradient cards.",
    schematicType: "feature-grid",
  },
  // 9. CTA Banner 01
  {
    id: "block-cta-banner-01",
    title: "CTA Banner 01",
    slug: "cta-banner-01",
    category: "marketing",
    description:
      "High-impact conversion callout banner with ambient radial glow.",
    schematicType: "cta-banner",
  },
  // 10. Testimonials 01
  {
    id: "block-testimonials-01",
    title: "Testimonials 01",
    slug: "testimonials-01",
    category: "marketing",
    description: "Customer quote cards with verified rating stars and avatars.",
    schematicType: "testimonial-cards",
  },
  // 11. Product Grid 01
  {
    id: "block-product-grid-01",
    title: "Product Grid 01",
    slug: "product-grid-01",
    category: "ecommerce",
    description:
      "Responsive storefront product showcase with quick add-to-cart.",
    schematicType: "product-grid",
  },
  // 12. FAQ Accordion 01
  {
    id: "block-faq-01",
    title: "FAQ Section 01",
    slug: "faq-section-01",
    category: "marketing",
    description:
      "Expandable frequently asked questions accordion with smooth transitions.",
    schematicType: "faq-accordion",
  },
  // 13. Stats & Metrics 01
  {
    id: "block-stats-01",
    title: "Stats & Metrics 01",
    slug: "stats-metrics-01",
    category: "marketing",
    description: "Key performance indicator stats with high-contrast numbers.",
    schematicType: "stats-metrics",
  },
]
