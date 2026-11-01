# Search readiness improvements — 30 October 2026

Implemented by search subagent; parent must integrate /sitemap.xml in Worker routing and deploy after build.

- Dynamic sitemap from current catalog: published IDs only, deduplicated and safe URL slugs, 30-second caching, 503/Retry-After on catalog outage instead of a false empty successful sitemap.
- Canonical origin now shared by generated server/public-site.mjs derived from public-site.json. Buying a domain requires updating public-site.json and rebuilding, not hand-editing product-page origin.
- Individual product pages now have Product, BreadcrumbList and WebPage JSON-LD; script body escapes angle brackets and exact SHA-256 CSP authorization avoids unsafe-inline.
- Offers only for explicitly confirmed non-sample prices with no enabled campaign/offer. Unknown stock/ratings/reviews are never invented. Sample/offer-scheduled products still get semantic Product data but may not qualify for Google product rich results until valid offer/review requirements are met.
- Valid sample prices are displayed as guide prices with explicit confirmation wording; enabled offers show the regular price and direct customers to current collection offers. This removes the unexplained price disappearance without presenting sample prices as final.
- Product sharing metadata includes image alt, Open Graph locale/site and Twitter summary card. Hero product image priority is high; images otherwise unchanged.
- Enquiry wording now reflects website form -> business contacts customer, with no online payment or automatic order confirmation.

Tests: node tools/verify-product-pages.mjs; node tools/verify-sitemap.mjs passed. Generated product JSON-LD checked with skill validate_schema.py. Parent runs build, updated tools/verify-seo.mjs --live and post-deploy smoke tests.

Official references checked:
https://developers.google.com/search/docs/appearance/structured-data/product-snippet
https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

These improve discoverability and truthful machine-readable product information. They do not guarantee indexing, #1 ranking, AI citations or rich results. Domain verification, Search Console and actual customer/brand evidence remain required follow-up.

Validator note: bundled validator assumes top-level @type and falsely warns on valid @graph containers. Extracted graph nodes into separate standalone JSON-LD blocks for its check; runtime tests parse the actual graph and verify CSP hash.
