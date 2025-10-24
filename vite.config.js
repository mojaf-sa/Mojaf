import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must be '/' for a custom domain on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/', // <-- do not use './' or '/Mojaf/'
})
