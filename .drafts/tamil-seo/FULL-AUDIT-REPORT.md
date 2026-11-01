# Tamil Nadu SEO, GEO and AEO audit

Audit date: 29 October 2026. Scope: live homepage and collection, crawl controls and discovery, manually reviewed search results and source structure. The original snapshots and script outputs in this directory are live baseline evidence BEFORE the metadata improvement. The source changes have been generated locally; deployment is owned by the parent agent.

## Summary

This is a Tamil Nadu vetiver crafts storefront with two canonical public URLs: / and /products. Overall score: insufficient evidence / low confidence; keyword rankings, district-specific impressions, Google Search Console indexing, conversions, backlink authority and real field Core Web Vitals are unknown. First position in any district cannot be promised or verified from this audit.

## Confirmed observations

| Area | Finding and evidence | Impact | Action | Confidence |
|---|---|---|---|---|
| Discovery | robots.json: 200; wildcard allows public routes and points to sitemap. sitemap.json: sitemap.xml 200, both canonical URLs 200 with matching self canonicals. Missing alternate sitemap filenames are not errors. | Pages are discoverable; inclusion is not guaranteed. | Preserve canonical/sitemap consistency after domain change. | Confirmed |
| Metadata | home-parsed.json and products-parsed.json have unique titles/descriptions and canonical tags; baseline collection metadata did not explicitly name Tamil Nadu or malai. | Snippets could be more relevant to natural regional search wording. | Updated generator to name vetiver malai, crafts and Tamil Nadu using confirmed business facts. | Confirmed; locally generated, pending deploy |
| Entity/schema | Baseline parses Organization, WebSite and page schema; no made-up address or registration. | Entity cues exist. No Product rich-result guarantee. | Preserve truthfulness; add genuine social links/contact information only if owner supplies them. | Confirmed |
| Answers | Homepage has visible short FAQ answers and an ordered craft process. answer-blocks.json reports no question headings because questions are HTML summary controls; treat that heuristic as incomplete, not evidence that answers are missing. | Useful visible answers help users and may be understood by search systems. | Improve based on real buyer questions; don't reinstate the price FAQ user removed or add fake questions for rankings. | Confirmed / heuristic limitation |
| AI search | robots.json shows wildcard rules apply to crawlers; explicit bot-specific entries are not required merely to allow the public pages. Google states normal indexing/snippet eligibility and helpful content apply to AI features; no special AI schema or text file required. | Eligibility is not a promise of citation. | Keep public factual text and pages accessible, and improve original customer-relevant content. | Confirmed for Google guidance; actual citations unknown |
| Local intent | Business serves Tamil Nadu from a family workshop, but no district address/service policy, genuine local stories or verified district ranking metrics were supplied. | 38 near-identical district pages would be unhelpful doorway pages. | Focus on relevant product and occasion content; create district-specific content only where verified, genuinely distinct customer information exists. | Confirmed missing evidence / recommendation |
| Product indexing | The collection includes multiple products in one page rather than individually indexed product pages. | Product-specific searches may be harder to target. | Plan real, indexable unique product URLs with current accurate prices/availability and canonical/schema only after implementation supports them. No invented offer data. | Likely |
| Business trust | Physical address, verified social profiles, registration and detailed guarantees were not supplied. | Missing trust information may make customer decision harder; no fabricated signals. | Add owner-approved facts when available, including contact and order/delivery details. | Confirmed missing input |

## Tamil Nadu search and competitor observations

Potential intent clusters (not measured search volumes): vetiver/vettiver garlands and malai for weddings and temples; vetiver door hangings and toran for home; ceremonial vel and peacock crafts; Tamil-language product terms, subject to native-language review. District-modified searches (for example Chennai, Madurai, Coimbatore) are hypotheses to validate in Search Console, not evidence of ranking. Never claim a local store/office or instant district-specific delivery without confirmation.

One observed competitor page, [Giri vetiver malai product](https://giri.in/products/vettiver-garland-1-5-feet-vetiver-malai), targets vetiver/malai naming and a specific size. This is an example, not a ranking study or market share estimate. To compete, add the owner's real dimensions, clear product imagery, order process and meaningful first-hand craft information. No competitor prices or claims copied.

## Local changes prepared

- Homepage title: Vetiver Garlands & Crafts from Tamil Nadu | Akash Vetiver. Description naturally includes vetiver garlands and vettiver malai.
- Collection title: Vetiver Malai & Door Hangings | Akash Vetiver. Description names Tamil Nadu and the WhatsApp confirmation path.
- Optional llms.txt description updated for consistent terminology; it is not required for Google AI visibility or a ranking signal.
- robots/sitemap, canonical origin, schema and admin noindex remain unchanged. node tools/verify-seo.mjs passed after local generation. No FAQ schema, fake LocalBusiness location, fabricated ratings or pricing introduced.

## Evidence and caveats

SEO skill fetch_page.py and parse_html.py produced home.html, products.html and *-parsed.json; answer_block_scanner.py, citation_readiness.py, robots_checker.py and sitemap_checker.py produced corresponding JSON. citation-readiness.json's automated missing-citation warning is not adopted: it mistakes footer boilerplate for a factual sourced claim, and a shop need not cite its own product catalogue. No field performance/INP, indexing status or rank data available. Script artifacts are snapshots and should not be mistaken for the updated deployment.

Google guidance: [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), [helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [doorway abuse policy](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse), [FAQ rich-result limitations](https://developers.google.com/search/blog/2023/08/howto-faq-changes). Google Search does not guarantee crawling, indexing, top positions, rich results or AI citations.

## Deployed follow-up ? 30 October 2026
Cloudflare version c8a8ce1a-722c-477f-99d2-43cec58fcce8 is live. The SEO metadata and llms.txt changes were deployed; node tools/verify-seo.mjs --live passed for canonical URLs, schema, sitemap, robots, admin noindex and HSTS. Actual Google indexing, district rankings, AI citations and field performance remain unverified. No district doorway pages or fabricated business facts were added.
