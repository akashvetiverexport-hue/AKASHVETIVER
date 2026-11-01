# Customer journey review ? 29 October 2026

Scope: one simulated customer viewpoint against the local preview, with mocked submissions only. Product choices and names are sample/test data. This is a qualitative individual review, not a survey, business conversion measurement or a complete accessibility audit. No live customer request or review was sent.

## Provisional customer score: 7.5 / 10

The handmade photography, clear prices and short reservation form make it understandable to browse without an account. Search recovery, form validation and error handling are reassuring. The score is held back by the approximately five-second welcome before browsing (the user chose a visible intro), the previously confirmed blocked-script intro fallback, the larger phone/laptop difference in intro composition, and the fact that a real customer request and follow-up have not been verified end to end in the live environment.

Customer perspective, approximate 0?4 heuristic scores: visibility/feedback3; match to real-world language3; user control3; consistency3; error prevention3; recognition3; flexibility2; visual simplicity3; recovery3; help2. These are reviewer judgments, not measured customer outcomes.

## What I exercised

- Phone320?568, 390?844 and laptop1440?900: product image/name/price and Reserve action are all visible in the product detail without scrolling. Captures: C:/Users/avina/customer-piece-320.png and customer-piece-390.png.
- 320/390/1440: search no-results state and clear-filters recovery; product detail and reservation dialogs open, then close using Escape. No JavaScript errors during the tested paths. Script: .drafts/customer-extra-journey.cjs.
- node tools/verify-customer-journey.cjs: carousel autoplay and deliberate selection390/1440; first-paint loading skeleton, product list, raw-root availability message and short connected reservation at390.
- node tools/verify-request-flow.cjs: order/bulk modes, multiple items, mobile overflow, local email fallback, invalid phone; mocked service failure preserves input, retry reuses the idempotency key, duplicate submission is prevented, and success requires a valid receipt. No real submission.
- node tools/verify-feedback-mobile.cjs: feedback submission mocked at320/390, failure retains input, retry reaches pending-approval state, and dialog closes.

## Mobile preloader geometry experiment (no source changes)

For the owner's request to make mobile more like desktop, an isolated temporary build tested a portrait-only margin=.08W, reach=9 and fan multiplier=.5 while retaining the original portrait sun and desktop settings. At320?568, 360?640, 390?844 and 430?932, stroke-adjusted left/right letter bounds stayed inside the viewport in the observed 3-second frame. Captures C:/Users/avina/preloader-lab-{width}x{height}.png; scripts .drafts/preloader-customer-lab.cjs and .drafts/preloader-customer-geometry.cjs. This only moves the lettering higher and keeps its full width in these frames; it does not replicate desktop proportions exactly or prove no clipping throughout sway/other screen sizes. Parent owns any integration.

## Remaining customer-facing limitations

- User-requested fixes for preloader failure and small tablet collection target are tracked in the full audit and owned by parent.
- Live admin login/email are deferred, and actual real-world follow-up remains an owner acceptance test; mocked success proves UI behavior, not real delivery.
- Product dimensions, promised delivery times and raw-root stock depend on actual business details. Do not invent them.
- No customer-facing code was altered from this review; the approved mobile About layout remains unchanged.
