---
name: Cyber-Terminal Portfolio
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#ecb2ff'
  on-secondary: '#520071'
  secondary-container: '#cf5cff'
  on-secondary-container: '#480063'
  tertiary: '#ffeac0'
  on-tertiary: '#3e2e00'
  tertiary-container: '#fec931'
  on-tertiary-container: '#6f5500'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ecb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#ffdf96'
  tertiary-fixed-dim: '#f3bf26'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
  surface-charcoal: '#12141D'
  surface-elevated: '#1E202B'
  terminal-green: '#50FA7B'
  code-gray: '#94A3B8'
  neon-cyan-glow: rgba(0, 229, 255, 0.15)
  border-muted: '#2D333B'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  terminal-title:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  terminal-padding: 2rem
  section-gap: 120px
---

## Brand & Style

This design system is built for a professional developer-centric portfolio that balances technical precision with high-end digital aesthetics. It blends **Minimalism** with **Modern Corporate** layouts, infused with a **Cyberpunk-lite** atmosphere. The goal is to evoke a sense of deep technical expertise, reliability, and modern craftsmanship.

The visual narrative is driven by the "Integrated Development Environment" (IDE) aesthetic. It utilizes a dark, low-fatigue background to make neon accents pop, signifying active states and "syntax highlighting" for information hierarchy. Key stylistic elements include subtle grid overlays, scanline patterns in the background, and glowing terminal interfaces that feel both functional and futuristic.

## Colors

The palette is optimized for a high-contrast dark mode environment. 

- **Primary (Cyan):** Used for primary actions, titles, and active code blocks. It represents the "cursor" and "active command."
- **Secondary (Purple):** Used for accents, gradients, and secondary labels to provide depth and a modern "synth-wave" touch.
- **Surface Strategy:** The system uses a tiered charcoal hierarchy. `neutral_color` is the base background, `surface-charcoal` for containers, and `surface-elevated` for terminal windows and cards.
- **Semantic Accents:** `terminal-green` is reserved for success states, status badges, and "live" signals.

## Typography

This system uses a dual-font approach to distinguish between "Content" and "Code."

1.  **Plus Jakarta Sans:** Chosen for headlines and hero sections. It is clean and modern, providing a professional balance to the technical elements.
2.  **Inter:** Used for long-form body text to ensure maximum readability on dark backgrounds.
3.  **JetBrains Mono:** The workhorse for the developer aesthetic. Used for navigation, terminal headers, labels, and code snippets. 

All mono text should favor lowercase for a "shell" feel, except for `label-caps` which uses uppercase with wide tracking for section headers.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (12 columns) and a fluid single-column model on mobile. 

- **The Grid:** A subtle 32px square grid pattern is overlaid on the background at 5% opacity to reinforce the technical theme.
- **Terminal Containers:** Content is grouped into "Terminal Windows" with consistent internal padding.
- **Vertical Rhythm:** Large section gaps (120px+) are used to give the content room to breathe, emphasizing a premium, uncluttered experience.
- **Mobile Adaptations:** At the 768px breakpoint, margins shrink to 16px, and terminal windows lose their "window controls" (minimize/maximize/close) to save horizontal space.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Glows** rather than traditional shadows.

- **Stacking:** The base layer is the darkest. Terminal windows sit one level above (`surface-charcoal`) with a subtle 1px border in `border-muted`.
- **Glows:** Primary buttons and active status indicators feature a soft `neon-cyan-glow` (blur: 20px) to simulate light emission from a screen.
- **Glassmorphism:** Navigation bars and floating tooltips use a light backdrop-blur (12px) with a semi-transparent dark fill to maintain context of the background grid.
- **Borders:** Every container should have a crisp 1px border. Avoid heavy shadows; use a very subtle, diffused shadow only for top-level floating elements.

## Shapes

The shape language is "Soft" yet structured. 

- **Primary Corners:** A consistent 0.25rem (4px) radius is used for all terminal windows, buttons, and input fields to maintain a precise, technical feel without being overly aggressive.
- **Status Chips:** Use `rounded-xl` for status badges and tags to contrast against the more rigid terminal containers.
- **Decorative Elements:** Code snippet lines and list bullets should remain sharp (0px) to mimic terminal output.

## Components

### Terminal Windows
The core container. It features a top bar with three colored dots (red, yellow, green) on the left and the file name/path in `terminal-title` centered or left-aligned. The body uses `surface-charcoal`.

### Buttons
- **Primary:** Solid Cyan background, black text. No border. On hover, add a `neon-cyan-glow`.
- **Secondary:** Transparent background, `border-muted`, cyan text. On hover, shift background to `neon-cyan-glow`.

### Code Snippets
Presented inside terminal windows. Use `code-sm` typography. Syntax highlighting should use the primary and secondary colors. Include a "Copy" button in the top right that appears on hover.

### Status Badges
High-contrast, small pills. Example: "Available for work" uses a green dot with `label-caps` text. The background is a 10% opacity tint of the status color.

### Input Fields
Dark background (`neutral_color`), 1px `border-muted`. On focus, the border changes to the primary cyan with a subtle inner glow. The cursor should be a solid cyan block.

### Project Cards
A simplified terminal window. Includes a thumbnail image (if applicable) and a list of technology tags using the `code-sm` font.