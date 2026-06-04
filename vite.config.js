import { cpSync, existsSync, mkdirSync, readdirSync, statSync, copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const distDir = 'dist'

function copyDirectory (source, target, options = {}) {
  if (!existsSync(source)) return
  mkdirSync(target, { recursive: true })

  for (const entry of readdirSync(source)) {
    if (options.exclude?.includes(entry)) continue

    const sourcePath = join(source, entry)
    const targetPath = join(target, entry)

    if (statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, targetPath, options.children?.[entry] || {})
    } else {
      copyFileSync(sourcePath, targetPath)
    }
  }
}

function copyStaticContent () {
  return {
    name: 'copy-static-content',
    closeBundle () {
      const directories = ['assets', 'ar', 'about', 'services', 'products', 'partners', 'contact', 'catalogs']

      for (const directory of directories) {
        if (existsSync(directory)) {
          cpSync(directory, join(distDir, directory), { recursive: true, force: true })
        }
      }

      copyDirectory('blog', join(distDir, 'blog'), { exclude: ['index.html'] })

      for (const file of ['blog.html', 'robots.txt', 'sitemap.xml', 'CNAME', '_redirects', '_headers', 'MOJ.jpg']) {
        if (existsSync(file)) {
          copyFileSync(file, join(distDir, file))
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), copyStaticContent()],
  base: '/'
})
