# Deccan Firm — GitHub Pages + deccanfirm.com (Wix DNS) — Exact Steps

## A. Put the site on GitHub (5 min, no coding)
1. Go to https://github.com/new → Repository name: `deccanfirm` → Public → Create.
2. On the empty repo page click **"uploading an existing file"**.
3. Drag ALL files from the `website` folder (index.html, about.html, team.html,
   commodity.html, shopify.js, LAUNCH.bat, assets/…) into the page → Commit.
4. Repo **Settings → Pages** (left sidebar) → Source: **Deploy from a branch**
   → Branch: **main**, folder: **/ (root)** → Save.
5. Wait ~1 min → your site is live at `https://<your-username>.github.io/deccanfirm/`
   (forms already send to capt596@gmail.com — nothing else to configure).

## B. Point deccanfirm.com to GitHub (Wix stays as domain manager)
1. Wix Dashboard → Settings → Domains → deccanfirm.com → **Manage DNS Records**.
2. Delete/unpublish the old Velroy site from the domain if asked.
3. Add these 5 records:
   - A @ → 185.199.108.153
   - A @ → 185.199.109.153
   - A @ → 185.199.110.153
   - A @ → 185.199.111.153
   - CNAME www → <your-username>.github.io.
4. Back in GitHub repo → Settings → Pages → Custom domain: type `deccanfirm.com`
   → Save. Wait up to 1 hr, then tick **Enforce HTTPS**.
5. Done: deccanfirm.com serves this site. Wix only routes the domain now.

## Notes
- No CNAME file included on purpose — add the domain in Settings AFTER DNS (step B4).
- .nojekyll is included so GitHub serves every file exactly as-is.
- Test link first (step A5) before touching DNS.
