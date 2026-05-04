import {
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react"

import { ScrollArea } from "@/components/ui/scroll-area"
import ProfileCard from "@/features/home/components/profile-card"

const LeftSidebar = () => {
  return (
    <aside className="hidden w-[300px] flex-col border-r border-white/5 lg:flex dark:bg-black/20">
      <ScrollArea className="h-full w-full">
        <div className="relative min-h-full space-y-8 p-6">
          {/* --- Avatar Section --- */}
          {/* <div className="group relative aspect- w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img
              src="/assets/images/banner.jpg"
              alt="Phong Phan"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div> */}
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

          {/* --- Identity Section --- */}
          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-tighter text-green-500 uppercase">
              PHONG PHAN
            </h2>
            <p className="text-sm font-medium text-white/90">
              Frontend Developer
            </p>
          </div>

          {/* --- Bio Section --- */}
          <p className="text-xs leading-relaxed text-slate-400">
            I build modern, responsive and accessible web experiences with clean
            code and intuitive UI.
          </p>

          {/* --- Contact Info Section --- */}
          <div className="space-y-4 text-[11px]">
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>Ho Chi Minh City, VN</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="h-4 w-4 text-green-500" />
              <span>phongphan.dev@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="h-4 w-4 text-green-500" />
              <span>+84 123 456 789</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <span>Available for work</span>
            </div>
          </div>

          {/* --- Social Icons --- */}
          <div className="flex items-center gap-5 pt-2">
            <Github className="h-4 w-4 cursor-pointer text-slate-400 transition-colors hover:text-green-500" />
            <Linkedin className="h-4 w-4 cursor-pointer text-slate-400 transition-colors hover:text-green-500" />
            <Twitter className="h-4 w-4 cursor-pointer text-slate-400 transition-colors hover:text-green-500" />
            <Globe className="h-4 w-4 cursor-pointer text-slate-400 transition-colors hover:text-green-500" />
          </div>

          {/* --- Download CV Button --- */}
          <div className="flex w-full overflow-hidden rounded-md border border-green-500/30 bg-green-500/5 text-[10px] font-bold text-green-500 transition-all hover:bg-green-500/10">
            <button className="flex-1 border-r border-green-500/30 py-3 text-center transition-colors">
              {">"} DOWNLOAD CV
            </button>
            <div className="flex items-center justify-center px-3">
              <Download className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* --- Contact Me Section --- */}
          <div className="space-y-6 pt-10">
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-[0.2em] text-green-500 uppercase">
                Let's build something
              </p>
              <p className="text-[10px] font-bold tracking-[0.2em] text-green-500 uppercase">
                amazing together
              </p>
            </div>

            <button className="group flex w-full items-center justify-center gap-2 border border-white/10 bg-white/5 py-4 text-[11px] font-bold text-white transition-all hover:bg-white/10 active:scale-95">
              <Send className="h-3.5 w-3.5 text-green-500" />
              <span>{">"} CONTACT ME</span>
            </button>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}

export default LeftSidebar
