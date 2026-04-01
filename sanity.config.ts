import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'


// Bạn có thể đổi các biến dưới đây thành cấu hình thật của bạn
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'i6rvgdeu'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'My Sanity Studio',

  projectId,
  dataset,

  // Route bắt đầu của Studio. Bắt buộc phải trùng với route đã khai báo trong app.
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: [],
  },
})
