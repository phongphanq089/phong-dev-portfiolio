import { createFileRoute } from "@tanstack/react-router"

import { GridContainer } from "@/app/layouts"
import { createSeoMeta } from "@/shared/config"
import { UnderConstruction } from "@/shared/ui/system/under-construction"

export const Route = createFileRoute("/_profile/blog")({
  head: () => ({
    meta: createSeoMeta("blog"),
  }),
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="w-full">
      <GridContainer
        className="relative flex flex-col overflow-hidden px-4 pt-8 pb-12 sm:px-8"
        borderBottom={false}
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
