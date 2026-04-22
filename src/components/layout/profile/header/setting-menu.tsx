import { AppWindow,Home, Info, LayoutDashboard, Palette } from "lucide-react";

export const navigation = [
	{ name: "HOME", to: "/", icon: Home },
	{ name: "BLOG", to: "/blog", icon: Info },
	{ name: "PROJECTS", to: "/projects", icon: Palette },
	{ name: "RESOURCES", to: "/resources", icon: LayoutDashboard },
	{ name: "STUDIO", to: "/studio", icon: AppWindow },
]
