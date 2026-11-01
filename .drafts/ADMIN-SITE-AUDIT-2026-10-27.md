# AKASH VETIVER — admin and opening-experience audit

## Approved design brief (shape)
Keep the forest-green brand and existing logo. Make Products, Offers, Orders & reviews, Invoices and Sales one coherent workflow, with clear loading, empty, success and retry states. Polish public forms and product image sizing. Preserve the mobile About composition and dotted trail. Keep public admin authentication protected; email/login configuration and SEO are separate follow-up work.

## Findings and fixes (audit)
| Priority | Finding | Resolution and evidence |
| --- | --- | --- |
| P1 | Page could appear before a delayed entrance animation | Intro markup and pending state now exist at initial parsing; bounded 1.8-second fallback and late-GSAP guard. index.html, intro-loading.js, script.js |
| P1 | Invoice product choices could remain stale after product updates | Catalog-change event refreshes available choices while retaining existing invoice lines. ui/admin.ts, ui/admin-invoices.tsx |
| P1 | Older orders disappeared beyond the first 100 | Paginated orders and reviews with explicit load-older controls; verified with 101 isolated orders. ui/admin-inbox.ts |
| P1 | Sign-out could discard unsaved invoice or campaign work | Shared dirty/busy guard protects sign-out and browser navigation. ui/admin-guards.ts |
| P2 | Campaign failures lacked a recovery control | Refresh/retry and loading/empty/error states. ui/admin-commerce.ts |
| P2 | Invoice creation routes used inconsistent seller defaults | Reuse latest saved seller details across creation routes. ui/admin-invoices.tsx |
| P2 | Failed sales loads could resemble real zero sales | Error/retry state instead of zero figures; retained data explicitly identified on refresh failure. ui/admin-sales.tsx |
| P2 | Narrow sales filters squeezed controls | Two-column mobile filter layout, full-width refresh row and larger touch targets. admin-studio.css |
| P2 | Repeated public downloads could increase Supabase egress | Controlled same-origin WebP proxy with edge/browser caching; 30-second catalog and 15-second campaigns/reviews cache. Private endpoints remain uncached. server/worker.mjs |
| P3 | Product search had no no-results explanation | Visible no-results feedback; filter reapplied after product list refresh. ui/admin-shell.tsx |

## Polish
Consistent focus rings, readable secondary text, touch targets, inbox action spacing, mobile filter alignment, contained product imagery and compact form spacing. The website logo remains in the admin shell. No mobile About layout changes were made during this pass.

## Validation
Passed before release:
- TypeScript checking and production build.
- Worker validation/security and public cache regression tests.
- Playwright admin workflow audit at 320, 390, 768 and 1440 pixels: navigation, 101 orders, status updates, review moderation, order-to-invoice creation, refreshed product prices, dirty-state protection and load-error recovery.
- Invoice save/reload, previous-month filtering and PDF download.
- Desktop/mobile product CRUD, publication, gift image compression, bundles and festival campaigns, with isolated test data.
- Public reservation flow, multiple bulk items, failed-request retry and duplicate-submit protection.
- About/reservation checks at 320, 390 and 1440 pixels.
- First-paint intro and bounded dismissal at 390/1440 with GSAP deliberately delayed; reduced-motion immediate content; no browser JavaScript errors in that test.

All write tests used local fixtures, not production customer records. Screenshots were visually reviewed for mobile Sales and Orders.

## Review score (0–4, qualitative engineering assessment)
| Dimension | Before | After |
| --- | --- | --- |
| Workflow completeness | 2 | 3 |
| Recovery and feedback | 1 | 3 |
| Responsive layout | 2 | 3 |
| Loading and performance resilience | 2 | 3 |
| Visual consistency and interaction clarity | 2 | 3 |

These scores describe the reviewed flows, not a claim of full accessibility certification or exhaustive device coverage. Strengths retained: a consistent brand palette, invoice snapshots, protected admin writes and compact WhatsApp-first reservations.

## Remaining boundaries
- Supabase reports the project healthy; row-level security is enabled on products, festival_campaigns, order_requests, customer_feedback and invoices.
- Actual monthly egress consumption/remaining quota was not available through the connected tools. Caching reduces repeat transfers but does not guarantee staying within a plan limit.
- Public admin still requires authentication. Resend/email login setup remains deferred as requested; local preview is not live authentication.
- Sales are derived from saved invoices and exclude voided invoices; they are not bank/payment reconciliation.
- Business registration/tax details remain for later; none were invented.
- SEO work has not started.

## Live-only regression found and fixed
The production Content Security Policy blocked the early inline intro script, despite local timing checks passing. Added an exact SHA-256 script allowance (no unsafe-inline for scripts). Live lifecycle checks were used to verify the fix.

## Deployment verification
Published Cloudflare version 5b1e039d-d068-47f6-9278-6ec0646aceb3. Live catalog/campaign/review endpoints passed. Homepage, collection and protected admin passed at 390/1440 with no horizontal overflow or JavaScript errors. After correcting the production CSP, document-start observation confirmed intro pending state before markup, completion event, removed overlay and visible hero on both sizes with delayed GSAP. The original selector-based live intro check failed; the production issue was diagnosed and fixed rather than counting that run as passed.

