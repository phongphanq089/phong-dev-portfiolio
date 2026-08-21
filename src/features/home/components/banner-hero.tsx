"use client"

import { ArrowDownRight } from "lucide-react"

import { GridSection } from "@/app/layouts"
import { PPMarkIsometric } from "@/shared/ui"
import TextBurnNeon from "@/shared/ui/animation/text-burn-neon"

const BannerHero = () => {
  return (
    <GridSection
      className="relative flex flex-col overflow-hidden px-4 pt-8 pb-12 sm:px-8"
      showCrosshairs={true}
      borderBottom={false}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-30" />
      <div className="relative z-10 mx-auto my-4 w-full">
        <div className="group relative mx-auto flex flex-col items-center justify-center">
          <div className="relative z-10 mb-8 flex w-full items-center justify-between font-mono text-xs text-muted-foreground/80">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="tracking-widest">1,996</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="hidden tracking-wider sm:inline">
                [ 108.2068° E, 16.0544° N ]
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold tracking-widest text-foreground/80 uppercase">
                PHONG PHAN
              </span>
              <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                DEV / DESIGN
              </span>
            </div>
          </div>

          <div className="absolute top-20 left-0 hidden flex-col gap-2.5 font-mono text-[11px] text-muted-foreground/80 lg:flex">
            <div className="relative z-10 mx-auto mb-6 flex flex-col select-none">
              <h1 className="font-sans text-5xl leading-[0.88] font-black tracking-tighter text-foreground sm:text-7xl md:text-6xl lg:text-7xl">
                CREATIVE
              </h1>
              <TextBurnNeon className="mt-1 font-sans text-5xl leading-[0.88] font-black tracking-tighter text-primary-color sm:text-7xl md:text-6xl lg:text-7xl">
                DEVELOPER
              </TextBurnNeon>
            </div>

            <span className="text-[10px] font-bold tracking-widest text-primary/80 uppercase">
              // DISCIPLINES
            </span>
            <div className="flex flex-col gap-1.5 text-foreground/70">
              <span className="transition-colors hover:text-primary">
                / FULL-STACK ARCHITECTURE
              </span>
              <span className="transition-colors hover:text-primary">
                / INTERACTIVE UI/UX
              </span>
              <span className="transition-colors hover:text-primary">
                / DESIGN SYSTEMS
              </span>
            </div>
          </div>
          <div
            className="absolute top-1/2 right-4 hidden -translate-y-1/2 font-mono text-[9px] tracking-[0.25em] text-muted-foreground/60 uppercase lg:block"
            style={{ writingMode: "vertical-rl" }}
          >
            BASED IN VIETNAM • READY TO SHIP
          </div>

          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <PPMarkIsometric />
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3 font-mono text-[10px] text-muted-foreground lg:hidden">
            <span>/ FULL-STACK</span>
            <span>/ UI-UX</span>
            <span>/ DESIGN SYSTEMS</span>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-2 flex max-w-xl flex-col items-center text-center">
        <p className="font-mono text-xs leading-relaxed tracking-wide text-muted-foreground sm:text-sm">
          I ARCHITECT HIGH-PERFORMANCE INTERFACES & INTUITIVE DIGITAL
          EXPERIENCES FOR BRANDS OF ALL SIZES.
        </p>
      </div>

      <div className="relative z-10 mt-3 flex flex-col items-center justify-between gap-6 border-t border-border/50 pt-8 sm:flex-row sm:gap-0">
        {/* Left: Layered Stacked Cards Hint */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
          <div className="relative h-7 w-12 rounded border border-border/80 bg-background shadow-xs">
            <div className="absolute inset-0.5 rounded-xs border border-border/40 bg-muted/20" />
            <div className="absolute top-1 left-1.5 h-1 w-4 rounded-full bg-primary/60" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-foreground">PORTFOLIO '26</span>
            <span className="text-[10px] text-muted-foreground/70">
              CRAFTED WITH PRECISION
            </span>
          </div>
        </div>

        {/* Right: Recent Work Tag */}
        <div className="flex flex-col items-center text-center sm:items-end sm:text-right">
          <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            <span>RECENT WORK</span>
            <ArrowDownRight className="h-3 w-3 text-primary" />
          </div>
          <span className="font-sans text-xs font-black tracking-tight text-foreground uppercase sm:text-sm">
            DESIGN WITHOUT LIMITS
          </span>
        </div>
      </div>
    </GridSection>
  )
}

export default BannerHero
