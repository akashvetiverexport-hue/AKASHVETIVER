# Akash Vetiver Export — launch checklist

Internal only. Exclude `.drafts` from public deployment. Nothing has been pushed to GitHub.

## Confirmed

- Akash Vetiver Export; akashvetiverexport@gmail.com; no public business address. WhatsApp business number pending.
- Individual orders are requests. Discuss availability, price and delivery on WhatsApp, confirm, then pay. Bulk enquiries request a quote.
- Later admin: manage products, requests and feedback approval. No invented reviews or response-time guarantees.

## Implemented frontend, not a live backend

- Order/bulk modes; multiple pieces/quantities; customer name, country-coded WhatsApp number, Indian delivery city/PIN and contact permission.
- Personal request details stay in page memory, not localStorage or public share URLs.
- No API configured: explicitly unsent summary with copy/email-app handoff. With configured API: timeout, retained inputs, duplicate-submit guard, retry key and validated receipt response.
- Feedback: honest local drafts, validation, same-origin endpoint checks, timeout and honeypot. Client checks are NOT server security.
- Unpublished policy templates in `.drafts/policies/`; no navigation links.

## Decisions required before backend/admin work

- Domain, DNS access, hosting and database/storage provider.
- Administrator identities and sign-in method: email codes or password.
- Resend account, verified sender domain and server-side secret setup.
- Business policy decisions, privacy retention/deletion rules and appropriate review.
- GitHub repository/access and permission to push.

## Required backend, not implemented

- Server-side validation of all fields, known product IDs and integer quantities. Resolve product names server-side; never trust client price/status.
- Persist requests before returning receipts. Track email delivery separately and use a retry/outbox process so failures do not lose requests.
- Durable idempotency: same key/payload returns same receipt; changed payload with reused key is rejected. Server-enforced expiry/limits.
- Distributed rate limiting, payload limits, strict content type, appropriate Origin/CSRF protection, honeypot enforcement and optional challenge verification.
- Keep Resend/database/admin secrets only in server environment. Fixed recipient/sender; escape user content in HTML email.
- Real admin authentication and server authorization, sessions, logout, recovery and audit logs. No frontend-only password gates.
- Product create/edit/archive and safe image storage; public catalogue sync.
- Feedback: pending-only creation, permission record, approved-only public reads and protected approval/rejection endpoints.
- HTTPS, tested security headers/CSP, backups, monitoring, dependency review and an explicit public-file deployment allowlist.
- Decide retention/deletion before collecting production details. Do not log request bodies or phone numbers in analytics.

## Request API contract proposal

Same-origin POST; Content-Type application/json; Idempotency-Key client UUID. Keep `requestsEndpoint` empty until implemented and deployed.

Body: `{ kind: "order" | "bulk", items: [{ productId, name, quantity }], customer: { name, whatsapp, city, postalCode }, message, consentToContact: true, website: "", openedAt }`.

`help-me-choose` is for bulk only. `custom` requires follow-up. `openedAt` is an untrusted client hint, not bot protection.

After durable acceptance ONLY: `{ id: "server-generated-reference", status: "received" }`. Receipt is not proof of email delivery, payment, reservation or order acceptance. Use meaningful non-2xx errors without exposing internals; UI handles 429 and retains details on timeouts/errors.

## Tests

## Product consistency acceptance checklist (owner requested)

These are pending requirements, not implemented features. Include them in admin/backend work even if the owner does not repeat them.

- Use one authoritative product source for the collections page, individual-order selectors, bulk-enquiry selectors and product details. Remove duplicated hardcoded options.
- Publishing a product makes it available in all applicable customer views; renaming updates labels everywhere without changing its stable ID or breaking shared links.
- Draft, hidden and archived products must not appear in public lists or selectors. Define a friendly unavailable state for old product links, rather than silently opening another item.
- Revalidate requested product IDs and availability on the server. If an item changes or is archived while a form is open, preserve customer details and explain what needs changing.
- Decide the homepage featured-product selection behavior with the owner; do not silently feature every newly created product. Preserve autoplay and the approved showcase layout.
- Extra product rows must use the same source as the first selector. Preserve quantities and valid selections when product data refreshes.
- Validate quantities and handle repeated selection of the same product consistently; agree whether repeated items merge before shipping the backend.
- Product changes must refresh filters, result counts, search, image alt text and details. Maintain stable category IDs and safe, resilient image loading.
- Check loading, fetch failure, empty catalogue, no search results and archived-link states on desktop/mobile and keyboard navigation.
- Recheck query/filter state, direct product links, Back/Forward, refresh, share/copy fallback and the full request journey after admin changes.
- Requests need server-issued references, accurate received/error states, retry deduplication and durable storage. Email delivery failure is separate from request acceptance.
- Only approved feedback with publication permission becomes public. Keep drafts, pending feedback and admin records private.
- Confirm destructive admin actions, restrict permissions server-side, and provide recoverable archive behavior where possible.
- Do not invent payment, stock, delivery, refund or response-time promises. Ask about business choices; independently catch ordinary technical omissions.

### Verification commands

- `node tools/verify-request-flow.cjs`: desktop/mobile forms and explicitly mocked API cases, not real delivery.
- `node tools/verify-url-sharing.cjs`: URL/share/history regressions.
- `node tools/verify-feedback-security.cjs`: component-level feedback hardening tests.
- `npm run build`; `node --check script.js`; `node --check request-flow.js`.
- Still required on selected hosting: persisted requests, real email delivery/retries, admin authorization, product publication and approved-only feedback tests.
