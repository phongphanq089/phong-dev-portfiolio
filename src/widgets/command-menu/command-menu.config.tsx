import {
  Activity,
  Atom,
  Bookmark,
  Briefcase,
  Code2,
  ExternalLink,
  Flame,
  Home,
  Laptop,
  Layers,
  LayoutGrid,
  Mail,
  Moon,
  Newspaper,
  Palette,
  Phone,
  Radio,
  Sparkles,
  Sun,
  User,
  Wand2,
} from "lucide-react"
import type { ReactNode } from "react"

import { SOCIALINK } from "@/shared/constants"
import { GitHub } from "@/shared/ui/icons"

export type CommandMenuItem = {
  id: string
  title: string
  description?: string
  icon?: ReactNode
  shortcut?: string[]
  keywords?: string[]
  group: string
  to?: string
  externalUrl?: string
  action?:
    "theme-light" | "theme-dark" | "theme-system" | "toggle-music" | string
  badge?: string
}

export type CommandMenuGroup = {
  id: string
  heading: string
}

export const COMMAND_GROUPS: CommandMenuGroup[] = [
  { id: "menu", heading: "Menu" },
  { id: "sections", heading: "Sections" },
  { id: "components", heading: "Components" },
  { id: "theme", heading: "Theme & System" },
  { id: "social", heading: "Social & Contact" },
]

export const COMMAND_MENU_ITEMS: CommandMenuItem[] = [
  // ─── 1. Navigation Pages (Menu) ──────────────────────────────────────────
  {
    id: "nav-home",
    title: "Home",
    description: "Go to homepage",
    icon: <Home className="size-4 text-[#ff00ff]" />,
    shortcut: ["G", "H"],
    keywords: ["home", "trang chu", "main", "landing"],
    group: "menu",
    to: "/",
  },
  {
    id: "nav-projects",
    title: "Projects",
    description: "Explore featured projects and case studies",
    icon: <Briefcase className="size-4 text-[#ff00ff]" />,
    shortcut: ["G", "P"],
    keywords: ["projects", "du an", "work", "portfolio"],
    group: "menu",
    to: "/project",
  },
  {
    id: "nav-blog",
    title: "Blog",
    description: "Read technical articles and insights",
    icon: <Newspaper className="size-4 text-[#ff6600]" />,
    shortcut: ["G", "L"],
    keywords: ["blog", "bai viet", "articles", "news"],
    group: "menu",
    to: "/blog",
  },
  {
    id: "nav-resources",
    title: "Resources",
    description: "Curated tools, bookmarks and resources",
    icon: <Bookmark className="size-4 text-[#ffcc00]" />,
    shortcut: ["G", "R"],
    keywords: ["resources", "tai nguyen", "tools", "bookmarks"],
    group: "menu",
    to: "/resources",
  },
  {
    id: "nav-studio",
    title: "Studio",
    description: "Interactive UI & 3D development studio",
    icon: <Sparkles className="size-4 text-white" />,
    shortcut: ["G", "S"],
    keywords: ["studio", "editor", "playground", "3d"],
    group: "menu",
    to: "/studio/$",
  },
  {
    id: "nav-design-system",
    title: "Design System",
    description: "Explore color tokens, buttons, cards & typography",
    icon: <Palette className="size-4 text-[#00f0ff]" />,
    shortcut: ["G", "D"],
    keywords: ["design system", "tokens", "components", "palette", "styles"],
    group: "menu",
    to: "/design-system",
  },

  // ─── 2. Homepage Sections (Scroll anchors) ──────────────────────────────
  {
    id: "sec-banner",
    title: "Banner Hero",
    description: "Interactive terminal hero section",
    icon: <Radio className="size-4 text-primary" />,
    shortcut: ["#", "1"],
    keywords: ["banner", "hero", "header", "terminal"],
    group: "sections",
    to: "/#banner",
  },
  {
    id: "sec-about",
    title: "About Me",
    description: "Biography, skills & technical background",
    icon: <User className="size-4 text-emerald-400" />,
    shortcut: ["#", "2"],
    keywords: ["about", "gioi thieu", "bio", "experience", "profile"],
    group: "sections",
    to: "/#about",
  },
  {
    id: "sec-components",
    title: "UI Components Section",
    description: "Interactive component showpieces",
    icon: <Atom className="size-4 text-sky-400" />,
    shortcut: ["#", "3"],
    keywords: ["components", "ui showcase", "widgets", "interactive"],
    group: "sections",
    to: "/#components-ui",
  },
  {
    id: "sec-project-list",
    title: "Projects Showcase",
    description: "Selected portfolio works on home",
    icon: <LayoutGrid className="size-4 text-purple-400" />,
    shortcut: ["#", "4"],
    keywords: ["projects section", "works", "portfolio showcase"],
    group: "sections",
    to: "/#project",
  },
  {
    id: "sec-blog-list",
    title: "Latest Posts",
    description: "Recent blog articles on home",
    icon: <Newspaper className="size-4 text-amber-400" />,
    shortcut: ["#", "5"],
    keywords: ["blog section", "posts", "writing"],
    group: "sections",
    to: "/#blog",
  },
  {
    id: "sec-bookmarks",
    title: "Bookmarks",
    description: "Saved links and inspiration",
    icon: <Bookmark className="size-4 text-rose-400" />,
    shortcut: ["#", "6"],
    keywords: ["bookmarks", "links", "saved"],
    group: "sections",
    to: "/#bookmarks",
  },

  // ─── 3. Components Showcase (Referencing Image 3) ────────────────────────
  {
    id: "comp-text-burn",
    title: "Text Burn Neon",
    description: "Char-by-char fire animation via GSAP",
    icon: <Flame className="size-4 text-orange-500" />,
    shortcut: ["C", "1"],
    keywords: ["text burn neon", "fire", "gsap", "animation"],
    group: "components",
    badge: "New",
    to: "/#components-ui",
  },
  {
    id: "comp-fluid-gradient",
    title: "Fluid Gradient Text",
    description: "Mouse-tracking SVG gradient on text",
    icon: <Wand2 className="size-4 text-blue-400" />,
    shortcut: ["C", "2"],
    keywords: ["fluid gradient text", "motion", "svg", "mouse track"],
    group: "components",
    to: "/#components-ui",
  },
  {
    id: "comp-liquid-metal",
    title: "Liquid Metal Button",
    description: "Fluid shader distortion button",
    icon: <Sparkles className="size-4 text-cyan-400" />,
    keywords: ["liquid metal button", "shader", "webgl"],
    group: "components",
    to: "/design-system",
  },
  {
    id: "comp-creepy-button",
    title: "Creepy Eye Button",
    description: "Interactive pupil tracking button",
    icon: <Activity className="size-4 text-red-400" />,
    keywords: ["creepy button", "eye", "tracking"],
    group: "components",
    to: "/design-system",
  },
  {
    id: "comp-dotted-glow",
    title: "Dotted Glow Background",
    description: "Canvas grid with reactive glow",
    icon: <Layers className="size-4 text-violet-400" />,
    keywords: ["dotted glow background", "grid", "canvas", "particles"],
    group: "components",
    to: "/design-system",
  },
  {
    id: "comp-blueprint-lint",
    title: "Blueprint Lint Mark",
    description: "Technical blueprint reticle indicator",
    icon: <Code2 className="size-4 text-amber-400" />,
    keywords: ["blueprint", "reticle", "crosshair", "technical"],
    group: "components",
    to: "/design-system",
  },

  // ─── 4. Theme & System Actions ──────────────────────────────────────────
  {
    id: "action-theme-dark",
    title: "Dark Mode",
    description: "Switch interface to dark blueprint theme",
    icon: <Moon className="size-4 text-blue-400" />,
    shortcut: ["T", "D"],
    keywords: ["theme dark", "toi", "dark mode", "night"],
    group: "theme",
    action: "theme-dark",
  },
  {
    id: "action-theme-light",
    title: "Light Mode",
    description: "Switch interface to clean light theme",
    icon: <Sun className="size-4 text-amber-400" />,
    shortcut: ["T", "L"],
    keywords: ["theme light", "sang", "light mode", "day"],
    group: "theme",
    action: "theme-light",
  },
  {
    id: "action-theme-system",
    title: "System Theme",
    description: "Sync theme with your OS preference",
    icon: <Laptop className="size-4 text-muted-foreground" />,
    shortcut: ["T", "S"],
    keywords: ["theme system", "he thong", "auto"],
    group: "theme",
    action: "theme-system",
  },

  // ─── 5. Social & Contact ────────────────────────────────────────────────
  {
    id: "social-github",
    title: "GitHub Profile",
    description: "Check open-source code and contributions",
    icon: <GitHub size={16} className="text-foreground" />,
    keywords: ["github", "code", "repo", "git"],
    group: "social",
    externalUrl: SOCIALINK.github.link,
  },
  {
    id: "social-linkedin",
    title: "LinkedIn Profile",
    description: "Connect with Phong Phan on LinkedIn",
    icon: <ExternalLink className="size-4 text-blue-500" />,
    keywords: ["linkedin", "connect", "recruitment", "cv"],
    group: "social",
    externalUrl: SOCIALINK.linkedin.link,
  },
  {
    id: "social-twitter",
    title: "X (Twitter)",
    description: "Follow updates and dev discussions",
    icon: <ExternalLink className="size-4 text-sky-400" />,
    keywords: ["twitter", "x", "social"],
    group: "social",
    externalUrl: SOCIALINK.twiter.link,
  },
  {
    id: "social-email",
    title: "Send Email",
    description: "Get in touch: phongphanq089@gmail.com",
    icon: <Mail className="size-4 text-emerald-400" />,
    keywords: ["email", "mail", "contact", "lien he", "gmail"],
    group: "social",
    externalUrl: SOCIALINK.mail,
  },
  {
    id: "social-phone",
    title: "Call Phone",
    description: "Direct phone contact: 0706113210",
    icon: <Phone className="size-4 text-green-400" />,
    keywords: ["phone", "call", "dien thoai", "so dien thoai"],
    group: "social",
    externalUrl: SOCIALINK.phone,
  },
]
