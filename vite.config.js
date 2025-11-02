// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: custom domain at the root should use base: '/'
export default defineConfig({
  base: '/',             // << fix broken asset URLs
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
