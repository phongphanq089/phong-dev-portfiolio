import { GridSection } from "@/components/layout/profile/grid-layout"

const ProjectsSection = () => {
  return (
    <>
      <GridSection className="px-8 pt-16 pb-0 md:px-16" showCrosshairs={false}>
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
              02 / Work
            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Projects
              <span className="ml-3 align-middle font-mono text-xl font-normal text-muted-foreground/40">
                (6)
              </span>
            </h2>
            <p className="mt-1 text-muted-foreground">
              Things I've shipped. From idea to production.
            </p>
          </div>
          <button className="group mb-1 flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:bg-accent/60 hover:text-foreground">
            All projects
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
        <div className="flex flex-col gap-4">
          {/* ── Featured project (wide) ── */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.04)]">
            <div className="grid md:grid-cols-[1fr_1.2fr]">
              {/* Left: info */}
              <div className="flex flex-col justify-between p-8">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full border border-emerald-500/25 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-wider text-emerald-400/90 uppercase">
                      Featured
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/40">
                      2024
                    </span>
                  </div>
                  <h3 className="text-2xl leading-tight font-bold text-foreground/90">
                    React Wheel Picker
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    A high-performance, accessible wheel/scroll picker component
                    for React. Smooth momentum scrolling, keyboard navigation,
                    and fully customizable. Joined the Vercel Open Source
                    Program.
                  </p>
                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Rollup",
                      "CSS Modules",
                      "Vercel",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Links */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-all hover:bg-foreground/85"
                  >
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                    Live demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-white/25 hover:text-foreground"
                  >
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
              {/* Right: preview image */}
              <div className="relative overflow-hidden border-l border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-transparent to-transparent" />
                <div className="flex h-full min-h-[220px] items-center justify-center p-8">
                  {/* Placeholder preview */}
                  <div className="w-full select-none">
                    <div className="mx-auto w-32 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-2">
                      {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map(
                        (item, i) => (
                          <div
                            key={item}
                            className={`rounded px-3 py-2 text-center text-xs font-medium transition-all ${
                              i === 2
                                ? "bg-white/15 text-white"
                                : "text-white/30"
                            }`}
                          >
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 3-col grid of other projects ── */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                year: "2024",
                title: "Portfolio App",
                desc: "Personal portfolio built with React, TanStack Router, and Tailwind CSS v4. Dark theme, premium animations.",
                tags: ["React", "TanStack", "Tailwind v4"],
                color: "from-sky-950/50",
                link: "#",
                source: "#",
              },
              {
                year: "2023",
                title: "SweetJovee Admin",
                desc: "Full-featured admin dashboard for jewelry e-commerce. Order management, inventory, and analytics.",
                tags: ["Next.js", "TypeScript", "MongoDB"],
                color: "from-amber-950/50",
                link: "#",
                source: "#",
              },
              {
                year: "2023",
                title: "SweetCSDL Platform",
                desc: "Document management system for real estate licensing. Multi-role auth, certificate tracking, and exam module.",
                tags: ["Node.js", "MySQL", "Nunjucks"],
                color: "from-rose-950/50",
                link: "#",
                source: "#",
              },
            ].map(({ year, title, desc, tags, color, link, source }) => (
              <div
                key={title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_32px_rgba(255,255,255,0.04)]"
              >
                {/* Header gradient */}
                <div
                  className={`h-32 bg-gradient-to-br ${color} via-card to-card`}
                />

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="font-mono text-[9px] text-muted-foreground/40">
                        {year}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground/90">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground/60">
                      {desc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
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
                  {/* Links */}
                  <div className="mt-4 flex items-center gap-2 border-t border-border/50 pt-3">
                    <a
                      href={link}
                      className="flex items-center gap-1 text-[11px] text-muted-foreground/50 transition-colors hover:text-foreground"
                    >
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                      Live
                    </a>
                    <span className="text-muted-foreground/20">·</span>
                    <a
                      href={source}
                      className="flex items-center gap-1 text-[11px] text-muted-foreground/50 transition-colors hover:text-foreground"
                    >
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GridSection>
    </>
  )
}

export default ProjectsSection
