import Intersection2 from "@/components/pixel-perfect/intersection2"

const BannerHero = () => {
	return (
		<div className="w-full h-[500px] overflow-hidden">
			<Intersection2>
				<div className="w-[500px] h-[300px]"></div>
			</Intersection2>
		</div>
	)
}

export default BannerHero
