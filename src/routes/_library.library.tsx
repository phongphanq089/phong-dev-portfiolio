import { createFileRoute } from "@tanstack/react-router"

import { LibraryView } from "@/features/library/library-view"
import { seo } from "@/lib/utils"

export const Route = createFileRoute("/_library/library")({
  head: () => ({
    meta: seo({
      title: "UI Library | Phong Phan Portfolio",
      description:
        "A collection of high-fidelity, reusable UI components and design patterns crafted for modern web applications by Phong Phan.",
      keywords:
        "UI Library, React Components, Design System, Phong Phan, Web Components, Radix UI, GSAP Animations",
      image: "/OGmage.jpg",
    }),
  }),
  component: LibraryView,
})
