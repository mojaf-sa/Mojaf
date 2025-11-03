MOJAF React Blog + SEO Module — 2025-11-03

Adds:
- React blog at /blog and /ar/blog (no static pages).
- EN/AR posts (400–500 words) with images, canonical, hreflang, keywords.
- robots.txt, sitemap.xml, .nojekyll in /public.
- keywords helper at src/seo/keywords.js

Steps (non-technical):
1) Copy the zip contents into your repo (merge folders).
2) In your router file, add:
     import { blogRoutes } from "./src/blog/routes";
     {blogRoutes.map(r => <Route key={r.path} path={r.path} element={r.element} />)}
3) Make sure you use BrowserRouter (not HashRouter). See PATCH-ROUTER.txt.
4) Deploy to main, purge Cloudflare, then submit https://mojaf-sa.com/sitemap.xml to Google Search Console.
