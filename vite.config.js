import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' يخلي الموقع يشتغل على GitHub Pages بدون تعديل
export default defineConfig({ base: './', plugins: [react(), tailwindcss()] })
