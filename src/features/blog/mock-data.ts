import type { BlogCategory, BlogPost, BlogTag } from "./types"

export const MOCK_CATEGORIES: BlogCategory[] = [
  {
    _id: "cat-guides",
    title: "Guides",
    slug: { current: "guides" },
    description: "Step-by-step technical walkthroughs, workflows & recipes",
    color: "#dc2626",
  },
  {
    _id: "cat-frontend",
    title: "Frontend",
    slug: { current: "frontend" },
    description:
      "Deep-dives into React 19, TypeScript, TanStack, and UI architecture",
    color: "#3b82f6",
  },
  {
    _id: "cat-ui-shaders",
    title: "UI & Shaders",
    slug: { current: "ui-shaders" },
    description:
      "Fluid interactions, GLSL shaders, canvas effects & micro-animations",
    color: "#a855f7",
  },
  {
    _id: "cat-backend",
    title: "Backend & API",
    slug: { current: "backend" },
    description:
      "Scalable services, NestJS, PostgreSQL, Prisma & server functions",
    color: "#10b981",
  },
  {
    _id: "cat-architecture",
    title: "Architecture",
    slug: { current: "architecture" },
    description:
      "Fullstack system design, SSR prerendering & performance engineering",
    color: "#f59e0b",
  },
]

export const MOCK_TAGS: BlogTag[] = [
  { _id: "tag-react", title: "React", slug: { current: "react" } },
  { _id: "tag-tanstack", title: "TanStack", slug: { current: "tanstack" } },
  {
    _id: "tag-typescript",
    title: "TypeScript",
    slug: { current: "typescript" },
  },
  { _id: "tag-mcp", title: "MCP & AI", slug: { current: "mcp-ai" } },
  { _id: "tag-tailwind", title: "Tailwind CSS", slug: { current: "tailwind" } },
  {
    _id: "tag-shaders",
    title: "WebGL & Shaders",
    slug: { current: "shaders" },
  },
  { _id: "tag-nestjs", title: "NestJS", slug: { current: "nestjs" } },
  {
    _id: "tag-design-system",
    title: "Design Systems",
    slug: { current: "design-system" },
  },
]

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    _id: "post-1",
    title:
      "Figma to React: the complete AI workflow (Claude Code, MCP, and GitHub)",
    slug: { current: "figma-to-react-complete-ai-workflow" },
    excerpt:
      "Assemble a landing page from shadcncraft blocks in Figma, theme it with the plugin, connect the Figma MCP to Claude Code, and push the build to GitHub.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      alt: "Figma to React AI workflow diagram with dark futuristic backdrop",
    },
    categories: [MOCK_CATEGORIES[0], MOCK_CATEGORIES[1]],
    tags: [MOCK_TAGS[3], MOCK_TAGS[0], MOCK_TAGS[7]],
    group: {
      _id: "grp-ai-tools",
      title: "AI Development Workflows",
      slug: { current: "ai-workflows" },
    },
    groupOrder: 1,
    publishedAt: "2026-08-10T09:00:00.000Z",
    readTime: 6,
    isFeatured: true,
    author: {
      name: "Phong Phan",
      role: "Frontend Engineer",
      avatar: "/avatar.gif",
      verified: true,
    },
  },
  {
    _id: "post-2",
    title:
      "Mastering TanStack Start & Router: Zero-Bundle Route Matching & SSR",
    slug: { current: "mastering-tanstack-start-router-zero-bundle" },
    excerpt:
      "A deep dive into type-safe routing, search params validation with Zod, and full-stack SSR prerendering for blazing fast portfolio and dashboard apps.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1200&auto=format&fit=crop",
      alt: "TanStack Start and type safe routing code architecture",
    },
    categories: [MOCK_CATEGORIES[1], MOCK_CATEGORIES[4]],
    tags: [MOCK_TAGS[0], MOCK_TAGS[1], MOCK_TAGS[2]],
    group: {
      _id: "grp-tanstack",
      title: "Modern TanStack Ecosystem",
      slug: { current: "tanstack-ecosystem" },
    },
    groupOrder: 1,
    publishedAt: "2026-08-04T14:30:00.000Z",
    readTime: 8,
    isFeatured: true,
    author: {
      name: "Phong Phan",
      role: "Frontend Engineer",
      avatar: "/avatar.gif",
      verified: true,
    },
  },
  {
    _id: "post-3",
    title:
      "Building Organic Fluid Shaders with Three.js & GLSL Canvas Textures",
    slug: { current: "building-organic-fluid-shaders-threejs-glsl" },
    excerpt:
      "Create reactive liquid distortions, iridescent chromatic aberration, and mouse-follow displacement waves running at smooth 60fps on modern GPUs.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
      alt: "Fluid GLSL Shader liquid metallic distortion render",
    },
    categories: [MOCK_CATEGORIES[2]],
    tags: [MOCK_TAGS[5], MOCK_TAGS[0]],
    publishedAt: "2026-07-28T10:15:00.000Z",
    readTime: 11,
    isFeatured: false,
    author: {
      name: "Phong Phan",
      role: "Frontend Engineer",
      avatar: "/avatar.gif",
      verified: true,
    },
  },
  {
    _id: "post-4",
    title:
      "Architecting Modular REST Services in NestJS with Strict DTO Validation",
    slug: { current: "architecting-modular-rest-services-nestjs" },
    excerpt:
      "Practical enterprise architecture: Dependency Injection, Prisma ORM transaction isolation, JWT RBAC guards, and auto-generated OpenAPI documentation.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      alt: "Server infrastructure and modular NestJS architecture backend",
    },
    categories: [MOCK_CATEGORIES[3], MOCK_CATEGORIES[4]],
    tags: [MOCK_TAGS[6], MOCK_TAGS[2]],
    publishedAt: "2026-07-15T16:00:00.000Z",
    readTime: 9,
    isFeatured: false,
    author: {
      name: "Phong Phan",
      role: "Frontend Engineer",
      avatar: "/avatar.gif",
      verified: true,
    },
  },
  {
    _id: "post-5",
    title: "Designing Engineering Blueprint Tokens in Tailwind CSS v4",
    slug: { current: "designing-engineering-blueprint-tokens-tailwind-v4" },
    excerpt:
      "Crafting high-contrast dark themes, OKLCH semantic surface tokens, subtle dotted canvas backdrops, and technical reticle crosshair components.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      alt: "Tailwind CSS v4 design tokens and technical UI layout",
    },
    categories: [MOCK_CATEGORIES[1], MOCK_CATEGORIES[0]],
    tags: [MOCK_TAGS[4], MOCK_TAGS[7], MOCK_TAGS[0]],
    publishedAt: "2026-06-30T11:20:00.000Z",
    readTime: 7,
    isFeatured: false,
    author: {
      name: "Phong Phan",
      role: "Frontend Engineer",
      avatar: "/avatar.gif",
      verified: true,
    },
  },
  {
    _id: "post-6",
    title:
      "Micro-Interactions That Matter: Crafting GSAP & Motion Physics for Web",
    slug: { current: "micro-interactions-gsap-motion-physics" },
    excerpt:
      "Why spring physics, haptic sound feedback, magnetic button boundaries, and staggered typographic entrances elevate web apps from good to unforgettable.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      alt: "Motion physics visual and neon glow typography animation",
    },
    categories: [MOCK_CATEGORIES[2], MOCK_CATEGORIES[1]],
    tags: [MOCK_TAGS[0], MOCK_TAGS[5]],
    publishedAt: "2026-06-18T08:45:00.000Z",
    readTime: 5,
    isFeatured: false,
    author: {
      name: "Phong Phan",
      role: "Frontend Engineer",
      avatar: "/avatar.gif",
      verified: true,
    },
  },
]
