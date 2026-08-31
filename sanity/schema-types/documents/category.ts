import { TagIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      placeholder: "e.g. Frontend, Backend, DevOps, Architecture",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "color",
      title: "Color Accent",
      type: "color",
      description: "Pick a visual brand/accent color for this category badge",
      options: {
        disableAlpha: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      hex: "color.hex",
    },
    prepare({ title, subtitle, hex }) {
      return {
        title,
        subtitle: hex ? `${hex} • ${subtitle || ""}` : subtitle,
      }
    },
  },
})
