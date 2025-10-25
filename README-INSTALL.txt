MOJAF - SEO + Canonical + EN/AR Toggle Pack
==============================================

This pack adds:
1) Strict canonical to https://mojaf-sa.com and hreflang (en/ar)
2) Robots.txt + Sitemap.xml for indexing
3) SPA 404 fallback for GitHub Pages deep links
4) EN <-> AR language toggle (client-side), proper lang/dir
5) OpenGraph/Twitter tags + LocalBusiness JSON-LD
6) An OG cover image placeholder

QUICK INSTALL (Non-Technical, 2-3 minutes)
------------------------------------------
A) Copy the public/ folder from this ZIP into your repository root.
   - If asked to merge, choose MERGE/REPLACE existing files.
B) Open your index.html and paste the contents of snippets/index-head-snippet.html
   INSIDE the <head> ... </head> section (keep your existing tags; remove duplicates).
   - Ensure your <html> tag is: <html id="html-root" lang="en" dir="ltr">
   - Add this near the end of your <body>: <script type="module" src="/assets/js/i18n.js"></script>
   - Add the toggle button in your header/nav: <button id="lang-toggle">العربية</button>
C) (Optional) Add the SPA fallback step in GitHub Actions:
   - See snippets/pages.yml.add-step.yaml and add that step AFTER your build step.
D) Commit -> Push -> GitHub Actions will redeploy.

Notes
-----
- Edit public/assets/i18n/en.json and ar.json to add more translations.
- Replace public/assets/img/og-cover.jpg with a real 1200x630 banner later.
- Update sitemap.xml to include your product/blog URLs if available.
- Works for Vite or plain static (paths assume site root).

Support
-------
If you want, I can open a PR to apply these changes automatically.
