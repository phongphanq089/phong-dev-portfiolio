import { MenuPublic } from "./menu-public"
import MenuPublicMobile from "./menu-public-mobile"
import { navigation } from "./setting-menu"

const Header = () => {
  // const location = useLocation()
  // const showRightSidebar =
  //   location.pathname === "/" || location.pathname.startsWith("/blog")

  return (
    <header className="z-50 w-full bg-transparent">
      <div className="flex h-full w-full">
        {/* <div className="hidden w-300 border-white/5 lg:block" /> */}

        <div className="relative flex flex-1 items-center justify-end border-b border-border px-4 max-lg:py-4 md:border-x lg:justify-center">
          <MenuPublic />
          <div className="pointer-events-auto md:hidden">
            <MenuPublicMobile navigation={navigation} />
          </div>
        </div>

        {/* {showRightSidebar ? (
          <div className="hidden w-240 border-white/5 lg:block" />
        ) : null} */}
      </div>
    </header>
  )
}

export default Header
