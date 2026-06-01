import { Link } from "@tanstack/react-router"
import { Activity, ArrowLeft, Cpu, Disc, Hammer, Terminal } from "lucide-react"
import React, { useEffect, useState } from "react"

import { Card, CardCanvas } from "@/components/ui/animated-glow-card"

interface UnderConstructionProps {
  pageName: string
  colorTheme: string // e.g. '#ff00ff' (PROJECTS), '#ff6600' (BLOG), '#ffcc00' (RESOURCES)
  colorName: string // e.g. 'magenta', 'orange', 'yellow'
}

export const UnderConstruction: React.FC<UnderConstructionProps> = ({
  pageName,
  colorTheme,
  colorName,
}) => {
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [progress, setProgress] = useState(65)
  const [simulatedTime, setSimulatedTime] = useState("")

  // Real-time clock update
  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date()
      setSimulatedTime(d.toISOString().replace("T", " ").substring(0, 19))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Simulate compiler log typing
  useEffect(() => {
    const logs = [
      `[INIT] Booting development pipeline for: ${pageName.toUpperCase()}...`,
      `[SYSTEM] Connecting core assets & modules...`,
      `[RESOLVING] @components/layout/profile/grid-layout.tsx -> OK`,
      `[FETCH] Pulling custom layouts from design-tokens...`,
      `[WARN] Experimental visual aesthetics enabled (Cyberpunk-Noir).`,
      `[COMPILED] webpack://src/routes/_profile.${pageName.toLowerCase()}.tsx`,
      `[DOCKER] Spawning container: node-v20.11-alpine...`,
      `[INDEX] Optimizing semantic HTML metadata (SEO) -> ACTIVE`,
      `[GRAPHICS] Generating high-contrast blueprint crosshair overlays...`,
      `[LINK] Binding menu active states dynamically...`,
      `[DEPLOY] Synchronizing local sandbox with production edge...`,
      `[READY] Standing by. System active. Integrity: 99.8%`,
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < logs.length) {
        const lineToAdd = logs[currentIndex]
        setTerminalLines((prev) => [...prev, lineToAdd])
        currentIndex++
        setProgress((p) => Math.min(p + Math.floor(Math.random() * 5) + 2, 98))
      } else {
        clearInterval(interval)
      }
    }, 1200)

    return () => clearInterval(interval)
  }, [pageName])

  return (
    <CardCanvas className="mx-auto w-full max-w-4xl justify-center">
      <div className="relative flex w-full min-w-0 flex-col items-center justify-center">
        {/* Visual Header Badge */}
        <div
          className="mb-8 flex items-center gap-2 border border-dashed bg-background/50 px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase backdrop-blur-md"
          style={{ borderColor: colorTheme, color: colorTheme }}
        >
          <Hammer className="h-3.5 w-3.5 animate-bounce" />
          <span>Section Under Construction</span>
        </div>

        {/* Blueprint Container */}
        <Card className="w-full min-w-0 overflow-hidden">
          <div className="relative grid w-full min-w-0 grid-cols-1 border-b border-border bg-black/40 md:grid-cols-12">
            {/* Left Column: Rotating Holographic Compass & Stats (5 cols) */}
            <div className="col-span-1 flex min-w-0 flex-col items-center justify-center border-b border-dashed border-white/10 p-6 md:col-span-5 md:border-r md:border-b-0">
              {/* Radar Graphic */}
              <div className="relative flex h-36 w-36 items-center justify-center">
                <Disc
                  className="absolute h-full w-full animate-spin text-white/5"
                  style={{ animationDuration: "12s" }}
                />

                {/* Dashed outer rings */}
                <div
                  className="absolute h-32 w-32 animate-spin rounded-full border border-dashed border-white/10"
                  style={{ animationDuration: "20s" }}
                />
                <div
                  className="absolute h-24 w-24 animate-spin rounded-full border border-double border-white/20"
                  style={{
                    animationDuration: "8s",
                    animationDirection: "reverse",
                  }}
                />

                {/* Laser scan line overlay */}
                <div
                  className="absolute h-full w-0.5 origin-bottom animate-pulse bg-gradient-to-t from-transparent via-current to-transparent"
                  style={{ color: colorTheme, transform: "rotate(45deg)" }}
                />

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/80 shadow-inner">
                  <Cpu className="h-6 w-6 animate-pulse text-white" />
                </div>
              </div>

              {/* Status metrics grid */}
              <div className="mt-6 w-full space-y-2.5 font-mono text-[11px] text-muted-foreground">
                <div className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span className="flex items-center gap-1.5">
                    <Activity className="h-3 w-3" /> PIPELINE:
                  </span>
                  <span className="font-bold tracking-wider text-white uppercase">
                    {colorName}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span>COORDINATES:</span>
                  <span className="font-bold text-white">
                    45.02° N, 122.67° W
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span>SYSTEM TIME:</span>
                  <span className="text-white">
                    {simulatedTime || "CONNECTING..."}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>STABILITY:</span>
                  <span className="animate-pulse font-bold text-green-500">
                    99.8% NOMINAL
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Console Log Terminal (7 cols) */}
            <div className="col-span-1 flex min-w-0 flex-col bg-black/60 p-6 font-mono md:col-span-7">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>core-compilation-log.sh</span>
                </div>
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-white/50">
                  v2.4.9
                </span>
              </div>

              {/* Terminal Screen lines */}
              <div className="custom-scrollbar h-48 w-full space-y-1.5 overflow-x-hidden overflow-y-auto text-[10px] leading-relaxed text-slate-300">
                {terminalLines.map((line, idx) => {
                  if (!line || typeof line !== "string") return null
                  return (
                    <div
                      key={idx}
                      className="w-full break-all whitespace-pre-wrap"
                    >
                      {line.startsWith("[INIT]") && (
                        <span style={{ color: colorTheme }}>{line}</span>
                      )}
                      {line.startsWith("[WARN]") && (
                        <span className="font-semibold text-yellow-400">
                          {line}
                        </span>
                      )}
                      {line.startsWith("[READY]") && (
                        <span className="font-bold text-green-400">{line}</span>
                      )}
                      {!line.startsWith("[INIT]") &&
                        !line.startsWith("[WARN]") &&
                        !line.startsWith("[READY]") && <span>{line}</span>}
                    </div>
                  )
                })}
                {terminalLines.length < 12 && (
                  <div className="inline-block h-3 w-1.5 animate-pulse bg-white" />
                )}
              </div>

              {/* Progress Slider */}
              <div className="mt-6 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>MODULE INTEGRITY</span>
                  <span className="font-bold text-white">{progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 p-[1px]">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: colorTheme,
                      boxShadow: `0 0 10px ${colorTheme}`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-muted/20 px-6 py-4">
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground/60">
              EST. ESTABLISHMENT: Q3 2026
            </span>
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-2 border border-white/10 bg-black/60 px-4 py-2 font-mono text-xs font-bold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Return Base</span>
              </Link>
              <Link
                to="/studio/$"
                style={{ borderColor: colorTheme, color: colorTheme }}
                className="flex items-center gap-2 border bg-black/60 px-4 py-2 font-mono text-xs font-bold transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
              >
                <span>Launch Studio</span>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </CardCanvas>
  )
}
