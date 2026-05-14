"use client"

import { useRef } from "react"

import TextBurnNeon from "@/components/ui/animation/text-burn-neon"

/* ─── Sidebar Navigation Item ─── */
const SidebarItem = ({
  number,
  label,
  active,
}: {
  number: string
  label: string
  active?: boolean
}) => (
  <div className={`group flex cursor-pointer items-center gap-3`}>
    <span
      className={`font-mono text-[10px] ${active ? "text-red-500" : "text-white/20 group-hover:text-white/40"}`}
    >
      {number}.
    </span>
    <span
      className={`font-mono text-[11px] tracking-widest uppercase ${active ? "text-white" : "text-white/40 group-hover:text-white/70"}`}
    >
      {label}
    </span>
  </div>
)

/* ─── Bracketed Button ─── */
const BracketButton = ({ label }: { label: string }) => (
  <button className="group relative flex items-center px-4 py-1 font-mono text-[11px] tracking-[0.2em] text-white/60 transition-all hover:text-white">
    <span className="text-white/20 transition-colors group-hover:text-red-500">
      [{" "}
    </span>
    <span className="mx-2 transition-colors group-hover:text-red-500">
      {label}
    </span>
    <span className="text-white/20 transition-colors group-hover:text-red-500">
      {" "}
      ]
    </span>
  </button>
)

const BannerHero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden text-white selection:bg-red-500/30"
    >
      {/* ── Background Noise & Grid ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Main Layout Grid ── */}
      <div className="relative z-10 flex grid-cols-1 flex-col sm:grid-cols-[160px_1fr] sm:grid-rows-[auto_1fr_auto] xl:grid">
        {/* 1. LEFT SIDEBAR - Hidden on mobile */}
        <div className="row-span-3 hidden flex-col justify-start gap-4 border-r border-white/5 p-8 pt-12 xl:flex">
          <SidebarItem number="01" label="Home" active />
          <SidebarItem number="02" label="About" />
          <SidebarItem number="03" label="Projects" />
          <SidebarItem number="04" label="Skills" />
          <SidebarItem number="05" label="Contact" />

          <div className="mt-auto ml-1 h-32 w-px bg-linear-to-b from-white/5 to-transparent" />
        </div>

        {/* 2. TOP HEADER SECTION */}
        <div className="flex flex-row items-start justify-between border-b border-white/5 px-6 py-8 max-sm:pb-0 max-xs:flex-col md:px-10 xl:items-end">
          <div className="mb-8 max-w-[420px] md:mb-0">
            <p className="font-mono text-xs leading-relaxed text-white/70 md:text-sm">
              Full-stack Architect with a passion for
              <br />
              high-performance systems and
              <br />
              immersive digital experiences.
            </p>
          </div>

          <div className="relative w-full text-right md:w-auto">
            <TextBurnNeon className="text-3xl font-black text-primary-color xl:text-[5rem]">
              DEVELOPER
            </TextBurnNeon>
            <div className="absolute -top-4 -right-2 h-8 w-8 border-t border-r border-red-500/50 md:-right-4" />
            <div className="absolute -bottom-2 -left-2 h-6 w-px bg-red-500/50 md:-left-4" />
          </div>
        </div>

        {/* 3. THREE PANEL CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* PANEL 1 */}
          <div className="flex flex-col border-b border-white/5 p-6 md:border-r md:border-b-0 md:p-10 md:pt-16">
            <div className="group relative mb-6 aspect-square w-full overflow-hidden border border-white/10 bg-white/5 max-sm:hidden md:mb-8">
              <img
                src="/assets/images/hero-left.png"
                alt="Concept"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-red-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
              {/* Corner labels */}
              <div
                className="absolute top-4 right-2 font-mono text-[10px] tracking-widest text-red-500 mix-blend-difference"
                style={{ writingMode: "vertical-rl" }}
              >
                KIA
              </div>
            </div>

            <p className="max-w-[280px] font-mono text-[13px] leading-relaxed tracking-wide text-white/80 md:text-sm">
              I architect high-performance interfaces that bridge the gap
              between human{" "}
              <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                intuition
              </span>{" "}
              and machine precision.
            </p>
          </div>

          {/* PANEL 2 - CENTER PIECE */}
          <div className="relative aspect-3/4 border-b border-white/5 md:border-r md:border-b-0">
            <div className="group relative h-full w-full overflow-hidden">
              <img
                src="/assets/images/hero-center.png"
                alt="Portrait"
                className="h-full w-full object-cover contrast-125 grayscale-20 transition-transform duration-1000 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-red-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            {/* Red accent line overlay */}
            <div className="absolute top-0 -left-px hidden h-full w-px bg-red-500/20 md:block" />
            <div className="absolute right-[-20px] bottom-12 hidden h-px w-40 bg-red-500/30 md:block" />
          </div>

          {/* PANEL 3 */}
          <div className="flex flex-col p-6 md:p-10 md:pt-16">
            <div className="group relative mb-6 aspect-square w-full overflow-hidden border border-white/10 bg-white/5 max-sm:hidden md:mb-8">
              <img
                src="/assets/images/hero-right.png"
                alt="Work"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-red-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <p className="max-w-[280px] font-mono text-[13px] leading-relaxed tracking-wider text-white/80 uppercase md:text-sm">
              Clean code & Solid structure.
              <br />
              Advanced UI/UX & Design Systems.
              <br />
              Crafting{" "}
              <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                pixel-perfect
              </span>{" "}
              interfaces.
            </p>
          </div>
        </div>

        {/* 4. BOTTOM ACTION BAR */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 px-6 py-8 md:col-start-2 md:flex-row md:gap-0 md:px-10 md:py-5">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white/40">
            <span className="animate-pulse font-bold text-red-500">&gt;_</span>{" "}
            ROOT@DEV: READY TO SHIP_
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <BracketButton label="VIEW MY WORK" />
            <div className="hidden h-4 w-px bg-white/10 md:block" />
            <BracketButton label="GET IN TOUCH" />
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
            SCROLL DOWN
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-red-500">▼</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="pointer-events-none absolute top-0 left-[300px] h-full w-px bg-white/5" />
      <div className="pointer-events-none absolute top-0 right-[10%] h-full w-px bg-white/3" />

      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] opacity-20" />
    </div>
  )
}

export default BannerHero
