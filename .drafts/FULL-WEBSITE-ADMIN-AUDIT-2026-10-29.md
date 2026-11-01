# AKASH VETIVER ? website and admin audit

Date: 29 October 2026. Scope: customer homepage and catalogue, local isolated admin workflows, basic live headers/SEO/worker checks, selected database security metadata and production dependencies. Audit only: no website, customer records or database configuration changed.

## Health assessment (indicative, not certification)

| Dimension | Score / 4 | Evidence and limits |
|---|---:|---|
| Accessibility | 2 | Reduced motion and basic rendered labels checked; small target and intro fallback found. No complete axe/manual screen-reader or contrast audit. |
| Performance | 2 | Optimized images/lazy sections and caching exist; one unthrottled live mobile-emulation observation is slow enough to warrant repeat measurement. No field data or Lighthouse run. |
| Responsive design | 3 | 320/390/768/1440 rendered homepage/catalogue and 320/390/768/1440 isolated admin passed overflow checks; one narrow target at tablet. Full zoom/device coverage not established. |
| Theming | 3 | Coherent forest/botanical system; detector flags many literal values, some intentional. No dark theme requested. |
| Implementation integrity | 3 | Branded product photography and consistent storefront; repeated detector warnings require context and do not establish defects. |
| Total | 13/20 | Provisional, bounded review; do not interpret as WCAG, Lighthouse, security or launch certification. |

## Confirmed findings

### P2 ? Blank intro lettering if the React intro entry fails
- Location: tools/intro-bootstrap.js; components/ui/amour-sunrise-preloader.tsx; ui/intro.tsx.
- Reproduction: Playwright aborted /assets/react/intro.js. At 2.5 seconds the intro was in bloom but zero lettering paths were visible; no visible skip button was present. The fallback eventually released the homepage (6.8 seconds from navigation in the observed run).
- Impact: customers on a failed or very slow script request see an incomplete animation and have to wait. No permanent lock observed in this test.
- Recommended: make the pre-rendered lettering visible without React and shorten or improve the fallback; keep a bounded timeout, reduced-motion behavior and no late replay. Test blocked and delayed entry at 320/390/1440.

### P2 ? Narrow collection navigation target on tablet
- Location: index.html, .hero-scroll, label ?Scroll to the collection?.
- Rendered measurement: 20 ? 44 CSS px at 768px in the reduced-motion audit. It is narrower than a 24px minimum in one dimension; WCAG 2.5.8 spacing/equivalent-control exceptions were not evaluated.
- Impact: harder to tap precisely. Recommended: increase its clickable width without changing its visual placement, then check neighboring target spacing and keyboard focus.

### P2 ? Intro composition differs on mobile
- Location: components/ui/amour-sunrise-preloader.tsx, responsive amrLayout.
- Owner explicitly reported the phone preloader differs from laptop. The component uses separate portrait radius/stretch calculations; screenshots show substantial extra space above the word on mobile. A previous attempt clipped a letter and was reverted.
- Recommended: design and visually test a mobile adaptation preserving the same visual hierarchy and complete brand name. Avoid hiding or changing the approved mobile About section.

## Launch prerequisites and investigations

### P1 launch prerequisite ? Live admin authentication and email not accepted end to end
- User intentionally deferred live login/email setup. Local admin checks use an isolated mocked session; they do not prove that the owner can sign in to the live site or receive mail. Resend notifications are disabled.
- Before launch, configure the chosen auth/email service and redirect settings, verify owner sign-in, expiry, recovery and real notification delivery. Do not remove authentication protection.

### P2 investigation ? Performance needs repeat measurement
- One unthrottled Chromium run at 390 ? 844 with reduced motion, 29 October: LCP 4.744s, DOMContentLoaded 5.456s, CLS 0.00026 after 5 seconds and 64 resource entries. This is one environmental observation, not Core Web Vitals field data, a repeatable benchmark or a Lighthouse score.
- Run repeated cold-cache/throttled Lighthouse tests and inspect actual network, image and JavaScript cost. Do not claim the free tier or a particular network is the cause without evidence.

### P2/P3 ? Security and operations follow-up
- Live RLS is enabled on all six public tables. Isolated tests passed admin-only archive and commerce authorization. The edge guard and worker tests passed. npm audit --omit=dev reported zero known production dependency vulnerabilities on the audit date.
- Supabase security advisors report leaked-password protection disabled and an authenticated SECURITY DEFINER admin-check helper. Prior review judged the helper intentional; no new exploit or private data leak was demonstrated. Review password methods, plan support, MFA and recovery when configuring live auth. Two deny-by-default RLS/no-policy informational notices are intentional.
- No full penetration test, live authenticated mutation test, load test, account-level WAF review, backup/restore exercise or complete provider quota review was conducted.

## Checks passed

- npm run typecheck; node tools/verify-seo.mjs --live; node tools/verify-edge-rate-limit.mjs; node tools/verify-worker.mjs; npm audit --omit=dev.
- tools/preview-admin.cjs --audit-check: 101 fixture requests, review/status controls, request-to-invoice, draft guard, retry/recovery and five sections at 320/390/768/1440.
- tools/preview-admin.cjs --studio-check and --archive-check: invoice numbering, voids, collision, PDF/share, JSON/CSV export, backup verification, deletion guard and post-delete numbering at 320/390/1440. Isolated fixtures, never real customer data.
- tools/verify-invoice-archive-database.mjs and tools/verify-commerce-database.mjs: admin authorization, atomic archive, number preservation and offer constraints, isolated PGlite.
- tools/verify-customer-journey.cjs: carousel at 390/1440, initial catalogue skeleton, roots category and reservation dialog at390.
- tools/verify-home-motion.cjs: section visibility, no overflow or JS errors at390/1440 and reduced motion320, protected About trail endpoints.
- .drafts/full-audit-rendered.cjs: home/#products and products at320/390/768/1440; no overflow, visible broken images, unnamed buttons/links or page errors in the tested state. One small target at768 recorded in .drafts/full-audit-rendered.json.
- Live SEO: two page canonicals, schema, sitemap, crawler directives and admin noindex passed.

## Unverified / next steps

1. Run a full automated accessibility scan (axe-core was not installed) and manual keyboard/screen-reader/contrast/zoom tests, including dialogs, form errors, campaign states and authenticated admin.
2. Fix the confirmed intro fallback and target width; verify normal/blocked/delayed script and real mobile/desktop layouts.
3. Resolve owner authentication and email setup; perform consented live end-to-end tests with isolated records.
4. Repeat instrumented performance measurements and review quotas/retention using actual Supabase and Cloudflare dashboards.
5. Verify custom domain, Search Console, real product facts and owner acceptance before launch.

The Impeccable detector generated 167 heuristic signals in the prior review; these include intentional lazy images and inherited styles. They are not 167 confirmed bugs. No change was made to the mobile About section. Full report is a bounded audit and should not be represented as comprehensive security or accessibility certification.
