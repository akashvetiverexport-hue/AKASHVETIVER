# Reservation and review anti-spam review

Scope: Cloudflare Worker submission endpoints, both form clients, isolated tests. No live submissions or database changes.

## Existing controls confirmed in source/config
- Both forms contain visually hidden, keyboard-excluded and assistive-technology-hidden website honeypots; Worker independently rejects non-empty website values for both endpoints, before database RPC. A honeypot alone is easily bypassed and is not bot authentication.
- Same-origin and Sec-Fetch-Site cross-site checks; JSON body streaming cap 16 KiB; explicit validation; UUID idempotency keys; server-side product/offer resolution; privacy-preserving HMAC IP identity.
- Cloudflare binding ENABLE_EDGE_RATE_LIMIT=true uses a 20 attempts / 60 seconds burst budget keyed by HMAC identity; invalid and honeypot attempts count before database RPC. Reservation and review share a budget. Missing binding fails closed. Cloudflare location counters are approximate, local/eventually consistent rather than a strict global quota.
- Database also limits six accepted new submissions per hour per HMAC IP, with same-key retries returning the original receipt; this budget is shared across forms. Customers sharing an IP/network may share limits; a legitimate user can receive 429.
- Only approved, consenting reviews appear publicly. RLS/admin tests passed in isolated PGlite; no account password/MFA or Cloudflare WAF settings were changed. Notifications/email are disabled and remain deferred.

## Change in this review
- Previously, accidental browser autofill of the hidden reservation field left a user stuck with advice to email. request-flow.js now clears that field and asks the customer to retry without losing their visible details. This does not remove or bypass server-side checks.

## Evidence
- node tools/verify-antispam.mjs: isolated mocked Worker tests passed for both honeypots, cross-origin rejection, shared burst quota, HMAC identity, 429 + Retry-After, fail-closed missing binding, accepted request/review receipts.
- node tools/verify-edge-rate-limit.mjs, node tools/verify-worker.mjs and node tools/verify-feedback-security.cjs passed.
- node tools/verify-request-flow.cjs passed desktop/mobile: accidental autofill is cleared, retry works, failure state preserves details, idempotency key stays stable, success is not falsely reported.
- node tools/verify-database.mjs, node tools/verify-invoice-archive-database.mjs and node tools/verify-commerce-database.mjs passed isolated authorization, rate limit, receipt conflict and concurrency, archive atomicity and commerce checks.

## Limitations
No production burst testing, penetration or load test, live authenticated mutation, real email, Cloudflare WAF/account rule review, DDoS assessment or promise of complete security was performed. Public GET media/catalogue endpoints have caching but do not use the form submission limiter; inspect account-level traffic and WAF rules before deciding whether separate read throttles are appropriate, to avoid disrupting legitimate shoppers or shared networks. No proof of an active attack is claimed.
