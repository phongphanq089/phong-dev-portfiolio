import { siteConfig } from "./site.config"

export interface SeoConfig {
  title: string
  description: string
  keywords?: string[] | string
  ogImage?: string
  url?: string
  noIndex?: boolean
}

export const defaultSeoConfig: Required<
  Omit<SeoConfig, "keywords" | "noIndex">
> & {
  keywords: string[]
  siteName: string
  locale: string
  author: string
  noIndex: boolean
} = {
  siteName: "Phong Phan",
  title: "Phong Phan • Frontend Engineer",
  description:
    "Personal portfolio and engineering showcase of Phong Phan. Frontend Engineer with a solid fullstack foundation, specializing in React, TypeScript, TanStack, and UI craftsmanship.",
  url: siteConfig.url,
  ogImage: siteConfig.ogImage,
  locale: "en_US",
  author: siteConfig.author.name,
  noIndex: false,
  keywords: [
    "Phong Phan",
    "Frontend Engineer",
    "UI Engineer",
    "Creative Developer",
    "React",
    "TanStack",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Design Systems",
    "Web Development",
    "Portfolio",
  ],
}

export const pagesSeoConfig: Record<string, SeoConfig> = {
  home: {
    title: "Phong Phan • Frontend Engineer",
    description:
      "Personal portfolio of Phong Phan — Frontend Engineer focused on building highly polished user interfaces, fluid interactions, and modern web applications.",
  },
  block: {
    title: "Blocks • Phong Phan",
    description:
      "Beautifully designed, production-ready UI blocks and templates built with React and Tailwind CSS.",
  },
  projects: {
    title: "Projects • Phong Phan",
    description:
      "Featured web applications, interactive experiments, and UI case studies built with React, TypeScript, and modern web technologies.",
  },
  blog: {
    title: "Blog • Phong Phan",
    description:
      "Articles and practical engineering notes on frontend architecture, UI components, animations, and developer workflows.",
  },
  resources: {
    title: "Resources • Phong Phan",
    description:
      "Curated collection of developer tools, documentation, libraries, and design bookmarks for modern web development.",
  },
  componentUi: {
    title: "Component UI • Phong Phan",
    description:
      "Pixel-perfect, uniquely crafted UI primitives, custom hooks, and interaction patterns.",
  },
  designSystem: {
    title: "Design System • Phong Phan",
    description:
      "Engineering design tokens, UI primitives, and interactive shader components created for the portfolio.",
  },
  library: {
    title: "UI Library • Phong Phan",
    description:
      "Reusable React components, custom hooks, and interaction patterns for modern web apps.",
  },
  studio: {
    title: "Sanity Studio • Content Management",
    description: "Headless CMS workspace powered by Sanity.io.",
    noIndex: true,
  },
}

/**
 * Creates meta tags array for TanStack Router `head: () => ({ meta: createSeoMeta(...) })`
 */
export function createSeoMeta(
  config?: Partial<SeoConfig> | keyof typeof pagesSeoConfig
) {
  let resolved: Partial<SeoConfig> = {}

  if (typeof config === "string") {
    resolved = pagesSeoConfig[config] ?? {}
  } else if (config) {
    resolved = config
  }

  const title = resolved.title ?? defaultSeoConfig.title
  const description = resolved.description ?? defaultSeoConfig.description
  const image = resolved.ogImage ?? defaultSeoConfig.ogImage
  const url = resolved.url ?? defaultSeoConfig.url
  const keywords = Array.isArray(resolved.keywords)
    ? resolved.keywords.join(", ")
    : (resolved.keywords ?? defaultSeoConfig.keywords.join(", "))
  const noIndex = resolved.noIndex ?? defaultSeoConfig.noIndex

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: defaultSeoConfig.author },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: defaultSeoConfig.siteName },
    { property: "og:locale", content: defaultSeoConfig.locale },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // Robots
    {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow",
    },
  ]
}
