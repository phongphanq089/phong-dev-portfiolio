import { createFileRoute } from "@tanstack/react-router"

import BannerHero from "@/features/home/banner-hero"
import SectionAbout from "@/features/home/section-about"

export const Route = createFileRoute("/_layout/")({
  component: App,
})

function App() {
  return (
    <div className="w-full">
      <BannerHero />
      <SectionAbout />
    </div>
  )
}
