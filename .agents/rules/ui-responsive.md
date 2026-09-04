# UI, Responsive & Component Behavior Rules

When building or updating user interfaces, follow these layout and styling standards:

## 0. Mandatory Reuse of Core UI Primitives (Strict Anti-Reinvention)

- **Always Reuse Core UI:** Always import and reuse existing primitives from `@/shared/ui` (located in `src/shared/ui/core/`, e.g., `Button`, `Input`, `Badge`, `Card`, `Checkbox`, `Dialog`, `Drawer`, `DropdownMenu`, `Textarea`, `Tooltip`, `Separator`, etc.).
- **Strictly Forbidden:** NEVER write raw HTML elements with ad-hoc styling (e.g., `<button className="px-4 py-2 bg-blue-500 rounded...">` or `<input className="...">`) when a core component already exists.
- **Variants & Customization:** Use the established component props and variants (`variant`, `size`, etc. powered by `cva`). If custom styling is needed, pass `className` to the core component for merging via `cn()`; do not reimplement the component from scratch.

## 1. Styling & Tailwind v4 Conventions

- **Utility-First:** Use Tailwind CSS v4 utility classes.
- **Dynamic Classes:** Always use `cn(...)` from `@/shared/lib/utils` (or the project's standard `cn` helper) for conditional class joining. Avoid string interpolation like `${active ? '...' : '...'}`.
- **Typography Consistency:** Keep heading sizes (H1–H6) consistent across all pages. Do not introduce arbitrary, one-off font sizes without clear purpose.

## 2. Responsive Layout & Mobile Densification

- **Mobile-First Safety:** Ensure layout safety from 320px screens up to 4K displays. Prevent horizontal overflowing and content spilling.
- **Mobile 2-Column Grid Exception:**
  - For simple, low-information cards (e.g., simple project cards, blog listing cards, resource thumbnails, tags), **always render them in 2 columns on mobile (`grid-cols-2`)**.
  - Reserve single-column (`grid-cols-1`) exclusively for complex, multi-action cards with extensive interactive controls.
- **Aggressive Mobile Densification:**
  - When rendering 2-column cards on mobile viewports, optimize screen real estate like a native mobile app:
    - Hide secondary/unimportant text (e.g., long descriptions, excessive tag badges).
    - Reduce font sizes (`text-xs` or `text-[10px]`) and padding (`p-2` or `p-2.5`) to readable minimum limits to prevent awkward text wrapping.

## 3. Controls & Action Elements

- **No Line Wrap on Controls:**
  - Action buttons, tabs, menu items, pills, and primary links must strictly include `whitespace-nowrap` to prevent awkward button wrapping on smaller screens.

## 4. Overlay & Modal Body Scroll Lock

- **Background Scroll Locking:**
  - When any modal, popup, dialog, drawer, or sidebar is active/opened, the main page body scroll **MUST be disabled** (`document.body.style.overflow = "hidden"`).
  - The scroll lock must be safely restored to its original value when the overlay closes or unmounts to prevent scroll lock leaks.
  - If using Radix UI / Vaul primitives, ensure their built-in scroll lock mechanisms are properly configured and not bypassed.
