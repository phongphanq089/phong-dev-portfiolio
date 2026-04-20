import Intersection from "@/components/layout/intersection"
import { DottedGlowBackground } from "@/components/ui/animation/dotted-glow-background"
import TextBurnNeon from "@/components/ui/animation/text-burn-neon"
import { TextHoverEffect } from "@/components/ui/animation/text-hover-effect"
import ProfileCard from "./profile-card"

const BannerHero = () => {
	return (
		<section className="relative w-full overflow-hidden flex flex-col justify-between pb-12">
			<div className="relative z-10 select-none">
				<TextHoverEffect text="PHONGPHAN" />
				<div className="py-4 mx-auto w-fit">
					<TextBurnNeon className="text-2xl w-fit">
						FRONTEND DEVELOPER
					</TextBurnNeon>
				</div>
			</div>

			<div className="relative mx-auto flex w-full items-center justify-center">
				<DottedGlowBackground
					className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
					opacity={1}
					gap={10}
					radius={1.6}
					colorLightVar="--color-neutral-500"
					glowColorLightVar="--color-neutral-600"
					colorDarkVar="--color-neutral-500"
					glowColorDarkVar="--color-sky-800"
					backgroundOpacity={0}
					speedMin={0.3}
					speedMax={1.6}
					speedScale={1}
				/>
				<ProfileCard
					handle="ByPhong"
					status="Online"
					contactText="Contact Me"
					avatarUrl="/assets/images/banner.jpg"
					iconUrl={"/assets/images/iconpattern.png"}
					// grainUrl="/setting/grain.webp"
					showUserInfo={false}
					enableTilt={true}
					onContactClick={() => console.log("Contact clicked")}
				/>
			</div>

			{/* <div className="relative z-20 w-full flex flex-wrap justify-center items-center gap-8  pt-6 text-[10px] md:text-xs font-bold uppercase tracking-widest ">
				<div className="flex flex-col items-center gap-1.5">
					<div className="w-px h-6 bg-white/20 mb-1 animate-bounce" />
					<span className="text-zinc-400 normal-case text-sm">
						(Scroll Down)
					</span>
					<span>TO EXPLORE MORE</span>
				</div>
			</div> */}
		</section>
	)
}

export default BannerHero
