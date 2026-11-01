# Launch improvements — 30 October 2026

Published version: 626eb932-40b6-4bfb-b28c-8f6be502bc5a at https://akashvetiver.akashvetiverexport.workers.dev . This updates FINAL-LAUNCH-AUDIT.md. Preserve owner-confirmed flow: submit details -> stored enquiry -> Resend notification to owner Gmail -> owner contacts customer. Direct WhatsApp is NOT a missing feature for this chosen flow.

## Implemented

- Dynamic sitemap uses current published catalogue, excludes drafts/unsafe IDs/duplicates, removes unpublished pieces, and returns retryable 503 on database outage. 15 current URLs (3 main +12 products). HEAD supported for sitemap/product pages; disallowed methods return405.
- Product/Breadcrumb/WebPage structured data with exact CSP hash, complete sharing metadata and canonical origin generated from public-site.json. Domain change now updates product and main-page canonicals together after build.
- Product prices now visible with truthful guide-price labels when price_is_sample is true. Current seed products are marked sample. Only confirmed prices without enabled offers get Offer schema; no invented availability/ratings. Owner should confirm actual prices and sample flags in admin before advertising firm prices.
- Search/crawler wording matches enquiry-follow-up process; no unsupported ranking promises or district locations.
- Total request body deadline10s; stalled connections cancelled before database work. Existing16KB body limit and server validation retained. Temporary API failures give Retry-After guidance.
- Submission-triggered notification dispatch limited to one job; scheduled queue processing retains ten-job batches and existing backoff/idempotency. Delivery errors never become false success. This is not proof of Gmail inbox receipt.
- Safe /api/health notificationsConfigured flag reveals configuration readiness only, no secrets. Admin inbox warns if email alerts disabled/uncheckable; each enquiry shows pending/provider-accepted/failed email status. Refresh updates configuration notice too.
- Failed/uncertain customer submissions now expose an actual email/copy fallback, retain details and stable retry key, warn about possible duplicate receipt, and hide fallback on successful retry. Clipboard wording remains honest about uncertain receipt.
- Reviews empty-state copy simplified. Approved layouts/preloader/brand retained.

## Verification

Production build/typecheck passed. Isolated tests: verify-worker, verify-launch-resilience (stalled stream cancellation/no upstream write, Retry-After, one email job/failure, setup flag, HEAD), verify-antispam, verify-edge-rate-limit, verify-public-cache, verify-media-stream, verify-sitemap, verify-product-pages, verify-seo, verify-request-flow and preview-admin --audit-check passed. Admin audit covers101 requests, status updates, invoice handoff, sales failure/retry and320/390/768/1440 widths. Request test covers390/1440 and fallback/duplicate prevention. Live metadata checks passed after deployment. No live customer POSTs, load flooding or email messages were sent.

No capacity claim: edge cache reuse and throttling were tested in mocks, not a multi-region production load test. The existing edge limit20/minute and database limits remain. Not hacker-proof or DDoS certification. No database migrations or account security settings changed.

## Updated provisional scores

Same eight-category mean as previous report: customer journey85 (was80), admin85 (80), accessibility80 (unchanged prior scan), performance80 (unchanged prior lab measurements), SEO83 (76), image delivery90 (unchanged), security70 (65), operational readiness60 (unchanged). Mean79.125 => **79/100**, previously76. Scores measure bounded implementation/readiness judgment, not Google or independent security scoring.

SEO skill weights: technical90*.25 + content65*.20 + on-page90*.15 + schema90*.15 + performance80*.10 + images90*.10 + AI readiness65*.05 =82.75 =>83. Separate heuristic AEO readiness75 and GEO readiness65: descriptive products/business identity improved, but real answer placement/citations, independent authority, local profile and rankings remain unknown. No measured Google/AI visibility score is available.

## Still missing / owner dependencies

1. Domain purchase and Cloudflare attachment; choose canonical origin and validate redirect/admin auth allowed URLs.
2. Verified Resend sender domain, secret key, enable notifications, review old pending queue, then test real Gmail receipt. Current deployed ENABLE_NOTIFICATIONS=false; health reports notificationsConfigured=false. Customer enquiry storage works independently, so owner must monitor admin until email is active.
3. Real admin email sign-in test and Supabase Auth SMTP verification separate from Resend notification code.
4. Owner MFA/recovery checks for Gmail, Supabase and Cloudflare; external backup/restore for permanent sales and images.
5. Search Console verification and sitemap submission after domain purchase; eligible truthful local business listing, customer conversion monitoring. Analytics is optional and not added without choosing an appropriate privacy-conscious setup.
6. Actual business policy/process details and address/disclosure review; manual accessibility and slow-network/field performance coverage; staged capacity test before a major campaign.

See DOMAIN-EMAIL-LAUNCH-STEPS.md for steps. Prior audit warnings about missing direct customer WhatsApp should be considered resolved by owner intent, not implemented as an unwanted feature. Subagents completed search work and supplied flow/security findings; root completed interrupted flow/security implementation and tests after usage interruptions.
