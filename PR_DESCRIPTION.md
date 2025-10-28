Replace legacy blog with 40 new posts (EN + AR) — no layout changes

### What this PR does
- Deletes legacy blog files to avoid duplication
- Adds 40 EN posts under `/blog/slug/` and 40 AR posts under `/ar/blog/slug/` (each with `index.html`)
- Adds canonical + hreflang pairs for EN/AR on every post
- Provides `SITEMAP_BLOG_BLOCK.xml` entries (copy into root `sitemap.xml`)
- Leaves layout and other site sections untouched

### After merge
- Paste `SITEMAP_BLOG_BLOCK.xml` entries into root `sitemap.xml`
- Optionally add `Disallow: /blog-old/` to `robots.txt` (see `ROBOTS_APPEND.txt`)
- In Google Search Console: submit sitemap, request reindex for a few key posts

*Generated on 2025-10-27.*
