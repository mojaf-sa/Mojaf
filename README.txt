MOJAF Turbo SEO FULL — English Only

Domain: https://mojaf-sa.com
URLs: pretty (no .html), non-www
Pages: 21 (home, products, services, blog, materials, city pages)

Files:
- robots.txt — allows crawl; points to sitemap
- sitemap.xml — 21 URLs with priority & changefreq
- meta-tags/ — 21 HTML head snippets (canonical + title + description + OG/Twitter + embedded JSON-LD)
- redirects-map.txt — old /landing/*.html to clean slugs

How to use (non-technical):
1) Upload robots.txt and sitemap.xml to your site root (or repo root).
2) For each page, open its HTML or template -> paste the matching file from meta-tags/ right before </head>.
3) Commit/publish, then submit https://mojaf-sa.com/sitemap.xml in Google Search Console.
4) If /landing/*.html exist, implement the 301 redirects in redirects-map.txt.
