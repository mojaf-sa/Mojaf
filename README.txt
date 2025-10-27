
MOJAF Fullsite PR Kit
=====================

How to use:
1) Upload/commit this kit to your repo root so you have:
   - incoming_fullsite/ (the full site)
   - .github/workflows/fullsite-merge-pr.yml
   - .github/scripts/merge_fullsite.js

2) Push to main. The workflow will trigger (or run it manually from Actions).
   It will create a branch **auto/fullsite-merge** and open a Pull Request with:
   - Updated top pages (EN/AR)
   - Replaced blog sections (EN + AR if present)
   - Updated sitemaps and robots.txt
   - Canonicals normalized to https://mojaf-sa.com
   - Existing CNAME preserved

3) Review the PR → Merge → GitHub Pages will deploy.

Note:
- Cloudflare should be DNS/SSL only (CNAME @ and www → mojaf-sa.github.io).
- Consider a Cache Rule in Cloudflare to bypass cache for HTML.
