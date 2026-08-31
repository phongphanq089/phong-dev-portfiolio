/**
 * Bookmarks config — khai báo 1 chỗ, dùng toàn app.
 * Chỉnh sửa tại đây, tự động phản ánh ở mọi nơi import BOOKMARKS.
 */

export interface BookmarkItem {
  id: string
  title: string
  author: string
  type: "Software" | "Course" | "Reference" | "Book" | "Article"
  date: string
  url: string
  iconType:
    "copper" | "course" | "vercel" | "book" | "article" | "shader" | "code"
}

export const BOOKMARKS: BookmarkItem[] = [
  {
    id: "bm-1",
    title: "Copper",
    author: "shadcn",
    type: "Software",
    date: "30.07.2026",
    url: "https://copper.shadcn.com",
    iconType: "copper",
  },
  {
    id: "bm-2",
    title: "Invisible Details",
    author: "Dmytro",
    type: "Course",
    date: "25.07.2026",
    url: "https://invisibledetails.com",
    iconType: "course",
  },
  {
    id: "bm-3",
    title: "Interactive SVG Animations",
    author: "Nanda Syahrasyad",
    type: "Course",
    date: "03.07.2026",
    url: "https://nan.fyi",
    iconType: "course",
  },
  {
    id: "bm-4",
    title: "Interface Craft",
    author: "Josh Puckett",
    type: "Course",
    date: "20.06.2026",
    url: "https://interfacecraft.com",
    iconType: "course",
  },
  {
    id: "bm-5",
    title: "Interfaces",
    author: "Jakub Krehel",
    type: "Course",
    date: "20.06.2026",
    url: "https://interfaces.design",
    iconType: "course",
  },
  {
    id: "bm-6",
    title: "Design Engineer Principles",
    author: "Vercel",
    type: "Reference",
    date: "20.06.2026",
    url: "https://vercel.com/design",
    iconType: "vercel",
  },
  {
    id: "bm-7",
    title: "Making Software",
    author: "Dan Hollick",
    type: "Book",
    date: "08.06.2026",
    url: "https://makingsoftware.com",
    iconType: "book",
  },
  {
    id: "bm-8",
    title: "A Clock That Doesn't Snap",
    author: "Ethan Niser",
    type: "Article",
    date: "07.06.2026",
    url: "https://ethanniser.dev",
    iconType: "article",
  },
  {
    id: "bm-9",
    title: "Details that make interface feel better",
    author: "Emil Kowalski",
    type: "Article",
    date: "01.06.2026",
    url: "https://emilkowal.ski",
    iconType: "article",
  },
  {
    id: "bm-10",
    title: "Crafting Fluid Gestures & Micro-interactions",
    author: "Rauno Freiberg",
    type: "Reference",
    date: "24.05.2026",
    url: "https://rauno.me",
    iconType: "code",
  },
  {
    id: "bm-11",
    title: "Shader Artistry & WebGL Techniques",
    author: "Inigo Quilez",
    type: "Reference",
    date: "10.05.2026",
    url: "https://iquilezles.org",
    iconType: "shader",
  },
]
