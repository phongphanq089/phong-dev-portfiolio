import { cn } from "@/lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
 * SectionHeading
 *
 * A standardised heading block used at the top of every home-page section.
 *
 * Visual anatomy (all three are optional):
 *
 *   ┌──────────────────────────────────────────────────────┐
 *   │  01 / Work                         ← eyebrow label  │
 *   │  Projects    (6)                   ← heading + count │
 *   │  Things I've shipped…              ← subtitle        │
 *   └──────────────────────────────────────────────────────┘
 *
 * Design tokens used (defined in styles.css):
 *   --text-section-label / --tracking-section-label
 *   --text-section-heading / --text-section-heading-sm / --leading-section-heading / --tracking-section-heading
 *   --text-section-count
 *   --text-section-subtitle / --leading-section-subtitle
 * ─────────────────────────────────────────────────────────────────────────────
 */

type SectionHeadingProps = {
  /** Eyebrow monospace label e.g. "01 / Work" */
  label?: string
  /** Main heading text e.g. "Projects" */
  heading: string
  /** Optional count badge rendered inline e.g. "(6)" */
  count?: string | number
  /** Short subtitle below the heading */
  subtitle?: string
  /** Extra slot rendered to the right of the heading block (e.g. a CTA button) */
  action?: React.ReactNode
  /** Additional className forwarded to the root wrapper */
  className?: string
  /** HTML element used for the heading — defaults to h2 */
  as?: "h1" | "h2" | "h3"
  /**
   * Section anchor ID — used by TOCMinimap (IntersectionObserver) and
   * any scroll-to navigation links (e.g. banner hero menu, mobile dock).
   * Should match the `url` field in TOCItems (without the leading #).
   * Example: id="about" → TOCItem url="#about"
   */
  id?: string
}

export function SectionHeading({
  label,
  heading,
  count,
  subtitle,
  action,
  className,
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <div
      id={id}
      className={cn("flex items-end justify-between gap-6", className)}
    >
      {/* ── Left block ── */}
      <div>
        {label && <span className="section-label block">{label}</span>}

        <Tag className={cn("section-heading", label && "mt-2")}>
          {heading}
          {count !== undefined && (
            <span className="section-count">({count})</span>
          )}
        </Tag>

        {subtitle && <p className="section-subtitle mt-1">{subtitle}</p>}
      </div>

      {/* ── Right action slot ── */}
      {action && <div className="mb-1 shrink-0">{action}</div>}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
 * SectionDivider
 *
 * The slim horizontal rule with the eyebrow label on the left.
 * Used in the About section and similar minimal headers.
 *
 *   01 / About ───────────────────────────────────────────
 * ─────────────────────────────────────────────────────────────────────────────
 */

type SectionDividerProps = {
  label: string
  className?: string
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="section-label">{label}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
