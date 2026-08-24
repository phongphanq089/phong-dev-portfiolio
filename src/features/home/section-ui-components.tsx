import { GridContainer } from "@/app/layouts"
import { SectionEmptyState } from "@/shared/ui/system/section-empty-state"
import { SectionHeading } from "@/shared/ui/system/section-heading"

const HAS_DATA = true

const UiComponentsSection = () => {
  return (
    <>
      <GridContainer className="px-4 py-5 md:px-8" showCrosshairs={false}>
        <SectionHeading
          id="components-ui"
          label="02 / Components"
          heading="UI Library"
          subtitle="Hand-crafted components. Production-ready."
          action={
            !HAS_DATA ? (
              <button className="group flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:bg-accent/60 hover:text-foreground">
                View all
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            ) : null
          }
        />
      </GridContainer>

      <GridContainer
        className="px-4 py-8 md:px-8"
        borderTop={false}
        showCrosshairs={false}
      >
        <SectionEmptyState
          title="UI Library Coming Soon"
          subtitle="Hand-crafted components are being polished. Check back when they're ready to ship."
        />
      </GridContainer>

      {!HAS_DATA && (
        <GridContainer
          className="flex items-center justify-center py-10"
          borderTop={true}
          showCrosshairs={false}
        >
          <button className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-white/25 hover:bg-accent hover:text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-all duration-200 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
            View all components
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </GridContainer>
      )}
    </>
  )
}

export default UiComponentsSection
