MOJAF — Full Deploy Package
Generated: 2025-08-25T15:23:59.060789Z

Upload steps (no coding):
1) Open your repo https://github.com/mojaf-sa/Mojaf → Code → Add file → Upload files
2) Drag EVERYTHING from inside this ZIP keeping folders as-is. You should see:
   - src/  public/  package.json  vite.config.js
   - .github/workflows/pages.yml
   - public/robots.txt, public/sitemap.xml, public/404.html
3) Commit message: Deploy: full site + GitHub Pages build
4) Settings → Pages → Build and deployment → Source = GitHub Actions
5) Open the Actions tab; wait until “Build and Deploy (Vite → GitHub Pages)” turns green.
6) Visit https://mojaf-sa.com/  (styled site). Also check /robots.txt and /sitemap.xml.

If a build fails, open Actions and share the last red line — it's usually a peer dependency that is already handled by --legacy-peer-deps.
