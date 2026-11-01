# Sales export and invoice archive — 29 October 2026

## Implemented
- Sales uses INR without an unnecessary currency picker. New invoices use INR. Existing foreign-currency invoices retain their original currency in history, PDFs and archives; they are never converted or added to INR totals.
- Sales → Export & storage offers last six complete months, last twelve complete months and custom completed date ranges.
- Prepare an export, then download full JSON invoice snapshots and a spreadsheet-safe sales CSV. Voided invoices remain in the backup, with zero product sales in the CSV. Different currencies remain explicit.
- Open the JSON backup locally to browse records and download individual PDFs, including after the online records have been removed.
- Optional deletion appears only after reselecting a backup matching the prepared export and current database rows. A second-copy acknowledgement and explicit count/date confirmation are required. No automatic retention/deletion task exists.
- The database RPC checks authorization and full typed snapshots under row locks, then deletes atomically. Changed, missing, duplicated or incomplete records fail without partial deletion. Direct table deletion remains denied.
- A private numeric high-water mark preserves invoice numbering after old invoices are deleted. Old numeric values cannot be reused. New invoices continue from the highest number ever saved.
- Existing trigger-only private functions have direct execute permissions removed before authenticated schema USAGE is introduced for narrowly granted helper calls. Trigger behavior remains covered by regression tests.

## Verification
- `npm run typecheck` passed.
- `node tools/verify-invoice-archive.mjs` passed: six/twelve-month year boundary dates; strict calendar validation; complete round trip; changed-record comparison; duplicate/inconsistent-total rejection; spreadsheet formula escaping.
- `node tools/verify-invoice-archive-database.mjs` passed: anon/non-admin denied; direct deletion denied; all snapshot/range/duplicate checks; voided-after-export rejection and atomicity; valid deletion; numbering high-water retained.
- `node tools/verify-commerce-database.mjs` now includes the new migrations and passed after trigger routine permission tightening: product/audit/campaign functionality unchanged.
- `node tools/preview-admin.cjs --archive-check` passed: JSON and CSV downloads; foreign and void records retained; wrong file cannot delete; verification/acknowledgement/confirmation; sales refresh after deletion; downloadable PDF from backup after deletion; next number4 after removing1–3; no overflow at320/390/1440.
- `node tools/preview-admin.cjs --studio-check` passed: existing invoice numbering, collision, PDF/share, totals, gifts, history, mobile and desktop regression flows.
- Browser checks use `.drafts/admin-preview-check.json`, not the owner's preview records. No live customer data was deleted or created.

## Storage evidence and boundaries
Read-only Supabase query on29October: database11,876,019 bytes (11MB), invoice relation plus indexes72kB, zero saved live invoices. This is a PostgreSQL size snapshot, not a complete provider quota/billing measurement. Uploaded image storage and traffic are separate; retaining six or twelve months does not guarantee staying on the free tier.

After deletion, online sales totals/history exclude those records. Retain the JSON and CSV on two devices/storage locations. Imported backup viewing reads the file locally; PDF generation loads the site's font/modules and therefore is not guaranteed with a completely cold offline browser. No live migration or deployment was performed by this subtask; parent records final deployment state in PROJECT-HANDOVER.md.

Migration: `supabase/migrations/20261029082709_invoice_archive_and_numbering.sql`.

Parent applied the additive migration successfully; Supabase recorded version20261029082709 and the local filename/test references were aligned. Read-only post-apply checks reported zero invoices, high-water0, anon execution denied and private-state SELECT denied. Final compiled archive browser check passed again; no live records were deleted.
