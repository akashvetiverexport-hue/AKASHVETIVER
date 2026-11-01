# Product release and Chrome audit - 31 October 2026

## Outcome
Both owner-approved products are published in Supabase: Vetiver Ganesha INR320 and Vetiver Scrubbers (Pack of 3) INR99. Catalogue total14. Existing12 products were not overwritten. The original approved photography prompt was reused; scrubbers show exactly3. Existing About/preloader layout preserved. Help text in reservation forms increased from11px to14px.

## Evidence
- Build/typecheck passed; final static distribution174 files/26.1MiB. This is total deployed assets, not initial page download.
- Playwright used installed Google Chrome via channel:'chrome'. No dedicated Playwright SKILL.md was installed; project Playwright tooling was used, alongside existing Impeccable/Audit guidance and SEO verification.
- New products:390/1440 widths, image decoding, prices, quantity2 submits two scrubber packs, no horizontal overflow or JS page errors. All submission POSTs intercepted; no customer records/emails created.
- Live customer checks:320/390/1440 widths,14 published cards, empty search/reset, keyboard product-dialog opening/Escape/focus restoration, invalid-phone rejection, failed enquiry preserving data and fallback, stable retry key and honest receipt. Twelve automated axe scans reported no violations; incomplete contrast and label/name checks remain manual-review limitations. Test-only CSP bypass allowed axe injection, so this does not prove production CSP enforcement.
- Isolated Chrome admin workflow passed: invoice numbering from1, save/totals/history, void numbers reserved, duplicate-number draft recovery, PDF download/share fallback/native API mock, mobile320/390. Real admin email sign-in and real native sharing destination remain unverified.
- Live SEO checks passed: distinct metadata, Cuddalore identity, canonical URLs, sitemap and every sitemap URL, legal page, protected admin noindex/no-store, HSTS. Sitemap now includes14 product pages plus3 main pages. Unit checks passed for product-page escaping and sitemap published-only/outage handling.
- Ganesha WebP179614 bytes (1200px), thumbnail14190 bytes (320px). Scrubbers WebP290482 bytes, thumbnail22418 bytes. PNG masters are not shipped. Product images use existing responsive/lazy loading pipeline.

## Audit findings and limits
P0: full email-led launch is blocked operationally while notificationsConfigured=false. Enquiries can be stored independently; monitor the admin inbox until verified Resend delivery works.
P1: real admin sign-in, account MFA/recovery, final domain and sender verification remain owner-dependent checks. No new penetration test, load test, legal opinion, Google ranking measurement or field Core Web Vitals measurement was performed in this product pass.
P2 fixed:11px reservation help text raised to14px.
P2: old PRODUCT.md/DESIGN.md contain historical WhatsApp-only/static-site descriptions; current code and latest handover override them. Drift noted, not silently redesigned.
Static detector: dialog image missing initial src is intentional until product selection; Chrome opens it correctly. Details border warning is contextual: mobile summary has44px minimum height and its parent provides inset. Radius/color advisories reflect approved styling and outdated token documentation. Loading shimmer is temporary status feedback, not a content marquee. No broad redesign based on detector warnings.

## Scores and launch decision
Retain the latest bounded assessment79/100: customer85, admin85, accessibility80, performance80, SEO83, image delivery90, security70, operational readiness60. These are internal readiness estimates, not independent certification. The extra products and small typography fix do not justify inflating the score. Prior heuristic AEO75/GEO65 remain unchanged; top1 search/AI placement cannot be promised.
The storefront is available for browsing and enquiries. Do not label the complete email-led business workflow launch-ready until domain/Resend delivery and real admin access are verified. See DOMAIN-EMAIL-LAUNCH-STEPS.md and LAUNCH-IMPROVEMENTS-REPORT.md for remaining steps.

## Reproduction and handover
Run node tools/verify-new-products-chrome.cjs (local fixtures), node tools/preview-admin.cjs --studio-check (isolated local admin), node .drafts/final-product-ux.cjs (live GETs, intercepted POSTs), node tools/verify-seo.mjs --live. Chrome is the required browser. Preserve the real .drafts/admin-preview.json; test data belongs in admin-preview-check.json.
New listings were inserted with .drafts/publish-new-products.sql using the authorized Supabase CLI session. Do not rerun add-new-products.cjs or seed all products. Exact final prompt/source notes are in .drafts/collections-studio-v1/GENERATION-NOTES.md. Final deployment ID will be recorded in PROJECT-HANDOVER.md.

Final deployment: e827ef2d-5723-4ee6-9573-57edaa2e9c9a. Final live Chrome run passed all three widths, both prices/images and14px form hint. Evidence: FINAL-PRODUCT-UX-EVIDENCE.json.
