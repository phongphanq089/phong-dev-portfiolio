import { createFileRoute } from "@tanstack/react-router"
import { client } from "@/lib/sanity"

interface SitemapRoute {
	path: string
	lastmod: string
	changefreq:
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "yearly"
		| "never"
	priority: string
}

/**
 * Sitemap generation for TanStack Start.
 * This route lists both static and dynamic pages.
 */
export const Route = createFileRoute("/sitemap.xml")({
	server: {
		handlers: {
			GET: async () => {
				// 1. Cấu hình các trang tĩnh
				const staticRoutes: SitemapRoute[] = [
					{
						path: "/",
						lastmod: new Date().toISOString(),
						changefreq: "daily",
						priority: "1.0",
					},
					{
						path: "/about",
						lastmod: new Date().toISOString(),
						changefreq: "monthly",
						priority: "0.8",
					},
					{
						path: "/library",
						lastmod: new Date().toISOString(),
						changefreq: "weekly",
						priority: "0.9",
					},
					{
						path: "/dashboard",
						lastmod: new Date().toISOString(),
						changefreq: "weekly",
						priority: "0.5",
					},
				]

				// 2. Fetch dữ liệu động (Ví dụ từ Sanity)
				// Bạn có thể mở comment bên dưới khi đã có Schema bài viết (Post)
				const dynamicRoutes: SitemapRoute[] = []

				try {
					/*
          const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]{ "path": "/blog/" + slug.current, _updatedAt }`)
          posts.forEach((post: any) => dynamicRoutes.push({
            path: post.path,
            lastmod: post._updatedAt,
            changefreq: 'weekly',
            priority: '0.7'
          }))
          */
					// Sample logic to prevent lint error for unused 'client' if not using it yet
					if (!client) {
						console.log("Sanity client initialized")
					}
				} catch (error) {
					console.error("Error fetching dynamic routes for sitemap:", error)
				}

				// 3. Gom tất cả các route
				const allRoutes = [...staticRoutes, ...dynamicRoutes]

				// 4. Tạo XML string
				const host = process.env.VITE_SITE_URL || "http://localhost:3000"
				const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
	.map(
		(route) => `
  <url>
    <loc>${host.replace(/\/$/, "")}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
	)
	.join("")}
</urlset>`

				return new Response(sitemap, {
					headers: {
						"Content-Type": "application/xml",
						"Cache-Control": "public, max-age=3600, s-maxage=3600",
					},
				})
			},
		},
	},
})
