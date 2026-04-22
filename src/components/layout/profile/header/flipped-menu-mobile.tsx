import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import {  useEffect, useRef, useState } from "react";

interface NavigationItem {
	name: string;
	to: string;
	icon?: any;
}

interface FlippedMenuMobileProps {
	navigation: NavigationItem[];
	className?: string;
}

const FlippedMenuMobile = ({ navigation, className }: FlippedMenuMobileProps) => {
	const [splitting, setSplitting] = useState<any>(null);
	const scope = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	const btnWord1 = useRef<HTMLSpanElement>(null);
	const btnWord2 = useRef<HTMLSpanElement>(null);
	const menu = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// @ts-expect-error no modules for typescript
		import("splitting").then((Splitting) => {
			setSplitting(() => Splitting.default);
		});
	}, []);

	// Implement Body Scroll Lock
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	useGSAP(
		async () => {
			if (!splitting || !scope.current) return;
			await splitting({ target: scope.current });

			const chars1 = btnWord1.current?.querySelectorAll(".char");
			const chars2 = btnWord2.current?.querySelectorAll(".char");

			gsap.set([btnWord2.current, menu.current], { opacity: 1 });

			if (!chars1?.length || !chars2?.length) return;

			timelineRef.current = gsap.timeline({
				paused: true,
				defaults: { duration: 0.4, ease: "power2.out", stagger: 0.05 },
			});

			timelineRef.current
				.to(chars1, { transformOrigin: "top", rotateX: 90 })
				.fromTo(
					chars2,
					{ rotateX: 90, transformOrigin: "bottom" },
					{ rotateX: 0 },
					0,
				)
				.fromTo(
					menu.current,
					{
						rotateX: 30,
						rotateY: -30,
						xPercent: 120, // Start from right
						yPercent: -20,
						opacity: 0,
						scale: 0.8,
					},
					{
						xPercent: 0,
						yPercent: 0,
						rotateX: 0,
						rotateY: 0,
						opacity: 1,
						scale: 1,
						ease: "expo.out",
						duration: 0.8,
						visibility: "visible",
					},
					0,
				);
		},
		{ scope, dependencies: [splitting] },
	);

	const handleToggle = () => {
		if (!timelineRef.current) return;

		if (isOpen) {
			timelineRef.current.reverse();
		} else {
			timelineRef.current.play();
		}

		setIsOpen(!isOpen);
	};

	return (
		<div ref={scope} className={className}>
			{/* Trigger Button */}
			<button
				type="button"
				aria-expanded={isOpen}
				aria-controls="menu"
				onClick={handleToggle}
				className="group relative -rotate-6 rounded-full border border-white/20 bg-black/80 backdrop-blur-md px-6 py-2.5 text-xs font-bold uppercase shadow-2xl shadow-indigo-500/20 transition-all duration-300 ease-out hover:rotate-0 hover:scale-105 active:scale-95 text-white z-60 [&_.char]:inline-grid"
			>
				<span
					ref={btnWord1}
					data-splitting
					className="absolute left-1/2 top-1/2 inline-grid -translate-x-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap px-1"
				>
					Menu
				</span>
				<span
					ref={btnWord2}
					data-splitting
					className="inline-grid overflow-hidden whitespace-nowrap px-1 opacity-0"
				>
					Close
				</span>
				<span className="absolute left-3 top-1/2 size-1 -translate-y-1/2 rounded-full bg-indigo-500 transition-all duration-300 ease-out group-hover:left-4" />
				<span className="absolute right-3 top-1/2 size-1 -translate-y-1/2 rounded-full bg-indigo-500 transition-all duration-300 ease-out group-hover:right-4" />
			</button>

			{/* Menu Drawer Overlay */}
			<div
				className="fixed inset-0 z-55 pointer-events-none perspective-1000 flex items-center justify-center p-4"
				style={{ visibility: isOpen ? "visible" : "hidden" }}
			>
				{/* Backdrop */}
				<div
					className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
					onClick={handleToggle}
				/>

				<div
					ref={menu}
					id="menu"
					className="relative w-full max-w-sm aspect-4/5 bg-neutral-950 border border-white/10 p-2 opacity-0 shadow-2xl shadow-black pointer-events-auto overflow-hidden rounded-2xl"
				>
					<div className="h-full w-full border border-white/20 rounded-xl overflow-hidden">
						<div className="flex h-full w-full flex-col justify-between p-6 pt-12">
							{/* Navigation Links */}
							<div className="flex flex-col space-y-1">
								{navigation.map((item) => (
									<Link
										key={item.to}
										to={item.to}
										onClick={() => handleToggle()}
										className="group flex items-center justify-between border-b border-white/5 py-2 px-2 text-lg font-bold text-white/70 transition-all duration-300 hover:text-white hover:bg-white/5 active:scale-95 rounded-lg"
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
								))}

								{/* Additional Bottom Close Action */}
								<button
									type="button"
									onClick={handleToggle}
									className="mt-4 flex items-center justify-center gap-2 py-4 px-2 text-[12px] font-bold text-red-500/80 uppercase tracking-widest hover:text-red-400 transition-colors w-full border-t border-white/5"
								>
									<span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
									Close Menu
								</button>
							</div>

							{/* Social/Bottom Info */}
							<footer className="flex items-center justify-between pt-6 border-t border-white/5">
								<p className="text-[10px] text-white/30 uppercase tracking-widest font-medium">
									© 2024 PHONG DEV
								</p>
								<div className="flex gap-3">
									<div className="size-1.5 rounded-full bg-indigo-500 animate-pulse" />
									<div className="size-1.5 rounded-full bg-white/20" />
									<div className="size-1.5 rounded-full bg-white/20" />
								</div>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlippedMenuMobile;
