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
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      group: "general",
      description:
        "Tiêu đề chính của website (hiển thị trên thẻ title trình duyệt và kết quả tìm kiếm Google).",
      placeholder: "e.g. Phong Phan • Frontend Engineer",
      validation: (rule) => rule.required().error("Site title is required"),
    }),
    defineField({
      name: "siteName",
      title: "Site Name / Brand",
      type: "string",
      group: "general",
      description: "Tên thương hiệu ngắn gọn (sử dụng cho og:site_name).",
      placeholder: "e.g. Phong Phan",
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description (SEO)",
      type: "text",
      rows: 3,
      group: "general",
      description:
        "Đoạn mô tả ngắn về website/bản thân cho công cụ tìm kiếm và thẻ meta description.",
      placeholder: "Portfolio and engineering showcase of Phong Phan...",
      validation: (rule) =>
        rule.max(300).warning("Mô tả SEO tối ưu nên dưới 160-300 ký tự"),
    }),
    defineField({
      name: "siteUrl",
      title: "Site Canonical URL",
      type: "url",
      group: "general",
      description:
        "Địa chỉ URL website chính thức (ví dụ: https://phongphan.dev).",
      placeholder: "https://phongphan.dev",
    }),
    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      group: "general",
      description: "Danh sách từ khóa phục vụ cho SEO thẻ meta keywords.",
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
      description:
        "Tên tác giả / chủ sở hữu website (sử dụng cho meta author).",
      placeholder: "Phong Phan",
    }),

    // --- SEO & SOCIAL SHARE GROUP ---
    defineField({
      name: "ogImage",
      title: "Open Graph Image (og:image)",
      type: "image",
      group: "seo",
      description:
        "Ảnh preview hiển thị khi chia sẻ link lên Facebook, Zalo, LinkedIn, Twitter/X, Telegram, v.v. (Khuyến nghị: 1200x630 px, định dạng JPG/PNG).",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description:
            "Mô tả hình ảnh phục vụ trợ năng (accessibility) và SEO.",
        }),
      ],
    }),
    defineField({
      name: "twitterCard",
      title: "Twitter Card Format",
      type: "string",
      group: "seo",
      description: "Định dạng thẻ Twitter Card khi chia sẻ trên mạng xã hội X.",
      initialValue: "summary_large_image",
      options: {
        list: [
          {
            title: "Summary Large Image (Khuyến nghị - Ảnh lớn đẹp)",
            value: "summary_large_image",
          },
          {
            title: "Summary (Ảnh thumbnail vuông bên cạnh)",
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
      description: "Tài khoản Twitter/X (ví dụ: @phongphanq089).",
      placeholder: "@phongphanq089",
    }),

    // --- FAVICONS & APP ICONS GROUP ---
    defineField({
      name: "favicon",
      title: "Main Favicon (.ico hoặc .png)",
      type: "image",
      group: "icons",
      description:
        "Favicon chính hiển thị trên tab trình duyệt (File favicon.ico hoặc favicon.png 48x48 / 32x32).",
    }),
    defineField({
      name: "favicon16",
      title: "Favicon 16x16 (favicon-16x16.png)",
      type: "image",
      group: "icons",
      description:
        "Icon kích thước chuẩn 16x16 px cho các trình duyệt hoặc màn hình tiêu chuẩn.",
    }),
    defineField({
      name: "favicon32",
      title: "Favicon 32x32 (favicon-32x32.png)",
      type: "image",
      group: "icons",
      description:
        "Icon kích thước 32x32 px cho màn hình Retina và trình duyệt hiện đại.",
    }),
    defineField({
      name: "appleTouchIcon",
      title: "Apple Touch Icon (apple-touch-icon.png)",
      type: "image",
      group: "icons",
      description:
        "Icon hiển thị khi người dùng Bookmark hoặc Thêm vào màn hình chính (Add to Home Screen) trên iPhone / iPad (Kích thước chuẩn: 180x180 px).",
    }),
    defineField({
      name: "androidChrome192",
      title: "Android Chrome Icon 192x192 (android-chrome-192x192.png)",
      type: "image",
      group: "icons",
      description:
        "Icon PWA cho thiết bị Android trên màn hình chính (Kích thước chuẩn: 192x192 px, định dạng PNG).",
    }),
    defineField({
      name: "androidChrome512",
      title: "Android Chrome Icon 512x512 (android-chrome-512x512.png)",
      type: "image",
      group: "icons",
      description:
        "Icon PWA độ phân giải cao và Splash Screen cho Android (Kích thước chuẩn: 512x512 px, định dạng PNG).",
    }),
    defineField({
      name: "safariMaskIcon",
      title: "Safari Pinned Tab Icon (mask-icon / SVG)",
      type: "image",
      group: "icons",
      description:
        "Icon SVG vector đơn sắc (monochrome) dùng cho tính năng Pinned Tabs của Safari trên macOS.",
    }),

    // --- PWA & THEME GROUP ---
    defineField({
      name: "themeColor",
      title: "Browser Theme Color",
      type: "color",
      group: "pwa",
      description:
        'Màu thanh tiêu đề / thanh địa chỉ của trình duyệt di động (thẻ <meta name="theme-color">).',
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
        "Màu nền khi khởi động ứng dụng Web App / PWA (Splash Screen).",
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
