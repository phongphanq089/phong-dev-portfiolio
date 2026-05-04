import { Link } from "@tanstack/react-router"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface NavigationItem {
  name: string
  to: string
  icon?: React.ComponentType<{ className?: string }>
}

interface MenuPublicMobileProps {
  navigation: NavigationItem[]
  className?: string
}

const MenuPublicMobile = ({ navigation, className }: MenuPublicMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  // Implement Body Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleToggle = () => setIsOpen(!isOpen)

  // Animation Variants
  const menuVariants: Variants = {
    closed: {
      x: "100%",
      rotateX: 30,
      rotateY: -30,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.32, 0, 0.67, 0],
      },
    },
    open: {
      x: 0,
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const backdropVariants: Variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  }

  return (
    <div className={cn(className)}>
      {/* Trigger Button */}
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={handleToggle}
        className="group relative z-70 -rotate-6 rounded-full border border-white/20 bg-black/80 px-6 py-2.5 text-xs font-bold text-white uppercase shadow-2xl shadow-indigo-500/20 backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:rotate-0 active:scale-95"
      >
        <div className="relative h-4 w-12 overflow-hidden">
          <motion.span
            animate={{ y: isOpen ? "-100%" : "0%", rotateX: isOpen ? 90 : 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            Menu
          </motion.span>
          <motion.span
            initial={{ y: "100%", rotateX: -90 }}
            animate={{ y: isOpen ? "0%" : "100%", rotateX: isOpen ? 0 : -90 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="absolute inset-0 flex items-center justify-center text-red-500"
          >
            Close
          </motion.span>
        </div>
        <span className="absolute top-1/2 left-3 size-1 -translate-y-1/2 rounded-full bg-indigo-500 transition-all duration-300 ease-out group-hover:left-4" />
        <span className="absolute top-1/2 right-3 size-1 -translate-y-1/2 rounded-full bg-indigo-500 transition-all duration-300 ease-out group-hover:right-4" />
      </button>

      {/* Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="perspective-1000 fixed inset-0 z-200 flex h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleToggle}
            />

            {/* Menu Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative z-10 aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-2 shadow-2xl shadow-black"
            >
              <div className="h-full w-full overflow-hidden rounded-xl border border-white/20 bg-neutral-950">
                <div className="flex h-full w-full flex-col justify-between p-6 pt-12">
                  {/* Navigation Links */}
                  <div className="flex flex-col space-y-1">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center justify-between rounded-lg border-b border-white/5 px-2 py-2 text-lg font-bold text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white active:scale-95"
                        >
                          <span>{item.name}</span>
                          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </span>
                        </Link>
                      </motion.div>
                    ))}

                    {/* Additional Bottom Close Action */}
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="mt-4 flex w-full items-center justify-center gap-2 border-t border-white/5 px-2 py-4 text-[12px] font-bold tracking-widest text-red-500/80 uppercase transition-colors hover:text-red-400"
                    >
                      <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
                      Close Menu
                    </button>
                  </div>

                  {/* Social/Bottom Info */}
                  <footer className="flex items-center justify-between border-t border-white/5 pt-6">
                    <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase">
                      © 2024 PHONG DEV
                    </p>
                    <div className="flex gap-3">
                      <div className="size-1.5 animate-pulse rounded-full bg-indigo-500" />
                      <div className="size-1.5 rounded-full bg-white/20" />
                      <div className="size-1.5 rounded-full bg-white/20" />
                    </div>
                  </footer>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MenuPublicMobile
