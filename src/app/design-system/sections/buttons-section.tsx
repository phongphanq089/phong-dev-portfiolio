import { CreepyButton } from "@/shared/ui/animation/creepy-button"
import { LiquidMetalButton } from "@/shared/ui/animation/liquid-metal-button"
import { Button } from "@/shared/ui/core/button"

import { ShowcaseCard } from "../components/showcase-card"

export function ButtonsSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ShowcaseCard
        title="Primary & Secondary Actions"
        description="Standard action buttons with primary and secondary states"
        tag="Core"
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </ShowcaseCard>

      <ShowcaseCard
        title="Ghost, Link & Destructive"
        description="Subtle, link-styled and critical warning buttons"
        tag="Core"
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </ShowcaseCard>

      <ShowcaseCard
        title="Creepy Interactive Button"
        description="Eye-tracking interactive magnetic canvas effect"
        tag="Animation"
      >
        <CreepyButton>Creepy Hover</CreepyButton>
      </ShowcaseCard>

      <ShowcaseCard
        title="Liquid Metal Shader Button"
        description="Shader liquid metal border effect"
        tag="Shader"
      >
        <LiquidMetalButton>Liquid Metal</LiquidMetalButton>
      </ShowcaseCard>
    </div>
  )
}
