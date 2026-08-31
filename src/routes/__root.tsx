import type { QueryClient } from "@tanstack/react-query"
import {
  createRootRouteWithContext,
  type ErrorComponentProps,
  HeadContent,
  Outlet,
  Scripts,
  useLocation,
} from "@tanstack/react-router"
import { useEffect } from "react"
import type { JSX } from "react/jsx-runtime"

import {
  createPersonJsonLd,
  createSeoMeta,
  createSiteLinks,
} from "@/shared/config"
import { siteSettingsQueryOptions } from "@/shared/lib/sanity"
import { ThemeProvider } from "@/shared/providers/theme-provider"
import { TooltipProvider } from "@/shared/ui"
import { DefaultCatchBoundary } from "@/shared/ui/system/default-catch-boundary"
import { NotFound } from "@/shared/ui/system/not-found"
import { CommandMenu } from "@/widgets/command-menu"

import appCss from "../styles/app.css?url"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  loader: async ({ context }) => {
    try {
      const siteSettings = await context.queryClient.ensureQueryData(
        siteSettingsQueryOptions()
      )

      console.log(siteSettings, "siteSettingsQueryOptions()")
      return { siteSettings }
    } catch {
      return { siteSettings: null }
    }
  },
  head: ({ loaderData }) => {
    const siteSettings = loaderData?.siteSettings

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        ...createSeoMeta(undefined, siteSettings),
      ],
      links: [
        ...createSiteLinks(siteSettings),
        { rel: "stylesheet", href: appCss },
      ],
      scripts: [
        {
          tag: "script",
          attrs: {
            type: "application/ld+json",
          },
          children: JSON.stringify(createPersonJsonLd(siteSettings)),
        },
      ],
    }
  },
  errorComponent: (props: JSX.IntrinsicAttributes & ErrorComponentProps) => {
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

const themeScript = `(function(){try{var t=localStorage.getItem('vite-ui-theme')||'dark',r=document.documentElement,s=t==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;r.classList.remove('light','dark');r.classList.add(s);}catch(e){}})()`

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch((err) => {
          console.warn("[PWA] Service Worker registration failed:", err)
        })
      })
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript as string }} />
        <HeadContent />
      </head>
      <body
        className="relative wrap-anywhere antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RootLayoutBody>{children}</RootLayoutBody>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}

function RootLayoutBody({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isStudio = location.pathname.startsWith("/studio")

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <TooltipProvider>
      {children}
      <CommandMenu />
    </TooltipProvider>
  )
}
