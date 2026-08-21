/* eslint-disable react-hooks/set-state-in-effect */
import { Outlet } from "@tanstack/react-router"
import { useEffect, useState } from "react"

import { TOCItems } from "@/shared/constants"
import { useMediaQuery } from "@/shared/hooks/use-media-query"
import { cn } from "@/shared/lib/utils"
import { ThemeProvider } from "@/shared/providers/theme-provider"
import BackgroundGradientCursor from "@/shared/ui/animation/background-gradient-cursor"
import { EdgeBlur } from "@/shared/ui/system/edge-blur"
import { ScrollToTop } from "@/shared/ui/system/scroll-to-top"
import { TOCMinimap } from "@/shared/ui/system/toc-minimap"
import { MusicPlayer } from "@/widgets/music-player"
import { Footer } from "@/widgets/profile-footer"
import { Header, MenuBottomMobile } from "@/widgets/profile-header"
import { NumbersSimulation } from "@/widgets/profile-sidebar"

import { GridSection } from "./grid-layout"

export function ProfileLayout({ children }: { children?: React.ReactNode }) {
  const [showMinimap, setShowMinimap] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const isDownLg = useMediaQuery("max-lg")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowMinimap(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const effects = {
    mask: { cursor: true, x: 0, y: 0, radius: 100 },
    gradient: {
      display: true,
      x: 50,
      y: 0,
      width: 100,
      height: 100,
      tilte: 0,
      colorStart: "blue-500",
      colorEnd: "transparent",
      opacity: 50,
    },
    dots: { display: true, size: 2, color: "gray-500", opacity: 20 },
    lines: { display: false, opacity: 100 },
    grid: { display: false, opacity: 100 },
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative flex min-h-screen w-full overflow-x-clip bg-background text-foreground selection:bg-primary/20">
        <div
          className={cn(
            "fixed top-1/2 right-0 z-50 -translate-y-1/2 transition-all duration-500",
            showMinimap
              ? "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-10 opacity-0"
          )}
        >
          <TOCMinimap items={TOCItems} />
        </div>
        {/* Background cursor gradient */}
        <BackgroundGradientCursor
          mask={effects.mask}
          dots={effects.dots}
          grid={effects.grid}
          lines={effects.lines}
        />
        {/* Numbers simulation on the left edge */}
        <div className="pointer-events-none relative z-1 hidden w-12 shrink-0 border-r border-border md:block">
          <NumbersSimulation />
        </div>

        {/* Main Layout */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
            <GridSection
              borderTop={false}
              borderBottom={true}
              className="flex justify-center p-0 transition-all duration-300"
            >
              <Header />
            </GridSection>
          </div>

          {/* Mobile Bottom Dock Menu */}
          <MenuBottomMobile />

          {/* Main Content Area */}
          <main className="flex w-full flex-1 flex-col overflow-x-clip">
            {children ?? <Outlet />}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
      <EdgeBlur position="bottom" height={100} />
      <div className="fixed right-6 bottom-22 z-100 flex flex-col items-end gap-3 lg:bottom-6">
        <ScrollToTop />
        <div className="hidden lg:block">
          {isMounted && !isDownLg ? <MusicPlayer /> : null}
        </div>
      </div>
    </ThemeProvider>
  )
}
