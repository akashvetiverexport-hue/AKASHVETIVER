# Mobile carousel fix — 2026-10-30

Normal mobile touch scrolling permanently stopped autoplay through showcase-wide pointer-down handling and Embla's stop-on-interaction behavior.

Updated components/shadcn-studio/blocks/hero-section-41/hero-section-41.tsx to resume after Embla pointer release only while visible, in view, with normal motion preference and no deliberate selection. Horizontal touch gestures, thumbnail choices, mouse interactions and keyboard focus still stop playback. Touch-generated focus and mouse-enter no longer accidentally stop mobile autoplay. Layout unchanged.

Validation: npm run build; tools/verify-mobile-autoplay.cjs (CDP touch scroll, selected-product stability, reduced motion); tools/verify-customer-journey.cjs (390/1440 carousel and catalogue/reservation checks) passed locally.

Published version: 8c5dfb5b-a642-4981-b66f-6b2804a6706f at https://akashvetiver.akashvetiverexport.workers.dev .
