---
name: Vettiver Botanical
description: A light botanical storefront for Tamil vetiver crafts.
colors:
  canvas: "#f6fbf3"
  surface: "#eef4e9"
  surface-deep: "#e4eedf"
  ink: "#023616"
  forest: "#1e4d2b"
  body: "#414e41"
  muted: "#586853"
  line: "#cbd8c5"
  moss: "#52682e"
  accent: "#c3f27c"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(48px, 5.8vw, 88px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(35px, 4.1vw, 60px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  control: "6px"
  image: "12px"
spacing:
  section: "clamp(76px, 8vw, 120px)"
  gutter: "clamp(20px, 4.7vw, 76px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "15px 25px"
  button-primary-hover:
    backgroundColor: "{colors.forest}"
---

# Design System: Vettiver

## Overview

A light botanical storefront: herbal off-white, forest-green typography, and spacious product photography. This records the implemented interpretation of the user's approved direction in `DESIGN (1).md`; that reference remains unchanged.

The character is calm, warm and confident. Existing product images carry the colour and detail; restrained typography and generous space provide a consistent frame. A unified product photoshoot is a separate, deferred phase.

Key characteristics: editorial headings, flat tonal surfaces, image-led product cards and purposeful motion.

## Colors

Forest ink is the primary heading and action colour. Herbal canvas is the page background; the two sage surfaces distinguish story, enquiry and footer sections. Body and muted greens support longer copy and labels. Moss supplies focus outlines, while the bright accent is reserved for text selection.

**The Readability Rule.** Keep functional text at least 12px, and preserve clear foreground/background contrast.

## Typography

Self-hosted Outfit provides headings, product names and the wordmark. Plus Jakarta Sans provides body copy and controls. The hero pairs a semibold first line with a light second line. Headings use tight tracking; paragraph copy keeps a relaxed line height. Smaller viewports use dedicated size adjustments rather than shrinking the entire page.

## Layout

The content container stops at 1408px. Fluid gutters become 22px on mobile and 16px below 360px. The hero is split on desktop and stacked below 700px. Catalog columns step from four to three below 900px, then two below 700px. The story has sticky copy only on larger screens. Category controls scroll horizontally on mobile without causing page overflow.

## Elevation & Depth

Depth comes primarily from tonal surfaces and photography. Product cards have no enclosing shadow. Only the scrolled header receives a subtle `0 5px 20px rgb(2 54 22 / .05)` shadow. Native dialogs use dark translucent backdrops.

## Shapes

Images and large containers use softly rounded corners; actions use smaller corners. Circular icon affordances sit over product imagery. Thin sage dividers separate information without enclosing every element.

## Components

Primary buttons use forest ink, white text and a minimum height of 56px; compact controls retain at least 44px targets. Hover shifts colour and moves the arrow. Keyboard focus has a 3px moss outline with 5px offset.

Product cards show image, category, name and enquiry action. Image and title open a native modal; Escape closes it and returns focus. Filtering supports category, search, an announced count, an empty state and reset.

The enquiry form prepares a message without pretending to send it. A configured WhatsApp number enables the external handoff. Inputs retain explicit labels; mobile form fields use 16px text.

Navigation becomes a native modal menu on small screens. FAQ uses native details and summary controls. Customer feedback is not invented.

GSAP supplies restrained entrance, scroll and filter transitions. Browser scrolling remains native. Reduced-motion users receive static, fully usable content; controls also work if animation libraries fail to load.

## Do's and Don'ts

- Do preserve the light botanical palette and spacious photographic composition.
- Do retain accurate product names, working interactions and visible keyboard focus.
- Do respect reduced-motion preferences.
- Don't invent prices, reviews, certifications or delivery promises.
- Don't describe the existing imagery as a completed uniform studio photoshoot.
- Don't enable WhatsApp with a placeholder number.
