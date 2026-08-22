import { Link, useRouterState } from "@tanstack/react-router"

import { cn } from "@/shared/lib/utils"

export const activeColors: Record<string, string> = {
  HOME: "#66ff00",
  PROJECTS: "#ff00ff",
  BLOG: "#ff6600",
  RESOURCES: "#ffcc00",
  STUDIO: "var(--foreground)",
  "DESIGN SYSTEM": "#00f0ff",
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

  const activeColor = activeColors[item.label] || "var(--foreground)"

  if (variant === "desktop") {
    return (
      <Link
        to={item.link}
        className={cn(
          "group relative flex items-center gap-2.5 border bg-background/60 px-2.5 py-1.5 backdrop-blur-xs transition-colors duration-150 hover:bg-accent",
          isActive
            ? "border-current shadow-xs"
            : "border-border/80 hover:border-foreground/40",
          item.color
        )}
        style={{
          borderColor: isActive ? activeColor : undefined,
        }}
      >
        {/* Color Square */}
        <div
          className={cn(
            "h-2 w-2 shrink-0 transition-transform duration-150",
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
            "font-mono text-xs font-medium tracking-wider whitespace-nowrap transition-colors duration-150",
            isActive
              ? "font-semibold text-foreground"
              : "text-muted-foreground group-hover:text-foreground"
          )}
          style={{
            color: isActive ? activeColor : undefined,
          }}
        >
          {item.label}
        </span>

        {/* Cyber Active Bottom Bar */}
        {isActive && (
          <span
            className="absolute right-0 bottom-0 left-0 h-[2px] transition-all duration-150"
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
          "flex items-center gap-3 border bg-background/80 p-3 transition-colors duration-150 hover:bg-accent",
          isActive
            ? "border-current shadow-xs"
            : "border-border hover:border-foreground/40",
          item.color
        )}
        style={{
          borderColor: isActive ? activeColor : undefined,
        }}
      >
        <div
          className={cn(
            "h-2 w-2 transition-transform duration-150",
            item.bg,
            isActive && "scale-110 animate-pulse"
          )}
          style={{
            boxShadow: isActive ? `0 0 8px ${activeColor}` : undefined,
          }}
        />
        <span
          className={cn(
            "font-mono text-xs font-medium tracking-wider transition-colors duration-150",
            isActive ? "font-semibold text-foreground" : "text-muted-foreground"
          )}
          style={{
            color: isActive ? activeColor : undefined,
          }}
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
        "flex h-full flex-1 flex-col items-center justify-center gap-1 border bg-background/80 py-2 transition-all duration-150 active:scale-95",
        isActive
          ? "border-current shadow-xs"
          : "border-border/60 hover:border-border",
        item.color
      )}
      style={{
        borderColor: isActive ? activeColor : undefined,
      }}
    >
      <div
        className={cn(
          "h-1.5 w-1.5 transition-transform duration-150",
          item.bg,
          isActive && "scale-110 animate-pulse"
        )}
        style={{
          boxShadow: isActive ? `0 0 8px ${activeColor}` : undefined,
        }}
      />
      <span
        className={cn(
          "font-mono text-[10px] font-semibold tracking-tight transition-colors duration-150",
          isActive ? "font-bold text-foreground" : "text-muted-foreground"
        )}
        style={{
          color: isActive ? activeColor : undefined,
        }}
      >
        {item.label}
      </span>
    </Link>
  )
}
