MOJAF SEO + Pages Deploy (non-www)

Upload steps:
1) Drag these folders/files to your repo root (same level as src/ and public/):
   - public/sitemap.xml
   - public/robots.txt
   - index.html (root)
   - .github/workflows/pages.yml

2) Commit to 'main'. GitHub Actions will build and deploy automatically.

3) Verify live:
   - https://mojaf-sa.com/sitemap.xml
   - https://mojaf-sa.com/robots.txt

Notes:
- Keep sitemap & robots ONLY in /public so Vite copies them to the site root.
- Canonical host is https://mojaf-sa.com (non-www).
- Lastmod values set to 2025-10-12. Re-submit sitemap in Google Search Console after deploy.
