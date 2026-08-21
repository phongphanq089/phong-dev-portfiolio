import { createFileRoute } from "@tanstack/react-router"

import { GridContainer } from "@/app/layouts"
import { UnderConstruction } from "@/shared/ui/system/under-construction"

export const Route = createFileRoute("/_profile/resources")({
  component: ResourcesPage,
})

function ResourcesPage() {
  return (
    <div className="w-full">
      <GridContainer
        className="px-4 py-16 md:px-8"
        borderTop={false}
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
