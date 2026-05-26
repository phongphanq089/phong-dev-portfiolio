import { createFileRoute } from "@tanstack/react-router"

import { GridSection } from "@/components/layout/profile/grid-layout"
import { UnderConstruction } from "@/components/shared/under-construction"

export const Route = createFileRoute("/_profile/project")({
  component: ProjectPage,
})

function ProjectPage() {
  return (
    <div className="w-full">
      <GridSection
        className="px-4 py-16 md:px-8"
        borderTop={false}
        showCrosshairs={true}
      >
        <UnderConstruction
          pageName="Projects"
          colorTheme="#ff00ff"
          colorName="magenta"
        />
      </GridSection>
    </div>
  )
}
