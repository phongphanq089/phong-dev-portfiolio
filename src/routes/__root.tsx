import type { QueryClient } from "@tanstack/react-query"
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router"

import { DefaultCatchBoundary } from "@/components/errors/default-catch-boundary"
import { NotFound } from "@/components/errors/not-found"
import { MusicPlayer } from "@/components/ui/music-player"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { seo } from "@/lib/utils"

import appCss from "../styles.css?url"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title:
          "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
        description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

const themeScript = `(function(){try{var t=localStorage.getItem('vite-ui-theme')||'dark',r=document.documentElement;if(t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches))r.classList.add('dark');else r.classList.remove('dark')}catch(e){}})()`

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dangerouslySetInnerHTML={{ __html: themeScript as any }}
        />
        <HeadContent />
      </head>
      <body
        className="relative font-sans wrap-anywhere antialiased"
        suppressHydrationWarning
      >
        {children}
        {/* Global Floating Actions */}
        <div className="fixed right-6 bottom-6 z-100 flex flex-col items-end gap-3">
          <ScrollToTop />
          <MusicPlayer />
        </div>
        {/* <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-left" /> */}
        <Scripts />
      </body>
    </html>
  )
}
