import { createFileRoute } from "@tanstack/react-router"
import { type ComponentType, useEffect, useState } from "react"
import type { Config } from "sanity"

export const Route = createFileRoute("/studio/$")({
  ssr: false, // 100% Client-side SPA for Sanity Studio
  head: () => ({
    title: "Sanity Studio | Content Management",
    meta: [
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),
  component: StudioPage,
})

function StudioPage() {
  const [studioConfig, setStudioConfig] = useState<Config | null>(null)
  const [StudioComponent, setStudioComponent] = useState<ComponentType<{
    config: Config
  }> | null>(null)

  useEffect(() => {
    let isMounted = true

    // Dynamic import strictly executed inside browser environment
    Promise.all([import("sanity"), import("../../sanity.config")]).then(
      ([{ Studio }, { default: config }]) => {
        if (isMounted) {
          setStudioComponent(
            () => Studio as unknown as ComponentType<{ config: Config }>
          )
          setStudioConfig(config as unknown as Config)
        }
      }
    )

    return () => {
      isMounted = false
    }
  }, [])

  if (!StudioComponent || !studioConfig) {
    return <StudioLoadingFallback />
  }

  return (
    <div className="fixed inset-0 z-[9999] h-[100dvh] w-full overflow-hidden bg-[#0d0e12]">
      <StudioComponent config={studioConfig} />
    </div>
  )
}

/**
 * High-end Blueprint / Cyberpunk Loading Fallback for Studio
 */
function StudioLoadingFallback() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#0d0e12] p-6 text-foreground select-none">
      {/* Background Subtle Tech Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Center Holographic Studio Loader Card */}
      <div className="relative flex w-full max-w-sm flex-col items-center rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl">
        {/* Corner Cyberpunk Crosshairs */}
        <span className="pointer-events-none absolute top-2.5 left-2.5 h-3 w-3 border-t-2 border-l-2 border-primary/60" />
        <span className="pointer-events-none absolute top-2.5 right-2.5 h-3 w-3 border-t-2 border-r-2 border-primary/60" />
        <span className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-primary/60" />
        <span className="pointer-events-none absolute right-2.5 bottom-2.5 h-3 w-3 border-r-2 border-b-2 border-primary/60" />

        {/* Dual Rotating Hologram Rings */}
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-2 border-dashed border-primary/30" />

          {/* Inner Fast Glow Ring */}
          <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-primary/70" />

          {/* Pulsing Core Glow */}
          <div className="absolute inset-4 animate-pulse rounded-full bg-primary/10 blur-sm" />

          {/* Center Brand Icon / Monogram */}
          <div className="relative z-10 font-mono text-sm font-black tracking-tighter text-white">
            <span className="text-primary">&lt;</span>S
            <span className="text-primary">/&gt;</span>
          </div>
        </div>

        {/* Terminal Header Info */}
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
          <p className="font-mono text-[10px] tracking-[0.3em] text-primary/90 uppercase">
            // SANITY ENGINE BOOT
          </p>
        </div>

        <h2 className="font-mono text-base font-bold tracking-tight text-white">
          INITIALIZING STUDIO
        </h2>
        <p className="mt-1 text-center font-mono text-[11px] text-neutral-400">
          Loading schemas, desk structure & workspace...
        </p>

        {/* Cyber Progress Indicator */}
        <div className="mt-6 w-full space-y-1.5">
          <div className="flex justify-between font-mono text-[9px] text-neutral-500">
            <span>CORE_MODULES</span>
            <span className="font-semibold text-primary">CONNECTING...</span>
          </div>
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/5">
            <div className="absolute inset-y-0 left-0 w-1/2 animate-[shimmer_1.5s_infinite_linear] rounded-full bg-gradient-to-r from-primary/30 via-primary to-primary shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
          </div>
        </div>
      </div>

      {/* Bottom Status Tag */}
      <div className="absolute bottom-6 font-mono text-[10px] text-neutral-600">
        POWERED BY SANITY.IO CMS • SECURE AUTH
      </div>
    </div>
  )
}
