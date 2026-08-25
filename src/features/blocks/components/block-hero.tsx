import { GridContainer } from "@/app/layouts"

export function BlockHero() {
  return (
    <GridContainer
      borderTop
      borderBottom
      showCrosshairs
      className="relative flex flex-col justify-center px-4 py-8 sm:px-8 sm:py-10 md:py-12"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pp-primary/10 blur-3xl dark:bg-pp-primary/15" />

      <div className="relative z-10 flex flex-col gap-2">
        {/* Eyebrow Label matching reference image */}
        <span className="font-mono text-xs font-semibold text-muted-foreground/80 sm:text-sm">
          Blocks
        </span>

        {/* Large Main Heading matching reference image */}
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Beautifully designed, production-ready.
        </h1>
      </div>
    </GridContainer>
  )
}
