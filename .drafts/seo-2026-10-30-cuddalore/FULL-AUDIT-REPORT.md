# SEO, AEO and GEO audit — 30 October 2026

Scope: homepage, collection, search metadata, structured data and live robots. Existing detailed baseline is in ../tamil-seo/FULL-AUDIT-REPORT.md. This audit uses the SEO skill and owner-confirmed Cuddalore business location.

## Confirmed findings

- Homepage and collection have distinct descriptions, a canonical URL, social metadata and Organization, WebSite and page JSON-LD. The generated Organization now includes Cuddalore, Tamil Nadu and India, without an invented street address. The home hero identifies the business location visibly.
- Live robots.txt returned 200, allows public pages, excludes /api/ and advertises the sitemap. AI bots inherit the wildcard rules; explicit bot directives are not required to allow access. Actual crawling or indexing has not been confirmed.
- Local `node tools/verify-seo.mjs` passed metadata, schema, canonical URLs, sitemap and admin noindex checks. The skill's schema validator reports missing root @type because it does not recognize this JSON-LD @graph container; its graph entities each have @type. Google Rich Results Test was not run.
- The collection contains multiple items and does not have individual product URLs. Google documents product rich results for pages focused on one product or its variants, so Product/Offer markup was not added to the collection. See https://developers.google.com/search/docs/appearance/structured-data/merchant-listing.
- Google says standard technical and helpful-content practices apply to AI features; special AI markup is not required. See https://developers.google.com/search/docs/appearance/ai-features. No ranking or AI-citation position is guaranteed.

## Limitations

No verified Search Console access, district-level rankings, AI citations, backlink data or PageSpeed/real-user Core Web Vitals data was available for this update. The site uses its workers.dev host; measure indexing and performance in Search Console and PageSpeed rather than treating source changes as ranking evidence. The skill's bot-specific warning is not treated as a confirmed blockage because robots wildcard rules apply.
