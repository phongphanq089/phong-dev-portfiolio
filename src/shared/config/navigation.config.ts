export interface NavItemConfig {
  id: string
  label: string
  title: string
  link: string
  color: string
  textColor: string
  border: string
  bg: string
  shortcut?: string[]
  description?: string
}

export const MAIN_NAV_ITEMS: NavItemConfig[] = [
  {
    id: "projects",
    label: "PROJECTS",
    title: "Projects",
    link: "/project",
    color: "#ff00ff",
    textColor: "text-[#ff00ff]",
    border: "border-[#ff00ff]",
    bg: "bg-[#ff00ff]",
    shortcut: ["G", "P"],
    description: "Explore featured projects and case studies",
  },
  {
    id: "blog",
    label: "BLOG",
    title: "Blog",
    link: "/blog",
    color: "#ff6600",
    textColor: "text-[#ff6600]",
    border: "border-[#ff6600]",
    bg: "bg-[#ff6600]",
    shortcut: ["G", "L"],
    description: "Read technical articles and insights",
  },
  {
    id: "resources",
    label: "RESOURCES",
    title: "Resources",
    link: "/resources",
    color: "#ffcc00",
    textColor: "text-[#ffcc00]",
    border: "border-[#ffcc00]",
    bg: "bg-[#ffcc00]",
    shortcut: ["G", "R"],
    description: "Curated tools, bookmarks and resources",
  },
  {
    id: "design-system",
    label: "DESIGN SYSTEM",
    title: "Design System",
    link: "/design-system",
    color: "#00f0ff",
    textColor: "text-[#00f0ff]",
    border: "border-[#00f0ff]",
    bg: "bg-[#00f0ff]",
    shortcut: ["G", "D"],
    description: "Engineering design tokens, shaders, and UI primitives",
  },
  // {
  //   id: "Component ui",
  //   label: "COMPONNENT-UI",
  //   title: "Component ui",
  //   link: "/studio/$",
  //   color: "var(--foreground)",
  //   textColor: "text-foreground dark:text-white",
  //   border: "border-foreground dark:border-white",
  //   bg: "bg-foreground dark:bg-white",
  //   shortcut: ["G", "S"],
  //   description: "Sanity Studio headless content management",
  // },
]
