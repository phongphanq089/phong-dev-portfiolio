import { createFileRoute } from "@tanstack/react-router"

import { GridContainer } from "@/app/layouts"
import BannerHero from "@/features/home/banner-hero"
import SectionAbout from "@/features/home/section-about"
import SectionMapVietnamese from "@/features/home/section-map-vietnammese"
import SectionTechStack from "@/features/home/section-tech-stack"
import UiComponentsSection from "@/features/home/section-ui-components"
import { createSeoMeta } from "@/shared/config"

export const Route = createFileRoute("/_profile/")({
  head: () => ({
    meta: createSeoMeta("home"),
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <div className="w-full">
      <GridContainer
        className="relative flex flex-col overflow-hidden px-4 pt-8 pb-12 sm:px-8"
        showCrosshairs={true}
        borderBottom={false}
      >
        <BannerHero />
      </GridContainer>

      <SectionAbout />

      <SectionTechStack />

      <UiComponentsSection />

      <GridContainer showCrosshairs={true} as={"section"}>
        <SectionMapVietnamese />
      </GridContainer>
    </div>
  )
}
