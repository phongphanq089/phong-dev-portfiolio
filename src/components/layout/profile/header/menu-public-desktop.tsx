import { Link } from "@tanstack/react-router"

import { ModeToggle } from "@/components/ui/mode-toggle"
import { MusicPlayer } from "@/components/ui/music-player"
import { useMediaQuery } from "@/hooks/use-media-query"

import { MenuItem, type NavItemType } from "./menu-item"
import { navItems } from "./setting-menu"

export const Header = () => {
  const isDownLg = useMediaQuery("max-lg")

  return (
    <header className="w-full">
      <div className="relative mx-auto flex max-w-7xl items-center gap-3 bg-accent px-2 py-2 shadow-2xl max-lg:justify-between dark:bg-[#111111]">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-100 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Logo Placeholder */}
        <Link
          to="/"
          className="flex h-12 w-12 items-center justify-center border border-primary bg-black p-1"
        >
          <img
            src="/logo-dev.png"
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </Link>

        {/* Navigation Items (Desktop) */}
        <nav className="custom-scrollbar hidden flex-1 items-center gap-3 overflow-x-auto px-1 lg:flex">
          {navItems.map((item) => (
            <MenuItem
              key={item.label}
              item={item as NavItemType}
              variant="desktop"
            />
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <ModeToggle />
          <div className="hidden max-lg:block">
            {isDownLg ? <MusicPlayer /> : null}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
