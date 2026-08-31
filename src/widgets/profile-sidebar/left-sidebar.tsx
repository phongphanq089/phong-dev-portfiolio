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

import { siteConfig } from "@/shared/config"
import { ScrollArea } from "@/shared/ui/core/scroll-area"

const LeftSidebar = () => {
  return (
    <aside className="hidden w-[300px] flex-col border-r border-white/5 lg:flex dark:bg-black/20">
      <ScrollArea className="h-full w-full">
        <div className="relative min-h-full space-y-8 p-6">
          {/* --- Identity Section --- */}
          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-tighter text-green-500 uppercase">
              {siteConfig.author.name.toUpperCase()}
            </h2>
            <p className="text-sm font-medium text-white/90">
              {siteConfig.author.role}
            </p>
          </div>

          {/* --- Bio Section --- */}
          <p className="text-xs leading-relaxed text-slate-400">
            {siteConfig.author.bio}
          </p>

          {/* --- Contact Info Section --- */}
          <div className="space-y-4 text-[11px]">
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>{siteConfig.author.location}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="h-4 w-4 text-green-500" />
              <span>{siteConfig.author.email}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="h-4 w-4 text-green-500" />
              <span>{siteConfig.author.phone}</span>
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
            <a
              href={siteConfig.social.github.href}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4 cursor-pointer text-slate-400 transition-colors hover:text-green-500" />
            </a>
            <a
              href={siteConfig.social.linkedin.href}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4 cursor-pointer text-slate-400 transition-colors hover:text-green-500" />
            </a>
            <a
              href={siteConfig.social.twitter.href}
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="h-4 w-4 cursor-pointer text-slate-400 transition-colors hover:text-green-500" />
            </a>
            <a href={siteConfig.url} target="_blank" rel="noreferrer">
              <Globe className="h-4 w-4 cursor-pointer text-slate-400 transition-colors hover:text-green-500" />
            </a>
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

            <a href={siteConfig.social.email.href}>
              <button className="group flex w-full items-center justify-center gap-2 border border-white/10 bg-white/5 py-4 text-[11px] font-bold text-white transition-all hover:bg-white/10 active:scale-95">
                <Send className="h-3.5 w-3.5 text-green-500" />
                <span>{">"} CONTACT ME</span>
              </button>
            </a>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}

export default LeftSidebar
