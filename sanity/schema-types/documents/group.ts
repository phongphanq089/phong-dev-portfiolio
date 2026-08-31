import { FolderIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const groupType = defineType({
  name: "group",
  title: "Group / Series",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "title",
      title: "Group / Series Title",
      type: "string",
      placeholder: "e.g. NestJS Mastery, Learn React Native from Scratch",
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
      title: "Description / Overview",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "isCompleted",
      title: "Is Completed?",
      type: "boolean",
      description:
        "Mark whether all posts in this group/series have been completed",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      isCompleted: "isCompleted",
    },
    prepare({ title, media, isCompleted }) {
      return {
        title,
        subtitle: isCompleted ? "Status: Completed" : "Status: Ongoing",
        media,
      }
    },
  },
})
