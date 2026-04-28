import BannerHero from "@/features/home/banner-hero"
import SectionAbout from "@/features/home/section-about"

export function HomeView() {
  return (
    <div className="w-full">
      <BannerHero />
      <SectionAbout />
    </div>
  )
}
