import { ArrowDownRight } from "lucide-react"

import { PPMarkIsometric } from "@/shared/ui"
import TextBurnNeon from "@/shared/ui/animation/text-burn-neon"
import { StripedPattern } from "@/shared/ui/system"

const BannerHero = () => {
  return (
    <>
      <StripedPattern
        variant="absolute"
        className="opacity-40 dark:opacity-20"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-30" />
      <div className="relative z-10 mx-auto my-4 w-full">
        <div className="group relative mx-auto flex flex-col items-center justify-center">
          <div
            className="relative z-10 mb-4 flex w-full items-end justify-end text-xs text-muted-foreground/80 sm:mb-8"
            id="banner"
          >
            <div className="flex items-center gap-3">
              <span className="font-semibold tracking-widest text-foreground/80 uppercase">
                PHONG PHAN
              </span>
              <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                FRONTEND / UI ENGINEER
              </span>
            </div>
          </div>

          <div className="absolute top-20 left-0 flex flex-col gap-2.5 text-[11px] text-muted-foreground/80">
            <div className="relative z-10 mx-auto mb-6 flex flex-col select-none">
              <h1 className="text-3xl leading-[0.88] font-black tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                FRONTEND
              </h1>
              <TextBurnNeon className="mt-1 text-3xl leading-[0.88] font-black tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                ENGINEER
              </TextBurnNeon>
            </div>

            <span className="text-[10px] font-bold tracking-widest text-primary/80 uppercase">
              // DISCIPLINES
            </span>
            <div className="flex flex-col gap-1.5 text-foreground/70 max-xs:text-[10px]">
              <span className="transition-colors hover:text-primary">
                / INTERACTIVE UI & MOTION
              </span>
              <span className="transition-colors hover:text-primary">
                / DESIGN SYSTEMS & TOKENS
              </span>
              <span className="transition-colors hover:text-primary">
                / FULL-STACK CAPABILITY
              </span>
            </div>
          </div>

          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <PPMarkIsometric />
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-2 flex max-w-xl flex-col items-center text-center">
        <p className="text-xs leading-relaxed tracking-wide text-muted-foreground sm:text-sm">
          CRAFTING HIGH-PERFORMANCE INTERFACES, DELIGHTFUL MICRO-INTERACTIONS &
          THOUGHTFULLY ENGINEERED WEB EXPERIENCES.
        </p>
      </div>

      <div className="relative z-10 mt-3 flex items-center justify-between gap-3 border-t border-border/50 pt-4 sm:gap-0 md:pt-8">
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <div className="flex flex-col text-center">
            <span className="font-semibold text-foreground">PORTFOLIO '26</span>
            <span className="text-[10px] text-muted-foreground/70">
              CRAFTED WITH PRECISION
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center text-center sm:items-end sm:text-right">
          <div className="flex items-center gap-1.5 text-[10px] tracking-widest text-muted-foreground uppercase">
            <span>RECENT WORK</span>
            <ArrowDownRight className="h-3 w-3 text-primary" />
          </div>
          <span className="text-xs font-black tracking-tight text-foreground uppercase sm:text-sm">
            CRAFTED WITH PRECISION
          </span>
        </div>
      </div>
    </>
  )
}

export default BannerHero
