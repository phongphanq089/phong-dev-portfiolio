import { Link } from "@tanstack/react-router"
import {
	AppWindow,
	Home,
	Info,
	LayoutDashboard,
	Menu,
	Palette,
} from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
	const navigation = [
		{ name: "Trang chủ", to: "/", icon: Home },
		{ name: "Giới thiệu", to: "/about", icon: Info },
		{ name: "Thư viện UI", to: "/library", icon: Palette },
		{ name: "Bảng điều khiển", to: "/dashboard", icon: LayoutDashboard },
		{ name: "Studio", to: "/studio", icon: AppWindow },
	]
	return (
		<header className="sticky top-0 z-50 border-b px-4 backdrop-blur-lg bg-white/70 dark:bg-black/70">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-2 font-bold text-xl">
					<div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">
						G
					</div>
					<span>GeminiApp</span>
				</div>

				{/* Desktop Menu */}
				<nav className="hidden md:flex items-center gap-6">
					{navigation.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeProps={{
								className: "text-primary font-semibold",
							}}
							inactiveProps={{
								className: "text-muted-foreground hover:text-foreground",
							}}
							className="transition-colors text-sm"
						>
							{item.name}
						</Link>
					))}
					<ModeToggle />
				</nav>

				{/* Mobile Menu Icon (Placeholder) */}
				<div className="md:hidden">
					<Menu className="h-6 w-6" />
				</div>
			</div>
		</header>
	)
}
