import { GridSection } from "@/components/layout/profile/grid-layout"

const UiComponentsSection = () => {
  return (
    <>
      <GridSection className="px-8 pt-16 pb-0 md:px-16" showCrosshairs={false}>
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
              01 / Components
            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              UI Library
              <span className="ml-3 align-middle font-mono text-xl font-normal text-muted-foreground/40">
                (12)
              </span>
            </h2>
            <p className="mt-1 text-muted-foreground">
              Hand-crafted components. Production-ready.
            </p>
          </div>
          <button className="group mb-1 flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:bg-accent/60 hover:text-foreground">
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
        </div>
      </GridSection>

      <GridSection
        className="px-8 py-8 md:px-16"
        borderTop={false}
        showCrosshairs={false}
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            {
              title: "Text Burn Neon",
              desc: "Char-by-char fire animation via GSAP.",
              tags: ["Animation", "GSAP"],
              isNew: true,
              preview: (
                <span
                  className="font-mono text-3xl font-black text-orange-400 select-none"
                  style={{ textShadow: "0 0 18px #ff6600, 0 0 36px #ff3300" }}
                >
                  Aa
                </span>
              ),
              from: "from-violet-950/50",
            },
            {
              title: "Fluid Gradient Text",
              desc: "Mouse-tracking SVG gradient on text.",
              tags: ["Motion", "SVG"],
              preview: (
                <span
                  className="bg-clip-text text-2xl font-bold text-transparent select-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg,#60a5fa,#a78bfa,#60a5fa)",
                  }}
                >
                  Gradient
                </span>
              ),
              from: "from-blue-950/50",
            },
            {
              title: "Navigation Bar",
              desc: "Active indicator with smooth transition.",
              tags: ["Nav", "Layout"],
              preview: (
                <div className="flex items-center gap-2 select-none">
                  {["Home", "Work", "Blog"].map((item, i) => (
                    <span
                      key={item}
                      className={`rounded px-2.5 py-1 text-[11px] font-medium ${
                        i === 0 ? "bg-white/15 text-white" : "text-white/40"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ),
              from: "from-rose-950/50",
            },
            {
              title: "Progress Bar",
              desc: "Animated skill-level progress display.",
              tags: ["Data", "Anim"],
              preview: (
                <div className="flex w-full flex-col gap-2 px-2 select-none">
                  {[66, 45].map((w, i) => (
                    <div
                      key={i}
                      className="h-1.5 w-full overflow-hidden rounded-full bg-white/10"
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                        style={{ width: `${w}%`, opacity: i === 0 ? 1 : 0.6 }}
                      />
                    </div>
                  ))}
                </div>
              ),
              from: "from-amber-950/50",
            },
            {
              title: "Form Elements",
              desc: "Input, Button, Select — dark themed.",
              tags: ["UI", "Form"],
              preview: (
                <div className="flex w-full flex-col gap-2 px-2 select-none">
                  <div className="flex h-7 w-full items-center rounded border border-emerald-500/20 bg-emerald-500/5 px-2">
                    <span className="text-[10px] text-emerald-400/60">
                      Input field…
                    </span>
                  </div>
                  <div className="flex h-7 w-20 items-center justify-center self-end rounded border border-emerald-500/25 bg-emerald-500/10">
                    <span className="text-[10px] font-medium text-emerald-400/70">
                      Submit
                    </span>
                  </div>
                </div>
              ),
              from: "from-emerald-950/50",
            },
            {
              title: "Text Hover Effect",
              desc: "SVG stroke reveal on mouse hover.",
              tags: ["SVG", "Hover"],
              preview: (
                <span
                  className="text-xl font-bold tracking-wide text-white/20 select-none"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
                >
                  HOVER
                </span>
              ),
              from: "from-sky-950/50",
            },
            {
              title: "Modal Dialog",
              desc: "Accessible modal with backdrop blur.",
              tags: ["UI", "A11y"],
              preview: (
                <div className="w-full max-w-[160px] rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-center backdrop-blur-sm select-none">
                  <div className="mb-1 text-[10px] font-semibold text-white/70">
                    Confirm?
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[9px] text-white/50">
                      Cancel
                    </span>
                    <span className="rounded border border-purple-500/30 bg-purple-500/25 px-2 py-0.5 text-[9px] text-purple-300/80">
                      OK
                    </span>
                  </div>
                </div>
              ),
              from: "from-purple-950/50",
            },
            {
              title: "Toast Notification",
              desc: "Stacked toast queue with auto-dismiss.",
              tags: ["UX", "Feedback"],
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
              from: "from-teal-950/50",
            },
          ].map(({ title, desc, tags, isNew, preview, from }) => (
            <div
              key={title}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_32px_rgba(255,255,255,0.04)]"
            >
              {/* Preview area — uniform aspect ratio */}
              <div
                className={`flex aspect-video items-center justify-center bg-gradient-to-br ${from} via-card to-card p-4`}
              >
                {preview}
              </div>

              {/* Metadata */}
              <div className="p-3">
                <div className="mb-0.5 flex items-center justify-between gap-2">
                  <h3 className="truncate text-xs font-semibold">{title}</h3>
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
                      className="rounded border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5 font-mono text-[9px] text-white/35"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </GridSection>
      <GridSection
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
      </GridSection>
    </>
  )
}

export default UiComponentsSection
