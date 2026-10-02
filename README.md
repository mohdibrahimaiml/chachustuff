# Deccan Firm — Elegant Import/Export Website

Rebuilt from `deccanfirm.com` (Velroy Eagle Ventures template) → **DECCAN FIRM Trade House**.

## Live locally
File: `index.html` — double-click to open.
Or: `npx serve . -l 3001` → http://localhost:3001

## What was fixed
- Brand: Deccan Firm (not Velroy Eagle Ventures)
- No dead Shopify (hd3izv-i0.myshopify.com 402 removed) — quote-based RFQ instead
- No lorem/empty portfolio — 8 real commodities with HS codes
- No Outlook stock email — capt596@gmail.com
- Real process (5 gates), network map (HYD→DXB→USA), compliance (IEC/APEDA)

## Customize
Edit `index.html`:
- Colors: `tailwind.config` colors (ink/paper/sand/brass)
- Commodities: duplicate `.commodity-card` blocks, change `data-cat` and image
- RFQ form: connect `form onsubmit` to Formspree/Resend or `mailto:capt596@gmail.com`
- Images: Unsplash URLs — replace with your port/farm photos in `assets/`

## Deploy to deccanfirm.com
1. Push to GitHub → Import to Vercel
2. Add domain deccanfirm.com in Vercel (update DNS at Wix/Cloudflare)
3. Set 301 redirect from www.deccanfirm.com old Wix to new Vercel

## Next steps (if you want)
- Add `/about` founder story + GSTIN/IEC scan
- Add Hindi/Telugu toggle
- Connect RFQ to Google Sheets + WhatsApp
