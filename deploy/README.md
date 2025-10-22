# Deployment via ZIP (one-time steps)

1. Download the final build I prepared: **Mojaf_FINAL_single_blog.zip**.
2. In this repo, switch to branch **deploy/final-single-blog**.
3. Click **Add file → Upload files** and upload the ZIP to **deploy/site.zip** (create the `deploy/` folder if it doesn't exist).
4. Go to **Actions → Deploy Site from ZIP → Run workflow**.
   - Leave defaults: `zip_path = deploy/site.zip`, `subdir = (blank)`
5. The workflow will extract the ZIP into the repo root (preserving `.github/`) and push the commit.

> After this, your site is fully deployed with one blog page at `/blog/` and local WebP images with alt text.
