# Customer accessibility checks — 30 October 2026

Scope: homepage, catalogue, product details dialog, reservation dialog, and customer information page in local preview at 390 and 1440 CSS px, reduced motion enabled. axe-core WCAG 2/2.1 A and AA rules were run before and after fixes. No real customer submissions were made.

## Confirmed and fixed

- The home and collection brand links had no separating space in their rendered text between AKASH VETIVER and EXPORT, leading axe to flag mismatch with their accessible name. Added the separating space while preserving the block-level visual layout.
- On desktop the visible Discover the craft link had an accessible name Scroll to the collection, causing a name/visible-label mismatch. Its accessible name now matches the visible label.

## Results

- Before: serious label-content-name-mismatch on the brand link at both widths and on the collection link at 1440.
- After: zero axe violations in the sampled pages and dialogs in the selected ruleset at both widths.
- Keyboard smoke test: product details open with Enter, close with Escape, and restore focus at 390 and 1440.
- The scanner was installed outside the project at C:/Users/avina/accessibility-audit-tools; no runtime dependencies were added.

## Limits

This is not WCAG certification. A full screen-reader review, all interactive states, zoom/reflow at 200% and 400%, real-device input, comprehensive contrast for all states, and authenticated admin accessibility remain unverified. Automated tools cannot find every accessibility issue.
