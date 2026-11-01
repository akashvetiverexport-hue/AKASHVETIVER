# Optional size and weight pricing - completed 31 October 2026

Live release:6652378b-5784-42b3-89af-fe50b0dfb972.

## Using admin
Open Products, select a product. Price is for supports unspecified, piece, pair, pack, foot, inch, kg and g. Enable Offer sizes or weights only when needed. Add up to20 distinct labels (2 feet,12 inches,500 g,1 kg) with each option's full INR price. Save changes. Base price becomes the lowest option price. Customers see From on the card and tap an accessible size button in the details popup to see its full price immediately. Size selection is required only for products that have options; ordinary products retain normal quantities/pricing. The reservation preserves the selected option and displays quantity total. This is fixed-option pricing, not a free-length calculator.

Size prices cannot coexist with enabled festival offers; disable offers first. Combos containing sized products are unavailable until explicitly designed with both size choices. This avoids an ambiguous price. Disabled size options are cleared on save; saved enquiries/invoices retain their original selected name and price.

## Raw roots
Original owner photograph from Downloads/WhatsApp Image 2026-10-30 at1.26.26AM.jpeg was resized/compressed, not regenerated. WebP image245762bytes, thumbnail13892bytes. Live database draft product-raw-vetiver-roots is Raw Vetiver Roots, category roots, pricing_unit pack, price NULL, no options. Open it in admin, add weight options/prices, select Published and save. An unpriced product cannot be published. No actual root price or weight availability was invented. Existing14 products remain published and their prices unchanged. Draft lives in Supabase, not local seed JSON; do not reseed over it.

## Implementation and verification
Migration20261031090000_optional_product_sizes.sql applied directly using authorized Supabase CLI db query. Do not run it again blindly; already applied. Adds pricing_unit,size_options, validation and three-argument private authoritative quote. Existing original quote remains for legacy unit products. Submit snapshot includes size in item name,optionId,sizeLabel,unitPrice; email and invoice handoff use immutable snapshot. Worker preserves optionId when grouping requests. Browser-supplied prices ignored. No sales records deleted or changed.

Build/typecheck passed. Isolated PGlite tests passed for authenticated owner size edit, valid prices, invalid/duplicate sizes, missing/deleted option rejection, tampered submitted price, size/quantity saved and included in email body, unpriced draft publication blocked. Chrome tests passed320/390/1440 popup switching and quantity totals, submitted optionId; admin add/save/reload/disable, weights and invoice handoff passed with fixtures. Legacy products and invoice/PDF/share workflows passed. Final deployed Chrome fixture tests and live SEO checks passed. All test enquiry POSTs intercepted, no real customers or emails created. Production email receipt and real admin sign-in are still separate unverified launch checks.

Tests: tools/verify-sizes-db.mjs,tools/verify-sizes-chrome.cjs,tools/preview-admin.cjs --sizes-check,tools/verify-worker.mjs,tools/verify-product-pages.mjs,tools/verify-new-products-chrome.cjs,tools/preview-admin.cjs --studio-check,tools/verify-seo.mjs --live.

## Remaining launch requirements
Resend notifications remain disabled. Domain/sender setup, actual email delivery, real admin sign-in and account-security prerequisites remain as recorded in DOMAIN-EMAIL-LAUNCH-STEPS.md. This feature is ready; do not describe all business operations as launch-ready until those checks are completed. No payment gateway was added.
