# Homepage rhythm pass: uniform section titles + tighter spacing

## Audit of current section titles

| Section | Current title style | Kicker | Vertical padding |
|---|---|---|---|
| About Us in Brief | `text-3xl md:text-4xl` | `<Badge>` | `py-20 md:py-32` |
| Our Expertise | `text-3xl md:text-5xl` ALL CAPS + full-width primary bar | none | `py-20 md:py-32`, `mb-16` after bar |
| Latest Stories | `text-3xl md:text-4xl` | small "Stories" kicker, border-bottom row, "View all" link on right | `py-20 md:py-28` |
| Our Offerings | `text-3xl md:text-4xl` | `<Badge>` | `py-20 md:py-32`, `mb-16` |
| Partners | `text-3xl md:text-4xl` | none | `py-20 md:py-32` |
| Testimonials | `text-3xl md:text-4xl` | none | `py-20 md:py-32` |

Inconsistencies: Expertise uses a 5xl shouty all-caps title with a unique full-width bar; Latest Stories uses a left-aligned WHO header while everything else is centered with a Badge or nothing; vertical padding swings between `md:py-28` and `md:py-32`; bottom margins of headers vary (`mb-12`/`mb-16`).

## Standard title pattern

Every section header on the homepage will use this exact structure:

```tsx
<div className="text-center max-w-2xl mx-auto mb-12">
  <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
    {kicker}
  </p>
  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
    {title}
  </h2>
  {subtitle && (
    <p className="text-muted-foreground">{subtitle}</p>
  )}
</div>
```

- `font-heading text-3xl md:text-4xl font-bold` — single size for every section h2.
- Small uppercase kicker in `text-primary` replaces the inconsistent Badge / no-kicker / huge-bar variants.
- `mb-12` for header→content spacing across the board.
- The About Us section keeps its 2-column layout but its inline header adopts the same `kicker + h2 size`.

## Section spacing

Standardize every section to `py-16 md:py-24` (down from `md:py-32`). This removes the extra whitespace the user flagged while keeping clear separation. Background alternation stays as-is so sections remain visually distinct: `bg-background` → `bg-muted` → `bg-muted/40` → `bg-card` → `bg-accent/5` → `bg-muted`.

## Per-section changes

### `src/pages/Home.tsx`

- **About Us in Brief** — replace `<Badge>About HISP India</Badge>` with kicker `<p>` in the same style; section padding `py-16 md:py-24`.
- **Our Expertise** — drop the `text-5xl` all-caps title and the full-width primary bar. Replace with the standard centered header (kicker `Our Expertise`, title `What We Do Best`, subtitle one line). Padding `py-16 md:py-24`. Cards grid spacing unchanged.
- **Our Offerings** — replace Badge with kicker, keep h2 size (already correct), `mb-16` → `mb-12`, padding `py-16 md:py-24`. Trim `mt-12` on the "View All Offerings" button row to `mt-10`.

### `src/components/LatestStories.tsx`

Keep the editorial WHO feel but bring it in line: same kicker + h2 sizes (already match), drop the `border-b` divider row and stack the "View all stories" link below the header (centered) so all sections share the centered header pattern. Reduce `py-20 md:py-28` to `py-16 md:py-24`. Reduce `mb-12` on header to remain `mb-12` (already fine).

### `src/components/PartnersCarousel.tsx`

Add the standard kicker (`Partners`) above the existing h2. Padding `py-16 md:py-24`.

### `src/components/TestimonialCarousel.tsx`

Add the standard kicker (`Testimonials`) above the existing h2. Padding `py-16 md:py-24`.

### `src/components/NewsTicker.tsx`

Untouched — it's a thin band, not a content section.

### `ImpactHero`

Untouched — it's the page opener, not a numbered section.

## Result

- Six homepage sections share the same centered kicker + `text-3xl md:text-4xl` title pattern.
- Vertical rhythm is uniform `py-16 md:py-24` everywhere.
- Section backgrounds still alternate so each block reads as clearly separated.
- No content removed; only typography, kickers, and spacing normalized.
