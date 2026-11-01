# AKASH VETIVER SEO baseline audit

Scope: limited full-site audit of the public homepage and collection, plus admin index-exclusion checks, at https://akashvetiver.akashvetiverexport.workers.dev. Evidence was collected on 2026-10-28 before the parent implementation was deployed. This report records the baseline, not a claim that later fixes are live.

## A. Audit summary

Overall: **Needs improvement** in canonical signals, metadata and discovery files. No confirmed critical search-indexing blocker was observed. Score: **Insufficient data**; score confidence: Low, because live search-index status, field performance and rendered-device verification were unavailable. Automated script scores are not adopted as a site rating.

Top issues: missing canonicals with redirected internal URLs; no discovered sitemap; duplicated/incomplete page metadata. Top opportunities: align final URLs everywhere; publish two-page sitemap and truthful identity schema; improve page-specific snippets and previews.

The desired akashvetiverexport.in domain has not been purchased according to user context. Use the working workers.dev origin until a real domain is connected. No registration, physical business address or verified review evidence was supplied; do not manufacture these facts.

## B. Verified findings

| Area | Severity | Confidence | Finding | Evidence | Fix |
|---|---|---|---|---|---|
| Canonical URLs | Warning | Confirmed | Public pages omit canonical URLs. | parse-home.txt and parse-products.txt: canonical=null; routes.json: /products.html -> 307 /products; /index.html -> 307 /. | Use final HTTPS URLs / and /products consistently in canonical tags, sitemap, schema and internal links, or explicitly configure an alternate stable routing policy. |
| Discovery | Warning | Confirmed | No sitemap discovered; robots contains only comments. | sitemap.txt: /sitemap.xml and two standard index filenames return 404; robots-raw.txt contains comment preamble only, no Sitemap directive. | Publish valid XML with only the two public canonical URLs and advertise it in robots.txt. Keep admin out. |
| Metadata | Warning | Confirmed | The homepage and collection reuse the same description. | parse-home.txt and parse-products.txt: identical description beginning Discover family-made vetiver garlands. | Retain distinct titles and give the collection its own accurate product-focused description. |
| Social previews | Warning | Confirmed | Social metadata is incomplete and shared between pages. | social-home.txt and social-products.txt: relative og:image; missing og:url and twitter:card; collection shares homepage OG title. | Use page-specific OG title/description/url, absolute image URLs and Twitter summary_large_image metadata. |
| Structured data | Warning | Confirmed | Public pages contain no JSON-LD. | parse-home.txt and parse-products.txt: schema=[]. | Add truthful Organization, WebSite and WebPage/CollectionPage JSON-LD matching visible content. Do not invent prices, ratings, registration or addresses. |
| Security headers | Info | Confirmed | HSTS was absent from the sampled HTTPS response. | headers.txt: HTTPS and CSP, X-Frame-Options, nosniff, Referrer-Policy and Permissions-Policy present; HSTS missing. | Review HSTS during security work after confirming host and subdomain HTTPS readiness; do not blindly add includeSubDomains or preload. |
| Performance | Info | Hypothesis | Core Web Vitals and performance scores remain unknown. | pagespeed-mobile.txt: rate limited by Google API; performance_score=null, metrics={}. | Use a later authorized PageSpeed/Lighthouse run and Search Console/CrUX field data when available; no quota retry loop. |
| AI discovery | Info | Confirmed | No llms.txt is present. | llms.txt and routes.json: /llms.txt 404; robots has no explicit AI-agent rules. | Prioritize crawlable accurate content and valid identity metadata. Choose crawler policy explicitly if the owner wants restrictions; llms.txt is optional. |
| Indexability | Pass | Confirmed | Public pages are fetchable and admin has noindex. | routes.json: final pages HTTP 200; parse-home/products meta_robots=null; parse-admin meta_robots=noindex,nofollow. | Preserve admin noindex and exclude it from sitemap. Do not block crawling of admin solely with robots if relying on meta noindex; authentication is separate. |
| Content and headings | Pass | Confirmed | Both pages have unique titles, one H1 and meaningful static content. | parse-home: 590 raw text words, H1 Rooted in nature; parse-products: 502 raw text words, H1 Our vetiver collection, 12 product headings. | Keep accurate product content in HTML; consider a more descriptive homepage heading while preserving design. |
| Images | Pass | Confirmed | Hero and product images use WebP, explicit dimensions and descriptive alt text. | parse-home hero: 1806x871; parse-products: 12 product WebP images with descriptive alt and 1200x1200 dimensions; later products lazy loaded. | Preserve these attributes. Review decorative versus informative craft images in rendered context before changing empty alt text. |
| Internal links | Pass | Confirmed | The sampled public pages link together without a broken link. | links.txt: one unique internal target checked, final status 200; internal-links.txt: two pages at depth 1. | Normalize links to final URLs and recheck after deployment. Suppress script orphan heuristics: one incoming link is not an orphan. |

### Impact details

**Canonical URLs:** Preferred URL signals are incomplete and links incur redirects.

**Discovery:** A sitemap would provide an explicit discovery and canonical URL list. Its absence does not block indexing of this linked two-page site.

**Metadata:** Search snippets lack page-specific differentiation.

**Social previews:** Shared links may have incomplete or misleading previews; this is not an indexing blocker.

**Structured data:** Explicit machine-readable business and page identity is absent; no ranking or rich-result gain is guaranteed.

**Security headers:** Security hardening opportunity; no SEO penalty demonstrated.

**Performance:** There is no measurement supporting a pass or failure for LCP, INP or CLS.

**AI discovery:** Optional publishing choice; not a confirmed Google SEO issue or AI-citation blocker.

**Indexability:** Public content can be fetched; admin communicates exclusion to supporting crawlers. Actual Google indexing is unverified.

**Content and headings:** Core content is present in source HTML. Raw parser counts include UI and are not quality scores.

**Images:** These support accessible product descriptions and layout stability, though actual CLS is unmeasured.

**Internal links:** The collection is discoverable from homepage links. This is not proof that every dynamic or external link works.

## C. Prioritized action plan

1. Quick wins: standardize final public URLs; unique metadata; absolute social images; valid two-page sitemap and robots Sitemap directive. Preserve admin noindex.
2. Quick win: add truthful Organization/WebSite/page JSON-LD, validate JSON and deployed canonical URLs. No fabricated Product offers, aggregate ratings or FAQ rich-result promises.
3. Strategic: after owner purchases/connects the final domain, migrate all URL signals together, redirect old URLs, verify Search Console and submit sitemap. Obtain genuine business details and approved product specifications before expanding content.
4. Maintenance: measure mobile performance with a successful tool run; review HSTS in security audit; verify actual rendered images and accessibility.

## D. Unknowns and follow-ups

- Google indexing, selected canonical, queries, rankings, impressions and traffic: unknown; no Search Console data was provided.
- LCP, INP and CLS: unknown. The one PageSpeed script invocation hit Google quota; its built-in two retries occurred automatically. No additional invocation was made.
- Rich-result eligibility: not claimed. Basic entity/page schema helps describe content but does not imply eligibility.
- Review authenticity, location, registration, fulfillment claims and product specifications require owner confirmation.
- The crawler covered two public pages, depth 1, cap 10. It did not inspect private drafts, authenticated data or external link destinations.
- Parse scripts show some misdecoded punctuation. Because the fetch helper decodes response text, this is not sufficient evidence of a browser-visible encoding defect.
- Readability extractor counts 363 words versus 590 raw parser words on homepage. Their extraction methods differ; neither establishes a word-count ranking requirement.

## Environment limitations and quality control

Initial sandbox shell stalled; approved PowerShell execution succeeded. Direct public requests and bundled scripts supplied evidence. PageSpeed quota blocked performance measurements. No desktop/mobile visual run was performed by this evidence task. Absence of meta robots on public pages is normal and not flagged as an error. Missing llms.txt and lack of explicit AI-agent rules are informational. Internal-link orphan heuristics and social-script Critical labels were moderated against actual evidence.

finding_verifier.py processed 12 raw findings and retained 12; final table is generated from its output. This is deduplication/consistency checking, not independent crawl validation. The skill references dated February/May 2026 are older than 90 days; current Google documentation was checked for canonical, sitemap, noindex and AI guidance. Unsupported statistics in old references were not used.

## Supporting guidance

- Consistent canonical URLs: [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
- Sitemaps aid discovery but are not an indexing guarantee: [Google sitemap overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview).
- Crawlers must access a page to see its noindex rule: [Google noindex documentation](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
- Google AI features do not require special AI text files or dedicated schema: [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).

## Evidence artifacts

HTML: home.html, products.html, admin.html. Structured evidence: parse-home.txt, parse-products.txt, parse-admin.txt, routes.json, robots.txt, robots-raw.txt, sitemap.txt, social-home.txt, social-products.txt, headers.txt, links.txt, internal-links.txt, redirects.txt, llms.txt, readability.txt, pagespeed-mobile.txt. Verification: raw-findings.json and verified-findings.json. Runners: collect_baseline.py and parse_baseline.py.


## Implementation handoff (pending live verification)

The parent reports source changes prepared for final /products canonical and sitemap URLs, unique metadata and social tags, truthful Organization/WebSite/page JSON-LD, actual robots directives, and a two-URL sitemap. Admin noindex is retained. HSTS is planned without includeSubDomains or preload. These are parent-reported implementation changes, not verified deployed results in this baseline evidence. See the project-root PROJECT-HANDOVER.md and the parent final verification for deployment status. The baseline evidence above remains intentionally unchanged.

## Final deployment verification ? 29 October 2026
Baseline findings above are retained as historical evidence. Fixes are now deployed in Cloudflare version 042a3faf-0517-4b0a-9c26-fd4790eb957b (100% traffic). node tools/verify-seo.mjs --live passed for both public pages: unique descriptions, canonicals targeting final 200 routes, metadata/schema, two-URL sitemap, robots directives, admin no-store/noindex and HSTS. Read-only Playwright passed at 390px and 1440px for home/catalogue/protected admin with no horizontal overflow or JavaScript errors. Public catalogue/campaign/review endpoints and product WebP assets passed.
The implementation uses public-site.json and tools/generate-seo.mjs; build publishes crawler files. No custom domain, Search Console/indexing success, Product rich results or performance score is claimed. Owner prerequisites and PageSpeed quota limitation remain as documented.
