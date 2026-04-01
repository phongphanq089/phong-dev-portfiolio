import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/robots.txt")({
	server: {
		handlers: {
			GET: async () => {
				const host = import.meta.env.VITE_SITE_URL || "http://localhost:3000"
				const robots = `User-agent: *
					Allow: /
					Disallow: /studio
					Disallow: /dashboard
					Sitemap: ${host.replace(/\/$/, "")}/sitemap.xml`
				return new Response(robots, {
					headers: {
						"Content-Type": "text/plain",
						"Cache-Control": "public, max-age=3600, s-maxage=3600",
					},
				})
			},
		},
	},
})
