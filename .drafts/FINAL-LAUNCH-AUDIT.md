# Final launch audit — Akash Vetiver Export

Audit completed 30 October 2026 against https://akashvetiver.akashvetiverexport.workers.dev and D:/Vettiver. Supersedes the older FINAL-AUDIT-2026-10-30.md where evidence differs. Used Impeccable/audit and SEO skills, with customer, admin/security and SEO/image subagents. Subagent execution was interrupted by usage limits; root completed the remaining checks from persisted evidence. No live customer submissions, production invoices, data deletion or deployment were performed for this audit.

## Decision and score

**76/100 provisional launch-readiness assessment.** Suitable for a controlled soft launch after confirming receipt of an enquiry in the real admin account. Hold a major promotion until account security, backups and the enquiry-handling process are confirmed. This is an internal judgment, not a Google score, security certification, legal opinion, ranking forecast or penetration-test result.

Eight equally weighted dimensions, scored using category judgments (SEO uses its weighted skill rubric) against observed behavior, unresolved issues and verification coverage: customer journey 80, admin workflows 80, accessibility 80, performance 80, technical SEO/AEO/GEO 76, image delivery 90, security 65, operational readiness 60. Mean 76.375, rounded to 76. Unknown critical operational checks reduce confidence; they are not evidence of a breach or broken feature.

Impeccable technical rubric: accessibility 3/4, performance 3/4, responsive design 3/4, theming 3/4, implementation integrity 3/4 = **15/20, Good**. Theme/visual judgment is lower-confidence source review, not a new full visual design critique. Existing botanical identity and About layout were preserved; a dedicated dark mode is not a launch requirement.

## Verified passes

- Live customer crawl: 43 internal URLs returned 200; no invalid checked static anchors. All 12 individual product pages reachable. Mobile 390 and desktop 1440 homepage/catalogue/legal showed no JS errors or horizontal overflow in sampled states.
- 24 live product image/thumbnail URLs returned 200 with image/webp. Combined payload 1,635,410 bytes; largest 178,912 bytes. Lazy images loaded on scroll; offscreen hidden carousel slides are intentionally lazy. This confirms delivery/compression, not that every image depicts botanically accurate vetiver.
- Fresh axe WCAG A/AA scans of home, products and legal at 390/1440: zero automated violations. Some contrast and ARIA checks were incomplete and still require human review. Audit browser used test-only CSP bypass to load axe; production CSP unchanged.
- Three fresh unthrottled mobile browser observations with normal animation: LCP 2.452/2.168/2.256 seconds (median 2.256); CLS 0.01070/0.01097/0.01070; roughly 1.50 MB transferred in sampled observation. These are lab observations, not field CWV or slow-4G tests; no reliable INP measurement.
- Live home motion test passed 390/1440 normal motion and 320 reduced motion: seven sections visible, no overflow/errors, motion preference cleanup works.
- Live intro failure checks: blocked intro script opened content at 266ms; delayed script at 1240ms, with no late replay.
- Intercepted mobile enquiry POSTs: invalid inputs handled; failed request retains details, retry succeeds, Indian phone normalized; success message does not falsely confirm an order/payment. No real submission was made.
- Live canonical, unique descriptions, Organization/CollectionPage/WebPage schema, Cuddalore location, social metadata, robots directives, three-page sitemap, admin noindex/no-store and HTTPS header checks passed.
- Isolated worker/antispam checks passed validation, payload limits, honeypot, origin checks, idempotency, rate identity hashing, fail-closed limiter and durable acknowledgement. Isolated invoice database tests passed admin-only access, server totals, immutable snapshots, unique numbering and void-only updates.
- Admin subagent reported isolated combo tests at desktop/390; invoice studio tests at 320/390/desktop covered start-at-1 numbering, void/conflict handling, PDF bytes, mocked share/fallback and sales/history. These are mocked UI/isolated database results, NOT proof of real owner authentication or actual WhatsApp delivery.
- Fresh npm audit --omit=dev: zero known vulnerabilities in the resolved production dependency set.

## Findings and launch actions

### P1 — Confirm real enquiry operations before promotion (Confirmed configuration; unverified operation)
There is no direct wa.me customer link: the site collects an enquiry and the business follows up on WhatsApp. This differs from the original one-tap WhatsApp product brief, but matches an owner-callback business process if intentional. No publishable WhatsApp number is configured in public-site.json. Email notifications were disabled in the last observed deployment configuration. Decide whether callback is intended; if so, routinely check the admin inbox. If direct chat is wanted, supply the public business WhatsApp number. Never insert a guessed number. Run one owner-authorized real test enquiry, verify it appears in the real admin, then confirm the follow-up process.

### P1 — Account access and permanent sales retention need owner verification (Unknown)
Real sign-in, recovery, MFA for Google/Supabase/Cloudflare, external backup and restore are not proven by mocked tests. The owner previously reported MFA as unsure. Keep the latest stated permanent-sales-retention policy; no automatic deletion is recommended. Export and back up records outside the hosting account and verify recovery. Protect admin identities with MFA before a major launch. A code security score cannot cover unverified account controls.

### P2 — Product discovery sitemap gap (Confirmed)
The sitemap contains only /, /products and /legal, while 12 /pieces/ pages exist. Include current published product URLs using a catalog-backed sitemap so unpublished products do not remain indexed accidentally. Pages are already linked/reachable, so this is an optimization gap, not a total indexing block. Source: tools/generate-seo.mjs.

### P2 — Product price/contact extra step (Confirmed)
Live /pieces/product-malai-royal says 'Ask us about availability and the current price.' while the catalogue shows Rs650. The product-page source intentionally suppresses prices unless pricing flags explicitly permit them. Confirm live pricing flags and offer rules before changing this; show the current authoritative price consistently when valid. Product page reservation currently goes through catalogue, which adds a step.

### P2 — Search visibility remains unverified (Unknown)
Search Console setup is intentionally deferred until the domain is bought. Indexing, actual queries, local ranking, conversions and AI citations are unknown. No one can guarantee #1 for vetiver/Tamil Nadu. After buying the domain, update all canonical/OG/sitemap/origin references (including server/product-pages.mjs), configure redirects, verify Search Console and submit the sitemap. Add a truthful Google Business Profile only if eligible. Avoid invented district offices/location pages.

### P2 — Accessibility/performance coverage limits (Confirmed test limits)
Manual screen-reader/contrast review, 200%/400% zoom, physical phones, slow network field data and full authenticated admin accessibility remain untested. Axe incomplete results are not automatic failures. Homepage loads several product images before scrolling due native lazy-load proximity; further network savings may be possible. Preserve LCP hero eagerness.

### P2 — Policy/process clarity (Owner confirmation required)
Legal/customer information exists. Actual cancellation/refund turnaround, full publishable address where applicable and operational grievance handling need business confirmation/review; WhatsApp discussion alone does not verify policy adequacy. This audit makes no legal-compliance certification. Business name/contact and Cuddalore must remain truthful.

### P3 — Copy and project documentation
Customer reviews section repeats an empty-state invitation/explanation, and includes a reviews FAQ even when no approved reviews exist. Simplify when polishing; never invent testimonials. Admin combo hint had a malformed apostrophe in the audited version; recheck source/deployed parity before shipping a copy fix. PRODUCT.md and .drafts/LAUNCH-PLAN.md contain outdated static/no-backend descriptions; do not use those as current implementation evidence. Several older tests also use outdated admin tab/selectors or pre-canonical /products.html expectations; isolated audit copies handled those differences.

## Evidence and limits

- .drafts/launch-customer-evidence.json (live links/pages/validation)
- .drafts/LAUNCH-ACCESSIBILITY-PERFORMANCE.json and launch-a11y-performance.cjs
- .drafts/LAUNCH-IMAGE-EVIDENCE.json and launch-images.cjs
- .drafts/launch-dependency-audit.json
- .drafts/launch-seo/ (fetch, parse, robots, social, llms and redirect script evidence)
- tools/verify-seo.mjs --live, verify-product-pages.mjs, verify-home-motion.cjs, verify-intro-fail-open.cjs, verify-antispam.mjs, verify-worker.mjs, verify-invoices-db.mjs
- tools/launch-admin-commerce-check.cjs and launch-admin-products-check.cjs (isolated revised selectors)

Google PageSpeed API was rate limited; no Lighthouse/field performance score is claimed. llms.txt exists; its presence does not guarantee AI visibility. Missing optional Twitter handles or llms-full.txt are not blockers. AI crawlers inheriting robots wildcard rules is valid and not automatically a defect. No fresh full authenticated live database/security penetration test was performed. Scores apply to this bounded audit only.

