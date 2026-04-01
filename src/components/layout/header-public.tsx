import { Link, useLocation } from "@tanstack/react-router"
import { animate } from "framer-motion"
import { AppWindow, Home, Info, LayoutDashboard, Palette } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export interface SpotlightNavbarProps {
	className?: string
}

const navigation = [
	{ name: "Trang chủ", to: "/", icon: Home },
	{ name: "Giới thiệu", to: "/about", icon: Info },
	{ name: "Thư viện UI", to: "/library", icon: Palette },
	{ name: "Bảng điều khiển", to: "/dashboard", icon: LayoutDashboard },
	{ name: "Studio", to: "/studio", icon: AppWindow },
]

export function SpotlightNavbar({ className }: SpotlightNavbarProps) {
	const navRef = useRef<HTMLDivElement>(null)
	const { pathname } = useLocation()

	// Find the index of the active route based on the pathname
	const activeIndex = navigation.findIndex((item) => {
		if (item.to === "/") return pathname === "/"
		return pathname.startsWith(item.to)
	})

	const [hoverX, setHoverX] = useState<number | null>(null)

	// Refs for the "light" positions so we can animate them imperatively
	const spotlightX = useRef(0)
	const ambienceX = useRef(0)

	// Handle Mouse Movement for Spotlight
	useEffect(() => {
		if (!navRef.current) return
		const nav = navRef.current

		const handleMouseMove = (e: MouseEvent) => {
			const rect = nav.getBoundingClientRect()
			const x = e.clientX - rect.left
			setHoverX(x)
			spotlightX.current = x
			nav.style.setProperty("--spotlight-x", `${x}px`)
		}

		const handleMouseLeave = () => {
			setHoverX(null)
			// Return spotlight to active item when mouse leaves
			const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`)
			if (activeItem) {
				const navRect = nav.getBoundingClientRect()
				const itemRect = activeItem.getBoundingClientRect()
				const targetX = itemRect.left - navRect.left + itemRect.width / 2

				animate(spotlightX.current, targetX, {
					type: "spring",
					stiffness: 200,
					damping: 20,
					onUpdate: (v) => {
						spotlightX.current = v
						nav.style.setProperty("--spotlight-x", `${v}px`)
					},
				})
			}
		}

		nav.addEventListener("mousemove", handleMouseMove)
		nav.addEventListener("mouseleave", handleMouseLeave)

		return () => {
			nav.removeEventListener("mousemove", handleMouseMove)
			nav.removeEventListener("mouseleave", handleMouseLeave)
		}
	}, [activeIndex])

	// Handle the "Ambience" (Active Item) Movement when route changes
	useEffect(() => {
		if (!navRef.current) return
		const nav = navRef.current
		const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`)

		if (activeItem) {
			const navRect = nav.getBoundingClientRect()
			const itemRect = activeItem.getBoundingClientRect()
			const targetX = itemRect.left - navRect.left + itemRect.width / 2

			animate(ambienceX.current, targetX, {
				type: "spring",
				stiffness: 200,
				damping: 20,
				onUpdate: (v) => {
					ambienceX.current = v
					nav.style.setProperty("--ambience-x", `${v}px`)
				},
			})
		}
	}, [activeIndex])

	return (
		<div
			className={cn(
				"flex justify-center py-6 md:py-10 sticky top-0 z-50 pointer-events-none",
				className,
			)}
		>
			<nav
				ref={navRef}
				className={cn(
					"spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow",
					"relative h-12 flex items-center rounded-full transition-all duration-300 overflow-hidden pointer-events-auto",
				)}
			>
				{/* Links */}
				<ul className="relative flex items-center h-full px-2 gap-1 z-10">
					{navigation.map((item, idx) => {
						const Icon = item.icon
						const isActive = activeIndex === idx

						return (
							<li
								key={item.to}
								className="relative h-full flex items-center justify-center"
							>
								<Link
									to={item.to}
									data-index={idx}
									className={cn(
										"flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
										"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-white/30",
										isActive
											? "text-black dark:text-white"
											: "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white",
									)}
								>
									<Icon className="w-4 h-4" />
									<span className="hidden sm:inline">{item.name}</span>
								</Link>
							</li>
						)
					})}
				</ul>

				{/* 1. The Moving Spotlight (Follows Mouse) */}
				<div
					className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-1 opacity-0 transition-opacity duration-300"
					style={{
						opacity: hoverX !== null ? 1 : 0,
						background: `
            radial-gradient(
              120px circle at var(--spotlight-x) 100%,
              var(--spotlight-color, rgba(0,0,0,0.1)) 0%,
              transparent 50%
            )
          `,
					}}
				/>

				{/* 2. The Active State Ambience (Stays on Active) */}
				<div
					className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-2"
					style={{
						background: `
                radial-gradient(
                  60px circle at var(--ambience-x) 0%,
                  var(--ambience-color, rgba(0,0,0,1)) 0%,
                  transparent 100%
                )
              `,
					}}
				/>

				{/* 3. Bottom Border Track (Subtle) */}
				<div className="absolute bottom-0 left-0 w-full bg-neutral-200 dark:bg-white/10 h-full z-0" />
			</nav>
		</div>
	)
}
