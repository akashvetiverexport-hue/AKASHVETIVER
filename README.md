# AKASHVETIVER

Akash Vetiver Export website: static HTML pages with React components built using Vite, TypeScript and Tailwind CSS.

## Local development

```sh
npm ci
npm run build
npm run preview
```

Open http://127.0.0.1:4178. Run `npm run dev` separately to rebuild the React sections while editing.

The homepage is `index.html`; the collections page is `products.html`. Build outputs are in `assets/react`.

Public loading: `ui/bootstrap.ts` loads React only near interactive sections, then `ui/main.tsx` loads each section separately. Collection controls use plain JavaScript. `/api/catalog` caches only the public published-product projection for 15 seconds; validated session snapshots last 15 seconds and public runtime configuration lasts 30 seconds. Admin changes may take a short time to appear; enquiry submission checks current availability in the database. See [.drafts/PERFORMANCE-AUDIT-2026-10-25.md](.drafts/PERFORMANCE-AUDIT-2026-10-25.md) for measurements and remaining constraints.

The bootstrap also provides smooth desktop wheel motion with Lenis 1.3.27; touch and reduced-motion scrolling remain native. Section jumps use a cancellable animation and animation refreshes are batched until scrolling is quiet. Request-driven skeletons, photo loading states, a nonblocking progress bar and submission indicators share the existing palette. Fast loads do not incur artificial delays. The mobile hero uses a separate composition with aligned copy/actions/benefits and a clean crest crop. Checks: `node tools/verify-loading-motion.cjs`, `node tools/verify-mobile-hero.cjs`, and `node tools/verify-section-navigation.cjs`.

## Deployment notes

`npm run build` now creates a clean `dist` directory for deployment, in addition to the existing local React preview assets. Never deploy the repository root or only `assets/react`.

Cloudflare Workers: build command `npm run build`, deploy command `npx wrangler deploy`, root directory the repository root. `wrangler.jsonc` deploys `server/worker.mjs` with static assets from `dist`. The live site is https://akashvetiver.akashvetiverexport.workers.dev. This application needs the Worker for API routes and runtime configuration.

Deployments must include the optimized images and generated catalogue assets. The build does not deploy the site or apply Supabase migrations. Both migrations were applied to project `lgkkjubwdxdfpmoxkrmd` on 2026-10-25 and recorded in `supabase_migrations.schema_migrations`; the 12 original products were seeded. Do not reapply them. The owner identity and admin membership exist; first sign-in requires email verification. Public signup is disabled.

Keep secret/service-role keys and database credentials on the server, never in `site-config.js`. Cloudflare secrets hold `SUPABASE_SERVER_KEY` and `RATE_LIMIT_SECRET`. Only the Supabase publishable/anon key belongs in public configuration, protected by database policies. The Worker overrides `/site-config.js` in production; local previews retain their local configuration. `/api/requests` saves enquiries and `/api/feedback` saves pending reviews with durable retry IDs. Only approved reviews appear publicly. Admins can manage enquiries and review approvals in `/admin.html`.

Resend is not connected: `ENABLE_NOTIFICATIONS=false`, no Resend key configured. Submissions still save to the database and appear in the admin inbox. The durable email queue is prepared for `RESEND_API_KEY`, a verified `RESEND_FROM`, and `ENABLE_NOTIFICATIONS=true`. Inspect queued entries before enabling delivery; jobs expire after their first delivery attempt exceeds 23 hours. The intended custom domain `akashvetiverexport.in` has not been purchased; add its Cloudflare DNS, Worker custom domain, Supabase redirect URLs and Resend verification after purchase.

Files in `.drafts` are unpublished planning and policy drafts. Keep them in source control, but do not serve them publicly. Exclude tools, development files and source-only directories from production hosting.

## Product images and administration

`npm run images:optimize` preserves original images and generates WebP display files and thumbnails in `images/optimized`. Current 39-image conversion reduced 71,501,572 bytes to 7,045,026 bytes including thumbnails (90.1%). Production output is 19.7 MiB, down from 96.3 MiB; the active hero video is unchanged. Logos retain their original PNGs for the SVG mask.

`data/products.json` is the local product source. Build generates catalogue HTML, enquiry options, catalog-data.js and an insert-only SQL seed. Do not hand-edit generated options or catalogue cards. After live Supabase mode is enabled, published database products supply all these customer views on page load.

`admin.html` provides owner sign-in, add/edit, draft/publish/archive and explicit homepage feature selection. Every photo selected there is compressed before upload: maximum 1200px / 450 KiB full image and 320px / 64 KiB thumbnail. Original uploads are not stored. Supabase storage permits only WebP up to 512 KiB and restricts writes to database-admin membership.

Validation: production build, request/share regressions, seven responsive viewport checks, browser compression/invalid-file tests and mocked product/admin workflows passed. `node tools/verify-database.mjs` executes the migrations and authorization/queue tests in local PostgreSQL; `node tools/verify-worker.mjs` checks server validation and mocked delivery; `node tools/verify-feedback-security.cjs` checks feedback recovery. Live admin sign-in and authenticated image upload require the owner to complete email verification. The owner is `akashvetiverexport@gmail.com`.
