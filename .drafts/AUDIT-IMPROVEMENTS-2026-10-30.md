# Audit improvements — 30 October 2026

## Published
- Product pages /pieces/<product-id> use only current published catalogue records, escape content, restrict image URLs and fail closed for missing/unpublished or unavailable catalogue. Product names are crawlable links; normal catalogue interaction still opens its existing dialog. Prices and offers are omitted from new product pages because accurate current offer presentation requires more work. Live wedding garland page returned 200, invalid product returned 404, and the live call-to-action opened the matching product dialog.
- Legal information includes owner-confirmed WhatsApp order discussions, customer-paid return shipping subject to consumer rights, missing-item video if available, Akash Vetiver contact in Cuddalore and Gmail, and intended permanent retention of sales/invoice records. Exact terms, publishable address and applicable grievance requirements need owner and legal review. Permanent retention must be reviewed for applicable privacy and tax rules.
- Improved accessible names on the brand and Discover the craft links. Isolated axe-core WCAG 2/2.1 A/AA checks on sampled pages/dialogs and keyboard dialog checks passed; manual screen reader, full contrast and zoom testing remain.
- Replaced preloader logo with same 480px lossless WebP: 537,990 to 48,994 bytes. Header crest copy 189,706 to 22,792 bytes. These are asset size reductions, not measured Core Web Vitals improvements. Network instability prevented repeatable live speed measurement.
- Photo proxy enforces its 512 KiB maximum while reading the stream, regardless of Content-Length; oversize data is cancelled. Worker, streaming and product security tests pass.
- Added canonical metadata and sitemap coverage for the legal page. No ranking or indexing guarantee.

## Remaining work
- Supabase Free does not include leaked-password protection; admin uses email magic links. Secure owner Gmail and Supabase dashboard with MFA. Website admin MFA requires complete enrollment, challenge, restrictive database/storage policies and recovery tested against an isolated account before owner enrollment; it has not been enabled or verified. Do not claim it is active.
- Live authenticated owner login/recovery and notification delivery remain unverified; notifications disabled. Account settings, WAF, full backups and restoration, security penetration testing and production load testing remain unverified. Free plan automatic backups unavailable; storage objects require separate backup. See SECURITY-ACCOUNT-FOLLOWUP-2026-10-30.md.
- Search Console verification and sitemap submission require owner access; real rankings and field performance are unknown. Individual product sitemap entries and price/offer schema require safe published-data handling and should not be fabricated.
- Legal wording is incomplete pending terms, applicable location/grievance disclosures, retention rules and qualified legal review.

## Validation
npm run build; verify-product-pages.mjs; verify-media-stream.mjs; verify-worker.mjs; verify-seo.mjs; verify-url-sharing.cjs; verify-about-reservation.cjs; verify-sunrise-preloader.cjs; isolated axe scans and keyboard navigation. Live read-only checks: product 200, nonexistent product 404, legal page 200 and matching product dialog opened from product-page CTA. No live customer submission or live admin mutation performed.
