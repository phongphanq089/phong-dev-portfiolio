import { ScrollArea } from "@/components/ui/scroll-area"

const LeftSidebar = () => {
  return (
    <aside className="hidden w-[300px] flex-col border-r border-white/5 lg:flex dark:bg-black/20">
      <ScrollArea className="h-full w-full">
        <div className="relative min-h-full space-y-8 p-6"></div>
      </ScrollArea>
    </aside>
  )
}

export default LeftSidebar
