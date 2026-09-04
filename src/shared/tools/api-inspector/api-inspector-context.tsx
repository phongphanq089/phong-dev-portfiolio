import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

import type { ApiEntry, ApiInspectorContextType } from "./types"

const ApiInspectorContext = createContext<ApiInspectorContextType | null>(null)

interface ApiInspectorProviderProps {
  children: React.ReactNode
  initialEntries?: ApiEntry[]
  shortcutEnabled?: boolean
}

export function ApiInspectorProvider({
  children,
  initialEntries = [],
  shortcutEnabled = true,
}: ApiInspectorProviderProps) {
  const [entries, setEntries] = useState<ApiEntry[]>(initialEntries)
  const [isOpen, setIsOpen] = useState(false)
  const [activeEntryId, setActiveEntryId] = useState<string | null>(
    initialEntries[0]?.id || null
  )

  // Add or update an entry
  const inspect = useCallback(
    (entryInput: Omit<ApiEntry, "id"> & { id?: string }) => {
      const id =
        entryInput.id ||
        `api-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
      const timestamp = entryInput.timestamp || new Date().toLocaleTimeString()

      const newEntry: ApiEntry = {
        ...entryInput,
        id,
        timestamp,
        method: entryInput.method || "GET",
        status: entryInput.status || 200,
      }

      setEntries((prev) => {
        const existsIndex = prev.findIndex((e) => e.id === id)
        if (existsIndex >= 0) {
          const copy = [...prev]
          copy[existsIndex] = newEntry
          return copy
        }
        return [newEntry, ...prev]
      })

      setActiveEntryId(id)
    },
    []
  )

  // Open directly with a specific entry
  const openWithEntry = useCallback(
    (entryInput: ApiEntry) => {
      inspect(entryInput)
      setIsOpen(true)
    },
    [inspect]
  )

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => {
      const filtered = prev.filter((e) => e.id !== id)
      return filtered
    })
    setActiveEntryId((prevActive) => (prevActive === id ? null : prevActive))
  }, [])

  const clearEntries = useCallback(() => {
    setEntries([])
    setActiveEntryId(null)
  }, [])

  // Global hotkey: Ctrl + Shift + A (or Cmd + Shift + A)
  useEffect(() => {
    if (!shortcutEnabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        (e.key === "A" || e.key === "a")
      ) {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [shortcutEnabled])

  // Active entry resolution
  const activeEntry = useMemo(() => {
    if (!activeEntryId && entries.length > 0) {
      return entries[0]
    }
    return entries.find((e) => e.id === activeEntryId) || entries[0] || null
  }, [entries, activeEntryId])

  const value = useMemo<ApiInspectorContextType>(
    () => ({
      entries,
      activeEntryId: activeEntry?.id || null,
      activeEntry,
      isOpen,
      setIsOpen,
      openWithEntry,
      inspect,
      removeEntry,
      clearEntries,
      setActiveEntryId,
    }),
    [
      entries,
      activeEntry,
      isOpen,
      openWithEntry,
      inspect,
      removeEntry,
      clearEntries,
    ]
  )

  return (
    <ApiInspectorContext.Provider value={value}>
      {children}
    </ApiInspectorContext.Provider>
  )
}

export function useApiInspector(): ApiInspectorContextType {
  const context = useContext(ApiInspectorContext)
  if (!context) {
    throw new Error(
      "useApiInspector must be used within an <ApiInspectorProvider>"
    )
  }
  return context
}
