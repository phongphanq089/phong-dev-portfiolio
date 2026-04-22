
import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

const config = defineConfig({
	plugins: [
		tsconfigPaths({ projects: ["./tsconfig.json"] }),
		devtools(),
		tailwindcss(),
		tanstackStart({
			prerender: {
				enabled: true,
				crawlLinks: false, // tắt để tránh follow link /blog chưa tồn tại
			},
			sitemap: {
				enabled: true,
				host: "http://localhost:3000",
			},
		}),
		viteReact(),
	],
	resolve: {
		dedupe: ["react", "react-dom", "styled-components"],
	},
})

export default config
