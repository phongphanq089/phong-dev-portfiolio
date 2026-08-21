import { Link, useRouterState } from "@tanstack/react-router"

import { cn } from "@/shared/lib/utils"

export const activeColors: Record<string, string> = {
  Home: "#66ff00",
  PROJECTS: "#ff00ff",
  BLOG: "#ff6600",
  RESOURCES: "#ffcc00",
  STUDIO: "#ffffff",
}

export interface NavItemType {
  label: string
  color: string
  border: string
  bg: string
  link: string
}

interface MenuItemProps {
  item: NavItemType
  variant: "desktop" | "mobile-expanded" | "mobile-primary"
  onClick?: () => void
}

export const MenuItem = ({ item, variant, onClick }: MenuItemProps) => {
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  const isActive =
    item.link === "/" ? currentPath === "/" : currentPath.startsWith(item.link)

  const activeColor = activeColors[item.label] || "#ffffff"

  if (variant === "desktop") {
    return (
      <Link
        to={item.link}
        className={cn(
          "group relative flex items-center gap-3 border bg-black px-4 py-2 transition-all duration-300",
          isActive
            ? "shadow-[0_0_15px_rgba(255,255,255,0.03)]"
            : "border-white/5 hover:border-current",
          item.color
        )}
        style={{
          borderColor: isActive ? activeColor : undefined,
        }}
      >
        {/* Color Square */}
        <div
          className={cn(
            "h-3 w-3 shrink-0 transition-transform duration-300",
            item.bg,
            isActive && "scale-110 animate-pulse"
          )}
          style={{
            boxShadow: isActive ? `0 0 10px ${activeColor}` : undefined,
          }}
        />

        {/* Text */}
        <span
          className={cn(
            "font-mono text-sm font-bold tracking-wider whitespace-nowrap transition-colors duration-200 group-hover:text-inherit",
            isActive ? "text-white" : "text-white/70"
          )}
        >
          {item.label}
        </span>

        {/* Cyber Active Bottom Bar */}
        {isActive && (
          <span
            className="absolute right-0 bottom-0 left-0 h-[2px] transition-all duration-300"
            style={{
              backgroundColor: activeColor,
              boxShadow: `0 0 8px ${activeColor}`,
            }}
          />
        )}
      </Link>
    )
  }

  if (variant === "mobile-expanded") {
    return (
      <Link
        to={item.link}
        onClick={onClick}
        className={cn(
          "flex items-center gap-3 border bg-black p-4 transition-all duration-300",
          isActive
            ? "shadow-[0_0_10px_rgba(255,255,255,0.05)]"
            : "border-white/10 hover:border-current",
          item.color
        )}
        style={{
          borderColor: isActive ? activeColor : undefined,
        }}
      >
        <div
          className={cn(
            "h-2 w-2 transition-transform duration-300",
            item.bg,
            isActive && "scale-110 animate-pulse"
          )}
          style={{
            boxShadow: isActive ? `0 0 8px ${activeColor}` : undefined,
          }}
        />
        <span
          className={cn(
            "font-mono text-xs font-bold tracking-wider transition-colors duration-200",
            isActive ? "text-white" : "text-white/70"
          )}
        >
          {item.label}
        </span>
      </Link>
    )
  }

  // variant === "mobile-primary"
  return (
    <Link
      to={item.link}
      className={cn(
        "flex h-full flex-1 flex-col items-center justify-center gap-1 border bg-black py-2 transition-all duration-300 active:scale-95",
        isActive
          ? "shadow-[0_-5px_15px_rgba(255,255,255,0.02)]"
          : "border-white/5",
        item.color
      )}
      style={{
        borderColor: isActive ? activeColor : undefined,
      }}
    >
      <div
        className={cn(
          "h-2 w-2 transition-transform duration-300",
          item.bg,
          isActive && "scale-110 animate-pulse"
        )}
        style={{
          boxShadow: isActive ? `0 0 8px ${activeColor}` : undefined,
        }}
      />
      <span
        className={cn(
          "font-mono text-xs font-bold tracking-tighter transition-colors duration-200",
          isActive ? "text-white" : "text-white/60"
        )}
      >
        {item.label}
      </span>
    </Link>
  )
}
