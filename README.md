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

Keep API keys and credentials on the server, never in `site-config.js`. Order and feedback endpoints are not connected yet; the current request flow prepares an enquiry without claiming it has been sent.

Files in `.drafts` are unpublished planning and policy drafts. Keep them in source control, but do not serve them publicly. Exclude tools, development files and source-only directories from production hosting.
