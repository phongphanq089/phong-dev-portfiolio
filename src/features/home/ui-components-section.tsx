import { GridContainer } from "@/app/layouts"
import { Card, CardCanvas } from "@/shared/ui/animation/animated-glow-card"
import { SectionEmptyState } from "@/shared/ui/system/section-empty-state"
import { SectionHeading } from "@/shared/ui/system/section-heading"

import { uiComponentItems } from "./data/ui-components.data"

/* ─────────────────────────────────────────────────────────────────────────────
 * Toggle this flag to switch between live data and the "under construction"
 * empty state. Set to `true` when the section is ready to display.
 *
 * Alternatively, leave it as `uiComponentItems.length > 0` so the empty
 * state activates automatically when the data array is empty.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const HAS_DATA = uiComponentItems.length > 0

const UiComponentsSection = () => {
  return (
    <>
      <GridContainer className="px-4 py-5 md:px-8" showCrosshairs={false}>
        <SectionHeading
          id="components-ui"
          label="02 / Components"
          heading="UI Library"
          count={HAS_DATA ? uiComponentItems.length : undefined}
          subtitle="Hand-crafted components. Production-ready."
          action={
            HAS_DATA ? (
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
        {HAS_DATA ? (
          /* ── Empty / under-construction state ── */
          <SectionEmptyState
            title="UI Library Coming Soon"
            subtitle="Hand-crafted components are being polished. Check back when they're ready to ship."
          />
        ) : (
          /* ── Live card grid ── */
          <div className="grid grid-cols-2 gap-6 gap-y-10 md:grid-cols-3">
            {uiComponentItems.map(
              ({ title, desc, tags, isNew, preview, from }) => (
                <CardCanvas key={title}>
                  <Card>
                    {/* Preview area — uniform aspect ratio */}
                    <div
                      className={`flex aspect-video items-center justify-center bg-linear-to-br ${from} via-card to-card p-4`}
                    >
                      {preview}
                    </div>

                    {/* Metadata */}
                    <div className="p-3">
                      <div className="mb-0.5 flex items-center justify-between gap-2">
                        <h3 className="truncate text-xs font-semibold">
                          {title}
                        </h3>
                        {isNew && (
                          <span className="shrink-0 rounded bg-primary/15 px-1.5 py-0.5 font-mono text-[8px] font-bold text-primary/80">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="mb-2 text-[10px] leading-relaxed text-muted-foreground/55">
                        {desc}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {tags.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-border bg-foreground/4 px-1.5 py-0.5 font-mono text-[9px] text-foreground/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CardCanvas>
              )
            )}
          </div>
        )}
      </GridContainer>

      {HAS_DATA && (
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
