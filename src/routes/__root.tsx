import type { QueryClient } from "@tanstack/react-query"
import {
  createRootRouteWithContext,
  type ErrorComponentProps,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router"
import type { JSX } from "react/jsx-runtime"

import { seo } from "@/shared/lib/utils"
import { ThemeProvider } from "@/shared/providers/theme-provider"
import { TooltipProvider } from "@/shared/ui"
import { DefaultCatchBoundary } from "@/shared/ui/system/default-catch-boundary"
import { NotFound } from "@/shared/ui/system/not-found"
import { CommandMenu } from "@/widgets/command-menu"

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
        title: "Phong Phan | Full-stack Architect & Creative Developer",
        description:
          "Portfolio of Phong Phan, a Full-stack Architect specializing in high-performance systems and immersive digital experiences. Expert in React, TypeScript, and modern UI/UX design.",
        keywords:
          "Phong Phan, Full-stack Architect, Creative Developer, React, TypeScript, UI/UX Design, Portfolio, Web Development, Software Engineer",
        image: "/OGimage.jpg",
      }),
    ],
    links: [
      { rel: "canonical", href: "https://phongphan.dev" },
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
    scripts: [
      {
        tag: "script",
        attrs: {
          type: "application/ld+json",
        },
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Phong Phan",
          jobTitle: "Full-stack Architect",
          url: "https://phongphan.dev",
          sameAs: [
            "https://github.com/phongphanq089",
            "https://linkedin.com/in/phongphan",
          ],
          description:
            "Full-stack Architect specializing in high-performance systems and immersive digital experiences.",
        }),
      },
    ],
  }),
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
          <TooltipProvider>
            {children}
            <CommandMenu />
          </TooltipProvider>
        </ThemeProvider>

        {/* Global Floating Actions */}

        {/* <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-left" /> */}
        <Scripts />
      </body>
    </html>
  )
}
