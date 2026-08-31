import { HashIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const tagType = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  icon: HashIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      placeholder: "e.g. Next.js, Architecture, TailwindCSS, State Management",
      validation: (rule) => rule.required().error("Tag title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Tag slug is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare({ title, slug }) {
      return {
        title: `#${title}`,
        subtitle: slug ? `/${slug}` : undefined,
      }
    },
  },
})
