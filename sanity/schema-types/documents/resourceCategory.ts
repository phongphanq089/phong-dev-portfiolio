import { FolderIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const resourceCategoryType = defineType({
  name: "resourceCategory",
  title: "Resource Category",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      placeholder:
        "e.g. Components, Icons, Illustrations, Photos, Videos, Colors, Backgrounds, Typography, 3D, Libraries, Tools, Inspirations",
      validation: (rule) => rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Slug is required"),
    }),
    defineField({
      name: "icon",
      title: "Icon Name / Identifier",
      type: "string",
      placeholder:
        "e.g. Box, Sparkles, Palette, Layers, Type, Code, Video, Image",
      description: "Lucide icon identifier name or emoji for the category tab",
    }),
    defineField({
      name: "color",
      title: "Badge / Tab Accent Color",
      type: "color",
      description: "Visual color picker for tab button and badge glow/border",
      options: {
        disableAlpha: true,
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Order index to arrange tabs on the navigation bar (1, 2, 3...)",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      hex: "color.hex",
      order: "order",
    },
    prepare({ title, hex, order }) {
      return {
        title,
        subtitle: `Color: ${hex || "default"} • Order: ${order ?? 0}`,
      }
    },
  },
  orderings: [
    {
      title: "Display Order (Low to High)",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Title (A-Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
})
