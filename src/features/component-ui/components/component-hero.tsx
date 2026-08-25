import { GridContainer } from "@/app/layouts"

interface ComponentHeroProps {
  totalCount?: number
}

export function ComponentHero({ totalCount = 26 }: ComponentHeroProps) {
  return (
    <>
      {/* 1. Main Header Section */}
      <GridContainer
        borderTop
        borderBottom
        showCrosshairs
        className="relative flex flex-col justify-center px-4 py-8 sm:px-8 sm:py-10 md:py-12"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pp-primary/10 blur-3xl dark:bg-pp-primary/15" />

        <div className="relative z-10 flex flex-col gap-2">
          {/* Eyebrow Label */}
          <span className="font-mono text-xs font-semibold text-muted-foreground/80 sm:text-sm">
            Components
          </span>

          {/* Large Main Heading */}
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Pixel-perfect, uniquely crafted.
          </h1>
        </div>
      </GridContainer>

      {/* 2. Segmented Blueprint Metadata Bar */}
      <GridContainer borderBottom showCrosshairs className="p-0">
        <div className="no-scrollbar flex w-full items-stretch overflow-x-auto">
          {/* Cell 1: Count */}
          <div className="flex shrink-0 items-center justify-center border-r border-border px-5 py-3 font-mono text-xs font-bold tracking-wider text-white uppercase sm:px-6">
            <span>{totalCount} PRIMITIVES</span>
          </div>

          {/* Cell 2: Architecture */}
          <div className="flex shrink-0 items-center justify-center border-r border-border px-5 py-3 font-mono text-xs text-muted-foreground uppercase sm:px-6">
            <span>3-COLUMN BLUEPRINT</span>
          </div>

          {/* Cell 3: Styling */}
          <div className="hidden shrink-0 items-center justify-center border-r border-border px-5 py-3 font-mono text-xs text-muted-foreground uppercase sm:flex sm:px-6">
            <span>TAILWIND CSS V4</span>
          </div>

          {/* Remaining Technical Blueprint Striped Space */}
          <div className="min-w-[32px] flex-1 bg-[repeating-linear-gradient(-45deg,transparent,transparent_6px,rgba(255,255,255,0.03)_6px,rgba(255,255,255,0.03)_7px)]" />
        </div>
      </GridContainer>
    </>
  )
}
