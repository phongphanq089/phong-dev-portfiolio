import { DottedGlowBackground } from "@/components/ui/animation/dotted-glow-background"
import TextBurnNeon from "@/components/ui/animation/text-burn-neon"
import { TextHoverEffect } from "@/components/ui/animation/text-hover-effect"

import ProfileCard from "./components/profile-card"

const BannerHero = () => {
  return (
    <section className="relative flex w-full flex-col justify-between overflow-hidden pb-12 max-md:pt-12">
      <div className="relative z-10 select-none">
        <TextHoverEffect text="PHONGPHAN" />
        <div className="mx-auto w-fit py-4">
          <TextBurnNeon className="w-fit text-2xl">
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
    </section>
  )
}

export default BannerHero
