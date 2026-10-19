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

## Deployment notes

`npm run build` now creates a clean `dist` directory for deployment, in addition to the existing local React preview assets. Never deploy the repository root or only `assets/react`.

Cloudflare Workers Git integration: build command `npm run build`, deploy command `npx wrangler deploy`, root directory the repository root. The committed `wrangler.jsonc` serves `dist` as static assets. If using Cloudflare Pages instead: framework None, build command `npm run build`, output directory `dist`.

Deployments must use a commit containing these changes and the new studio images. This build does not connect Supabase, email delivery or admin functionality. No deployment is performed by the build command.

Keep API keys and credentials on the server, never in `site-config.js`. Order and feedback endpoints are not connected yet; the current request flow prepares an enquiry without claiming it has been sent.

Files in `.drafts` are unpublished planning and policy drafts. Keep them in source control, but do not serve them publicly. Exclude tools, development files and source-only directories from production hosting.
