import { createFileRoute } from "@tanstack/react-router"

import { GridContainer } from "@/app/layouts"
import { createSeoMeta } from "@/shared/config"
import { UnderConstruction } from "@/shared/ui/system/under-construction"

export const Route = createFileRoute("/_profile/resources")({
  head: () => ({
    meta: createSeoMeta("resources"),
  }),
  component: ResourcesPage,
})

function ResourcesPage() {
  return (
    <div className="w-full">
      <GridContainer
        className="relative flex flex-col overflow-hidden px-4 pt-8 pb-12 sm:px-8"
        borderBottom={false}
        showCrosshairs={true}
      >
        <UnderConstruction
          pageName="Resources"
          colorTheme="#ffcc00"
          colorName="gold"
        />
      </GridContainer>
    </div>
  )
}
