# After buying your domain — Akash Vetiver

Keep your domain registrar, Cloudflare, Google and Gmail accounts secure. Never share passwords, OTPs, authenticator codes or recovery codes. Enable two-step verification on the Gmail account used for admin sign-in and separately on your Supabase dashboard account; save recovery codes somewhere safe.

## 1. Connect the domain to the website

1. Buy the domain from a registrar you trust and keep its renewal and recovery information safe.
2. In the Cloudflare dashboard, connect the domain to the existing Akash Vetiver Worker using Workers & Pages > your Worker > Settings > Domains & Routes > Add > Custom Domain. Cloudflare may require the domain to be a zone in the same account. Follow the dashboard instructions for nameservers and DNS; do not delete existing mail records.
3. Decide the one preferred address (for example https://your-domain.in or https://www.your-domain.in). Confirm both the domain and HTTPS work, and set a redirect from any alternate address to the preferred one.
4. Ask your website developer to update the canonical site origin, sitemap, social metadata, product-page URLs and any allowed origin/auth redirect settings to the new address, and then test the storefront, product links, customer forms, admin login and recovery. Do this before submitting the new sitemap. The code currently contains the workers.dev origin; simply connecting the domain does not complete the migration.
5. Keep the current workers.dev address accessible until the new domain is tested. Plan redirects carefully so existing links continue to work.

## 2. Verify Google Search Console

1. Go to https://search.google.com/search-console and sign in with the Google account you want to own the property.
2. Add a property. A Domain property covers the domain and its subdomains; Google provides a DNS TXT record to add through the domain's DNS provider. Alternatively, a URL-prefix property can be verified with an HTML tag.
3. For DNS, copy Google's exact TXT record into your DNS dashboard and click Verify in Search Console. DNS propagation may take time. For HTML tag verification, send your developer only the public verification meta tag—not your Google password or sign-in code—and ask them to add it to the homepage before clicking Verify.
4. Open Sitemaps in Search Console, submit https://your-preferred-domain/sitemap.xml, and check for errors. Use URL Inspection to check the homepage and a product page. Indexing can take time and is not guaranteed.
5. Check Performance and Page indexing periodically. Rankings vary and no one can guarantee position 1.

## Official guides

- Google ownership verification: https://support.google.com/webmasters/answer/9008080
- Google Search Console properties: https://support.google.com/webmasters/answer/34592
- Google 2-Step Verification: https://support.google.com/accounts/answer/185839
- Cloudflare Worker custom domains: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
- Supabase dashboard MFA: https://supabase.com/docs/guides/platform/multi-factor-authentication
