import { BlueprintLintMark } from "@/shared/ui/animation/blueprint-lint-mark"
import { FluidGradientText } from "@/shared/ui/animation/fluid-gradient-text"
import { PPMarkIsometric } from "@/shared/ui/animation/pp-mark-isometric"
import { SkeletonOne } from "@/shared/ui/animation/skeleton-hover"
import TextBurnNeon from "@/shared/ui/animation/text-burn-neon"
import { TextHoverEffect } from "@/shared/ui/animation/text-hover-effect"

import { ShowcaseCard } from "../components/showcase-card"

export function AnimationsSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ShowcaseCard
        title="Blueprint Architecture Grid Mark (HTML/CSS)"
        description="Scalable HTML Grid letter matrix with hover glow effect (supports width, height, and sizes: sm, md, lg, xl, full)"
        tag="HTML + CSS"
        className="md:col-span-2"
      >
        <div className="flex w-full flex-wrap items-end justify-center gap-8 py-6">
          <div className="flex flex-col items-center gap-2">
            <BlueprintLintMark size="sm" text="lint" />
            <span className="font-mono text-xs text-muted-foreground">
              [ size="sm" ]
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <BlueprintLintMark width={140} text="lint" />
            <span className="font-mono text-xs text-muted-foreground">
              [ width=140 ]
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <BlueprintLintMark width={180} text="lint" isStaticActive />
            <span className="font-mono text-xs text-muted-foreground">
              [ width=180 (Active) ]
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <BlueprintLintMark width={240} text="PP" />
            <span className="font-mono text-xs text-muted-foreground">
              [ width=240 ]
            </span>
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard
        title="Phong Phan (PP) Isometric Monogram"
        description="3D Voxel Isometric mark with cursor radial flashlight and spring tap physics"
        tag="Isometric Motion"
        className="md:col-span-2"
      >
        <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm">
          <div className="w-full max-w-lg">
            <PPMarkIsometric />
          </div>
          <div className="pointer-events-none absolute right-4 bottom-4 font-mono text-[11px] text-muted-foreground/60">
            [ Fig. 1 • Click & Drag ]
          </div>
        </div>
      </ShowcaseCard>

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
