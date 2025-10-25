# MOJAF Site (React + Vite) — Upload Steps

**Includes**
- Same layout + Arabic toggle
- SEO with canonical https://mojaf-sa.com
- 30 blog posts (clean URLs)
- `sitemap.xml` + `robots.txt` generated at build
- GitHub Actions to deploy + package a big ZIP (with originals)

## Upload to GitHub (non-technical)
1. Open this ZIP on your computer. Select **all files inside** the ZIP.
2. GitHub → your repo → **Code (branch: main)** → **Add file → Upload files**.
3. Drag the selected files into GitHub → **Commit changes**.

## Publish on GitHub Pages
- Repo: **Settings → Pages → Source = GitHub Actions**.
- The included workflow `.github/workflows/deploy-pages.yml` auto-deploys on push.
- Set Custom domain: `mojaf-sa.com` (follow GitHub’s CNAME hint).

## Create a big ZIP with originals
- Actions → **Package full site (with originals)** → **Run workflow** → Download artifact.
