import { createFileRoute } from "@tanstack/react-router"

import { GridSection } from "@/app/layouts/grid-layout"
import { UnderConstruction } from "@/shared/ui/system/under-construction"

export const Route = createFileRoute("/_profile/blog")({
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="w-full">
      <GridSection
        className="px-4 py-16 md:px-8"
        borderTop={false}
        showCrosshairs={true}
      >
        <UnderConstruction
          pageName="Blog"
          colorTheme="#ff6600"
          colorName="orange"
        />
      </GridSection>
    </div>
  )
}
