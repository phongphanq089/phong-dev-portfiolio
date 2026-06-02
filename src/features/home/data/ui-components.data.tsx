import type { ReactNode } from "react"

/* ─────────────────────────────────────────────────────────────────────────────
 * UI Component Card data
 *
 * Thêm / chỉnh sửa card tại đây — không cần đụng vào UiComponentsSection.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type UiComponentItem = {
  /** Card title */
  title: string
  /** Short one-liner description */
  desc: string
  /** Tech / category tags */
  tags: string[]
  /** Tailwind gradient class for the preview area background e.g. "from-violet-950/50" */
  from: string
  /** JSX rendered inside the preview area */
  preview: ReactNode
  /** Shows a "NEW" badge when true */
  isNew?: boolean
}

export const uiComponentItems: UiComponentItem[] = [
  {
    title: "Text Burn Neon",
    desc: "Char-by-char fire animation via GSAP.",
    tags: ["Animation", "GSAP"],
    isNew: true,
    from: "from-violet-950/50",
    preview: (
      <span
        className="font-mono text-3xl font-black text-orange-400 select-none"
        style={{ textShadow: "0 0 18px #ff6600, 0 0 36px #ff3300" }}
      >
        Aa
      </span>
    ),
  },
  {
    title: "Fluid Gradient Text",
    desc: "Mouse-tracking SVG gradient on text.",
    tags: ["Motion", "SVG"],
    from: "from-blue-950/50",
    preview: (
      <span
        className="bg-clip-text text-2xl font-bold text-transparent select-none"
        style={{
          backgroundImage: "linear-gradient(135deg,#60a5fa,#a78bfa,#60a5fa)",
        }}
      >
        Gradient
      </span>
    ),
  },
  {
    title: "Navigation Bar",
    desc: "Active indicator with smooth transition.",
    tags: ["Nav", "Layout"],
    from: "from-rose-950/50",
    preview: (
      <div className="flex items-center gap-2 select-none">
        {["Home", "Work", "Blog"].map((item, i) => (
          <span
            key={item}
            className={`rounded px-2.5 py-1 text-[11px] font-medium ${
              i === 0
                ? "bg-foreground/10 font-semibold text-foreground"
                : "text-foreground/45"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Progress Bar",
    desc: "Animated skill-level progress display.",
    tags: ["Data", "Anim"],
    from: "from-amber-950/50",
    preview: (
      <div className="flex w-full flex-col gap-2 px-2 select-none">
        {[66, 45].map((w, i) => (
          <div
            key={i}
            className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/10"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
              style={{ width: `${w}%`, opacity: i === 0 ? 1 : 0.6 }}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Form Elements",
    desc: "Input, Button, Select — dark themed.",
    tags: ["UI", "Form"],
    from: "from-emerald-950/50",
    preview: (
      <div className="flex w-full flex-col gap-2 px-2 select-none">
        <div className="flex h-7 w-full items-center rounded border border-emerald-500/20 bg-emerald-500/5 px-2">
          <span className="text-[10px] text-emerald-400/60">Input field…</span>
        </div>
        <div className="flex h-7 w-20 items-center justify-center self-end rounded border border-emerald-500/25 bg-emerald-500/10">
          <span className="text-[10px] font-medium text-emerald-400/70">
            Submit
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Text Hover Effect",
    desc: "SVG stroke reveal on mouse hover.",
    tags: ["SVG", "Hover"],
    from: "from-sky-950/50",
    preview: (
      <span
        className="text-xl font-bold tracking-wide text-foreground/25 select-none"
        style={{ WebkitTextStroke: "1px var(--border)" }}
      >
        HOVER
      </span>
    ),
  },
  {
    title: "Modal Dialog",
    desc: "Accessible modal with backdrop blur.",
    tags: ["UI", "A11y"],
    from: "from-purple-950/50",
    preview: (
      <div className="w-full max-w-[160px] rounded-lg border border-border bg-foreground/[0.04] px-4 py-3 text-center backdrop-blur-sm select-none">
        <div className="mb-1 text-[10px] font-semibold text-foreground">
          Confirm?
        </div>
        <div className="flex justify-center gap-2">
          <span className="rounded bg-foreground/10 px-2 py-0.5 text-[9px] text-foreground/60">
            Cancel
          </span>
          <span className="rounded border border-purple-500/35 bg-purple-500/15 px-2 py-0.5 text-[9px] font-medium text-purple-600 dark:text-purple-300">
            OK
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Toast Notification",
    desc: "Stacked toast queue with auto-dismiss.",
    tags: ["UX", "Feedback"],
    from: "from-teal-950/50",
    preview: (
      <div className="flex w-full flex-col gap-1.5 px-2 select-none">
        {[
          {
            color:
              "bg-emerald-500/20 border-emerald-500/25 text-emerald-400/80",
            label: "✓  Saved successfully",
          },
          {
            color: "bg-red-500/15 border-red-500/20 text-red-400/70",
            label: "✕  Something went wrong",
          },
        ].map((t) => (
          <div
            key={t.label}
            className={`rounded border px-2.5 py-1.5 font-mono text-[9px] ${t.color}`}
          >
            {t.label}
          </div>
        ))}
      </div>
    ),
  },
]
