import { Outlet } from "@tanstack/react-router"
import { useEffect, useState } from "react"

import { HOME_TOC_ITEMS } from "@/shared/config"
import { useMediaQuery } from "@/shared/hooks/use-media-query"
import { cn } from "@/shared/lib/utils"
import { ThemeProvider } from "@/shared/providers/theme-provider"
import { EdgeBlur } from "@/shared/ui/system/edge-blur"
import ProgressWhileScroll from "@/shared/ui/system/progress-while-scroll"
import { TOCMinimap } from "@/shared/ui/system/toc-minimap"
import { Footer } from "@/widgets/profile-footer"
import { Header } from "@/widgets/profile-header"
import BottomMenu from "@/widgets/profile-header/bottom-menu"
import { NumbersSimulation } from "@/widgets/profile-sidebar"

import { GridContainer } from "./grid-layout"

export function ProfileLayout({ children }: { children?: React.ReactNode }) {
  const [showMinimap, setShowMinimap] = useState(false)
  const isDownMd = useMediaQuery("max-md")

  useEffect(() => {
    const handleScroll = () => {
      setShowMinimap(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <TOCMinimap items={HOME_TOC_ITEMS} />
        </div>
        <div className="pointer-events-none relative z-1 hidden w-12 shrink-0 border-r border-border md:block">
          <NumbersSimulation />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="sticky top-0 z-50 w-full">
            <GridContainer
              borderTop={false}
              borderBottom={true}
              className="flex justify-center p-0 transition-all duration-300"
            >
              <Header />
            </GridContainer>
          </div>

          {/* Bottom Floating Dynamic Dock & Scroll Progress */}
          <div className="fixed bottom-6 left-1/2 z-100 -translate-x-1/2 md:right-8 md:bottom-8 md:left-auto md:translate-x-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <BottomMenu />
              <ProgressWhileScroll />
            </div>
          </div>

          <main className="flex w-full flex-1 flex-col overflow-x-clip">
            {children ?? <Outlet />}
          </main>

          <Footer />
        </div>
      </div>
      <EdgeBlur position="bottom" height={isDownMd ? 30 : 100} />

      <div className="fixed right-6 bottom-22 z-100 flex flex-col items-end gap-3 lg:bottom-6">
        {/* <ScrollToTop /> */}
        {/* <div className="hidden lg:block">
          {isMounted && !isDownLg ? <MusicPlayer /> : null}
        </div> */}
      </div>
    </ThemeProvider>
  )
}
