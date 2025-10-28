# Blog Refresh Kit (40 EN + 40 AR) — No Layout Changes

## What this gives you
- 40 English posts at `/blog/post-XX/` (each has `index.html`)
- 40 Arabic posts at `/ar/blog/مقال-XX/` (each has `index.html`)
- `SITEMAP_BLOG_BLOCK.xml` with all 80 URLs (ready to paste)
- `posts_manifest.csv` for editing titles/slugs/descriptions in a sheet
- `ROBOTS_APPEND.txt` if you want to disallow an old blog folder
- `PR_DESCRIPTION.md` you can paste into your PR

## How to use (click-only)
1) Create branch **`blog-refresh`** from `main`.
2) Upload the `blog/` and `ar/blog/` folders to the repo root on `blog-refresh` → Commit.
3) Delete your old blog folder (e.g., `blog-old/`, `posts/`, or `news/`) to avoid duplicates → Commit.
4) Open **Pull Request** (base `main` ← compare `blog-refresh`) and paste the contents of `PR_DESCRIPTION.md`.
5) Merge the PR. GitHub Pages redeploys automatically.
6) Open `SITEMAP_BLOG_BLOCK.xml` and paste its entries into the root `sitemap.xml` → Commit.
7) (Optional) If you retired an old folder, append the lines from `ROBOTS_APPEND.txt` to `robots.txt`.
8) In Google Search Console, submit `https://mojaf-sa.com/sitemap.xml` and request reindex on a few new posts.

## Editing the posts
- Each post has placeholders you can overwrite (title, description, body text).
- Canonical + hreflang tags are already in place for EN/AR pairs.
- Keep your layout untouched — these are standalone HTML files.

*Generated 2025-10-27.*
