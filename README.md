# MOJAF SEO + Clean URL Kit (no layout changes)

**What’s inside**
- `robots.txt` — allows crawling and points to sitemap
- `sitemap.xml` — edit/extend with your pages
- `404.html` — SPA fallback so `/route` opens without `#`
- `snippets/index-head-canonical.htmlfrag` — canonical tag
- `snippets/index-spa-deeplink-fixer.htmlfrag` — JS to clean `?p=`

## 2-Minute Setup
1. Upload **robots.txt**, **sitemap.xml**, **404.html** to your repo **root** (same place as README).
2. Open your **index.html** and paste:
   - canonical snippet **inside `<head>`**
   - deeplink fixer **just before `</body>`**
3. Commit to **main** — GitHub Pages deploys.

## Verify
- https://mojaf-sa.com/ (View-source → canonical present)
- https://mojaf-sa.com/all-products (opens without `#`)
- https://mojaf-sa.com/robots.txt
- https://mojaf-sa.com/sitemap.xml

*Generated 2025-10-27.*
