import { AnimatePresence, motion } from "framer-motion"
import { LayoutGrid, X } from "lucide-react"
import { useState } from "react"

import { cn } from "@/shared/lib/utils"

import { MenuItem, type NavItemType } from "./menu-item"
import { navItems } from "./setting-menu"

export const MenuBottomMobile = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  // The permanent first 3 tabs (Home, PROJECTS, BLOG)
  const primaryTabs = navItems.slice(0, 3)
  // The expanded sheet items (RESOURCES, STUDIO)
  const expandedTabs = navItems.slice(3)

  return (
    <div className="fixed bottom-1 left-1/2 z-200 w-full max-w-[98%] -translate-x-1/2 lg:hidden">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-2 overflow-hidden border border-white/20 bg-black/90 p-2 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-2">
              {expandedTabs.map((item) => (
                <MenuItem
                  key={item.label}
                  item={item as NavItemType}
                  variant="mobile-expanded"
                  onClick={() => setIsExpanded(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Dock Bar */}
      <div className="flex items-center justify-between border border-white/20 bg-black/80 p-1.5 shadow-2xl backdrop-blur-md">
        <div className="flex flex-1 items-center gap-1">
          {primaryTabs.map((item) => (
            <MenuItem
              key={item.label}
              item={item as NavItemType}
              variant="mobile-primary"
            />
          ))}

          {/* MORE Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "flex h-full flex-1 flex-col items-center justify-center gap-1 border bg-primary py-2 text-white transition-all active:scale-95",
              isExpanded ? "border-primary" : "border-white/5"
            )}
          >
            {isExpanded ? (
              <X className="h-4 w-4 animate-pulse text-white" />
            ) : (
              <LayoutGrid className="h-4 w-4 text-white" />
            )}
            <span className="text-[9px] font-bold tracking-tighter text-white/80">
              MORE
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuBottomMobile
