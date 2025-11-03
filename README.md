# MOJAF Static Website

This repository contains the static English and Arabic website for MOJAF, a Saudi Arabia construction and finishing materials supplier. The site is built with plain HTML, CSS and vanilla JavaScript so it can be deployed on any static hosting platform without a bundler or node build step.

## Structure

- `/index.html` – English homepage.
- `/about/`, `/services/`, `/products/`, `/catalogs/`, `/partners/`, `/contact/` – English internal pages.
- `/ar/` – Arabic equivalents of the main pages.
- `/blog/` and `/ar/blog/` – Existing long-form blog articles.
- `/assets/js/site.js` – Mobile navigation toggle, hero slider and active link helper.
- `/style.css` – Global styles shared across the site.
- `/catalogs/*.pdf` – Downloadable catalog placeholders.

## Development

Because everything is static, you can open the files directly in a browser or serve the repository with any static file server.

To update text or imagery, edit the relevant HTML file and commit the change. The only JavaScript used is for the hero slider and navigation menu defined in `assets/js/site.js`.

## Deployment

1. Upload the repository contents to your static hosting provider (GitHub Pages, Cloudflare Pages, Netlify, etc.).
2. Ensure the root domain points to the generated site.
3. Keep `robots.txt`, `sitemap.xml`, and `CNAME` (if used) at the repository root.

If you add new pages, remember to update `sitemap.xml` so search engines can discover the content.
