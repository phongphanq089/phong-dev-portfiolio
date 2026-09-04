# Portfolio App - Project Blueprint & Architecture

Welcome to **Portfolio App**, a modern, high-craft personal developer portfolio and interactive UI component/blocks showcase.

---

## 1. Tech Stack Overview

- **Core Framework:** React 19, TypeScript (5.7+ / 6), Vite 8
- **Routing:** TanStack Router (`@tanstack/react-router`, `@tanstack/react-start`) with file-based routing
- **State & Data Fetching:**
  - Zustand (client global state)
  - TanStack Query v5 (`@tanstack/react-query`) (server/cache state)
- **Styling & Design System:**
  - Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss`)
  - Animations: Framer Motion (`framer-motion`, `motion`), GSAP (`gsap`, `@gsap/react`), Three.js (`three`), Paper Shaders
  - Utilities: `clsx`, `tailwind-merge`, `cva`, `tw-animate-css`
- **Headless CMS & Content:**
  - Sanity Studio v5 (`sanity`, `@sanity/client`, `@sanity/image-url`, `next-sanity`)
- **UI Primitives:** Radix UI primitives, `@base-ui/react`, `lucide-react` icons, Vaul (drawers), Cmdk
- **Forms & Validation:** Zod schemas (`zod`)

---

## 2. Directory Architecture (FSD / Layered)

The codebase is organized under `src/` following a clean, modular structure:

```text
src/
├── app/                  # Application root providers, config & initialization
├── routes/               # File-based TanStack Router definitions
│   ├── __root.tsx        # Root layout, router context & devtools
│   ├── _profile.*        # Main portfolio views (home, blog, blocks, component-ui, resources)
│   ├── studio.$.tsx      # Embedded Sanity Studio route (/studio/*)
│   └── design-system.tsx # Design system showcase route
├── widgets/              # Composite UI blocks & layout components
│   ├── profile-header/   # Site navigation header
│   ├── profile-sidebar/  # Interactive navigation sidebar
│   ├── profile-footer/   # Footer widget
│   ├── command-menu/     # Command palette (Cmd+K)
│   └── studio-layout-*/  # Studio specific layout blocks
├── features/             # Business/domain features
│   ├── home/             # Hero, introduction, showcase sections
│   ├── blog/             # Articles & blog post rendering
│   ├── blocks/           # Reusable UI blocks library & preview
│   ├── component-ui/     # Granular component catalog & code preview
│   └── resources/        # Developer curated resources & tools
├── shared/               # Reusable primitives & utilities
│   ├── ui/               # Low-level primitive components (buttons, dialogs, cards...)
│   ├── lib/              # Helpers & utilities (e.g. cn for Tailwind merge)
│   ├── hooks/            # Shared custom React hooks
│   ├── providers/        # Global context & theme providers
│   ├── config/           # Shared configurations
│   └── constants/        # Global constants
├── styles/               # Global CSS & Tailwind directives
└── sanity/               # Sanity CMS studio schemas and client configurations
```

---

## 3. Essential Commands

- `pnpm dev` : Start local Vite development server (Port 5731)
- `pnpm build` : Build for production (`vite build && tsc --noEmit`)
- `pnpm preview` : Preview production build
- `pnpm type-check` : Check TypeScript types without emitting files
- `pnpm lint` : Run ESLint checks
- `pnpm format` : Format code using Prettier and ESLint fix
- `pnpm test` : Run Vitest test suite

---

## 4. Development Guidelines & Rules

### Core UI Component Reuse Policy (MANDATORY)

- **Always Reuse Existing UI:** Check and import primitives from `@/shared/ui` (`src/shared/ui/core/`, including `Button`, `Input`, `Badge`, `Card`, `Checkbox`, `Dialog`, `Drawer`, `DropdownMenu`, `Textarea`, `Tooltip`, `Separator`, etc.).
- **Strict Prohibition:** NEVER write raw HTML controls (e.g. `<button className="...">`, `<input className="...">`) or reinvent separate styles when a core component already exists. Leverage existing `variant` and `size` props.

For specific implementation requirements, refer to the modular rules in `.agents/rules/`:

- [TypeScript Strict Quality](.agents/rules/typescript.md): Zero red lines, upfront typing, no `any`.
- [UI & Responsive Rules](.agents/rules/ui-responsive.md): Mandatory core UI reuse, mobile 2-column grid exception, body scroll lock, button wrap prevention.
- [Code Performance & Data](.agents/rules/code-performance.md): Re-render audits, TanStack Query selectors, Zod validation.
- [Frontend Design Craft](.agents/skills/frontend-design/SKILL.md): Distinctive, production-grade UI design principles avoiding generic AI UI.
