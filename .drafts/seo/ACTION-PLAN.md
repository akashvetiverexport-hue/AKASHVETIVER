# AKASH VETIVER SEO action plan

Baseline: 2026-10-28, workers.dev site. These items describe observed baseline gaps. Implementation/deployment status must be recorded by the parent after verification; this file does not assert fixes are live.

| Priority | Action | Impact / effort | Dependency | Acceptance check |
|---|---|---|---|---|
| 1 - Quick win | Choose final URLs / and /products (or configure a deliberate alternative); align canonical, internal links, sitemap, OG and schema | High clarity / low | Hosting route behavior | Canonical target returns 200 without redirect; /index.html and /products.html resolve consistently |
| 2 - Quick win | Unique page descriptions and page-specific OG/Twitter metadata with absolute images | Medium / low | URL decision | Fetch both pages and inspect source; preview image returns 200 |
| 3 - Quick win | Publish valid sitemap.xml containing only two public canonical pages; add robots Sitemap directive | Medium / low | URL decision | XML parses, loc targets return 200, admin excluded, robots returns text/plain |
| 4 - Quick win | Add truthful Organization, WebSite, WebPage/CollectionPage JSON-LD | Medium / low | Real business facts only | JSON parses, URLs match canonical, no invented prices/ratings/address |
| 5 - Preserve | Keep admin noindex,nofollow; keep it out of sitemap | Index exclusion / low | None | Inspect final /admin response source; do not rely on robots blocking as an access control |
| 6 - Strategic | Purchase/connect desired domain, then migrate URL signals and redirects together | Brand continuity / medium | Owner domain choice and registration | HTTPS works; all URL signals point to final domain; old host redirects as intended |
| 7 - Strategic | Verify Search Console and submit sitemap after final domain | Measurement / medium | Domain/property ownership | Property verified; sitemap processed; inspect two URLs without promising indexing |
| 8 - Strategic | Add approved business identity, shipping/order details and accurate product specs | Trust and usefulness / medium | Owner-provided facts | Visible claims substantiated; no fabricated registration/reviews |
| 9 - Maintenance | Obtain a successful mobile PageSpeed/Lighthouse run and field data when available | Unknown until measured / low | API quota or local tooling | Record measured LCP/INP/CLS with source and date; do not infer values from HTML |
| 10 - Maintenance | Review HSTS and rendered craft-image alt treatment | Security/accessibility / low | Security audit; image context | Apply deliberate HTTPS policy; decorative images may keep empty alt |

No confirmed Critical indexing blocker was found. Missing llms.txt is optional, not a priority fix. Product rich results are not promised for a collection page without supported offer/review data. No action needs invented registration or a nonexistent domain.

Before calling SEO fixes complete, rebuild, deploy the approved implementation, fetch both live final URLs plus robots/sitemap/admin, validate JSON-LD, verify sitemap targets and social images, and record results separately from this baseline. PageSpeed quota failure is an environment limitation, not a failed site.


## Implementation handoff (pending live verification)

The parent reports source changes prepared for final /products canonical and sitemap URLs, unique metadata and social tags, truthful Organization/WebSite/page JSON-LD, actual robots directives, and a two-URL sitemap. Admin noindex is retained. HSTS is planned without includeSubDomains or preload. These are parent-reported implementation changes, not verified deployed results in this baseline evidence. See the project-root PROJECT-HANDOVER.md and the parent final verification for deployment status. The baseline evidence above remains intentionally unchanged.

## Final deployment verification ? 29 October 2026
Baseline findings above are retained as historical evidence. Fixes are now deployed in Cloudflare version 042a3faf-0517-4b0a-9c26-fd4790eb957b (100% traffic). node tools/verify-seo.mjs --live passed for both public pages: unique descriptions, canonicals targeting final 200 routes, metadata/schema, two-URL sitemap, robots directives, admin no-store/noindex and HSTS. Read-only Playwright passed at 390px and 1440px for home/catalogue/protected admin with no horizontal overflow or JavaScript errors. Public catalogue/campaign/review endpoints and product WebP assets passed.
The implementation uses public-site.json and tools/generate-seo.mjs; build publishes crawler files. No custom domain, Search Console/indexing success, Product rich results or performance score is claimed. Owner prerequisites and PageSpeed quota limitation remain as documented.
