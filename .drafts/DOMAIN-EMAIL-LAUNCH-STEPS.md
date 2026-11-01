# Domain and email launch steps

Owner-confirmed flow: customer submits form; enquiry is stored; owner receives a Resend notification at akashvetiverexport@gmail.com; owner contacts customer. No direct customer WhatsApp button or payment gateway is required.

## After buying the domain

1. Tell the website maintainer the exact domain (no password or API key). Connect it to the existing Cloudflare Worker as a custom domain. Confirm HTTPS works.
2. Set public-site.json origin to the chosen HTTPS origin. Run npm run build: it regenerates static metadata and server/public-site.mjs used by product pages/sitemap. Configure redirects from old production URLs deliberately and recheck all canonical/OG/sitemap URLs. Test admin email-link redirect configuration for the new domain before removing the old URL from allowed redirects.
3. In Resend, add a sending domain or subdomain you own. Add the exact DNS records Resend provides and wait for verification. Do not invent DNS values. Gmail is the recipient, not the verified sending domain.
4. From D:\Vettiver run: npx wrangler secret put RESEND_API_KEY . Paste the key only into the terminal prompt. Never put it in chat, public JS or source control.
5. Set RESEND_FROM in wrangler.jsonc to an address on the verified domain; set ENABLE_NOTIFICATIONS to true only after sender/key are ready. Deploy and test one explicitly authorized enquiry. Check the admin record and actual Gmail inbox/spam. Provider 'sent/accepted' is not proof of inbox delivery. Supabase login emails use a separate Auth SMTP configuration; verify those independently.
6. Review pending email backlog before enabling notification delivery: old stored enquiries can be queued. No automated deletion or purge is authorized by these steps.
7. Verify the domain in Google Search Console using its DNS instructions. Submit /sitemap.xml, inspect homepage and one product URL, monitor indexing and search queries. No ranking deadline or #1 guarantee.

## Account and capacity checks

- Enable and verify MFA/recovery on Gmail, Cloudflare and Supabase owner accounts. Do not share login codes.
- Back up permanent sales records plus full database and image storage outside the hosting account. Invoice CSV alone is not a whole-site backup. Test restoration in an isolated environment.
- Monitor Cloudflare request/error/rate-limit counts, Supabase size/egress and failed/pending email statuses after launch. Current caching and submission throttling reduce routine load; they do not prove any maximum concurrent-user capacity or DDoS immunity.
- Keep Resend and hosting usage alerts enabled in provider dashboards where available. Any paid plan change requires owner approval.
- Perform an authorized staging load test before a large campaign; never flood the production website for testing.
