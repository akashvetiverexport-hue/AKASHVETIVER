# Responsive section audit — 19 October 2026

Scope: homepage and collection layout, image visibility, section anchors, enquiry dialog and automatic carousel motion. Baseline is GitHub commit `52182c1`. Preserve approved fonts, hero and product content.

## Findings and fixes

- **P1 — Product photographs cropped:** `ui/bulk-orders.css`, `.bulk-image img` used cover inside portrait frames despite square source images. Use square frames and contain, with room for the existing rotation. Full source images remain visible; originals that were photographed cropped cannot be reconstructed by CSS.
- **P2 — Bulk section exceeded laptop viewport:** at 1366×768 it was 739px tall before accounting for the header. Reduce padding and size the imagery against viewport height. Now 618px, fitting below the 104px header and 16px anchor gap.
- **P2 — Product section excessive stacking:** at 768×1024 it was 1130px tall. Retain the reference two-column arrangement at tablet widths; reduce redundant gaps and cap mobile imagery without shrinking text. Approximately 653px on tablet and 577px on laptop after fixes. Small phones retain natural scrolling rather than hiding information or forcing tiny text.
- **P2 — Double anchor offset:** section scroll margins and root scroll padding accumulated. Use a single root offset, with 16px clearance below the header.
- **P2 — Visible image corners stayed square:** contain-fit image pixels did not fill the rounded element. Add a 16px rounded square frame around the main image; preserve contain-fit for future portrait photographs.

## Review scores (limited to inspected implementation, not certification)

| Dimension | Score / 4 | Evidence / remaining limitation |
| --- | --- | --- |
| Accessibility | 3 | Full content retained, labelled controls, reduced-motion alternative; no comprehensive screen-reader or WCAG certification |
| Performance | 2 | Lazy product images and offscreen animation controls; large PNGs and React bundle remain optimization opportunities |
| Responsive design | 3 | Seven viewport sizes pass overflow and dialog checks; physical devices and Safari not tested |
| Theming | 3 | Existing botanical palette and font families preserved; some literal colour values remain |
| Implementation integrity | 3 | Reference composition retained and real image cropping corrected; source review rather than detector certification |
| Total | 14 / 20 | Good, with bounded remaining work |

No P0 blockers found in this layout pass. The long five-stage craft journey, catalogue and short landscape screens intentionally scroll. The hero is unchanged. No new business claims or live backend integrations were introduced.

## Verification

`npm run build` passes. `tools/verify-responsive-fit.cjs` checks 1920×900, 1366×768, 1024×768, 768×1024, 390×844, 320×568 and 844×390: home/catalogue overflow, image contain fit, rotated image clearance, anchor offset, enquiry dialog fit, five craft stages and Outfit heading preservation. Separate normal-motion checks confirm automatic product rotation, running marquee and no play/pause buttons. Desktop/tablet/mobile screenshots were inspected.

Next: optimize image delivery when the owner's final studio photographs arrive, then physical-device testing and a final polish pass. Real order/email backend and admin remain separate unfinished work.

## Craft and page rhythm follow-up

Reduced repeated craft-stage padding from 64–112px to 40–64px (48px tablet, 40px mobile), and changed oversized 115% image boxes to their column width. Removed the final stage's redundant bottom padding and tightened closing/introduction spacing. The five stages, alternating layout, imagery, fonts and connecting line are preserved. Text blocks shield the decorative trail from crossing letters at intermediate widths.

Shared section spacing now ranges from 56px on narrow screens to 80px on large screens (previously 64–96px). Compact product/bulk sections retain their own verified spacing. Reviews, FAQ and footer receive a modest reduction, not a forced single-screen height. At 1440px, craft stages measure about 469px including their gap, instead of approximately 559px. At 390px, the harvest stage measures 469px instead of 517px. No horizontal page overflow at 1440, 768, 390 or 320px. Desktop/tablet/mobile craft screenshots visually checked.
