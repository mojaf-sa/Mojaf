import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const requiredFiles = [
  'src/App.jsx',
  'src/BlogPreview.jsx',
  'src/BlogIndexPage.jsx',
  'src/CatalogComponent.jsx',
  'index.html',
  'sitemap.xml',
  'robots.txt'
];

for (const file of requiredFiles) {
  const content = readFileSync(join(process.cwd(), file), 'utf8');
  if (!content.trim()) {
    throw new Error(`${file} is empty`);
  }
}

const app = readFileSync(join(process.cwd(), 'src/App.jsx'), 'utf8');
if (!app.includes('BrowserRouter as Router')) {
  throw new Error('src/App.jsx must use BrowserRouter for clean Cloudflare Pages URLs.');
}
if (app.includes('HashRouter')) {
  throw new Error('src/App.jsx must not use HashRouter.');
}

const redirects = readFileSync(join(process.cwd(), '_redirects'), 'utf8');
for (const route of ['/blog /index.html 200', '/blog/ /index.html 200']) {
  if (!redirects.includes(route)) {
    throw new Error(`Missing redirect: ${route}`);
  }
}

console.log('Project lint checks passed.');
