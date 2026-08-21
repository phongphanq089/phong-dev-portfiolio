import { createFileRoute } from "@tanstack/react-router"

import { GridContainer } from "@/app/layouts"
import { UnderConstruction } from "@/shared/ui/system/under-construction"

export const Route = createFileRoute("/_profile/blog")({
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="w-full">
      <GridContainer
        className="px-4 py-16 md:px-8"
        borderTop={false}
        showCrosshairs={true}
      >
        <UnderConstruction
          pageName="Blog"
          colorTheme="#ff6600"
          colorName="orange"
        />
      </GridContainer>
    </div>
  )
}
