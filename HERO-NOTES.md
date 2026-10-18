# Botanical still-life hero

The scale-and-cash concept was rejected and is no longer rendered or requested by the page. The replacement focuses on vetiver itself: sunlit roots on limestone, fresh grass and deep forest greens. The user requested a new idea and implementation; this design awaits their visual review.

## Scope and motion

The confirmed header behaviour is transparent with white branding at the top, then light with black branding after scrolling. No separate logo box. The crest is rendered from the original artwork through a transparent luminance mask and inherits the header colour; the source image is unchanged. Navigation and menu controls follow the same colours. Catalog images, details, enquiry form and lower sections are unchanged.

The scene uses a short, gentle photographic push-in on entry, with subtle fine-pointer movement on desktop. No fake balance physics, continuous animation or scroll hijacking. Reduced-motion mode shows the static scene; library-failure fallback retains content and controls. On mobile the scene sits below the copy so the roots and actions do not compete.

## Assets and recovery

Active image: `D:/Vettiver/images/hero/vetiver-still-life.png`.
Generated with the built-in image-generation tool; it is illustrative botanical campaign art, not an inventory photograph.
Original logo `logo.png` is unchanged and supplies the header crest. The viewBox isolates the crest, with one readable brand name beside it instead of duplicated tiny lettering. The separately generated `logo-transparent.png` remains available but is not used by the header.
The rejected hero files and notes are backed up in `.backups/before-botanical-still-life/`. Old image assets remain recoverable but are not loaded by the page.

Deploy `hero.css`, `logo.png` and the active hero image alongside the existing site files.
Preview: http://127.0.0.1:4178.

## Generation prompt

Use case: ads-marketing. Asset: photorealistic luxury botanical website hero image, wide landscape 16:9. Create an art-directed still life of natural VETIVER ROOTS, not a product diagram. On the RIGHT HALF, a generous sculptural bundle of dry golden-tan vetiver roots loosely bound once with natural fibre rests diagonally across a broad low pale limestone block. Long fine fibrous roots flow and fan gracefully over the stone edge toward lower right, incredibly tactile. Behind the roots, a small stand of long slender fresh vetiver grass catches light; soft out-of-focus deep forest greenery at far right. Rich dark forest-green plaster background. Directional afternoon sunlight from upper right creates beautiful root highlights and leaf shadows, editorial DSLR photography, natural material texture, refined quiet luxury and depth. The entire LEFT 45% is near-black forest green softly textured empty negative space for website text. Subject fully legible on right, composition not cluttered. Stone occupies lower right 35%; roots and grass occupy right from 22% to 88% image height. View slightly above table level, 50mm lens. No scales, no balance machines, no cash, no coins, no bags, no bottles, no packaging, no people, no text, no labels, no logos, no watermark, no UI, no frames. Realistic premium botanical campaign photograph, not CGI.

## Verification

Hero screenshots and reports are stored in `.impeccable/review/botanical-still-life/`.
Tests cover five hero viewport sizes, visible CTA, no overflow, loaded image, original logo, absence of the scale, and reduced motion. The existing full-site browser tests cover seven widths and catalog/dialog/enquiry interactions. These Chromium checks are not a formal cross-browser accessibility audit.
