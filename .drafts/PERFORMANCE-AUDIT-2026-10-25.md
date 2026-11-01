# Public website audit — 25 October 2026

Scope: homepage and collection on Cloudflare with live Supabase. Admin login is deferred at the owner's request. This focused engineering score is not a Lighthouse score or WCAG certification.

| Dimension | Score / 4 | Finding |
|---|---:|---|
| Accessibility | 3 | Labels and image alternatives checked; heading outline, mobile input size and targets corrected. Full contrast/screen-reader coverage pending. |
| Performance | 3 | Downloads and layout shift substantially reduced; slow-connection collection readiness is 4.7–6.5s in the final sample. Cold connection timings remain variable. |
| Responsive behavior | 3 | Phone/tablet/desktop interaction checks passed; mobile category filters scroll horizontally. |
| Theming | 3 | Botanical palette and shared tokens retained; some component literals remain. |
| Anti-patterns | 3 | Photography leads the collection; established typography and motion retained. |
| **Total** | **15 / 20** | **Good, with remaining performance and accessibility work.** |

## Measurements

Chromium: 100ms simulated latency, 200,000 bytes/s download (~1.6 Mbit/s), 4x CPU slowdown. Each width starts with a fresh browser context. Collection is measured before the homepage, so homepage numbers use a warm browser cache. Single live samples include real connection/routing variance; these are not field Core Web Vitals.

| Collection metric | Before mobile | Final mobile | Before desktop | Final desktop |
|---|---:|---:|---:|---:|
| Catalogue ready | 37.40s | 4.73s | 23.53s | 6.48s |
| Resources transferred at sample end | 1,746,907 B | 317,331 B | 1,529,165 B | 330,826 B |
| Layout shift, CLS | 0.184 | 0.00051 | 0.187 | 0.00062 |

Final sampled collection LCP: 2.70s mobile / 3.31s desktop. Final warm-cache homepage first paint: about 1.0s at both widths. Live timing improvements include network variation; the approximately 78–82% reduction in collection bytes is directly observable. Raw sample results are saved beside this report.

The final refinement additionally defers React itself. The initial sections entry is 1.57 KB / 0.90 KB gzip. The former eagerly loaded React bundle was 736 KB / 182 KB gzip. Heavy sections remain available as separate chunks when approached.

Subsequent UI refinement adds Lenis and the loading-state controller to the bootstrap, bringing the entry to approximately 23.4 KB / 7.24 KB gzip. The timing table above predates that refinement. React remains deferred. Desktop wheel motion, native touch/reduced-motion fallback, modal locking, real-request skeleton cleanup and the mobile hero were verified separately; no new field performance numbers are claimed.

## Findings and fixes

- **P1 — Database wait blocked controls:** mobile navigation now initializes before catalogue data. React section mounting is independent. Local preview previously skipped this wait because it used bundled data.
- **P1 — Full photos competed with critical scripts:** cards use responsive thumbnails; large photos are assigned when the detail dialog opens. First-row photos load eagerly and later photos lazily.
- **P1 — Catalogue replacement moved the page:** loading preserves layout, marks the grid busy and hides unverified static products until success. Failure does not offer stale local products.
- **P1 — Heavy code loaded on every route:** a tiny bootstrap defers React, then showcase/bulk/reviews/footer load separately. Collection filters and details use plain JavaScript.
- **P2 — Repeated connection work:** the public catalogue uses a fixed published-only projection, anonymous key and 15-second Cloudflare cache. Validated session snapshots last 15 seconds; public configuration lasts 30 seconds. Changes may take a short time to appear; submissions still validate availability against the database.
- **P2 — Cache rules:** exact immutable-cache rules are generated for hashed chunks. Fixed entry files retain revalidation. Cloudflare permits only one wildcard per rule.
- **P2 — Mobile accessibility:** 16px search input avoids input zoom, filter/enquiry actions have 44px minimum height, and a collection-level heading restores the document outline.
- **P2 — Video on slow connections:** save-data/reduced-motion/slower connection hints retain the still image.

## Remaining findings

- **P1 — Variable external response latency:** one direct unthrottled HTML request took 7.1s to return headers; subsequent API/config/CSS requests took 0.7–1.8s. Cloudflare rays reported different locations. These samples do not isolate ISP, proxy, routing, TLS or Cloudflare as the sole cause. Code changes cannot guarantee local-disk speed across the internet.
- **P2 — Planned setup:** admin sign-in/owner verification, domain purchase and Resend remain pending.
- **P3 — Broader review:** complete keyboard/screen-reader/contrast coverage and real customer-device measurements remain useful. No field INP or CrUX results are claimed.

The generic detector flagged the established font, decorative footer effects and token drift. These are not proof that the product identity needs replacing. Its missing-image warning refers to the closed detail dialog; the large photo is assigned on open and verified by the interaction check.

## Verification and next actions

Production build, server/cache tests, enquiry and URL-sharing regressions passed. Catalogue checks covered new/archived products, failure without stale fallback and upload compression. Live interaction checks covered filters, full-size photos, navigation and dynamically loaded showcase/bulk/reviews/footer at 390, 768 and 1440px without browser errors or horizontal overflow.

Recommended order: `/optimize` for real-user cold-connection measurements; `/audit` for expanded accessibility coverage; `/polish` as the final visual pass. Preserve the existing product identity while resolving concrete defects.
