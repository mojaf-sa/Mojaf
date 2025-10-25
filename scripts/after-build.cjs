// after-build.cjs
const fs = require('fs')
const path = require('path')
const BASE = process.env.VITE_CANONICAL_BASE || 'https://mojaf-sa.com'
const dist = path.resolve(__dirname, '../dist')
function write404(){
  const index = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
  fs.writeFileSync(path.join(dist, '404.html'), index)
  fs.writeFileSync(path.join(dist, '.nojekyll'), '')
}
function generateSitemap(){
  const routes = ['/', '/products', '/services', '/catalogs', '/blog', '/contact']
  const blogs = require('../src/data/blogs.json')
  const blogUrls = blogs.map(b => `/blog/${b.slug}.html`)
  const urls = [...routes, ...blogUrls]
  const lastmod = new Date().toISOString().slice(0,10)
  const xml = [
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(u => `  <url><loc>${BASE}${u.endsWith('/')?u: (u.startsWith('/blog')? u : u + '/')}</loc><lastmod>${lastmod}</lastmod></url>`),
    '</urlset>'
  ].join('\n')
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml)
}
function writeRobots(){
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`
  fs.writeFileSync(path.join(dist, 'robots.txt'), robots)
}
if (fs.existsSync(dist)) {
  write404()
  generateSitemap()
  writeRobots()
  console.log('after-build: wrote 404.html, sitemap.xml, robots.txt')
} else {
  console.warn('dist not found – did build succeed?')
}
