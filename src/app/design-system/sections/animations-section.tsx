import { FluidGradientText } from "@/shared/ui/animation/fluid-gradient-text"
import { SkeletonOne } from "@/shared/ui/animation/skeleton-hover"
import TextBurnNeon from "@/shared/ui/animation/text-burn-neon"
import { TextHoverEffect } from "@/shared/ui/animation/text-hover-effect"

import { ShowcaseCard } from "../components/showcase-card"

export function AnimationsSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ShowcaseCard
        title="Text Burn Neon (GSAP)"
        description="Cyberpunk neon burnout animation with random char flicker"
        tag="GSAP"
      >
        <div className="text-center font-mono text-2xl font-bold tracking-widest text-primary">
          <TextBurnNeon>NEON PULSE</TextBurnNeon>
        </div>
      </ShowcaseCard>

      <ShowcaseCard
        title="Skeleton Card Hover"
        description="Hovering revealed skeleton blueprint animation"
        tag="Motion"
      >
        <SkeletonOne text1="Tech Stack Module" text2="Fullstack Architecture" />
      </ShowcaseCard>

      <ShowcaseCard
        title="Fluid Gradient Text"
        description="Interactive cursor-responsive SVG gradient text"
        tag="Motion"
        className="md:col-span-2"
      >
        <div className="h-32 w-full max-w-xl text-primary">
          <FluidGradientText text="DESIGN SYSTEM" />
        </div>
      </ShowcaseCard>

      <ShowcaseCard
        title="Text Hover Trace Effect"
        description="SVG stroke tracing effect when hovering on typography"
        tag="SVG"
        className="md:col-span-2"
      >
        <div className="h-36 w-full max-w-xl">
          <TextHoverEffect text="ANTIGRAVITY" />
        </div>
      </ShowcaseCard>
    </div>
  )
}
