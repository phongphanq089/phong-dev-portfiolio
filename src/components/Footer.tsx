import { TextHoverEffect } from "./animation/text-hover-effect"

export default function Footer() {
	return (
		<footer className="mt-20 border-t border-slate-200 bg-white/50 px-4 pt-12 dark:border-slate-800 dark:bg-black/20 backdrop-blur-sm overflow-hidden">
			<div className="h-fit flex items-center justify-center">
				<TextHoverEffect text="PHONG PHAN" />
			</div>
		</footer>
	)
}
