# Akash Vetiver Workshop release

## What changed

- Responsive admin with the existing Akash Vetiver logo, forest-green navigation, separate Sales, Products, Festival offers, Orders & reviews and Invoices sections.
- Searchable products; common editing fields first; photo/display and offer settings expand when needed; save action also available beside the editor title.
- Banner component integrated at `components/ui/banner.tsx`, using the existing shadcn button and Tailwind v4 theme. Dismissal survives reload and tolerates unavailable local storage. Reduced motion is respected. Demo is `banner-demo.tsx` so the existing storefront footer demo remains intact.
- `components/ui` and `ui/styles.css` are the existing component/style paths. React, TypeScript, the `@/` alias and shadcn `components.json` were already configured. Tailwind v4 uses CSS configuration; no incompatible v3 config was added. Installed `@radix-ui/react-slot`, `jspdf`, and `jspdf-autotable` with lockfile updates; lucide and class-variance-authority already existed.
- Invoice editor supports customer details, catalogue items, zero-price complimentary gifts, shipping, advance, notes and optional business details. Registration details remain blank. Currency changes clear monetary amounts for explicit re-entry; catalogue prices are imported only for INR.
- Save immutable invoice snapshots to the private Supabase invoices table. Invoice history supports customer/number search, month filtering, reopening and PDF download. Voiding retains the record. Price edits and product deletion cannot change prior invoices.
- Orders have a Create invoice action, including the order's recorded product/combo/gift details. Prices must be reviewed before saving.
- Sales derives product value, shipping, advances and balances from issued invoices. Void invoices are excluded; each currency is separate. A six-month view and recent invoice list use the same records. These are invoice figures, not bank reconciliations or later payment tracking.
- PDF code loads only when requested. Invoices remain available beyond one month; no expiry or cleanup is configured.

## Skills applied

| Skill | Concrete work |
| --- | --- |
| GPT Taste | Kept Outfit editorial headings, balanced storefront product titles and restrained heading proportions. Preserved the user's approved hero and natural scrolling rather than adding forced scroll sections. |
| Animate | Short admin section entrances, product-image hover, reservation dialog entrance and button feedback; reduced-motion alternatives. |
| Critique | Independent visual review and independent source review identified mobile label collisions, header wrapping, overlapping preview notice, long editing flow, currency ambiguity and PDF overflow. Addressed those findings. The optional deterministic npm detector was unavailable (ENOTCACHED); no automated detector score is claimed. |
| Polish | Scoped preview notice, corrected responsive viewport behavior, aligned labels, compacted the editor, improved mobile navigation and fixed default definition-list margins in totals. |
| Design Taste Frontend | Branded shadcn controls, existing logo/type palette, responsive task sections, clear loading/error/empty states, isolated PDF loading. |
| Clarify | Specific save/download/void labels, explicit local-versus-live notice, understandable save failures, currency and invoice-history guidance. |
| Delight | Create invoice from an order, live invoice preview, zero-price gift lines, saved/reopened records and immediate sales updates. |

## Verification

- Build and TypeScript validation.
- Isolated browser checks: invoice creation, gift line, totals, PDF download, reload, prior-month history, sales values, void exclusion, 320/390 mobile and desktop overflow.
- Product regression checks: add/edit/publish/archive/delete, compressed image uploads, gift image, combos, festival campaigns; unauthorized admin blocked.
- Database tests: admin-only read/write, server-calculated totals, bad-input constraints, immutable snapshots, duplicate numbers, no deletion, void-only updates and records older than a month.
- Connected-database transaction checked invoice insertion/calculation then rolled back. Anonymous read and authenticated deletion privileges are absent.
- Supabase security advisors show only pre-existing admin-check definer and password-protection advisories; no invoice-related warnings.
- Storefront reservation/bulk form checks and About curve/footer/mobile CTA checks.

## Access and limits

Login remains deferred at the owner's request. `npm run admin:preview` opens the isolated local admin without email login. It now uses the browser's actual window size, not a fixed 1280px viewport. Local edits persist in `.drafts/admin-preview.json`; they do not modify Supabase. Live admin remains protected, and its new invoice storage is connected for authorized sessions. No business address, registration number, active gift campaign, customer records or real invoices were invented.
