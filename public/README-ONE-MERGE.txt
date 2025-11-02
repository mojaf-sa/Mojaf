MOJAF — One‑Merge Deploy Kit (No Layout Change)

What this does
==============
• Keeps your current React app and static blog exactly as-is.
• Builds React (if package.json exists) and deploys via GitHub Pages.
• Copies your blog/, ar/, assets/, public/, images/, robots.txt, sitemap.xml, etc.
• Adds SPA fallback (404.html) so direct links like /ar, /blog/slug.html work.
• /ar/ now redirects to the React app with ?lang=ar (no separate static site).

How to use (non‑technical)
==========================
1) Download this zip to your computer.
2) Extract all files into your repo ROOT (Mojaf). Allow Overwrite if asked.
   Files added/updated:
   - .github/workflows/pages.yml
   - ar/index.html   (only a redirect, no design change)
   - public/lang-toggle.js (optional helper; safe to keep)
   - .nojekyll
3) Commit and push to the **main** branch.
4) In GitHub → Settings → Pages → set Source = GitHub Actions.

After deploy
============
• English URLs: https://mojaf-sa.com/
• Arabic URL:   https://mojaf-sa.com/ar/  (redirects to /?lang=ar inside React)
• Blog URLs:    https://mojaf-sa.com/blog/your-post.html (unchanged)

Safe branch clean‑up
====================
• Keep **main**.
• You may delete temporary branches AFTER they’re merged (the PR shows a green “Merged” badge).
• Optional: create a tag for backup (e.g., v2025.11.03).

That’s it — no layout/design modifications were made by this kit.
