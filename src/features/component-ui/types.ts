export type ComponentCategoryId =
  "all" | "primitives" | "navigation" | "overlays" | "blocks"

export interface ComponentCategory {
  id: ComponentCategoryId
  label: string
  count?: number
}

export type SchematicType =
  | "accordion"
  | "alert"
  | "alert-dialog"
  | "autocomplete"
  | "avatar"
  | "badge"
  | "breadcrumb"
  | "button"
  | "calendar"
  | "not-found"
  | "activity-feed"
  | "banner"
  | "benefits"
  | "blog-listings"
  | "careers"
  | "chat"
  | "command"
  | "checkbox"
  | "dialog"
  | "dropdown"
  | "hover-card"
  | "input"
  | "tabs"
  | "toast"
  | "tooltip"
  | "skeleton"

export interface ComponentItem {
  id: string
  name: string
  slug: string
  category: ComponentCategoryId
  description: string
  count?: number
  schematicType: SchematicType
  badge?: string
}
