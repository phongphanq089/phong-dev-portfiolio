import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

const config = defineConfig({
  resolve: {
    dedupe: ["react", "react-dom", "styled-components"],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      srcDirectory: "src",
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      pages: [
        { path: "/" },
        { path: "/project" },
        { path: "/blog" },
        { path: "/resources" },
        { path: "/studio" },
      ],
      sitemap: {
        enabled: true,
        host: "http://localhost:3000",
      },
    }),

    tailwindcss(),
    viteReact(),
    devtools(),
    nitro(),
  ],
})

export default config
