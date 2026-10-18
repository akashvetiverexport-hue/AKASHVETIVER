# Vettiver React sections

## Architecture and paths

The existing site was plain HTML/CSS/JavaScript, with global styles in `styles.css` and `hero.css`. It had no React, Tailwind, TypeScript or shadcn component directory.

React is now mounted into two isolated DOM roots, not used to rewrite the whole site:

- `components/ui/animated-testimonials.tsx`: Vettiver testimonial carousel.
- `components/ui/feedback-form.tsx`: name, feedback and star-rating form.
- `components/ui/beam-wordmark-footer.tsx`: botanical adaptation of the supplied footer.
- `components/ui/avatar.tsx`, `separator.tsx`: supplied Radix/shadcn primitives. Avatar is available but intentionally unused, because the owner requested no photos.
- `components/ui/demo.tsx`: explicit, labelled sample carousel and footer demos.
- `lib/utils.ts`: shared `cn` helper.
- `lib/beam.ts`: pure footer fitting and animation helpers.
- `ui/main.tsx`: React mounting entry.
- `ui/styles.css`: Tailwind theme/utilities and scoped section styles.
- `ui/testimonials.ts`: approved, genuine published reviews; currently empty.
- `assets/react/`: generated deployable JavaScript and CSS.

The root `@/` alias maps to this project directory. The requested `/components/ui` folder is the default UI destination in `components.json`. It is not a React requirement; consistency makes shadcn imports, dependency lookup and future component additions predictable. The supplied demo's `components/blocks` import was corrected to `components/ui`.

## Run and build

Dependencies are already installed, with exact resolutions in `package-lock.json`.

For a fresh checkout:

```powershell
npm ci
npm run build
npm run preview
```

Open http://127.0.0.1:4178. For editing TSX, run `npm run dev` in a second terminal: this rebuilds the section bundles on changes. Refresh the browser after a build. Existing HTML/CSS files remain directly editable.

`npm run typecheck` checks all component and configuration TypeScript. No backend is started by these commands.

The Vite library build explicitly defines the production React environment. All dependencies are bundled; no CDN imports or browser-side package resolution are required. Upload the entire current `assets/react/` directory, not just `sections.js`: it imports generated chunks.

## shadcn, Tailwind and TypeScript setup

This project has been configured manually to preserve the static site. Do not run a new scaffolder over the existing website.

For a separate, clean React project the equivalent official workflow is:

```powershell
npm create vite@latest vettiver-react -- --template react-ts
cd vettiver-react
npm install
npm install tailwindcss @tailwindcss/vite
npx shadcn@latest init
npx shadcn@latest add avatar separator
npm install lucide-react framer-motion @radix-ui/react-avatar @radix-ui/react-separator
```

Configure the `@/` alias in TypeScript and Vite, register the Tailwind Vite plugin, and point shadcn's `aliases.ui` to `@/components/ui`. Official instructions: [shadcn Vite](https://ui.shadcn.com/docs/installation/vite), [Tailwind Vite](https://tailwindcss.com/docs/installation/using-vite), [Vite existing-site integration](https://vite.dev/guide/backend-integration).

In THIS project Tailwind utilities use the v4 `vt:` prefix, and Preflight is deliberately omitted to avoid resetting the existing hero, header and catalog. Example: `vt:flex vt:md:grid-cols-2`. Custom component selectors use `vt-` and `bwf-` namespaces. Existing base styles still supply resets. Inspect any future CLI-generated component to ensure its utility prefix matches before building.

## Customer feedback and the future admin panel

Only name, feedback and an integer rating from 1 to 5 are collected. No photos, employer, email or company endorsements are displayed.

Today: `feedbackEndpoint` in `site-config.js` is empty. The form offers an explicitly labelled local draft, saved only when the visitor presses the save button. Restore/delete controls are provided. Drafts are not submitted, moderated or published; local storage is not a database.

Future integration:

1. Implement a same-origin endpoint such as `POST /api/feedback`.
2. The frontend sends `{ name, content, rating, consentToPublish }`. Validate types, lengths, consent and rating server-side. Rate-limit/spam-protect submissions; do not trust client validation.
3. The server must assign its own ID and set `status: "pending"` regardless of client input. Return `{ id: "server-generated-id", status: "pending" }` after persistence succeeds.
4. Protect the admin panel with authentication and server-enforced authorization. Only authorized admins may approve/reject reviews; log decisions. Do not store admin credentials or approval authority in localStorage.
5. Expose only approved reviews through the public data source. Pending/rejected entries must never be delivered by a public endpoint. Replace the static `approvedTestimonials` import with that approved-only source when the backend is built.
6. Set `feedbackEndpoint` to the deployed same-origin path. The current client refuses cross-origin endpoint configuration. Publication consent appears when real submission is enabled.

The admin panel, database, API, moderation and approved-review retrieval are NOT implemented in this frontend task. The form never displays a success acknowledgement without a successful pending-response contract.

## Demo and verification

`/?ui-demo=testimonials#reviews` previews a clearly labelled three-item carousel. Samples describe layout testing and are not presented as real reviews. This opt-in demo does not change the approved production data. No sample social URLs or major-company endorsements ship as claims.

`tools/verify-sections.cjs` covers responsive layouts, empty state, local drafts, carousel navigation, footer links, pause/reduced-motion and a mocked moderation API response. Mock requests are intercepted, not sent to a live service.

The existing `tools/verify.cjs` and `tools/verify-header.cjs` remain regression checks for catalog and header behaviour. Set `PLAYWRIGHT_PATH` to an installed Playwright package when running these tools. Screenshots/reports: `.impeccable/review/react-sections/`. `node tools/verify-beam.cjs` checks footer math and verifies the existing header/hero markup was not changed. Type checking, production build and all four test scripts passed during this integration.

Backup before integration: `.backups/before-react-sections/`.

## Deployment

Publish the existing website plus `assets/react/`. Source TSX, node_modules, internal skills, backups and test artifacts do not need to be published. Keep `site-config.js`, fonts, icons, logo and active images available. After changing TSX, data or section styles, rebuild before deployment.
