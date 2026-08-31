import { useCallback, useEffect, useState } from "react"

const OPEN_COMMAND_EVENT = "open-command-menu"
const CLOSE_COMMAND_EVENT = "close-command-menu"
const TOGGLE_COMMAND_EVENT = "toggle-command-menu"

export function openCommandMenu() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_COMMAND_EVENT))
  }
}

export function closeCommandMenu() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CLOSE_COMMAND_EVENT))
  }
}

export function toggleCommandMenu() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(TOGGLE_COMMAND_EVENT))
  }
}

export function useCommandMenu() {
  const [open, setOpen] = useState(false)

  // Listen for keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const handleToggle = () => setOpen((prev) => !prev)

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener(OPEN_COMMAND_EVENT, handleOpen)
    window.addEventListener(CLOSE_COMMAND_EVENT, handleClose)
    window.addEventListener(TOGGLE_COMMAND_EVENT, handleToggle)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener(OPEN_COMMAND_EVENT, handleOpen)
      window.removeEventListener(CLOSE_COMMAND_EVENT, handleClose)
      window.removeEventListener(TOGGLE_COMMAND_EVENT, handleToggle)
    }
  }, [])

  return {
    open,
    setOpen,
    openMenu: useCallback(() => setOpen(true), []),
    closeMenu: useCallback(() => setOpen(false), []),
    toggleMenu: useCallback(() => setOpen((prev) => !prev), []),
  }
}
