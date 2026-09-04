export type HttpMethod =
  "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "GROQ" | "QUERY" | "MOCK"

export type HttpStatus =
  | number
  | "200"
  | "201"
  | "400"
  | "404"
  | "500"
  | "pending"
  | "error"
  | "success"

export interface ApiEntry {
  /** Unique ID for the tab / record */
  id: string
  /** Human readable title (e.g. "Sanity Settings", "User Profile") */
  title: string
  /** Endpoint URL, query string, or function signature */
  endpoint: string
  /** HTTP / Query method */
  method?: HttpMethod
  /** Response status code or state */
  status?: HttpStatus
  /** When the request was initiated or logged */
  timestamp?: string
  /** Duration in milliseconds */
  durationMs?: number
  /** Payload size in bytes (automatically calculated if omitted) */
  sizeBytes?: number
  /** Response payload data */
  data: unknown
  /** Optional request/response headers */
  headers?: Record<string, string>
  /** Optional contextual notes or description */
  description?: string
}

export interface ApiInspectorContextType {
  entries: ApiEntry[]
  activeEntryId: string | null
  activeEntry: ApiEntry | null
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  openWithEntry: (entry: ApiEntry) => void
  inspect: (entry: Omit<ApiEntry, "id"> & { id?: string }) => void
  removeEntry: (id: string) => void
  clearEntries: () => void
  setActiveEntryId: (id: string) => void
}
