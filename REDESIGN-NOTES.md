# Vettiver redesign handoff

The approved light botanical direction is implemented in the existing HTML/CSS/JavaScript site. Testimonials and the beam footer now use small React/TypeScript sections built with Vite and scoped Tailwind utilities. See `REACT-INTEGRATION.md` for build, setup and deployment instructions; the rest of the site remains static.

## Preview

Run `node tools/preview.cjs` from this folder and open http://127.0.0.1:4178. The preview is local, not a public deployment.

## WhatsApp

Set `whatsappNumber` in `site-config.js` to the real business number, including country code and digits only. It is intentionally empty now. Until configured, the form prepares a copyable enquiry and sends nothing. Prices and availability remain confirmed by enquiry.

## Photography

The existing twelve product images remain in use. Their original provenance has not been independently verified. No new generated product photo is shipped in this redesign. A consistent studio-background photoshoot is deferred until the website direction is accepted.

## Files and recovery

- `index.html`: catalog, story, occasions, enquiries, FAQ and dialogs.
- `styles.css`: responsive design system.
- `script.js`: interactions and reduced-motion-aware animations.
- `DESIGN.md` and `.impeccable/design.json`: implemented design reference.
- `.backups/before-botanical-redesign/`: original HTML, CSS and JavaScript retained for recovery.

## Verification

`tools/verify.cjs` runs Playwright checks for seven viewport widths, catalog counts/search/reset, dialogs and focus return, mobile navigation, enquiry preparation, reduced motion, missing animation-library fallback and configured WhatsApp URL encoding. WhatsApp is intercepted in the test; no messages are sent. Reports and screenshots are in `.impeccable/review/`.

The external Playwright package can be supplied with the `PLAYWRIGHT_PATH` environment variable. This is a local test helper, not a production dependency. Chromium testing does not substitute for real-device Safari testing or a formal accessibility audit. Delegated documentation was unavailable; documentation and final visual review were completed locally. The generated hero reference is directional, not a separately user-approved pixel contract.

## Publishing

Publish `index.html`, `styles.css`, `hero.css`, `script.js`, `site-config.js`, `logo.png`, `assets/` (including the complete built `assets/react/` directory), and the used `images/` files. Do not publish node_modules, backups, internal skills, review artifacts, tools or private notes. Configure the real contact number and review product copy before launching. Set production canonical/absolute social image URLs once the final domain is known.
