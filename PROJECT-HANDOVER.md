# CURRENT HANDOVER - 31 October 2026

This section supersedes historical status below. Workspace D:/Vettiver. Live site https://akashvetiver.akashvetiverexport.workers.dev. Use Google Chrome with Playwright channel:'chrome' for browser work; user explicitly requested it. Never switch silently to bundled Chromium or another browser.

## Latest completed work
- Latest product release: two new published DB products, total14. product-vetiver-ganesha: INR320. product-scrubbers-pack-3: INR99 per pack of3; quantity2=two packs/six scrubbers. Both price_is_sample=false. Original12 rows preserved.
- User requested SAME prior studio prompt. Final images reuse exact shared prompt from .drafts/collections-studio-v1/GENERATION-NOTES.md, not the first discarded alternatives. See that file for final generated paths. WebP1200px plus320px thumbnails published; PNG masters not deployed.
- Reservation hint font increased11px to14px. No changes to approved About layout/preloader.
- Chrome local new-product/quantity test passed390/1440. Chrome isolated admin invoice/PDF/share/history/void/duplicate-number tests passed320/390/desktop. Live Chrome customer audit passed320/390/1440:14 products, search, keyboard dialogs, validation, error recovery, stable retry key. No live form submissions, emails, real invoices or deletions during tests.
- Live SEO metadata/sitemap/admin indexing checks passed. Dynamic sitemap includes3 main+14 product pages. Product prices and images verified. Automated axe found no violations across12 checked states; incomplete checks need manual review.
- Prior improvements remain: dynamic product schema and sitemap, shared canonical generator,10s request-body deadline/16KB limit, notification queue bounds, admin notification health/status, honest failed-submission fallback.

## Status / do next
1. Read .drafts/NEW-PRODUCTS-FINAL-CHECK.md and .drafts/LAUNCH-IMPROVEMENTS-REPORT.md. Current provisional overall79/100, not certification; do not call full launch ready.
2. Domain purchase/attachment, verified Resend sender/key/enablement and real email receipt are still pending. Live health submissionsEnabled=true, notificationsConfigured=false. Never enable old pending email queue without review. RESEND key is a Worker secret, never browser code.
3. Verify real admin sign-in, auth SMTP, Gmail/Supabase/Cloudflare MFA/recovery, permanent-sales backup restore. Owner wants sales data kept permanently. No automatic pruning.
4. Follow .drafts/DOMAIN-EMAIL-LAUNCH-STEPS.md after domain purchase, including canonical/auth URL changes, Search Console verification/sitemap. Do not promise top1 rankings.
5. Existing PRODUCT.md/DESIGN.md describe older static WhatsApp-only behavior; current owner-approved flow is enquiry saved -> owner email alert once enabled -> owner follows up on WhatsApp. No extra customer WhatsApp CTA is missing.
6. Do not repeat product insert or run whole seed against live. New-product SQL uses insert-on-conflict-do-nothing. Direct Supabase binary node_modules/@supabase/cli-windows-x64/bin/supabase.exe works with existing authorized session; npx wrapper failed. Do not disclose credentials.

Final deployed version: e827ef2d-5723-4ee6-9573-57edaa2e9c9a (31 October 2026). Final live Chrome verification passed after deployment.

---
# Historical handover (preserve for context; superseded above)

﻿# AKASH VETIVER — START HERE / ACCOUNT HANDOVER

Updated: 29 October 2026. Read this file before changing anything.

## Resume instruction
Continue the AKASH VETIVER project in D:\Vettiver. First read PROJECT-HANDOVER.md and the latest reports in .drafts. Preserve all uncommitted/untracked work and local preview data. Verify current state before repeating changes. Technical SEO and scoped security hardening are deployed and verified. Current order: owner acceptance, deferred authentication/email configuration, final domain and launch prerequisites. The user is auditing admin in a visible local-preview browser; do not close or refresh it without checking for unsaved changes.

## Project and hosting
- Workspace: D:\Vettiver (Windows PowerShell). Codex home C:\Users\avina.
- Live preview: https://akashvetiver.akashvetiverexport.workers.dev
- Live admin: /admin.html (authentication protected).
- Hosting: Cloudflare Worker + static assets, NOT Vercel for this project.
- Last verified deployed version: b706018b-80ac-44f8-a4ac-45d837857852 (29 Oct), serving the sunrise preloader and admin/archive release. Prior SEO/security release was042a3faf-0517-4b0a-9c26-fd4790eb957b.
- Supabase project: lgkkjubwdxdfpmoxkrmd, region ap-northeast-2.
- Admin/business email: akashvetiverexport@gmail.com.
- Desired domain: akashvetiverexport.in. Last confirmed NOT PURCHASED. Do not assume ownership or configure DNS without verifying.
- Resend not connected; notifications disabled. Live login/email configuration deferred by user. Do not remove public auth protection.
- No business registration/GSTIN/address invented. User will supply registration details later.

## Current state / immediate remaining work
1. Handover written; keep this file updated after every material action.
2. Technical SEO foundation COMPLETE and live: unique metadata, final-route canonicals, absolute social images, truthful Organization/WebSite/page JSON-LD, robots.txt and two-page sitemap. Live verification passed 29 Oct. Reports: .drafts/seo/FULL-AUDIT-REPORT.md and ACTION-PLAN.md. Search Console/domain migration and performance field measurements remain prerequisites, not completed claims.
3. Scoped security review COMPLETE with mitigations deployed: independent edge submission throttling, exact /admin no-store/noindex headers and HSTS. Read .drafts/SECURITY-REVIEW-2026-10-28.md for scope and remaining limitations. npm audit --omit=dev reports zero known production vulnerabilities; this is not full security certification.
4. Launch prerequisites remain: purchased custom domain, final business/contact details, real product dimensions/weights and roots listings, working live admin authentication/email, owner acceptance, SEO/security signoff.
5. User is auditing local admin now. New feedback should steer the active task, not discard this objective.

## Open preview and persistence
Run in separate terminals from D:\Vettiver:
    npm run preview
    npm run admin:preview
Server: http://127.0.0.1:4178. The admin helper opens a visible Chromium window with isolated local data; entering the URL in another browser does NOT bypass login.
- User data persists in .drafts/admin-preview.json and .drafts/admin-preview-images.
- Tests use .drafts/admin-preview-check.json; do not overwrite the real preview file.
- Local edits DO NOT update Supabase/live website. Local fallback reservation can say Prepare email request; production requestsEndpoint is /api/requests and submissionsEnabled was verified true.
- On 28 Oct, server exec session85789 and visible admin session25834 were started. Session IDs may not survive account/restart; check server before starting duplicates.

## User preferences / protected design
- Brand AKASH VETIVER, forest green + warm botanical off-white, simple professional wording, premium restrained design.
- Keep the mobile About layout and dotted trail unchanged. User explicitly likes it.
- Hero image stays BEHIND text on mobile; preserve current composition.
- Avoid extra CTAs, overlong help text, clutter and fake demo data on live pages.
- Use skills when relevant; user explicitly allowed subagents and Playwright.
- Persist to concrete tested outcomes. Do not repeatedly ask approval already granted for fixes/deploying existing workers.dev site.
- Do not send WhatsApp/email messages automatically. Sharing invoice files should remain an explicit admin action.

## Completed and deployed (27 Oct)
- Sales page derives product sales, purchase count, paid pieces, average purchase, monthly trends and best sellers from saved issued invoices. Voids excluded; free gifts excluded from paid-piece counts; delivery/payment amounts separate.
- Last-six-month chart rolls forward with the current date on refresh. A selected historical month anchors the chart to that month. Different currencies never summed together.
- Invoice numbers default1,2,3, including voided numeric records; existing legacy AV numbers retained. DB uniqueness rejects duplicates; draft preserved with next-number suggestion. Saved invoices retain snapshots for later download. Share PDF uses native share when supported or download fallback.
- Customer requests come from reservation forms; customer accounts are not required. Inbox pagination beyond100, retries, status/review controls and request-to-invoice work.
- One visible product description; accessibility alt text maintained automatically. Products, price, gifts, combos, campaign controls and compression supported.
- Raw roots category key roots added everywhere; additive DB migration applied. Existing12 products unchanged; no roots product/price was invented. Empty roots category says not listed yet, with email availability contact.
- Demo Diwali campaign id4f6d1b88-088a-4ea4-a510-a21bb0452975 was DELETED at user request. Do not recreate it. Campaign with no eligible offers opens full collection; real offers filter by linked eligible products.
- Mobile and desktop carousel autoplay runs when visible; pointer/focus/manual selection stops it. Reduced motion respected.
- Catalogue first-paint skeleton prevents seed cards flashing before live data.
- Short mobile reservation: selected piece, quantity, name, WhatsApp; price and concise consent, increased spacing. Delivery discussed during follow-up; FAQs match.
- Logo/wordmark intro before first paint, line fill, fade into hero. Independent of deferred GSAP; skip, reduced-motion and no-JS safe. CSP exact hashes generated at build time for inline bootstraps.
- Public catalogue/offers/reviews and uploaded WebP image caching reduce repeated Supabase transfers. Actual egress quota remaining unverified.

## Architecture / important files
Static HTML/CSS + vanilla JS storefront enhanced by React/TypeScript/Vite components; Tailwind/shadcn structure.
- index.html, products.html, script.js, styles.css, intro-loading.js
- catalog.js, commerce.js, request-flow.js/.css
- ui/main.tsx, components/shadcn-studio/blocks/hero-section-41/hero-section-41.tsx, ui/product-showcase.css
- admin.html, admin-studio.css, ui/admin.ts, ui/admin-shell.tsx, ui/admin-guards.ts
- ui/admin-commerce.ts, ui/admin-inbox.ts, ui/admin-invoices.tsx, ui/admin-sales.tsx
- lib/invoice.ts, lib/compress-product-image.ts
- server/worker.mjs, wrangler.jsonc, _headers
- supabase/migrations. Latest additive roots migration20261027081147_add_raw_vetiver_roots_category.sql applied and RLS retained.
- tools/build-site.mjs: creates clean dist, excludes .drafts/source/credentials; computes CSP hashes. Do not publish project root directly.
- data/products.json is seed/built-in catalogue; public live data uses Supabase via /api/catalog. Do not overwrite live products with seed data.

## Verified tests / useful commands
From D:\Vettiver:
    npm run typecheck
    npm run build
    node tools/preview-admin.cjs --studio-check
    node tools/preview-admin.cjs --audit-check
    node tools/verify-commerce-admin.cjs
    node tools/verify-request-flow.cjs
    node tools/verify-about-reservation.cjs
    node tools/verify-brand-intro.cjs
    node tools/verify-customer-journey.cjs
    node tools/verify-worker.mjs
    node tools/verify-public-cache.mjs
    npx wrangler deploy
Playwright helper path used by existing tools: C:/Users/avina/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright-core. Discover installed alternative if absent on new account.
Full browser checks27Oct: admin320/390/768/1440; public320/390/1440; invoicePDF/history/share(native mocked)/collision; sales fixture; requestsretry; rootsCRUD; intro with6.5s-delayed GSAP/CSP; reducedmotion/noJS; carousel and skeleton; unchanged About. Live public endpoints, mobile/desktop page checks and protected admin passed. No live customer test submissions.

## Reports and evidence
- .drafts/CUSTOMER-ADMIN-REVIEW-2026-10-27.md — latest completed changes, skill mapping, tests and remaining boundaries.
- .drafts/ADMIN-SITE-AUDIT-2026-10-27.md — earlier admin/egress audit.
- Other .drafts reports describe earlier work; newest report/source wins if they differ.
- Screenshots C:\Users\avina\final-reservation-390.png, intro-review-390.png, studio-sales-desktop.png and studio-sales-390.png. Sales screenshots use TEST data, not real sales.

## Safety / environment / account transfer
- Git main has MANY modified/untracked files; not committed. Do not git reset/clean/reclone over it. No commit/push has been requested.
- D:\Vettiver needs approved elevated tool execution in this environment. Use PowerShell login:false; default shell calls sometimes hang. Never bypass automatic approval failures.
- Previous account usage limits interrupted work. Check what actually ran; a failed tool call may have done nothing.
- No secrets in this handover. Reconnect Cloudflare/Supabase integrations in the new account if needed; use existing local environment credentials without printing them. Never put service-role/secret keys into frontend/build artifacts.
- Supabase tools can be discovered via ALL_TOOLS; use its skill for database/auth changes. Inspect schema before migrations. Migration history must remain consistent.
- Avoid exposing .drafts/admin-preview.json or invoices in public artifacts.

## Copy/paste prompt for the new account
Read D:\Vettiver\PROJECT-HANDOVER.md and continue this existing project. Preserve the dirty workspace and local preview data. Read the completed SEO/security reports and their final verification addenda; continue remaining launch prerequisites and new owner feedback. Update this handover with evidence and blockers, and keep the user informed. Do not change the mobile About layout. Login/email and domain setup need the prerequisites described in the handover. Verify current state before repeating any deployment or database change.

## SEO and security release ? 29 October 2026
- Deployment: 042a3faf-0517-4b0a-9c26-fd4790eb957b, verified live. No additional database mutations or demo campaigns created during final checks.
- public-site.json is the single origin/identity configuration. After the owner purchases/connects the domain, update origin, run npm run build (includes seo:generate), configure redirects and verify the final URLs. Do not claim the desired domain is already owned.
- tools/generate-seo.mjs generates metadata blocks and robots.txt, sitemap.xml and optional llms.txt. tools/build-site.mjs publishes these files, excludes private source/drafts, and hashes inline bootstraps for CSP. Final public paths are / and /products; /products.html redirects. Admin is excluded from sitemap and has noindex.
- No invented address, GSTIN, ratings, availability or structured product offers. Collection pages are not claimed to qualify for Product rich results. PageSpeed API quota prevented a measured performance score; Search Console indexing/field data unavailable.
- wrangler.jsonc enables SUBMISSION_RATE_LIMITER at 20 attempts/60 seconds with ENABLE_EDGE_RATE_LIMIT=true. Worker checks an HMAC identity before body validation/database RPC. Missing binding fails closed. Counters are approximate and local to a Cloudflare location, not a global quota; existing database six accepted requests/hour and idempotency remain.
- _headers now includes final /admin no-store and noindex,nofollow rules plus HSTS max-age=31536000, without includeSubDomains or preload.
- Verification passed: build; worker/public-cache/database/commerce/feedback checks recorded in security report; node tools/verify-edge-rate-limit.mjs; node tools/verify-seo.mjs --live; live public endpoints and WebP assets; Playwright 390px/1440px homepage, catalogue, protected admin with no horizontal overflow or JavaScript errors; live reservation configuration and submissionsEnabled=true. No real customer request sent.
- Dependency evidence: .drafts/security-dependencies.json (npm audit --omit=dev, zero reported production vulnerabilities).
- Final scripts outside repo: C:/Users/avina/verify-release-live.cjs and verify-live-request-config.cjs; copy or recreate on a new machine if needed.
- Still pending: owner-provided domain/business/product facts, live owner authentication/email acceptance and account recovery settings, Search Console, performance measurement, retention decisions and owner launch signoff. Actual Supabase egress usage remains unverified. Preserve local preview data.

Final live intro verification also passed: node tools/verify-brand-intro.cjs https://akashvetiver.akashvetiverexport.workers.dev. At 390px and 1440px the brand sequence was visible, hero reveal synchronized, exit bounded, and no late replay or CSP errors occurred with GSAP delayed 6.5 seconds. Reduced-motion, Skip intro and no-JavaScript cases passed.

## Latest owner-requested release ? sunrise and admin archive (29 October 2026)
Read .drafts/ADMIN-SUNRISE-RELEASE-2026-10-29.md and .drafts/SALES-ARCHIVE-2026-10-29.md first; these supersede earlier intro/retention/currency descriptions.
- Sunrise component lives in components/ui/amour-sunrise-preloader.tsx, with SSR first-paint generation via tools/generate-intro.mjs and independent ui/intro.tsx entry. Build updates CSP in dist/_headers. No new packages. Production has no fake percent counter.
- Product rail scroll is contained; Combos is separate; Reservations & reviews names actual form requests. New invoices and sales are INR; foreign historical records preserved.
- Sales ? Export & storage: prepare6/12complete months/custom dates; download JSON and CSV; reselect JSON to verify; keep second copy; explicitly confirm optional deletion. Offline records remain in the backup; PDF generation needs site assets. Deletion removes those invoices from online sales totals.
- Migration20261029082709_invoice_archive_and_numbering is APPLIED. Private high-water numbering survives deletion; atomic admin-only RPC rejects changed snapshots. Never rerun the migration or perform live cleanup as a test. No real invoices were deleted.
- Supabase observed approximately11MB database and0live invoices. Six months is not a storage guarantee; do not confuse image storage or egress with invoice table size.
- New checks: tools/verify-sunrise-preloader.cjs; tools/verify-invoice-archive.mjs; tools/verify-invoice-archive-database.mjs; node tools/preview-admin.cjs --archive-check; .drafts/admin-refinement-check.cjs --check. Run preview-admin checks sequentially because their isolated check file is shared.
- Local preview browser already open may still show old bundled code; do not refresh it while the owner has unsaved work. Actual preview data is untouched.

## Final live verification
Cloudflare release b706018b-80ac-44f8-a4ac-45d837857852 deployed successfully. Live SEO, final route/admin headers, reservation configuration, public catalogue/campaign/review endpoints and WebP assets passed. Playwright390/1440 passed home/catalogue/protected admin with no horizontal overflow or JavaScript errors. Live sunrise normal/blocked/late entry scenarios passed at390/1440, with full viewport coverage, single bounded completion and no late replay or hydration errors. Anchor navigation initially timed out waiting for the full load event; a focused rerun waiting for DOM readiness passed (node tools/verify-sunrise-preloader.cjs https://akashvetiver.akashvetiverexport.workers.dev --anchor-only). No source changes after deployment, only test synchronization and documentation.

## SEO, customer and security follow-up ? 30 October 2026
Latest Cloudflare version c8a8ce1a-722c-477f-99d2-43cec58fcce8. Read .drafts/tamil-seo/FULL-AUDIT-REPORT.md, ACTION-PLAN.md, .drafts/ANTISPAM-SECURITY-REVIEW-2026-10-29.md and .drafts/CUSTOMER-JOURNEY-REVIEW-2026-10-29.md.
Intro now fails open immediately on a blocked entry and after 1.2s if entry is delayed; onUncaughtError also releases it. Live blocked/delayed tests passed with no late replay. Portrait lettering was adjusted and tested 320/360/390/430/1440; desktop and mobile About remain unchanged. Tablet hero-scroll target enlarged to44px.
Reservation honeypot autofill now clears for retry. Both forms already use server-side honeypots and shared Cloudflare 20/60s approximate per-location limiter plus database 6 accepted/hour per IP. Isolated tests passed; no live customer data sent. WAF account settings, real email/admin authentication, field metrics and Search Console remain unverified.
SEO titles/descriptions mention Tamil Nadu and vetted vetiver malai wording; do not create duplicate district doorway pages or invent addresses. SEO live checks passed. Rankings and AI citations cannot be promised. One simulated customer scored the earlier experience 7.5/10; this is not survey or conversion data.


## Latest pending request: optional fixed sizes
Read .drafts/OPTIONAL-SIZES-NEXT.md. Owner confirmed fixed size choices in popup (tap2feet -> show its own price), optional per product. Not implemented/deployed yet. Preserve current working catalogue.


## Completed optional sizes + roots (latest)
Release6652378b-5784-42b3-89af-fe50b0dfb972 is live. Optional size/weight pricing implemented and tested end to end. Read .drafts/SIZE-PRICING-GUIDE.md; supersedes pending-size note above. Migration20261031090000_optional_product_sizes.sql already applied. Raw Vetiver Roots draft in live DB has supplied real photo, null price and pack unit; owner must add weight prices and publish. Existing14 published products/prices preserved. Chrome preferred. Resend remains disabled; full launch prerequisites remain.


## Three supplied studio photos added (31 October 2026)
Two new published products: product-red-yellow-garland-pair and product-gold-ornament-garland. Both have size_options three-feet=350 and six-feet=620 INR; price_is_sample=true per owner approximate prices. Pair pricing applies to pair, explicitly stated to owner. Roots existing draft updated to raw-vetiver-roots-studio.webp (no duplicate roots listing, still unpriced draft). Source photos in Downloads: 2026-10-19 at1.25.31PM,1.38.40PM,and1.38.40PM o.jpeg. Already studio-edited photos were used directly, no image generation. WebP full/thumb sizes85654/6674,120150/8086,120812/9370 bytes. Public catalogue now16; local fallback data/products.json remains previous14, so do not reseed or overwrite DB to match fallback. SQL applied:.drafts/add-three-product-photos.sql. Guide-price note added to popup and size product pages. Chrome live verification tests both size selections and image loading.

## Raw roots published and spacing corrected (latest, verified 1 November 2026)
Release e70485c3-73f3-499e-9adb-ffd31493a753. Owner authorized approximate roots prices; provisional 100 g = INR100 and 1 kg = INR600 were stated before action. Raw roots is now published, price_is_sample=true, pricing_unit=pack, existing studio photo retained. Published catalogue17. Admin may change weights/prices. SQL .drafts/publish-roots-guide.sql applied. No longer a draft; supersedes older notes. Category empty-state actions now have20px vertical separation and explicit hidden-state override. Chrome live test passed: roots photo decoding, 1kg price600, guide-price note, empty-state gap20px, no mobile overflow. Collection order sorts collection/category; homepage sorts featured_order first then sort_order. Resend notifications remain disabled pending setup; do not claim complete email-led launch readiness.

## Compact popup approval preview + footer fix (1 November 2026)
User requested Ganesha-style compact popup and an addon stress-demo BEFORE approving live layout. Local source commerce.js/styles.css has compact candidate: correct ordering, short guide note, hidden redundant selection announcement, buttons for <=3 sizes, dropdown for >3, collapsed offer/extras. Chrome demo .drafts/preview-compact-popup.cjs --show is open (two tabs), local fixtures only, no DB demo product. 390x844 tests: standard popup585px and8-size/addon popup639px with no internal/horizontal overflow. Screenshots .drafts/compact-popup-standard.png and compact-popup-options.png. Waiting for approval. Do NOT blindly build/deploy these source changes before approval. To publish footer only, dist commerce.js/styles.css/request-flow.css restored from .drafts/pre-compact-* backups; source retains candidate. After approval build normally, test, deploy and remove only demo fixture files; no real DB product to delete.
Footer ui/main.tsx now eagerly imports Footer (removes scroll-time footer chunk request); footer job failure restores cloned static footer without appending technical section-load-error. Mobile Chrome tests pass normal render and blocked enhancement retaining useful links/wordmark. Original footer layout retained. The precise reported intermittent mobile text was not captured, so no claim of reproducing every failure.
Owner bought akashvetiverexport.in at GoDaddy. DNS NS/A checks returned no answers in this environment; connection NOT configured or verified. Existing workers.dev origin remains canonical. Need subsequent Cloudflare zone/domain connection and GoDaddy DNS update, canonical/auth redirects, Resend verification and Search Console.

## Revised popup preview: size beside price (1 November 2026)
Latest user direction supersedes prior buttons/dropdown-below-price candidate. Local commerce.js/styles.css now place size select beside price for all option counts; selected price updates without repeating the size label. Free gifts use compact42px thumbnail and single label row; combo extras remain collapsed. Pending approval, NOT deployed. Chrome script .drafts/preview-price-size-gift.cjs --show is open with two tabs. Screenshots .drafts/price-size-plain.png and price-size-gift.png. At390x844:540px without gift,606px with gift, no internal/horizontal scrolling. Gift example is DOM-injected local visual only; no database product or offer created. Important: current live database/admin disallows enabled offers on sized products. If user approves and wants real free gifts with sizes, implement and test that compatibility deliberately; do not claim this visual demo enables it. Keep live popup unchanged until approval. Last footer-only live release4cfd1220-6389-43dd-a68d-3e7b7c01d09f; domain connection remains pending.

## Latest popup correction: original size buttons beside price
User rejected dropdown; wants original3feet/6feet selectable buttons in price-row space. Local candidate now uses .inline-size-buttons beside price; selected button green, horizontal scrolling for many sizes rather than growing card height. Chrome .drafts/preview-price-buttons-gift.cjs --show open. Screenshots .drafts/price-buttons-plain.png and price-buttons-gift.png.390x844 tested no internal scroll:546px plain,612px gift. Still pending approval, not deployed; local visual free gift only, prior backend compatibility limitation remains. This supersedes dropdown candidate.
