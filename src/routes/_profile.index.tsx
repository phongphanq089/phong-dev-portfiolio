import { createFileRoute } from "@tanstack/react-router"

import { GridSection } from "@/components/layout/profile/grid-layout"
import BannerHero from "@/features/home/banner-hero"
import SectionAbout from "@/features/home/section-about"
import UiComponentsSection from "@/features/home/ui-components-section"

export const Route = createFileRoute("/_profile/")({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <div className="mx-auto px-8 md:px-16">
        <BannerHero />
      </div>
      <GridSection className="py-12" borderTop={true}>
        <SectionAbout />
      </GridSection>
      <UiComponentsSection />
      {/*
        <GridSection className="py-12" borderTop={true}>
          <SectionAbout />
        </GridSection> */}

      {/* ── UI Components Section ── */}
      {/* <UiComponentsSection /> */}

      {/* ── Projects Section ── */}
      {/* <ProjectsSection /> */}

      {/* ── Blog Section ── */}
      {/* <BlogSection /> */}

      {/* ── Bookmarks Section ── */}
      {/* <BookmarkSection /> */}
    </div>
  )
}
