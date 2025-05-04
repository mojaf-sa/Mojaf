import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',  // Ensure this matches the directory in wrangler.toml
    rollupOptions: {
      input: 'index.html',  // Ensure this is the entry point for your app
    }
  },
  server: {
    open: true,
  },
  plugins: [react()],
})
