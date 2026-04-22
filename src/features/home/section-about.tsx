import BorderBox from "@/components/shared/border-box"
import { Scales } from "@/components/ui/scales"
import { SkeletonOne } from "./components/skeleton"

const SectionAbout = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative mx-auto flex w-full items-center justify-center overflow-hidden py-20 md:py-30">
        <div className="w-[] relative min-h-80 py-10">
          <div className="absolute -inset-x-[30%] -top-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
            <Scales size={8} className="rounded-lg" />
          </div>
          <div className="absolute -inset-x-[30%] -bottom-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
            <Scales size={8} className="rounded-lg" />
          </div>
          <div className="h-full w-full">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-4">
                <div className="relative z-0 flex flex-col justify-center gap-5 max-lg:p-4 max-lg:pb-[200px]">
                  <div className="max-h-[150px] max-w-[150px] overflow-hidden sm:max-h-[150px] sm:max-w-[150px]">
                    <img
                      src="/avatar.gif"
                      alt="phongphan"
                      className="h-auto w-full rounded-md object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    {/* <Globe className='text-primary-color ' /> */}
                    <h3 className="text-md dark:text-white">
                      {"service.skeleton-1"}
                    </h3>
                  </div>
                  <div className="max-w-[400px]">
                    <SkeletonOne
                      text1={"service.skeleton-1"}
                      text2={"service.skeleton-1"}
                    />
                    <SkeletonOne
                      text1={"service.skeleton-1"}
                      text2={"service.skeleton-1"}
                    />
                  </div>
                </div>
              </div>
              <div className="relative col-span-8 p-10 text-lg">
                <BorderBox>
                  <div>
                    <p>
                      About Hi, my name is Khoa, a web developer driven by a
                      passion for crafting intuitive, user-focused, and visually
                      engaging interfaces. Fascinated by innovation and modern
                      design, I strive to be a creative technologist, using my
                      playground to replicate and experiment things i found in
                      the digital world.
                    </p>
                    <div className="ml-auto max-w-[400px]">
                      <SkeletonOne
                        text1={"service.skeleton-1"}
                        text2={"service.skeleton-1"}
                      />
                      <SkeletonOne
                        text1={"service.skeleton-1"}
                        text2={"service.skeleton-1"}
                      />
                    </div>
                  </div>
                </BorderBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionAbout
