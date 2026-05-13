"use client"

import { useEffect, useRef } from "react"

import TextBurnNeon from "@/components/ui/animation/text-burn-neon"

/* ─── Tech badge pill ─── */
const TechBadge = ({ label }: { label: string }) => (
  <span className="inline-flex cursor-default items-center justify-center rounded border border-white/15 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] tracking-wider whitespace-nowrap text-white/65 transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/15 hover:text-red-400">
    {label}
  </span>
)

/* ─── Skill bullet item ─── */
const SkillItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/60">
    <span className="text-[10px] text-red-500">✓</span>
    {text}
  </div>
)

/* ─── Vertical side label ─── */
const SideLabel = ({ text, flip }: { text: string; flip?: boolean }) => (
  <span
    className="font-mono text-[8px] tracking-[0.25em] text-white/25 uppercase"
    style={{
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      transform: flip ? "rotate(180deg)" : undefined,
    }}
  >
    {text}
  </span>
)

/* ─── Main BannerHero ─── */
const BannerHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  /* subtle glitch on the big title */
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const id = setInterval(() => {
      el.style.transform = `translateX(${(Math.random() - 0.5) * 4}px)`
      setTimeout(() => {
        if (el) el.style.transform = "translateX(0)"
      }, 80)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full overflow-hidden text-white">
      {/* ── Google Font: Rubik Dirt ── */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap"
      />

      {/* ── Noise texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ════════════════════════════════════
          TOP INTRO ROW
      ════════════════════════════════════ */}
      <div className="relative z-10 flex items-start justify-between px-7 pt-5 pb-0">
        {/* Left tagline */}
        <p className="max-w-[260px] text-sm leading-relaxed font-medium text-white/80">
          I build digital experiences
          <br />
          from <span className="font-semibold text-red-500">
            frontend
          </span> to{" "}
          <span className="font-semibold text-red-500">backend.</span>
        </p>

        <TextBurnNeon className="text-[clamp(52px,9.5vw,112px)] font-black text-primary-color">
          DEVELOPER
        </TextBurnNeon>
      </div>

      {/* ════════════════════════════════════
          3-PANEL GRID
      ════════════════════════════════════ */}
      <div className="relative z-10 grid min-h-[360px] grid-cols-[1fr_2fr_1fr]">
        {/* ── LEFT PANEL (Frontend) ── */}
        <div className="flex flex-col gap-2.5 border-r border-white/[0.06] px-4 py-3">
          {/* image */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden border border-white/[0.08]">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60"
              alt="Frontend developer"
              className="h-full w-full object-cover contrast-110 grayscale-[40%] transition-all duration-500 group-hover:grayscale-0"
              loading="lazy"
            />
            {/* vertical label */}
            <div
              className="absolute top-0 right-0 bg-red-600 px-1 py-2 font-mono text-[8px] font-bold tracking-[0.2em] text-white uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              FRONTEND
            </div>
          </div>

          <SideLabel text="01 / DESIGN & UI" flip />

          {/* skills */}
          <div className="mt-1 flex flex-col gap-1.5">
            <SkillItem text="HTML, CSS, TypeScript" />
            <SkillItem text="React, Next.js" />
            <SkillItem text="State Mgmt, TailwindCSS" />
            <SkillItem text="Performance & A11y" />
          </div>
        </div>

        {/* ── CENTER PANEL (Main artwork) ── */}
        <div className="relative overflow-hidden">
          {/* main image */}
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop&q=70"
            alt="Developer coding"
            className="h-full w-full object-cover contrast-105 grayscale-[15%] transition-all duration-500 hover:grayscale-0"
            loading="eager"
          />

          {/* red grid overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(230,57,70,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(230,57,70,0.07) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* scanlines */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)",
            }}
          />

          {/* bottom caption strip */}
          <div className="absolute right-0 bottom-0 left-0 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 bg-black/80 px-4 py-3 backdrop-blur-sm">
            <p className="max-w-[200px] font-mono text-[11px] leading-relaxed text-white/70">
              I build scalable, maintainable systems
              <br />
              using the power of{" "}
              <span className="text-red-400">Node.js ecosystem.</span>
            </p>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 font-mono text-[9px] tracking-wider text-white/35">
                I work with
              </span>
              {["JS", "TS", "⚛", "NXT", "Node", "exp", "MDB"].map((b) => (
                <TechBadge key={b} label={b} />
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL (Backend) ── */}
        <div className="flex flex-col items-end gap-2.5 border-l border-white/[0.06] px-4 py-3">
          {/* image */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden border border-white/[0.08]">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=60"
              alt="Server infrastructure"
              className="h-full w-full object-cover contrast-110 grayscale-[40%] transition-all duration-500 group-hover:grayscale-0"
              loading="lazy"
            />
            <div
              className="absolute top-0 left-0 bg-red-600 px-1 py-2 font-mono text-[8px] font-bold tracking-[0.2em] text-white uppercase"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              BACKEND
            </div>
          </div>

          <SideLabel text="02 / API & SYSTEMS" />

          {/* skills */}
          <div className="mt-1 flex w-full flex-col items-start gap-1.5">
            <SkillItem text="Node.js, Express, NestJS" />
            <SkillItem text="RESTful APIs, GraphQL" />
            <SkillItem text="Auth & Authorization" />
            <SkillItem text="MongoDB, PostgreSQL" />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          BOTTOM CTA STRIP
      ════════════════════════════════════ */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] px-7 py-3.5">
        {/* CTA links */}
        <div className="flex flex-wrap items-center gap-5">
          {[
            { label: "View Projects" },
            { label: "Download CV" },
            { label: "Let's Connect" },
          ].map(({ label }) => (
            <button
              key={label}
              className="group flex cursor-pointer items-center gap-1.5 border-b border-transparent bg-transparent pb-px font-mono text-[11px] tracking-wider text-white/55 transition-colors duration-200 hover:border-white/30 hover:text-white"
            >
              {label}
              <span className="text-sm text-red-500 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
          ))}
        </div>

        {/* right tagline */}
        <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-white/25 uppercase">
          Clean code.&nbsp; Scalable systems.&nbsp;
          <span className="text-red-500">Real impact.</span>
          &nbsp;&nbsp;
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
        </div>
      </div>
    </div>
  )
}

export default BannerHero
