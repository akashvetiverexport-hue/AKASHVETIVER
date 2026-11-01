# Mobile layout and catalogue audit — 26 October 2026

Scope: homepage, product catalogue, product and bulk enquiries, feedback, navigation, product images and catalogue propagation. Existing mobile hero composition preserved. Admin authentication remains deferred at the owner's request.

## Assessment

Indicative engineering assessment: 16/20 (accessibility 3/4, performance 3/4, responsive layout 4/4, visual consistency 3/4, interaction quality 3/4). This is not a WCAG certification or a real-device performance benchmark. Checks used Chromium phone emulation at 320px and 390px, and desktop at 1440px.

## Findings addressed

- P1: Mobile product showcase was taller than the viewport and advanced while users were reading. Compacted the image, description and existing thumbnail choices into one ordered panel; disabled mobile autoplay. No additional navigation buttons.
- P1: Homepage excluded published products without a featured order, and the bulk strip stopped after eight images. Both now include all published products, with featured products prioritized in the showcase.
- P2: About collapsed into a long straight timeline. Restored alternating image/text stages and a curved decorative trail on phones.
- P2: Bulk, reviews, FAQ and footer used excessive mobile spacing. Reduced gaps and typography proportionately while retaining content and usable controls.
- P2: Header could stay transparent at the product anchor. Aligned its background transition with section navigation.
- P2: FAQ submission instructions described an outdated email-only process. Updated them to explain the request reference and that an enquiry does not confirm an order or take payment.

## Measured section heights

| Section | 390px before → after | 320px before → after |
| --- | --- | --- |
| Products | 916 → 534px | 945 → 478px |
| Bulk orders | 596 → 455px | 632 → 510px |
| About | 2476 → 1496px | 2298 → 1518px |
| Reviews | 641 → 504px | 723 → 581px |
| FAQ | 859 → 588px | 912 → 588px |

No horizontal document overflow at 320px, 390px or 1440px. Desktop section dimensions retained. Long content and expanded FAQ answers still require natural scrolling, especially on short phones; content is not clipped to force it into a viewport.

## Verification

- Production build and TypeScript checks passed.
- Mobile catalogue regression passed at 320px and 390px: added unfeatured product appears in showcase, bulk strip, catalogue/deep links, and multi-piece enquiry selectors. Assertions use a mocked catalogue and mocked request receipts; no production customer data was created.
- Enquiry browser checks passed: required fields, product selection, errors retaining input, acknowledgement validation, duplicate-submit protection, retry identifiers and receipt/reset handling.
- Feedback browser checks passed at 320px and 390px: required rating/consent, service failure preserving input, retry, pending moderation acknowledgement and modal close. Submissions mocked.
- Feedback security regression passed: origin/validation rules, duplicate guard, honeypot, rate limit and timeout recovery.
- Image/catalogue regression passed: added and archived products, deep links and selectors, failure without stale fallback, invalid-file rejection and upload compression. Sample upload reduced from 2,163,285 bytes to 132,208 bytes WebP; thumbnail 13,992 bytes.
- Navigation regression passed on desktop/mobile, including manual scrolling, active links, reload hashes, delayed catalogue data and late layout growth.
- Worker checks and isolated PGlite database checks passed: validation, access rules, draft privacy, product verification, idempotency, rate limiting and moderation/outbox behavior. These are isolated tests, not live end-to-end email delivery.
- Live read-only health/catalogue/reviews checks passed; catalogue returned 12 published products. Empty invalid submissions were rejected with 422 before database writes.

## Remaining configuration and limits

- P1 launch configuration: Resend email notifications are not enabled. Enquiries are stored in the database; email delivery was not verified.
- Admin login work is deferred by the owner, not claimed complete in this audit.
- Published catalogue updates are available on subsequent loads after the short cache window (approximately 15 seconds). Already-open pages do not subscribe to realtime changes.
- Custom domain akashvetiverexport.in has not been purchased. Current hosting is Cloudflare Workers.
- Physical-device testing and measured production Core Web Vitals remain outside this browser-emulation pass.
