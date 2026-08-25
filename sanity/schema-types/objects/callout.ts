import { InfoOutlineIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const calloutType = defineType({
  name: "callout",
  title: "Callout / Note Box",
  type: "object",
  icon: InfoOutlineIcon,
  options: {
    modal: {
      type: "dialog",
      width: 1,
    },
  },
  fields: [
    defineField({
      name: "type",
      title: "Callout Type",
      type: "string",
      options: {
        list: [
          { title: "Info (Blue)", value: "info" },
          { title: "Tip (Green)", value: "tip" },
          { title: "Warning (Amber)", value: "warning" },
          { title: "Danger / Alert (Red)", value: "danger" },
        ],
      },
      initialValue: "info",
    }),
    defineField({
      name: "title",
      title: "Title (Optional)",
      type: "string",
      placeholder: "e.g. Important Note, Pro Tip",
    }),
    defineField({
      name: "text",
      title: "Message",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "text",
      type: "type",
    },
    prepare({ title, subtitle, type }) {
      return {
        title: title || `Callout [${type?.toUpperCase() || "INFO"}]`,
        subtitle,
      }
    },
  },
})
