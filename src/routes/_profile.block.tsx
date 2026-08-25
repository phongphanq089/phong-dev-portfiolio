import { createFileRoute } from "@tanstack/react-router"

import { GridContainer } from "@/app/layouts"
import { UnderConstruction } from "@/shared/ui"

export const Route = createFileRoute("/_profile/block")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full">
      <GridContainer
        className="relative flex flex-col overflow-hidden px-4 pt-8 pb-12 sm:px-8"
        borderBottom={false}
        showCrosshairs={true}
      >
        <UnderConstruction pageName="Block" colorTheme="var(--pp-primary)" />
      </GridContainer>
    </div>
  )
}
