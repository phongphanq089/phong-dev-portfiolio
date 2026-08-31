import { cn } from "@/shared/lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
 * SectionEmptyState
 *
 * Shown when a section has no data yet (e.g. data array is empty / disabled).
 * Styled to match the portfolio grid system — mono, dark, minimal.
 *
 * Usage:
 *   <SectionEmptyState />
 *   <SectionEmptyState title="No projects yet" subtitle="Check back soon." />
 * ─────────────────────────────────────────────────────────────────────────────
 */

type SectionEmptyStateProps = {
  /** Primary heading — defaults to "Under Construction" */
  title?: string
  /** Supporting line below the title */
  subtitle?: string
  /** Extra className on the root wrapper */
  className?: string
}

export function SectionEmptyState({
  title = "Under Construction",
  subtitle = "This section is being built. Check back soon.",
  className,
}: SectionEmptyStateProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[280px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-card/40 px-8 py-16 text-center",
        className
      )}
    >
      {/* ── Corner brackets ── */}
      <span className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-t border-l border-primary/30" />
      <span className="pointer-events-none absolute top-3 right-3 h-4 w-4 border-t border-r border-primary/30" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-primary/30" />
      <span className="pointer-events-none absolute right-3 bottom-3 h-4 w-4 border-r border-b border-primary/30" />

      {/* ── Icon — animated blinking cursor ── */}
      <div className="mb-5 flex items-center gap-1.5 font-mono text-2xl font-black tracking-widest text-foreground/20 select-none">
        <span>&gt;_</span>
        <span className="inline-block h-6 w-0.5 animate-[blink_1.1s_step-end_infinite] bg-primary/50" />
      </div>

      {/* ── Label ── */}
      <p className="mb-2 font-mono text-[10px] tracking-[0.35em] text-primary/50 uppercase">
        00 / wip
      </p>

      {/* ── Title ── */}
      <h3 className="mb-2 text-base font-semibold text-foreground/60">
        {title}
      </h3>

      {/* ── Subtitle ── */}
      <p className="max-w-xs font-mono text-[11px] leading-relaxed text-muted-foreground/50">
        {subtitle}
      </p>

      {/* ── Progress bar ── */}
      <div className="mt-8 w-48">
        <div className="mb-1.5 flex justify-between font-mono text-[9px] text-muted-foreground/40">
          <span>BUILDING</span>
          <span>██░░░</span>
        </div>
        <div className="h-0.5 w-full overflow-hidden rounded-full bg-foreground/8">
          <div
            className="h-full rounded-full bg-primary/40"
            style={{ width: "40%" }}
          />
        </div>
      </div>
    </div>
  )
}
