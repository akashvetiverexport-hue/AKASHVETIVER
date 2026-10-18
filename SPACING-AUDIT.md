# Section spacing audit — 17 October 2026

Scope: homepage and product collection page, section spacing and responsive layout only.
This is not a complete accessibility, performance, or security audit.

## Findings and fixes

- P2: Craft and reviews stacked separate padding on the same background. Combined boundary padding was 215.2px at 1440px and 148px at 390px. Shared half-section padding now produces 96px and 64px respectively.
- P2: Mobile craft photos used square containers for landscape artwork, separating imagery from its caption. Changed the container aspect ratio to 1.5 while retaining background-size: contain; artwork is not cropped.
- P3: Section padding varied independently across products, bulk orders, reviews, FAQ, and footer. Added shared section-space (64–96px), half-section, and content-gap tokens, retaining tighter internal grouping.
- P3: Bulk-order ribbon had only 56px total bottom allowance on desktop. It now has 72px (48px outer padding plus 24px image-window padding); rotated images retain clearance.
- P3: Mobile product image-to-details gap was 64px. Reduced to 32px; details-to-thumbnails gap is 40px. Desktop reference composition is unchanged.

## Verification

- Build and TypeScript passed.
- Both pages tested at 1440, 768, 390, and 320px.
- No horizontal page overflow or overlapping top-level sections.
- FAQ expansion and product-category filtering work.
- No browser JavaScript errors in this check.
- Desktop page and mobile review-boundary screenshots inspected before and after.
- Hero styling, header, assets, section order, and animation logic were not edited.
- Optional mechanical layout detector did not finish; findings above are based on browser geometry, rendered screenshots, and CSS inspection.

The Audit skill identified the spacing issues; Layout supplied the shared spacing system. Existing botanical styling and the supplied product layout were preserved.

## Products and bulk-order follow-up

- P2: Upper/lower product grids had different column gutters. Both now use 24px; desktop details are constrained to the image width and their left edges match (902px at a 1440px viewport).
- P2: Product controls to bulk heading had 192px combined desktop spacing. Local section padding reduces this to 120px desktop and 96px mobile without changing global section spacing.
- P3: Bulk note to ribbon content gap was 88px desktop; reduced to 40px across sizes. Rotation clearance is retained.
- P3: Tablet product stacking used 64px between related blocks. Intro-to-image is now 40px (32px mobile), image-to-details 24px, and mobile details-to-thumbnails 24px.
- Verified at 1440, 1024, 768, 390, and 320px: no horizontal overflow; bulk popup opens/closes; product autoplay and collection CTA work. Desktop/mobile section screenshots inspected. Build passed.
- Only the two section stylesheets and generated assets changed in this follow-up; hero, header, artwork, section order, and carousel logic remain unchanged.
