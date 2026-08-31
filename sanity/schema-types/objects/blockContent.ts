import { CodeBlockIcon, ImageIcon } from "@sanity/icons"
import { Table } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"

/**
 * Portable Text schema for rich content in Posts and Projects
 */
export const blockContentType = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // Styles let you set what's immediately available in the Scribe toolbar
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            title: "URL Link",
            name: "link",
            type: "object",
            options: {
              modal: { type: "dialog", width: "auto" },
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (rule) =>
                  rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    // Image embed in content
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: {
        hotspot: true,
        modal: {
          type: "dialog",
          width: "auto",
        },
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Crucial for SEO and accessibility.",
          validation: (rule) =>
            rule
              .required()
              .warning("Alternative text is strongly recommended for SEO"),
        }),
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
      ],
    }),
    // Official Code Input (Syntax highlighting, line numbers, filename)
    defineArrayMember({
      type: "code",
      name: "code",
      title: "Code Snippet",
      icon: CodeBlockIcon,
      options: {
        language: "typescript",
        languageAlternatives: [
          { title: "TypeScript", value: "typescript" },
          { title: "TSX", value: "tsx" },
          { title: "JavaScript", value: "javascript" },
          { title: "JSX", value: "jsx" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "SCSS", value: "scss" },
          { title: "Bash / Shell", value: "sh" },
          { title: "JSON", value: "json" },
          { title: "Python", value: "python" },
          { title: "SQL", value: "sql" },
          { title: "Markdown", value: "markdown" },
          { title: "GraphQL", value: "graphql" },
          { title: "YAML", value: "yaml" },
        ],
        withFilename: true,
        // @ts-expect-error - Runtime flag keeps object dialogs stable in embedded studio
        modal: {
          type: "dialog",
          width: "auto",
        },
      },
    }),
    // Callout / Alert Box
    defineArrayMember({
      type: "callout",
      options: {
        modal: {
          type: "dialog",
          width: "auto",
        },
      },
    }),
    // Table
    defineArrayMember({
      type: "table",
      title: "Table",
      icon: Table,
      options: {
        modal: {
          type: "dialog",
          width: "auto",
        },
      },
    }),
  ],
})
