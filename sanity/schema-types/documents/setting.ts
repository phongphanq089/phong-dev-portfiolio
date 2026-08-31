import { CogIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const settingType = defineType({
  name: "setting",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    {
      name: "general",
      title: "General",
      default: true,
    },
    {
      name: "seo",
      title: "SEO & Social Share",
    },
    {
      name: "icons",
      title: "Favicons & App Icons",
    },
    {
      name: "pwa",
      title: "PWA & Theme",
    },
    {
      name: "social",
      title: "Social & Contact",
    },
  ],
  fields: [
    // --- GENERAL GROUP ---
    defineField({
      name: "coverImage",
      title: "Banner Image / Cover",
      group: "general",
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
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      group: "general",
      description:
        "Primary website title (displayed on browser tab title and Google search results).",
      placeholder: "e.g. Phong Phan • Frontend Engineer",
      validation: (rule) => rule.required().error("Site title is required"),
    }),
    defineField({
      name: "siteName",
      title: "Site Name / Brand",
      type: "string",
      group: "general",
      description: "Short brand or website name (used for og:site_name).",
      placeholder: "e.g. Phong Phan",
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description (SEO)",
      type: "text",
      rows: 3,
      group: "general",
      description:
        "Short description of the website / portfolio for search engines and meta description tag.",
      placeholder: "Portfolio and engineering showcase of Phong Phan...",
      validation: (rule) =>
        rule
          .max(300)
          .warning(
            "Optimal SEO description should be under 160-300 characters"
          ),
    }),
    defineField({
      name: "siteUrl",
      title: "Site Canonical URL",
      type: "url",
      group: "general",
      description:
        "Official canonical website URL (e.g. https://phongphan.dev).",
      placeholder: "https://phongphan.dev",
    }),
    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      group: "general",
      description: "List of keywords for SEO and meta keywords tag.",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      group: "general",
      description: "Author / site owner name (used for meta author tag).",
      placeholder: "Phong Phan",
    }),

    // --- SEO & SOCIAL SHARE GROUP ---
    defineField({
      name: "ogImage",
      title: "Open Graph Image (og:image)",
      type: "image",
      group: "seo",
      description:
        "Preview image displayed when sharing links on Facebook, LinkedIn, Twitter/X, Telegram, etc. (Recommended: 1200x630 px, JPG/PNG format).",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Image description for accessibility and SEO.",
        }),
      ],
    }),
    defineField({
      name: "twitterCard",
      title: "Twitter Card Format",
      type: "string",
      group: "seo",
      description: "Twitter Card layout when sharing on X / Twitter.",
      initialValue: "summary_large_image",
      options: {
        list: [
          {
            title: "Summary Large Image (Recommended - Large card preview)",
            value: "summary_large_image",
          },
          {
            title: "Summary (Small square thumbnail)",
            value: "summary",
          },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "twitterHandle",
      title: "Twitter/X Creator Handle",
      type: "string",
      group: "seo",
      description: "Twitter/X creator handle (e.g. @phongphanq089).",
      placeholder: "@phongphanq089",
    }),

    // --- FAVICONS & APP ICONS GROUP ---
    defineField({
      name: "favicon",
      title: "Main Favicon (.ico or .png)",
      type: "image",
      group: "icons",
      description:
        "Primary favicon displayed on browser tabs (favicon.ico or favicon.png 48x48 / 32x32 px).",
    }),
    defineField({
      name: "favicon16",
      title: "Favicon 16x16 (favicon-16x16.png)",
      type: "image",
      group: "icons",
      description:
        "Standard 16x16 px favicon for legacy browsers and standard displays.",
    }),
    defineField({
      name: "favicon32",
      title: "Favicon 32x32 (favicon-32x32.png)",
      type: "image",
      group: "icons",
      description:
        "Standard 32x32 px favicon for Retina displays and modern browsers.",
    }),
    defineField({
      name: "appleTouchIcon",
      title: "Apple Touch Icon (apple-touch-icon.png)",
      type: "image",
      group: "icons",
      description:
        "Icon displayed when users bookmark or Add to Home Screen on iOS / iPadOS (Standard size: 180x180 px).",
    }),
    defineField({
      name: "androidChrome192",
      title: "Android Chrome Icon 192x192 (android-chrome-192x192.png)",
      type: "image",
      group: "icons",
      description:
        "PWA icon for Android home screen (Standard size: 192x192 px, PNG format).",
    }),
    defineField({
      name: "androidChrome512",
      title: "Android Chrome Icon 512x512 (android-chrome-512x512.png)",
      type: "image",
      group: "icons",
      description:
        "High-resolution PWA icon and splash screen for Android (Standard size: 512x512 px, PNG format).",
    }),
    defineField({
      name: "safariMaskIcon",
      title: "Safari Pinned Tab Icon (mask-icon / SVG)",
      type: "image",
      group: "icons",
      description:
        "Monochrome SVG vector icon used for Safari pinned tabs on macOS.",
    }),

    // --- PWA & THEME GROUP ---
    defineField({
      name: "themeColor",
      title: "Browser Theme Color",
      type: "color",
      group: "pwa",
      description:
        'Browser toolbar and address bar color on mobile devices (<meta name="theme-color">).',
      options: {
        disableAlpha: true,
      },
    }),
    defineField({
      name: "backgroundColor",
      title: "PWA Background Color",
      type: "color",
      group: "pwa",
      description:
        "Background color displayed during PWA / Web App splash screen startup.",
      options: {
        disableAlpha: true,
      },
    }),

    // --- SOCIAL & CONTACT GROUP ---
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      group: "social",
      placeholder: "https://github.com/phongphanq089",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
      group: "social",
      placeholder: "https://linkedin.com/in/phong-phan",
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter / X URL",
      type: "url",
      group: "social",
      placeholder: "https://x.com/phongphan",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      group: "social",
      placeholder: "phongphanq089@gmail.com",
    }),
    defineField({
      name: "phone",
      title: "Contact Phone Number",
      type: "string",
      group: "social",
      placeholder: "0706113210",
    }),
  ],
  preview: {
    select: {
      title: "siteTitle",
      subtitle: "siteUrl",
      media: "ogImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Site Settings",
        subtitle: subtitle || "Global Website Configuration",
        media: media || CogIcon,
      }
    },
  },
})
