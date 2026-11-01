# Admin prices and festival offers

Admin: https://akashvetiver.akashvetiverexport.workers.dev/admin.html

Use akashvetiverexport@gmail.com and choose **Email me a sign-in link**. Open the received link on the same device. The account has admin access; mailbox verification remains the owner's step. We have not sent or tested delivery of a login email during this implementation.

## Products and prices

Select a piece to edit it, or choose **Add a product**. Enter its name, description, category, price and photo, then save as Draft or Published. Product and gift photos are compressed before upload.

Initial sample amounts: garlands ₹650; door hangings ₹450; décor and ceremonial pieces ₹350. The website shows these prices directly, as requested. Update each price in admin when ready; the internal sample flag is not shown to customers.

Archive hides a product while preserving it for later. **Delete permanently** requires typing its name. Deletion preserves existing enquiries and their original price/offer details. A deleted or archived combo partner is no longer offered to new customers.

## Festival banner

In **Festival campaigns**, create a campaign such as Diwali offers or Vijayadashami offers. Add a title, message, optional banner image, start/end dates, and enable it. Times use the device timezone. The public banner appears only during the enabled schedule and links to that festival's eligible pieces.

## Product offers

Select the product, open **Offers & free gifts**, and set:

- The badge text, such as “Diwali gift”.
- The campaign, or Standalone offer.
- Product offer start/end times and Enable this product's offer.
- Optional discounted price, lower than the regular price.
- Optional free gift name including quantity, such as “50g vetiver roots”, and its photo.
- Optional second product and combined price. One combo set includes one of each product.

For a linked festival, both the campaign and product offer must be enabled and within their dates. One gift is included per purchased piece or combo set. Clear the gift name to remove the gift; choose No combo to remove a combination. Deleting a festival disables its associated product offers.

The product popup shows the gift image and combo images. Customers can request a normal piece or the combo. Enquiry summaries and admin inbox entries include these details. The server derives prices, gifts and included products from the database; customer-supplied prices cannot override them. Existing enquiry snapshots survive price edits, campaign changes and product deletion.

## Publication and verification

Published products and prices appear on subsequent page loads after the short catalogue cache window (approximately 15 seconds). Open pages hide scheduled expired offers on a 30-second timer; the server checks eligibility again at submission. Reload after changing campaign configuration.

No fabricated festival discounts or gifts were activated in production. Set the actual deal and dates before enabling your campaign. The website remains an enquiry flow, not a payment checkout.

Verified with isolated Postgres/PGlite tests, mocked admin and customer browser workflows at 390px and 1440px, enquiry regression checks, TypeScript/build checks and live read-only API checks. Tests covered admin-only writes/deletion, image compression, festival filtering, gifts, combos, expiry, archived/deleted partners and preserved enquiry history. No real customer enquiries or test reviews were created.

Resend customer-enquiry notification delivery is still disabled pending configuration. This is separate from Supabase's admin sign-in email.

The same release also restores modest mobile spacing, removes redundant mobile product detail CTAs, keeps product photos/names linked to details, bounds the About trail inside the viewport, corrects menu branding and uses “akashvetiver” in the footer.

## Login-free local preview

Run `npm run preview` if the local website is not already running, then `npm run admin:preview` from D:\Vettiver. Use the separate browser window that opens with the yellow LOCAL PREVIEW banner. This window intercepts all Supabase requests and saves edits only to `.drafts/admin-preview.json` and `.drafts/admin-preview-images/`. Reloads preserve your local edits. It never publishes changes, sends emails, or bypasses the public website’s authentication. Close the preview browser to stop it.
