import netlify from "@netlify/vite-plugin-tanstack-start"
import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

const isDev = process.env.NODE_ENV !== "production"

const config = defineConfig({
  resolve: {
    dedupe: ["react", "react-dom", "styled-components"],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    include: ["sanity", "sanity/structure"],
  },
  ssr: {
    external: ["sanity", "sanity/structure"],
  },
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      srcDirectory: "src",
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
      pages: [
        { path: "/" },
        { path: "/project" },
        { path: "/blog" },
        { path: "/resources" },
        { path: "/design-system" },
      ],
      sitemap: {
        enabled: true,
        host: "https://phong-phan-dev.netlify.app",
      },
    }),
    netlify(),

    tailwindcss(),
    viteReact(),
    isDev && devtools(),
  ],
})

export default config
