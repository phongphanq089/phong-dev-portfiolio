const RightSidebar = () => {
  return (
    <aside className="hidden w-[240px] border-l border-white/5 p-8 lg:flex dark:bg-black/20 backdrop-blur-sm">
      <div className="w-full space-y-6">
        <h3 className="border-b border-white/10 pb-2 text-sm font-bold tracking-widest text-white uppercase">
          Index
        </h3>
        <nav className="flex flex-col space-y-4 text-sm font-medium text-slate-500">
          <a href="#work" className="transition-colors hover:text-green-500">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-green-500">
            About me
          </a>
          <a href="#tech" className="transition-colors hover:text-green-500">
            Tech stack
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-green-500"
          >
            Featured Projects
          </a>
          <a href="#blog" className="transition-colors hover:text-green-500">
            Blog
          </a>
        </nav>
      </div>
    </aside>
  )
}

export default RightSidebar
