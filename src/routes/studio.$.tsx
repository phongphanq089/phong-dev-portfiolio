import { createFileRoute } from "@tanstack/react-router"
import { type ComponentType, useEffect, useState } from "react"
import type { Config } from "sanity"

import { createSeoMeta } from "@/shared/config"

export const Route = createFileRoute("/studio/$")({
  ssr: false,
  head: () => ({
    meta: createSeoMeta("studio"),
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

function StudioLoadingFallback() {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d0e12] p-6 text-foreground select-none">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative flex w-full max-w-sm flex-col items-center rounded-sm border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl">
        <span className="pointer-events-none absolute top-2.5 left-2.5 h-3 w-3 border-t-2 border-l-2 border-primary/60" />
        <span className="pointer-events-none absolute top-2.5 right-2.5 h-3 w-3 border-t-2 border-r-2 border-primary/60" />
        <span className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-primary/60" />
        <span className="pointer-events-none absolute right-2.5 bottom-2.5 h-3 w-3 border-r-2 border-b-2 border-primary/60" />

        <div className="relative mb-6 flex h-10 w-10 items-center justify-center">
          <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-2 border-primary/30" />
          <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-primary/70" />
          <div className="absolute inset-4 animate-pulse rounded-full bg-primary/10 blur-sm" />
        </div>

        <h2 className="font-mono text-base font-bold tracking-tight text-white">
          INITIALIZING STUDIO
        </h2>
        <p className="mt-1 text-center font-mono text-[11px] text-neutral-400">
          Loading schemas, desk structure & workspace...
        </p>
      </div>

      {/* Bottom Status Tag */}
      <div className="absolute bottom-6 font-mono text-[10px] text-neutral-600">
        POWERED BY SANITY.IO CMS • SECURE AUTH
      </div>
    </div>
  )
}
