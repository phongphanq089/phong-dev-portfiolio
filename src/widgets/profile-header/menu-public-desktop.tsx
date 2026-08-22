import { Link } from "@tanstack/react-router"
import { useEffect, useState } from "react"

import { useMediaQuery } from "@/shared/hooks/use-media-query"
import { PPPixelMark } from "@/shared/ui"
import { ModeToggle } from "@/shared/ui/system/mode-toggle"
import { CommandMenuTrigger } from "@/widgets/command-menu"
import { MusicPlayer } from "@/widgets/music-player"

import { MenuItem, type NavItemType } from "./menu-item"
import { navItems } from "./setting-menu"

export const Header = () => {
  const isDownLg = useMediaQuery("max-lg")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  return (
    <header className="flex w-full items-center bg-accent dark:bg-[#111111]">
      <Link
        to="/"
        className="flex h-full items-center gap-2 border-r border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent/60"
      >
        <PPPixelMark size={36} className="text-pp-primary" />
      </Link>

      <div className="relative ml-auto flex max-w-7xl items-center gap-3 px-2 py-2 shadow-2xl max-lg:justify-between">
        <nav className="custom-scrollbar hidden flex-1 items-center gap-3 overflow-x-auto px-1 lg:flex">
          {navItems.map((item) => (
            <MenuItem
              key={item.label}
              item={item as NavItemType}
              variant="desktop"
            />
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-2.5">
          <CommandMenuTrigger compact />
          <ModeToggle />
          <div className="hidden max-lg:block">
            {isMounted && isDownLg ? <MusicPlayer /> : null}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
