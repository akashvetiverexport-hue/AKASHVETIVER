# Security review — 28 October 2026

Scope: existing Cloudflare Worker/static storefront and Supabase project lgkkjubwdxdfpmoxkrmd. Read-only source/configuration review, live metadata/advisors, and isolated local tests. No production mutation, customer-row query, real submission, email delivery, login attempt or external scanning. Source reviewed while SEO changes were being made separately. This is a bounded review, not a security certification.

## Outcome

No confirmed critical/high issue, authorization bypass or private-customer-data disclosure was found in this scope. One medium abuse-resilience gap was reproduced offline. Auth configuration still requires launch follow-up. No security change was applied to production.

## Confirmed findings

### P2 — Invalid product/offer submissions do not consume the durable attempt limit

Evidence: public.vettiver_submit increments vettiver_private.rate_windows before checking product availability, then raises product_unavailable / offer_unavailable within the same transaction. The transaction rollback also removes the rate increment. The Worker validates shape first but allows well-formed product identifiers that do not exist. Eight synthetic unavailable-product submissions against an isolated PGlite database all reached the product lookup and left zero persisted rate-window rows. Existing six-successes/hour limit still works for accepted requests.

Impact: repeated valid-shaped failures can cause Worker and database work without consuming the intended persisted attempt allowance. Origin checks constrain cross-site browser requests but are not bot authentication. This does not enable reading private rows or creating unauthorized invoices.

Safe fix: add an independent edge attempt limiter before the database RPC, while preserving idempotent receipt retries. Alternatively redesign the database RPC to return controlled validation outcomes without rolling back the separately committed attempt count. Do not simply remove rollback/atomicity from successful submission, receipt and notification writes. Test repeated invalid products, expired offers, quota boundary, concurrent submissions, and successful same-key retries. Cloudflare account-level WAF/rate rules were not inspected, so their mitigating effect is unknown.

### P3 — Supabase leaked-password protection is disabled

Live security advisor reports auth_leaked_password_protection. Current admin UI uses signInWithOtp with shouldCreateUser:false; therefore this is not evidence of an exploitable password flow in that UI. Password sign-in settings, owner password use and MFA were not checked.

Safe follow-up during deferred live-auth setup: verify enabled authentication methods, owner access and MFA; enable leaked-password protection if passwords are used and the project plan supports it. Supabase documents this feature as Pro-plan-and-above: https://supabase.com/docs/guides/auth/password-security . No plan upgrade or auth setting change was made.

## Advisor findings reviewed and accepted as intentional

- public.vettiver_admins has RLS and no policies. This is deny-by-default; anon/authenticated table grants are revoked. Do not add a public policy merely to remove the advisory.
- public.is_vettiver_admin is SECURITY DEFINER and executable by authenticated users. Its live definition returns only membership for auth.uid(), uses an empty search_path, and denies anon execution. It does not take a caller-selected user ID or trust editable user_metadata. It supports admin RLS over the otherwise unreadable membership table. Changing it to SECURITY INVOKER or revoking authenticated execution would break intended authorization.

## Verified protections

- Live metadata: all six public tables (products, festival_campaigns, vettiver_admins, order_requests, customer_feedback, invoices) have RLS enabled. No public-schema views appeared in the inspected metadata.
- Requests, feedback and invoices use explicit is_vettiver_admin membership policies. Product reads expose published rows; campaign reads expose only enabled currently active campaigns. Authenticated users do not automatically acquire admin rights.
- Live privileged submit/claim/finish RPCs deny EXECUTE to both anon and authenticated. Their search_path is fixed. Private schema USAGE and private-table SELECT are denied to both roles. Private tables lack RLS but are privilege-isolated; optional defense-in-depth RLS can be evaluated separately without changing existing grants.
- Worker request bodies are capped at 16 KiB including streamed bodies, require JSON, validate consent/phone/counts, normalize duplicated items, require UUID retry keys, and HMAC the Cloudflare-provided client IP. Product names/prices/offers are resolved server-side in SQL. Advisory transaction locks and receipt hashes provide atomic idempotency.
- Public reviews select only approved, consenting rows and explicit fields. Public catalog/campaign caches use the public key. Private submission replies are no-store. No private response cache was found.
- Public media proxy allows bounded WebP paths only, fixed storage origin, rejects redirects and oversized/non-WebP responses. Live bucket is public by design, limited to WebP and 512 KiB. Uploads use new UUID names with upsert:false; admin-only policies control writes. Public product images, including unpublished-upload URLs if already known, must not contain confidential material. Immutable caches mean deleting an origin object is not immediate CDN/browser erasure.
- Customer inbox text uses textContent; React invoice surfaces escape text; inspected dynamic storefront HTML escapes interpolated names/descriptions. No confirmed stored-XSS sink was found in inspected paths.
- Static headers contain restrictive script CSP hashes, frame-ancestors none, object-src none, self-only form-action, nosniff and DENY framing. Build recomputes inline bootstrap hashes. Live header enforcement was not independently checked in this sub-review.
- Build copies an explicit public allowlist into clean managed dist, validates public keys, and excludes source/drafts/credentials. Current dist filename scan found no .env, .drafts, source maps, admin-preview or server path artifacts. This was not an exhaustive secret scan of every asset. Wrangler targets dist rather than repository root.

## Executed checks

All passed:

1. node tools/verify-worker.mjs — mocked upstream; validation, body size, origin, retry key, HMAC identity, errors, secret-safe config, notification fixed recipient/acknowledgement.
2. node tools/verify-public-cache.mjs — mocked cache/upstream; public endpoint cache reuse and media path rejection.
3. node tools/verify-feedback-security.cjs — isolated component; validation, endpoint restrictions, duplicate guard, rate-limit and timeout handling.
4. node tools/verify-database.mjs — isolated in-memory PGlite; anon/non-admin denial, admin access, draft privacy, receipt conflicts, successful request rate limit, outbox and audit.
5. node tools/verify-commerce-database.mjs — isolated PGlite; admin-only prices/campaigns/deletion, input constraints, trusted quote snapshots, expiration and deleted partner behavior.
6. Additional isolated PGlite reproduction — eight unavailable-product attempts leave zero rate-window rows, confirming P2 above.

Live read-only checks: Supabase security advisors; pg_policies; table RLS flags; relevant pg_proc definitions and execute privileges; private-schema/table access privileges; bucket constraints. No real customer rows or credential values were requested.

## Remaining limitations / launch actions

- End-to-end live admin OTP/email delivery remains deferred. Verify redirect allowlist, session expiry, MFA/owner recovery and revoked-admin behavior during that setup. No sign-in emails were sent.
- No dependency advisory audit, full browser penetration test, authenticated live mutation test, load test, Cloudflare WAF/account audit or provider secret-rotation audit was performed.
- Local RLS tests cover their listed migrations; current live invoice RLS metadata was inspected, but the invoice trigger was reviewed statically rather than newly exercised in a live account.
- Review data-retention requirements for requests, email outbox bodies, audit snapshots and invoice data; no retention/deletion policy was changed.
- Supabase skill was read. Changelog markdown fetch through web failed due to unsupported content type; no Supabase feature implementation occurred. Current official password-security documentation was checked.

Recommended order: implement/review independent submission attempt throttling; finish owner live-auth configuration and verification; review deferred account settings; then repeat targeted affected tests before production deployment.

## Addendum — live admin route headers and concrete mitigation

Read-only HEAD checks at approximately 17:45 UTC on 28 October confirmed:

- /admin is 200 with Cache-Control: public, max-age=0, must-revalidate and no X-Robots-Tag.
- /admin.html is 307 to /admin, with no-store and noindex,nofollow.
- Both responses enforce the configured CSP, DENY framing, nosniff and referrer policy.

P3 confirmed: the header rule applies to the redirect rather than the served admin shell. Add an exact /admin rule with Cache-Control: no-store and X-Robots-Tag: noindex, nofollow. The shell is static and contains no customer records, so this finding is not evidence of private data leakage. Verify both routes after deployment. Parent agent owns this correction and the HSTS addition.

The parent is implementing the P2 mitigation as a native SUBMISSION_RATE_LIMITER binding with a 20-attempt/60-second burst threshold, account namespace 2026102801, using the existing HMAC IP identity before body validation/RPC. ENABLE_EDGE_RATE_LIMIT controls fail-closed binding readiness. Existing SQL six accepted requests/hour and atomic idempotency remain unchanged. This addresses repeated invalid attempts independently of SQL rollback. Retries still consume burst quota and can temporarily receive 429; after it clears they retain the original receipt. Counters are approximate, eventually consistent and local to a Cloudflare location, so this is not a strict global quota. See https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/ . This sub-review did not implement or independently validate that pending change; parent testing/deployment evidence should be appended when completed.

## Final mitigation verification ? 29 October 2026
Deployed version 042a3faf-0517-4b0a-9c26-fd4790eb957b verified at 100% traffic. The independent edge guard is enabled. node tools/verify-edge-rate-limit.mjs passed: failed database attempts and invalid payloads consume burst quota; throttled and missing-binding paths stop before RPC; HMAC identity and stable retries are preserved. Live health confirms submissionsEnabled=true; no live customer request or burst test was sent.
Live SEO/header checks passed: final /admin has no-store and noindex, and home has HSTS max-age=31536000. Read-only Playwright passed mobile390/desktop1440 for public routes and protected admin; workspace remained inaccessible without login.
The earlier dependency-audit limitation is superseded: npm audit --omit=dev completed with zero known production vulnerabilities (evidence .drafts/security-dependencies.json). Other limitations remain, including deferred live authentication/email acceptance, account controls, full penetration/load testing and retention policy. This is a scoped review, not a security certification.

Final live intro verification also passed: node tools/verify-brand-intro.cjs https://akashvetiver.akashvetiverexport.workers.dev. At 390px and 1440px the brand sequence was visible, hero reveal synchronized, exit bounded, and no late replay or CSP errors occurred with GSAP delayed 6.5 seconds. Reduced-motion, Skip intro and no-JavaScript cases passed.
