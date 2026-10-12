---
name: Bryan López Portfolio
description: A bright, tidy bento board in Geist where services, cases and contact share one grid, with the logo gradient reserved for two surfaces.
colors:
  bg: "#eef1f0"
  tile: "#ffffff"
  ink: "#12171a"
  muted: "#535e64"
  line: "#dce1e2"
  cyan: "#03a9d4"
  green: "#5db12f"
  cyan-ink: "#02739a"
  green-ink: "#3a7a19"
  on-brand: "#0c1a13"
  on-dark: "#f4f7f6"
  gradient-mid: "#2fb07f"
  dark-bg: "#0e1214"
  dark-tile: "#161c1f"
  dark-ink: "#edf2f1"
  dark-muted: "#9ba7ac"
  dark-line: "#263035"
  dark-cyan-ink: "#4fc6ea"
  dark-green-ink: "#8ad263"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.55
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  tile: "24px"
  media: "14px"
  pill: "999px"
spacing:
  gap: "16px"
  gap-mobile: "12px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(72px, 10vw, 128px)"
  max-width: "1360px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "15px 22px"
  button-primary-small:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "15px 22px"
  tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
  tile-service:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "28px 30px"
  tile-automation:
    textColor: "{colors.on-brand}"
    rounded: "{rounded.tile}"
    padding: "clamp(28px, 3vw, 40px)"
  contact-band:
    textColor: "{colors.on-brand}"
    rounded: "{rounded.tile}"
    padding: "clamp(36px, 6vw, 80px)"
  chip-stack:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  step-number:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    size: "36px"
---

# Design System: Bryan López Portfolio

## Overview

**Creative North Star: "The Tidy Bento Board"**

A cool off-white board of white 24px tiles, ink text and real screenshots as tile fill. Few projects read as plenty because services, cases and contact all sit on one grid. It refuses the dark developer portfolio with a wall of thumbnails. The voice is plain and friendly; the structure does the persuading.

The logo's cyan-to-green gradient is the only saturated color and appears on exactly two surfaces. Everything else is neutral, so the gradient reads as the place to act or look. Light is the primary theme; a dark theme follows the system setting.

**Key Characteristics:**
- One shape for actions (pill), one shape for surfaces (24px tile).
- Geist Variable only; hierarchy comes from weight 800 headings with tight tracking.
- One motion moment: the hero bento settles in on load.
- No eyebrows, no italic headings, no decorative icons in headings.

## Colors

Cool neutral ground, white tiles, near-black ink, and the brand pair used as gradient fill and as darkened "ink" variants for text.

### Primary
- **Logo Cyan** (#03a9d4): focus ring, text selection, the "<" in the brand mark, gradient start.
- **Logo Green** (#5db12f): the ">" in the brand mark, gradient end.
- **Brand Gradient** (`linear-gradient(120deg, #03a9d4 0%, #2fb07f 55%, #5db12f 100%)`): automation tile and contact band only.

### Neutral
- **Cool Paper** (#eef1f0, dark #0e1214): page ground, sticky header at 94% mix.
- **Tile White** (#ffffff, dark #161c1f): every tile, caption strip, stack chip.
- **Ink** (#12171a, dark #edf2f1): text and the primary pill and step number.
- **Muted Slate** (#535e64, dark #9ba7ac): secondary copy, nav links, footer.
- **Hairline** (#dce1e2, dark #263035): problem-list rules, ghost button border, chip border, media border.
- **Cyan Ink** (#02739a, dark #4fc6ea) and **Green Ink** (#3a7a19, dark #8ad263): AA-safe text-weight versions for the case link and service icons.
- **On Brand** (#0c1a13): text and primary button on gradient surfaces, both themes.
- **Error Ink** (#9c2a2a, dark #ff9d94) and **Error Bg** (#fbecea, dark #2b1b1b): failed demo requests only.

### Named Rules
**The Two Surfaces Rule.** The gradient fills only the automation tile and the contact band. The only small exceptions are the user chat bubbles and the 3px active-tab bar in the Try demos. Never on headers, buttons, text or other tiles.

**The Ink Variant Rule.** Raw cyan and green are for fills, the focus ring and the logo mark. Colored text and icons use the Cyan Ink and Green Ink tokens.

## Typography

**Display, Body, Label Font:** Geist Variable (with ui-sans-serif, system-ui, sans-serif)

**Character:** One geometric grotesque. Weight 800 with negative tracking for headings, 400 to 600 for everything else.

### Hierarchy
- **Display** (800, clamp(2.75rem, 6.6vw, 6rem), 0.95, -0.04em): hero h1, max 11ch.
- **Display-contact** (800, clamp(2.25rem, 5vw, 4rem), 0.98, -0.04em): contact band h2, max 14ch.
- **Headline** (800, clamp(2rem, 4.2vw, 3.25rem), 1.02, -0.035em): section titles, max 20ch. Case names use 800 at clamp(1.75rem, 3vw, 2.5rem) and the automation title 800 at clamp(1.75rem, 2.6vw, 2.25rem), both -0.03em.
- **Title** (700, 1.25 to 1.375rem, -0.01 to -0.015em): problem, service and step headings.
- **Body** (400, 1.0625rem, 1.55): copy. Lead paragraphs 1.1875rem, max 58ch, muted.
- **Label** (600 to 700, 0.875 to 0.9375rem): stack chips, captions, case definition terms.

### Named Rules
**The Upright Rule.** Headings are never italic (`font-style: normal` on h1 to h3), always `text-wrap: balance`.

## Layout

A single centered `.wrap`: `min(100% - 2 * gutter, 1360px)`, gutter clamp(16px, 4vw, 40px). Sections are separated by clamp(72px, 10vw, 128px) top padding. Tile gap is 16px (12px on phones).

Hero bento: 4 columns, 2 rows, height clamp(560px, 100svh - 104px, 780px). Hero tile spans 2x2; the first screenshot spans columns 3 to 4 on row 1; the other two sit below it. Services: 1.4fr / 1fr (service stack beside automation tile). Cases: 7fr / 5fr media and body. Steps: 4 columns. Problems: 2 columns with 56px column gap, divided by hairlines.

Breakpoints (max-width):
- **1099px:** bento becomes 2 columns, auto height; hero spans both columns (min 440px); screenshot tiles 16/10, first spans both; services stack to one column; steps become 2 columns.
- **767px:** bento is one column; nav links and brand name hide (monogram plus the Escríbeme pill remain); hero CTA buttons fill the row; problems, cases and steps go single column.

Header: sticky, 72px, brand left, nav center-right, one pill at the end.

## Elevation & Depth

Flat. Tiles are separated by tonal contrast (white on cool paper) with no shadow. The single shadow is on case screenshots: `0 18px 50px rgb(18 40 48 / 0.10)` (dark: `rgb(0 0 0 / 0.35)`) together with a 1px hairline border.

### Named Rules
**The Flat Tile Rule.** Tiles never carry shadows. Only screenshots shown outside a tile get the soft shadow.

## Shapes

Tiles and the contact band: 24px. Screenshot media in the case layout: 14px. Buttons, stack chips, step numbers and the skip link: full pill (999px). Focus ring: 3px cyan outline, 3px offset, 6px radius. Screenshot tiles clip to the tile radius; the caption strip is a white band under the image.

## Components

### Buttons
- **Shape:** pill (999px), 1.5px transparent border, weight 600, 1.0625rem, icon gap 10px.
- **Primary:** Ink fill, Cool Paper text, padding 15px 22px. Small variant (header) 11px 18px at 1rem. Hover (fine pointers only) mixes 14% cyan into the ink.
- **Ghost:** transparent, hairline border, ink text. Hover darkens border to ink (fine pointers only).
- **Pressed:** `scale(0.97)` over 160ms.
- **On gradient:** primary becomes On Brand fill with tile-white text.

### Screenshot tile
Image fills the tile with `object-fit: cover` and a per-case focal point; a white caption strip below carries bold name plus muted descriptor. Hover scales the image to 1.03 over 600ms (fine pointers only). The whole tile links to its case.

### Problem list
Two-column list, each item a top hairline, 1.25rem bold title, muted fix paragraph (max 48ch). No cards, no icons.

### Service tiles
White tile, icon in Green Ink at 28px on the left spanning title and text, 1.375rem title, muted body. Padding 28px 30px (24px on phones).

### Automation tile
The brand gradient fill with On Brand text, 34px robot icon, 800 title, and a bottom-aligned list of capabilities separated by 18% On Brand hairlines.

### Case layout
Alternating-free two-column row: screenshot (14px radius, border, soft shadow, hover scale 1.02) beside name, descriptor, "El desafío" / "Lo que hice" definition list, stack chips and a Cyan Ink link with an arrow.

### Steps
Four columns; a 36px ink circle with tabular numeral, 1.375rem title, muted text.

### Contact band
Brand gradient, 24px radius, 800 headline max 14ch, 1.25rem lead, then the single Escríbeme pill and the email link.

### Try demos
Section `#pruebalo` right after services: a headline and lead, then one white 24px tile holding an accessible tablist (Atención al cliente, Agenda de horas, Redes sociales; arrow keys, Home and End) over three panels. Active tab shows a 3px brand-gradient bar; inactive tabs are Muted Slate. Chat and agenda panels share a business selector (ink-filled pill chip when active, hairline pill otherwise) above a 14px chat panel on Cool Paper: white caption header with the business name and a Cyan Ink "Demo" tag, assistant bubbles in Tile White with a hairline, user bubbles in the brand gradient with On Brand text (14px radius, one 4px corner), "escribiendo…" typing bubble, and three suggestion chips in the empty state. Agenda confirmations are a Green Ink bordered card inside the chat. Social is a form (14px fields, 48px high) beside five post cards with a ghost "Copiar" pill. Errors use the Error Ink and Error Bg tokens and, for limits or failed verification, the single Escríbeme pill. Panel height is clamp(400px, 60svh, 480px); motion is a 240ms rise-in, off under reduced motion. Every business shown is fictional and labelled Demo.

### Motion
One load animation, `settle` (700ms, `cubic-bezier(0.23, 1, 0.32, 1)`): opacity from 0.35, translateY 18px, scale 0.985, blur 4px; the four bento tiles are staggered 0, 70, 140, 210ms. Only inside `prefers-reduced-motion: no-preference`. Under `reduce`, animation and transition durations collapse to 1ms and smooth scrolling is off. Hover scale and button hover are gated to `(hover: hover) and (pointer: fine)`. Easing token: `--ease-out` cubic-bezier(0.23, 1, 0.32, 1). The contact band's primary button uses `--color-on-brand` fill with `--color-on-dark` text in both themes.

## Do's and Don'ts

### Do:
- **Do** use the label "Escríbeme" for every contact-intent button (header, hero, contact band).
- **Do** keep the gradient on the automation tile and contact band only.
- **Do** use 24px tiles, 999px pills and nothing in between for surfaces and actions.
- **Do** gate hover transforms to fine pointers and keep motion to the single load settle.
- **Do** use Cyan Ink and Green Ink for colored text and icons so contrast holds in both themes.

### Don't:
- **Don't** add eyebrows, kickers or small uppercase labels above headings.
- **Don't** set headings in italic.
- **Don't** put shadows on tiles or gradients on buttons, text or headings.
- **Don't** introduce a second typeface or a second button shape.
- **Don't** replace real screenshots with illustration or generic icon art.
