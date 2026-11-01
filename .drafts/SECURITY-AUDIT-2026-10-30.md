# Security audit — 30 October 2026

Scope: live read-only Supabase metadata and security advisors, live storefront/admin response headers, Worker source review, and isolated tests. No customer records queried, real submissions, live auth attempts or production writes. This is not an independent penetration test or security certification.

## Findings

- **Medium / confirmed:** Supabase reports leaked-password protection disabled. The existing admin uses OTP and does not create users via the UI, but actual password settings, administrative account recovery and MFA have not been verified. Evaluate enabling protection if password sign-in is used and the plan permits it: https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection
- **Review / confirmed advisor:** `public.is_vettiver_admin()` is a security-definer function executable by authenticated users. Live definition only checks membership for `auth.uid()`, uses an empty search path, exposes a boolean, and denies anonymous execution; RLS policies depend on this helper. Do not revoke it without redesigning and testing the authorization path. Supabase advisor guidance: https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable
- **Informational:** `public.vettiver_admins` and `vettiver_private.invoice_number_state` have RLS but no policy. They are deny-by-default; absence of public policies is intentional.
- **Unknown:** Live OTP/email sign-in, admin MFA and recovery, Cloudflare WAF and account settings, provider-side secret rotation, full accessibility/penetration/load and disaster recovery tests were not performed.

## Verified

- All six public application tables have RLS enabled; live policy metadata limits customer data and administrative operations to the admin membership check, and exposes only published products and currently active campaigns.
- Public privileged submit/notification functions deny execution to anonymous and authenticated callers. The archive and invoice functions use invoker permissions.
- Home and admin responses enforce HSTS, Content Security Policy, X-Content-Type-Options nosniff, and frame denial. The admin response is no-store and noindex.
- Worker checks origin, caps request bodies at 16 KiB, validates inputs and consent, uses an HMAC IP key and an independent approximate edge attempt limiter. Honeypots are not bot authentication. Edge counters are local/eventually consistent and not a strict global DDoS defense.
- Isolated tests passed: `node tools/verify-worker.mjs`, `node tools/verify-edge-rate-limit.mjs`, `node tools/verify-antispam.mjs`, `node tools/verify-database.mjs`, `node tools/verify-commerce-database.mjs`, `node tools/verify-invoice-archive-database.mjs`, `node tools/verify-public-cache.mjs`. `npm audit --omit=dev` reported zero known production vulnerabilities at the time of the audit.
- Notifications are disabled in the deployment configuration. Public product-image storage is intentionally public; do not upload private material.

## Priority follow-up

1. Complete and test the live admin sign-in configuration, recovery and MFA; review password settings.
2. Review Cloudflare account-level WAF, alerting and quotas, then exercise a safe load test in an isolated environment.
3. Verify backups, retention, restoration and secret rotation through the provider dashboards.
4. Commission an independent penetration test before describing the site as comprehensively secured.
