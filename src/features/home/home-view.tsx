import { GridSection } from "@/components/layout/profile/grid-layout"
import { TextHoverEffect } from "@/components/ui/animation/text-hover-effect"

import BannerHero from "./banner-hero"
import SectionAbout from "./section-about"

export function HomeView() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <div className="mx-auto px-8 md:px-16">
        <BannerHero />
      </div>

      <GridSection className="py-12" borderTop={true}>
        <SectionAbout />
      </GridSection>

      {/* ── UI Components Section ── */}
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
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </GridSection>

      {/* Component cards grid */}
      <GridSection className="px-8 py-8 md:px-16" borderTop={false} showCrosshairs={false}>
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
                  className="select-none text-2xl font-bold text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg,#60a5fa,#a78bfa,#60a5fa)" }}
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
                    <div key={i} className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
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
                <div className="flex flex-col gap-2 w-full px-2 select-none">
                  <div className="h-7 w-full rounded border border-emerald-500/20 bg-emerald-500/5 flex items-center px-2">
                    <span className="text-[10px] text-emerald-400/60">Input field…</span>
                  </div>
                  <div className="h-7 w-20 self-end rounded border border-emerald-500/25 bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-[10px] text-emerald-400/70 font-medium">Submit</span>
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
                <span className="select-none font-bold text-xl text-white/20 tracking-wide"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>
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
                <div className="select-none rounded-lg border border-white/10 bg-white/[0.06] backdrop-blur-sm px-4 py-3 text-center w-full max-w-[160px]">
                  <div className="text-[10px] font-semibold text-white/70 mb-1">Confirm?</div>
                  <div className="flex gap-2 justify-center">
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[9px] text-white/50">Cancel</span>
                    <span className="rounded bg-purple-500/25 border border-purple-500/30 px-2 py-0.5 text-[9px] text-purple-300/80">OK</span>
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
                <div className="select-none flex flex-col gap-1.5 w-full px-2">
                  {[
                    { color: "bg-emerald-500/20 border-emerald-500/25 text-emerald-400/80", label: "✓  Saved successfully" },
                    { color: "bg-red-500/15 border-red-500/20 text-red-400/70", label: "✕  Something went wrong" },
                  ].map((t) => (
                    <div key={t.label} className={`rounded border px-2.5 py-1.5 text-[9px] font-mono ${t.color}`}>
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
              <div className={`flex aspect-video items-center justify-center bg-gradient-to-br ${from} via-card to-card p-4`}>
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
                <p className="mb-2 text-[10px] leading-relaxed text-muted-foreground/55">{desc}</p>
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


      {/* View all CTA */}
      <GridSection className="flex items-center justify-center py-10" borderTop={true} showCrosshairs={false}>
        <button className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-white/25 hover:bg-accent hover:text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-all duration-200 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
          View all components
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </GridSection>

      {/* ── Projects Section ── */}
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
            <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </GridSection>

      <GridSection className="px-8 py-8 md:px-16" borderTop={false} showCrosshairs={false}>
        <div className="flex flex-col gap-4">

          {/* ── Featured project (wide) ── */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.04)]">
            <div className="grid md:grid-cols-[1fr_1.2fr]">
              {/* Left: info */}
              <div className="flex flex-col justify-between p-8">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-0.5 font-mono text-[9px] font-bold text-emerald-400/90 uppercase tracking-wider">
                      Featured
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/40">2024</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground/90 leading-tight">
                    React Wheel Picker
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    A high-performance, accessible wheel/scroll picker component for React.
                    Smooth momentum scrolling, keyboard navigation, and fully customizable.
                    Joined the Vercel Open Source Program.
                  </p>
                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React", "TypeScript", "Rollup", "CSS Modules", "Vercel"].map((t) => (
                      <span key={t} className="rounded border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-white/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Links */}
                <div className="mt-6 flex items-center gap-3">
                  <a href="#" className="flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-all hover:bg-foreground/85">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    Live demo
                  </a>
                  <a href="#" className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-white/25 hover:text-foreground">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
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
                      {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((item, i) => (
                        <div
                          key={item}
                          className={`rounded px-3 py-2 text-center text-xs font-medium transition-all ${
                            i === 2 ? "bg-white/15 text-white" : "text-white/30"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
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
                <div className={`h-32 bg-gradient-to-br ${color} via-card to-card`} />

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="font-mono text-[9px] text-muted-foreground/40">{year}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground/90">{title}</h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground/60">{desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {tags.map((t) => (
                        <span key={t} className="rounded border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5 font-mono text-[9px] text-white/35">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Links */}
                  <div className="mt-4 flex items-center gap-2 border-t border-border/50 pt-3">
                    <a href={link} className="flex items-center gap-1 text-[11px] text-muted-foreground/50 transition-colors hover:text-foreground">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                      Live
                    </a>
                    <span className="text-muted-foreground/20">·</span>
                    <a href={source} className="flex items-center gap-1 text-[11px] text-muted-foreground/50 transition-colors hover:text-foreground">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GridSection>

      {/* ── Blog Section ── */}
      <GridSection className="px-8 pt-16 pb-0 md:px-16" showCrosshairs={false}>
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
              03 / Writing

            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Blog
              <span className="ml-3 align-middle font-mono text-xl font-normal text-muted-foreground/40">
                (37)
              </span>
            </h2>
            <p className="mt-1 text-muted-foreground">
              Thoughts on code, design, and everything in between.
            </p>
          </div>
          <button className="group mb-1 flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:bg-accent/60 hover:text-foreground">
            All posts
            <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </GridSection>

      {/* Blog cards */}
      <GridSection className="px-8 py-8 md:px-16" borderTop={false} showCrosshairs={false}>
        <div className="grid grid-cols-1 gap-px border border-border rounded-xl overflow-hidden md:grid-cols-2">
          {[
            {
              img: "/assets/images/blog-vercel.png",
              alt: "React Wheel Picker",
              category: "Open Source",
              title: "React Wheel Picker joins Vercel Open Source Program",
              date: "24.07.2025",
              readTime: "4 min",
              isNew: false,
            },
            {
              img: "/assets/images/blog-gradient.png",
              alt: "Fluid Gradient Text",
              category: "Component",
              title: "Fluid Gradient Text — mouse-tracking SVG animation",
              date: "03.05.2026",
              readTime: "3 min",
              isNew: true,
            },
            {
              img: "/assets/images/blog-shadcn.png",
              alt: "Followed by shadcn",
              category: "Milestone",
              title: "Followed by @shadcn on X",
              date: "21.06.2025",
              readTime: "2 min",
              isNew: false,
            },
            {
              img: "/assets/images/blog-toc.png",
              alt: "TOC Minimap",
              category: "UX",
              title: "TOC Minimap — table of contents as a scrollable map",
              date: "27.04.2026",
              readTime: "5 min",
              isNew: true,
            },
          ].map(({ img, alt, category, title, date, readTime, isNew }) => (
            <div
              key={title}
              className="group flex cursor-pointer flex-col bg-card transition-all duration-300 hover:bg-accent/30"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-video w-full">
                <img
                  src={img}
                  alt={alt}
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  {/* Category + NEW badge */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/50 uppercase">
                      {category}
                    </span>
                    {isNew && (
                      <span className="rounded bg-primary/15 px-1.5 py-0.5 font-mono text-[8px] font-bold text-primary/80">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold leading-snug text-foreground/90 transition-colors duration-200 group-hover:text-foreground">
                    {title}
                  </h3>
                </div>

                {/* Footer meta */}
                <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                  <span className="font-mono text-[10px] text-muted-foreground/50">
                    {date}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground/40">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {readTime} read
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GridSection>

      {/* Blog CTA */}
      <GridSection className="flex items-center justify-center py-10" borderTop={true} showCrosshairs={false}>
        <button className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-white/25 hover:bg-accent hover:text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-all group-hover:bg-primary" />
          View all posts
          <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </GridSection>

      {/* ── Bookmarks Section ── */}
      <GridSection className="px-8 pt-16 pb-0 md:px-16" showCrosshairs={false}>
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
              03 / Reading
            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Bookmarks
              <span className="ml-3 align-middle font-mono text-xl font-normal text-muted-foreground/40">
                (14)
              </span>
            </h2>
            <p className="mt-1 text-muted-foreground">
              Articles, talks, and links I keep coming back to.
            </p>
          </div>
        </div>
      </GridSection>

      <GridSection className="px-8 py-8 md:px-16" borderTop={false} showCrosshairs={false}>
        <div className="flex flex-col divide-y divide-border/50 rounded-xl border border-border overflow-hidden">
          {[
            { title: "Agents with Taste", author: "Emil Kowalski", date: "21.04.2026", icon: "💬" },
            { title: "Devouring Details", author: "Rauno", date: "14.04.2026", icon: "◉" },
            { title: "React handbook", author: "Rauno", date: "14.04.2026", icon: "◉" },
            { title: "Train Your Judgement", author: "Emil Kowalski", date: "09.04.2026", icon: "💬" },
            { title: "How we think about design", author: "Resend", date: "20.12.2025", icon: "✦" },
            { title: "Philosophy", author: "Resend", date: "20.12.2025", icon: "✦" },
            { title: "7 Principles of Rich Web Applications", author: "Guillermo Rauch", date: "16.12.2025", icon: "◻" },
            { title: "components.build", author: "Hayden Bleasel & shadcn", date: "11.12.2025", icon: "▲" },
            { title: "Design Engineering at Vercel", author: "Vercel", date: "01.12.2025", icon: "▲" },
            { title: "Developing Taste", author: "Emil Kowalski", date: "01.12.2025", icon: "💬" },
            { title: "Web Interface Guidelines", author: "Vercel", date: "01.12.2025", icon: "▲" },
          ].map(({ title, author, date, icon }) => (
            <a
              key={title}
              href="#"
              className="group flex items-center gap-4 bg-card px-5 py-4 transition-colors duration-150 hover:bg-accent/40"
            >
              {/* Favicon placeholder */}
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border border-border bg-muted/50 font-mono text-[11px] text-muted-foreground/60 select-none">
                {icon}
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="truncate text-sm font-medium text-foreground/85 transition-colors group-hover:text-foreground">
                  {title}
                </span>
                <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground/50">
                  <span>{author}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                  <span>{date}</span>
                </div>
              </div>

              {/* External arrow */}
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/70"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
      </GridSection>

      {/* Contact Bar */}
      <GridSection columns={2} className="py-8">
        <div className="flex flex-col justify-center px-8 md:px-16">
          <h3 className="font-medium">Get in touch</h3>
          <p className="text-sm text-muted-foreground uppercase">
            Send a DM and I'll get back to you asap.
          </p>
        </div>
        <div className="flex items-center gap-4 px-8 md:px-16">
          {/* Social links placeholders */}
          <div className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-full border border-border hover:bg-accent/50">
            In
          </div>
          <div className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-full border border-border hover:bg-accent/50">
            Tw
          </div>
          <div className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-full border border-border hover:bg-accent/50">
            Gh
          </div>
        </div>
      </GridSection>

      {/* Footer CTA */}
      {/* <GridSection className="flex items-center justify-between px-8 py-24 md:px-16">
        <h2 className="text-4xl font-medium">
          Let's build something together!
        </h2>
        <button className="rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/90">
          Email me
        </button>
      </GridSection> */}

      <div className="px-10">
        {" "}
        <TextHoverEffect text="PHONG PHAN" />
      </div>
    </div>
  )
}
