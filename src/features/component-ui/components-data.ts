import type { ComponentCategory, ComponentItem } from "./types"

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  { id: "all", label: "All" },
  { id: "primitives", label: "Core Primitives" },
  { id: "navigation", label: "Navigation" },
  { id: "overlays", label: "Overlays & Modals" },
  { id: "blocks", label: "Composed Blocks" },
]

export const COMPONENTS_DATA: ComponentItem[] = [
  // 1. Accordion (Image 1)
  {
    id: "comp-accordion",
    name: "Accordion",
    slug: "accordion",
    category: "navigation",
    description: "A set of collapsible panels with headings and content.",
    schematicType: "accordion",
  },
  // 2. Alert (Image 1)
  {
    id: "comp-alert",
    name: "Alert",
    slug: "alert",
    category: "overlays",
    description: "A callout for displaying important information.",
    schematicType: "alert",
  },
  // 3. Alert Dialog (Image 1)
  {
    id: "comp-alert-dialog",
    name: "Alert Dialog",
    slug: "alert-dialog",
    category: "overlays",
    description: "A dialog that requires user response to proceed.",
    schematicType: "alert-dialog",
  },
  // 4. Autocomplete (Image 1)
  {
    id: "comp-autocomplete",
    name: "Autocomplete",
    slug: "autocomplete",
    category: "primitives",
    description: "An input that suggests options as you type.",
    schematicType: "autocomplete",
  },
  // 5. Avatar (Image 1)
  {
    id: "comp-avatar",
    name: "Avatar",
    slug: "avatar",
    category: "primitives",
    description: "An image element with a fallback for representing the user.",
    schematicType: "avatar",
  },
  // 6. Badge (Image 1)
  {
    id: "comp-badge",
    name: "Badge",
    slug: "badge",
    category: "primitives",
    description: "A badge or a component that looks like a badge.",
    schematicType: "badge",
  },
  // 7. Breadcrumb (Image 1)
  {
    id: "comp-breadcrumb",
    name: "Breadcrumb",
    slug: "breadcrumb",
    category: "navigation",
    description:
      "Displays the path to the current resource using a hierarchy of links.",
    schematicType: "breadcrumb",
  },
  // 8. Button (Image 1)
  {
    id: "comp-button",
    name: "Button",
    slug: "button",
    category: "primitives",
    description: "A button or a component that looks like a button.",
    schematicType: "button",
  },
  // 9. 404 (Image 2)
  {
    id: "comp-404",
    name: "404 State",
    slug: "404-state",
    category: "blocks",
    description: "Not found fallback screen with title and back navigation.",
    count: 6,
    schematicType: "not-found",
  },
  // 10. Activity Feed (Image 2)
  {
    id: "comp-activity-feed",
    name: "Activity Feed",
    slug: "activity-feed",
    category: "blocks",
    description:
      "Real-time timeline feed with avatar badges and financial records.",
    count: 1,
    schematicType: "activity-feed",
  },
  // 11. Banners (Image 2)
  {
    id: "comp-banners",
    name: "Banners",
    slug: "banners",
    category: "blocks",
    description:
      "Promotional and notification banner callouts with action buttons.",
    count: 10,
    schematicType: "banner",
  },
  // 12. Benefits (Image 2)
  {
    id: "comp-benefits",
    name: "Benefits",
    slug: "benefits",
    category: "blocks",
    description:
      "Feature highlight grid displaying core product value propositions.",
    count: 13,
    schematicType: "benefits",
  },
  // 13. Blog Listings (Image 2)
  {
    id: "comp-blog-listings",
    name: "Blog Listings",
    slug: "blog-listings",
    category: "blocks",
    description:
      "Multi-column responsive article card grid with image headers.",
    count: 4,
    schematicType: "blog-listings",
  },
  // 14. Calendar (Image 2)
  {
    id: "comp-calendar",
    name: "Calendar",
    slug: "calendar",
    category: "blocks",
    description:
      "Date picker and scheduling calendar with day selection matrix.",
    count: 31,
    schematicType: "calendar",
  },
  // 15. Careers (Image 2)
  {
    id: "comp-careers",
    name: "Careers",
    slug: "careers",
    category: "blocks",
    description:
      "Job position listing rows with department tags and apply actions.",
    count: 5,
    schematicType: "careers",
  },
  // 16. Chat (Image 2)
  {
    id: "comp-chat",
    name: "Chat",
    slug: "chat",
    category: "blocks",
    description:
      "Interactive messaging thread with bubble flows and input bar.",
    count: 5,
    badge: "Active",
    schematicType: "chat",
  },
  // 17. Checkbox & Switch
  {
    id: "comp-checkbox",
    name: "Checkbox & Switch",
    slug: "checkbox-switch",
    category: "primitives",
    description:
      "Control allowing users to toggle between binary checked states.",
    schematicType: "checkbox",
  },
  // 18. Command Menu
  {
    id: "comp-command",
    name: "Command (⌘K)",
    slug: "command",
    category: "overlays",
    description: "Fast, composable command palette with search filtering.",
    schematicType: "command",
  },
  // 19. Dialog / Modal
  {
    id: "comp-dialog",
    name: "Dialog",
    slug: "dialog",
    category: "overlays",
    description: "Window overlaid on either primary window or other dialogs.",
    schematicType: "dialog",
  },
  // 20. Dropdown Menu
  {
    id: "comp-dropdown",
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    category: "overlays",
    description: "Displays a menu to the user triggered by a button press.",
    schematicType: "dropdown",
  },
  // 21. Hover Card
  {
    id: "comp-hover-card",
    name: "Hover Card",
    slug: "hover-card",
    category: "overlays",
    description:
      "Sightful preview content for sighted users who hover on links.",
    schematicType: "hover-card",
  },
  // 22. Input
  {
    id: "comp-input",
    name: "Input",
    slug: "input",
    category: "primitives",
    description:
      "Displays a form input field or a component that looks like one.",
    schematicType: "input",
  },
  // 23. Tabs
  {
    id: "comp-tabs",
    name: "Tabs",
    slug: "tabs",
    category: "navigation",
    description: "Set of layered sections of content known as tab panels.",
    schematicType: "tabs",
  },
  // 24. Toast
  {
    id: "comp-toast",
    name: "Toast",
    slug: "toast",
    category: "overlays",
    description:
      "Succinct message displayed temporarily to report an operation.",
    schematicType: "toast",
  },
  // 25. Tooltip
  {
    id: "comp-tooltip",
    name: "Tooltip",
    slug: "tooltip",
    category: "overlays",
    description:
      "Popup displaying information related to an element on hover/focus.",
    schematicType: "tooltip",
  },
  // 26. Skeleton
  {
    id: "comp-skeleton",
    name: "Skeleton",
    slug: "skeleton",
    category: "primitives",
    description: "Used to show a placeholder while content is loading.",
    schematicType: "skeleton",
  },
]
