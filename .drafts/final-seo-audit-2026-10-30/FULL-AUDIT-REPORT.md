# SEO, AEO and GEO audit — 30 October 2026

Scope: live homepage and collection, their HTML, sitemap, robots, structured data and social metadata. These directional scores are low-confidence internal coverage estimates, not Google scores, ratings, ranking predictions or certifications.

## Provisional coverage scores

- SEO: **60/100**. Five positive signals (accessible pages, canonical URLs, distinct titles and descriptions, robots and sitemap, descriptive catalogue content) versus two confirmed gaps (no separate indexable product pages and potential stale seed content), and two warning deductions. Equal-weight calculation: 5/7 × 100 − 10 ≈ 61, rounded to 60.
- AEO: **55/100**. Three positives (questions and answers in initial HTML, clear ordering process, confirmed location) versus one gap (few independently addressable detailed product answers): 3/4 × 100 − 5 warning points − 15 uncertainty points = 55.
- GEO: **55/100**. Three positives (crawlable text, identifiable organization and location, FAQ answers) versus one gap (limited distinct product pages): 3/4 × 100 − 5 warning points − 15 uncertainty points = 55.

These simple equal-weight checklists are subjective; there is no verified ranking or citation data and no industry-standard AEO/GEO score.

## Findings

| Area | Severity / confidence | Evidence | Impact and next action |
|---|---|---|---|
| Crawlability and metadata | Pass / confirmed | node tools/verify-seo.mjs --live passed both pages, canonicals, sitemap and robots. | Maintain distinct metadata; accessibility does not prove indexing. |
| AI crawling | Pass / confirmed | robots.txt uses a wildcard allow for public pages and disallows /api/. Named bots inherit wildcard rules. | Missing bot-specific directives do not establish blockage. Google says special AI markup is not necessary. |
| Product URLs | Warning / confirmed | Sitemap lists / and /products; products are cards/dialogs, without distinct canonical product pages. | Create useful stable product URLs when live product data and availability can remain accurate. |
| Catalog freshness | Warning / confirmed design, impact unverified | tools/generate-catalog.mjs uses data/products.json for initial HTML; an admin-managed catalogue can differ. | Check actual search-rendered catalog against current published product data; design reliable indexing before claiming freshness. |
| AEO | Pass / confirmed | Home initial HTML answers questions about materials, orders, payment, bulk requests and delivery. | Keep answers aligned with business practice. No FAQ rich-result eligibility claimed. |
| Structured data | Pass / confirmed | Live pages expose Organization, WebSite, WebPage/CollectionPage JSON-LD with Cuddalore locality. | JSON parses; this does not certify rich results. Avoid unsupported Product/Offer markup on a multi-product collection. |
| Social metadata | Pass / confirmed | SEO skill social_meta.py reports OG 7/7 and Twitter 4/6, yielding 85/100 only for this checklist. Missing X handles are optional. | Use verified accounts only; score is not an SEO ranking. |
| Images | Pass / confirmed | About images have src, srcset and native lazy loading; product images have alt text. | Responsive URLs are discoverable. Real-world performance needs field data. |
| PageSpeed/CWV | Unknown | Google PageSpeed API returned rate limiting. No Search Console or CrUX metrics available. | Do not report LCP, INP or CLS scores without measurements. |
| Links | Unknown | Skill link checker scanned one homepage link and saw one redirect. | This is not a full-site link audit; repeat after legal links are final. |
| Search rankings, indexing and AI citations | Unknown | No Search Console, ranking tool, citation or traffic data available. | Verify the published domain and sitemap in Search Console; monitor results. No rank guarantee. |

## Sources

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/appearance/structured-data/merchant-listing
- https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content

## Limitations

No Search Console, PageSpeed results, field Core Web Vitals, rank tracking, backlinks, competitor benchmark, Rich Results Test, or third-party AI citation data was available. Scores do not predict ranking. Re-run live checks after final deployment.
