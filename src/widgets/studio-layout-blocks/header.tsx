const Header = () => {
  return (
    <header className="z-50 w-full bg-transparent">
      <div className="flex h-full w-full">
        <div className="hidden w-[300px] border-white/5 lg:block" />

        <div className="relative flex flex-1 items-center justify-end border-b border-white/5 px-4 py-8 max-lg:py-4 md:border-x lg:justify-center">
          <span>PHONG PHAN</span>
        </div>

        <div className="hidden w-[240px] border-white/5 lg:block" />
      </div>
    </header>
  )
}

export default Header
