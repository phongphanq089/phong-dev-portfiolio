import { LinkIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const resourceType = defineType({
  name: "resource",
  title: "Resource / Tool",
  type: "document",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "title",
      title: "Resource Name",
      type: "string",
      placeholder:
        "e.g. shadcn/ui, Radix UI, HeroUI, Codrops, Float UI, KokonutUI",
      validation: (rule) => rule.required().error("Resource name is required"),
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
      name: "url",
      title: "Website URL",
      type: "url",
      placeholder: "https://ui.shadcn.com",
      validation: (rule) =>
        rule
          .required()
          .uri({ scheme: ["http", "https"] })
          .error("Valid website URL is required"),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 2,
      placeholder:
        "e.g. Beautifully designed components built with Radix UI and Tailwind CSS.",
      validation: (rule) =>
        rule
          .max(200)
          .warning(
            "Keep description concise (< 200 characters) for compact grid cards"
          ),
    }),
    defineField({
      name: "coverImage",
      title: "Screenshot / Preview Banner",
      type: "image",
      description: "Preview screenshot of the tool or library website",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          initialValue: "Resource preview",
        }),
      ],
      validation: (rule) =>
        rule.required().error("Cover image / Screenshot is required"),
    }),
    defineField({
      name: "logo",
      title: "Favicon / Brand Logo (Optional)",
      type: "image",
      description:
        "Small brand icon displayed on the bottom-left corner of the card",
      options: {
        hotspot: true,
      },
    }),
    // Category (Required reference to resourceCategory)
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "resourceCategory" }],
      description:
        "Select main category (e.g. Components, Icons, Tools, Libraries, 3D...)",
      validation: (rule) => rule.required().error("Category is required"),
    }),
    // Tags (Multiple references to tag, e.g. React, Tailwind, Next.js, Three.js, Svelte...)
    defineField({
      name: "tags",
      title: "Tech Stack & Tags",
      type: "array",
      description:
        "Keywords & frameworks (e.g. #react, #tailwind, #threejs, #vue)",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "tag" }],
        }),
      ],
    }),
    // Pricing / License Badge
    defineField({
      name: "pricing",
      title: "Pricing / License Badge",
      type: "string",
      options: {
        list: [
          { title: "Free (100% Free)", value: "Free" },
          { title: "MIT (Open Source)", value: "MIT" },
          { title: "Freemium", value: "Freemium" },
          { title: "Paid", value: "Paid" },
        ],
      },
      initialValue: "Free",
    }),
    // Is Featured / Highlighted
    defineField({
      name: "isFeatured",
      title: "Featured / Recommended",
      type: "boolean",
      description: "Highlight this resource with an active glow/border",
      initialValue: false,
    }),
    // Published / Created Date
    defineField({
      name: "publishedAt",
      title: "Added Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      categoryTitle: "category.title",
      pricing: "pricing",
      url: "url",
    },
    prepare({ title, media, categoryTitle, pricing, url }) {
      return {
        title,
        subtitle: `${categoryTitle || "Uncategorized"} • [${pricing || "Free"}] • ${url || ""}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: "Newest Added",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Title (A-Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
})
