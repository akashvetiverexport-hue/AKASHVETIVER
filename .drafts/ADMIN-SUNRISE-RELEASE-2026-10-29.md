# Admin and sunrise release ? 29 October 2026

Release: b706018b-80ac-44f8-a4ac-45d837857852 on the existing Cloudflare workers.dev site.

## Requested changes
- The supplied Amour sunrise component was adapted to AKASH VETIVER: botanical off-white, forest/moss green, actual crest, handwritten VETIVER strokes, rising sun and leaf flourish. Branded text stays AKASH VETIVER. No simulated percentage is shown in the production intro.
- Production welcome takes about 2.8 seconds, supports Skip and Escape, respects reduced motion, and is skipped for anchor navigation/back navigation. Build-time React markup appears before scripts. The independent bootstrap finishes even if the React entry is blocked or late, and never restarts over an open page. Underlying controls are inert until reveal; normal scrolling is restored.
- React/TypeScript/Tailwind/shadcn were already configured. Reusable component: components/ui/amour-sunrise-preloader.tsx; standalone demo: components/ui/amour-sunrise-demo.tsx. Existing UI folder is components/ui and Tailwind entry is ui/styles.css. The component's prefixed styles are self-contained. No new dependency was needed.
- tools/generate-intro.mjs renders the first-paint poster and injects tools/intro-bootstrap.js into index.html. Vite has a separate ui/intro.tsx entry. Build generates current CSP hashes in dist/_headers.
- Product picker now has a viewport-bounded scroll area with overscroll containment. Wheels/touch stay within the product list rather than moving the whole page at its edges.
- Combos has its own disclosure, separate from discounts/gifts, with a link to the shared offer schedule. Existing eligibility, saved values and offer behavior are preserved.
- Orders & reviews is now Reservations & reviews. These are customer form requests, not proof of paid purchases; staff confirm them on WhatsApp. Sales are derived from saved issued invoices, not from reservations.
- Currency picker removed. New invoices and Sales use INR; legacy foreign-currency invoices remain unchanged and explicit in history/PDF/exports.
- Sales ? Export & storage offers six/twelve complete months or custom completed dates, full JSON snapshots, formula-safe CSV, local backup browsing and invoice PDF downloads. Verification of the downloaded file, second-copy acknowledgement and explicit deletion confirmation are required before removal. Nothing is deleted automatically.
- Archive removal is admin-only and atomic: changed/missing/incomplete snapshots reject the batch. Numbering retains a permanent high-water mark after deletion. Online sales/history exclude deleted records; saved JSON/CSV must be kept. PDF regeneration from backups requires the site assets/fonts to be available, so cold offline operation is not promised.

## Data and migration
Applied additive migration supabase/migrations/20261029082709_invoice_archive_and_numbering.sql. Post-apply checks: zero live invoices, highest number0, anon RPC execution denied, private numbering table denied to authenticated. Existing trigger-only private functions no longer allow direct role execution. Advisors show intentional deny-all RLS tables and the pre-existing admin helper/password-setting notices. No live customer record was created or deleted.

Read-only size observation: approximately11MB database;72kB invoice table/indexes;0 live invoices. Supabase pricing currently lists500MB database,1GB file storage and separate egress allowances. Six/twelve months is a report choice, not a free-tier guarantee. Reference: https://supabase.com/pricing

## Verification
- npm run build (includes TypeScript) passed.
- Targeted admin scroll/combo/inbox Playwright passed320/390/768/1440.
- Archive utilities, full-snapshot permission/atomicity/numbering PGlite and commerce regression tests passed.
- Isolated archive and invoice studio Playwright passed320/390/1440: downloads, wrong-backup rejection, verified deletion, backup PDFs, next-number preservation, collision handling, share fallback and history.
- Sunrise first-paint tests passed390/1440 with normal, blocked and delayed module loading; no hydration errors, one bounded reveal, full viewport coverage and no late replay. Anchor links skip the intro.
- Existing intro tests passed normal reveal with delayed GSAP, CSP, reduced motion, Skip and no-JavaScript behavior.
- Live deployment verification results are appended below after completion.
- Skills used: Animate (sunrise sequence and lifecycle), Polish + Impeccable (brand, spacing, scroll containment, responsive checks), Supabase (guarded migration, privileges and storage evidence). Two scoped subagents handled admin refinement and archive workflow; parent integrated, reviewed, tested and deployed.

## Preserved / remaining
Mobile About layout and dotted trail unchanged; public login protection retained; actual local preview data untouched. Domain purchase, owner authentication/email setup, final business/product details and Search Console remain the previously documented prerequisites. Source is still uncommitted; do not reset or clean the workspace.

## Final live verification
Cloudflare release b706018b-80ac-44f8-a4ac-45d837857852 deployed successfully. Live SEO, final route/admin headers, reservation configuration, public catalogue/campaign/review endpoints and WebP assets passed. Playwright390/1440 passed home/catalogue/protected admin with no horizontal overflow or JavaScript errors. Live sunrise normal/blocked/late entry scenarios passed at390/1440, with full viewport coverage, single bounded completion and no late replay or hydration errors. Anchor navigation initially timed out waiting for the full load event; a focused rerun waiting for DOM readiness passed (node tools/verify-sunrise-preloader.cjs https://akashvetiver.akashvetiverexport.workers.dev --anchor-only). No source changes after deployment, only test synchronization and documentation.
