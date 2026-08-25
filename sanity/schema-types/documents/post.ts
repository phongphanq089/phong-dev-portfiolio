import { DocumentTextIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      placeholder: "e.g. Building Scalable REST APIs with NestJS & Prisma",
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
      name: "excerpt",
      title: "Excerpt / Summary",
      type: "text",
      rows: 3,
      description:
        "Brief summary shown on blog cards and search engine results (SEO).",
      validation: (rule) =>
        rule
          .max(250)
          .warning(
            "Shorter excerpts (< 250 characters) look best on blog cards"
          ),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Crucial for SEO & accessibility.",
        }),
      ],
    }),
    // 1. Multiple Categories (Required)
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      description:
        "Select one or more categories for this post (e.g. Frontend, Backend, Mobile)",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "category" }],
        }),
      ],
      validation: (rule) =>
        rule.required().min(1).error("Post must have at least one category"),
    }),
    // 2. Multiple Tags (Optional)
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      description:
        "Select multiple tags for granular filtering (e.g. #nestjs, #typescript, #docker)",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "tag" }],
        }),
      ],
    }),
    // 3. Group / Series (Optional - Standalone posts can leave this empty)
    defineField({
      name: "group",
      title: "Group / Series (Optional)",
      type: "reference",
      to: [{ type: "group" }],
      description:
        "Assign to a group/series if this post belongs to a sequence (leave empty for standalone posts).",
    }),
    defineField({
      name: "groupOrder",
      title: "Part / Order in Group",
      type: "number",
      description: "Sequence number in group (e.g. 1, 2, 3...)",
      hidden: ({ parent }) => !parent?.group,
    }),
    // 4. Dates & Meta
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Estimated Read Time (Minutes)",
      type: "number",
      initialValue: 5,
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Post",
      type: "boolean",
      description: "Pin this post to the top of the blog or home section",
      initialValue: false,
    }),
    // 5. Rich Body Content
    defineField({
      name: "body",
      title: "Content Body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      publishedAt: "publishedAt",
      groupTitle: "group.title",
      groupOrder: "groupOrder",
    },
    prepare({ title, media, publishedAt, groupTitle, groupOrder }) {
      const dateFormatted = publishedAt
        ? new Date(publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "Draft"

      let subtitle = dateFormatted
      if (groupTitle) {
        subtitle += ` • [${groupTitle}${groupOrder ? ` - Part ${groupOrder}` : ""}]`
      }

      return {
        title,
        subtitle,
        media,
      }
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
    {
      title: "Title (A-Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
})
