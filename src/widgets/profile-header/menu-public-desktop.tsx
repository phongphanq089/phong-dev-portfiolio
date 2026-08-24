import { Link } from "@tanstack/react-router"

import { MAIN_NAV_ITEMS } from "@/shared/config"
import { useMediaQuery } from "@/shared/hooks/use-media-query"
import { ModeToggle, PPPixelMark } from "@/shared/ui"
import GenerateButton from "@/shared/ui/animation/generate-button"

import { CommandMenuTrigger } from "../command-menu"
import { MenuItem, type NavItemType } from "./menu-item"

export const Header = () => {
  const isDownLg = useMediaQuery("max-lg")

  return (
    <header className="flex w-full items-center bg-accent dark:bg-[#111111]">
      <Link
        to="/"
        className="flex h-full items-center gap-2 border-r border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent/60"
      >
        <PPPixelMark size={36} className="text-pp-primary" />
      </Link>

      {isDownLg ? (
        <div className="relative ml-auto flex max-w-7xl items-center gap-3 px-2 py-2 shadow-2xl max-lg:justify-between">
          <GenerateButton hue={210} />
        </div>
      ) : (
        <div className="relative ml-auto flex max-w-7xl items-center gap-3 px-2 py-2 shadow-2xl">
          <nav className="custom-scrollbar hidden flex-1 items-center gap-3 overflow-x-auto px-1 lg:flex">
            {MAIN_NAV_ITEMS.map((item) => (
              <MenuItem key={item.label} item={item as NavItemType} />
            ))}
          </nav>
          <CommandMenuTrigger compact />
          <ModeToggle />
        </div>
      )}
    </header>
  )
}

export default Header
