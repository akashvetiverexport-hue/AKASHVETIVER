# Product showcase integration

Reference: Downloads/hero-section-41, hero-section-41.tsx. Its header and hero wrapper were not imported. The existing homepage header and video-hero markup were compared before and after and remain identical.

Homepage: components/ui/product-showcase.tsx mounts only inside #products. It uses the same Embla loop engine, default slide duration and 3-second autoplay, synchronized image/thumbnail/text tracks, slanted thumbnail outlines, CTA sheen and desktop 3:2 columns. Product descriptions replace restaurant testimonials; existing product images are used without modification. Responsive ordering follows the reference.

Accessibility adaptations: named thumbnail buttons, previous/next/pause controls, keyboard arrows, automatic pause while offscreen, hidden, hovered or focused; manual interaction pauses playback. Reduced motion disables autoplay and uses instant selections.

Full collection: products.html preserves all 12 catalog entries, filtering, search, native product dialogs and the enquiry flow. Homepage category links lead to products.html?category=... . Featured links lead to the corresponding product anchor. ui/products.ts contains the showcase's existing catalog copy; keep this in sync with the static catalog until shared backend data is introduced.

Build: npm run build. Deploy products.html and all generated assets/react files along with index.html, script.js and the existing assets. Verify with tools/verify-showcase.cjs.
