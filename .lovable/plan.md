## Footer redesign + stats refresh

### 1. Update "Our Impact" stats to match HISP India content

Replace the 4 generic footer stats with the verified numbers used in the hero bento:

```text
20+  Years of Impact          →  18+  Years of Experience
15+  Countries Supported      →  15+  Countries Served
1B+  People Reached           →  30+  DHIS2 & OpenMRS Deployments
100+ Projects Delivered       →  38+  Partner Organizations
```

Numbers will animate (count-up on scroll into view) using the same `CountUp` pattern already in `ImpactHero.tsx` for visual continuity.

### 2. New footer concept — "Aurora Dock"

A single, slick footer that feels like a product dock rather than a 4-column wall of links.

```text
┌────────────────────────────────────────────────────────────────┐
│  ░░ ambient cyan→deep-teal aurora gradient + grain ░░          │
│                                                                │
│   Big italic mission line, fades word-by-word on scroll-in:    │
│   "Open source. Open data. Open futures for public health."    │
│                                                                │
│   ┌─ Stay in the loop ────────────────┐  ┌─ Talk to us ─────┐ │
│   │  email input  ▸  Subscribe        │  │ contact@ ⌁ phone │ │
│   └───────────────────────────────────┘  └──────────────────┘ │
│                                                                │
│   Impact strip — 4 animated counters in a single row           │
│   18+ Years · 15+ Countries · 30+ Deployments · 38+ Partners   │
│                                                                │
│   ── thin divider ──                                           │
│                                                                │
│   Compact link rail (one row, pill separators):                │
│   About · Work · Offerings · Research · Stories · Team · Careers│
│                                                                │
│   © 2026 HISP India   •   Terms · Privacy · Sitemap            │
│   [globe pill] Part of Global HISP Network    [LI] [X] [FB]    │
└────────────────────────────────────────────────────────────────┘
```

Unique touches:
- **Aurora gradient** — animated cyan → deep-teal blob that drifts slowly behind the content (CSS keyframes, GPU-only).
- **Grain overlay** — very faint SVG noise so the gradient never looks flat.
- **Word-by-word reveal** of the mission line as the footer enters the viewport.
- **Impact strip** with the same `CountUp` animation as the hero (numbers tick up when footer scrolls into view).
- **Magnetic social pills** — small hover-tilt on the LinkedIn/X/Facebook icons (transform only, no JS lib needed).
- **Email input with inline arrow submit** — collapses the form to a single rounded pill.
- **Compact horizontal link rail** instead of a separate "Quick Links" column, giving the footer more breathing room.
- **Scroll-to-top** stays as the floating cyan button (kept).

### Files touched

- `src/components/Footer.tsx` — full rewrite of the footer body; keep export name and scroll-to-top behaviour.
- No new dependencies. Animations use existing Tailwind keyframes + a small inline `@keyframes aurora` block (or extend `tailwind.config.ts` with `aurora-drift`).

### Out of scope

- Newsletter backend wiring (form stays presentational).
- Header/global layout — memory notes say the site intentionally has no global header/footer; this redesign only changes the `Footer` component itself for pages that already render it.
