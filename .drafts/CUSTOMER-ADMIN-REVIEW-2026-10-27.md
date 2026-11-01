# AKASH VETIVER — customer and admin completion report

## Scope and review provenance
Implemented the October 27 screenshots and follow-ups. Three implementation agents handled admin/invoices, storefront, and category integration; two independent agents reviewed customer UX and browser behavior. The review used fresh isolated pages. No production customer submissions or invoice test records were created. Questions skipped: the user already gave the direction and authorized implementation.

## What changed
- Sales now leads with total product sales, customer purchases, paid pieces sold, average purchase, monthly trends and best-selling pieces. All values derive from saved issued invoices. Free gifts do not inflate paid-piece counts; voided invoices are excluded. Delivery charges and recorded payments are separate.
- Invoice numbers suggest 1, 2, 3 onward, including voided numeric records when finding the next number. Existing legacy numbers remain intact. Database uniqueness rejects duplicates; collision errors retain the draft and suggest the next number.
- Saved invoices have Share PDF using the device share sheet when supported, and a PDF download fallback. Sharing is initiated by the admin; no messages are automatically sent.
- Orders & reviews now identifies customer requests from reservation forms and removes its repeated heading. Customer accounts are not required to submit these forms.
- Product editing has one visible description. Image accessibility text is automatically maintained; existing useful descriptions are preserved.
- Raw vetiver roots is supported in the database category constraint, admin, website filters, catalogue validation and product selectors. Existing 12 products were unchanged. No invented roots product, weight or price was published. Until actual roots listings are added, the category shows honest availability wording and an email contact link.
- Offer settings, bulk-order wording and FAQs are shorter. FAQs now explain that delivery details and timing are discussed on WhatsApp, matching the actual short form.
- The mobile reservation form has more padding and field spacing, a compact unit-price line and concise contact consent. The redundant selection toast was removed.
- Product showcase autoplay now runs on mobile and desktop when visible, respects reduced motion, and stops after deliberate pointer, keyboard or focus interaction.
- Catalogue first paint uses a skeleton state instead of flashing built-in seed products before live data. Product loading starts without waiting to begin on the optional campaigns response.
- Intro uses the supplied KGS Home Decors reference as a timing/composition reference: logo and brand reveal, a restrained filling line, fade into a synchronized hero entrance. AKASH VETIVER keeps its own colours, logo and typography. The critical sequence does not depend on delayed GSAP scripts. Skip/reduced-motion/no-JavaScript paths remain usable, and CSP hashes are generated from the actual bootstrap scripts during builds.
- Mobile About composition and dotted trail were not edited.

## Skills applied
| Skill | Applied work |
| --- | --- |
| clarify | Short labels, simpler offer/bulk/FAQ copy, customer requests wording and compact reservation text |
| animate | Brand intro/hero synchronization, safe slow-script behavior and responsive carousel autoplay |
| adapt | Mobile form breathing room, touch-sized controls and narrow-screen checks |
| critique / impeccable | Two independent customer-role reviews plus detector/browser evidence; corrected FAQ mismatch, empty roots state and pointer-specific carousel behavior |
| polish | Consistent sales hierarchy, concise empty states and removal of duplicated headings/selection feedback |
| Supabase | Verified additive roots category constraint migration with row-level security retained; no product data changes |

## Verification passed
- TypeScript and production build.
- Admin product/offer CRUD at 390 and 1440, including roots category and automatic image text, image compression, gifts, combos and protected unauthorized UI.
- Admin workflow at 320, 390, 768 and 1440: requests pagination past 100, status/reviews, request-to-invoice creation, product-price refresh, dirty-state guards and retry behavior.
- Invoice number 1, saved history after reload and prior-month filtering; PDF download, native-share mock and download fallback; void handling and duplicate-number recovery.
- Sales fixture: two paid garlands at 650.25 produce 1,300.50 product sales, one purchase and two paid pieces. A zero-price gift does not change paid-piece counts or best sellers. Delivery75.50, recorded advance400 and remaining976 remain separate. Voiding resets sales counts and does not reuse the number.
- First-paint intro under the actual CSP at 390 and 1440 with GSAP delayed6.5 seconds: visible branded sequence, one ready event, synchronized hero, bounded exit and no late replay. Reduced motion, Skip intro and no-JavaScript content passed.
- Carousel automatically advances at390/1440; manual selection remains after another5.6seconds.
- Delayed catalogue boot/API test: seed text stays hidden, skeleton appears, then one resolved12-product list. Empty roots category and concise connected reservation passed.
- Reservation validation, API failure/retry/receipt and duplicate-submit protection used mocks; no production submission was sent.
- About/reservation regression at320/390/1440 passed with no text/trail collisions and visible price/reservation control.
- Independent customer checks found no horizontal overflow or JavaScript page errors at320/390/1440; labels, required-field focus and Escape focus restoration passed.

## UX review findings addressed
The initial independent design review gave a provisional28/40 Nielsen score, with recovery/submission intentionally not exercised by that reviewer. Confirmed issues were old FAQ instructions, an unhelpful empty roots category, and missing verified physical dimensions. FAQ and empty-state issues were corrected and retested. The technical reviewer confirmed mobile touch behavior; final code also fixes mouse selection. Detector warnings about placeholder dialog images, loading effects and the established font were reviewed in context rather than reported as proven visible defects.

## Remaining before launch
- Public admin login/email setup is still deferred. The open local admin preview saves only on this computer; live authentication remains protected.
- Add real roots products and verified dimensions/weights through admin. Measurements were not invented.
- Invoice-derived sales are not bank reconciliation. Later customer payments are not automatically tracked.
- Actual Supabase egress quota/usage remains unverified; existing public caching is retained.
- SEO and the separate security review have not started. The custom domain is not part of this release.

## Release
Published to the existing Cloudflare address as version 966dd7ef-cc25-4cda-ae00-b9153343bbc1. Live intro tests passed at390/1440 with intentionally delayed GSAP, reduced motion, skip and no-JavaScript behavior. Live public catalogue/campaign/review endpoints passed. Live site configuration points reservations to /api/requests and health reports submissions enabled; no production customer request was sent. The older smoke test's fixed2.5-second intro assertion was updated to await the new bounded outro instead.
