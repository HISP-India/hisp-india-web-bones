## Latest Stories section on homepage (WHO-style)

Add a "Latest Stories" section to `src/pages/Home.tsx` that surfaces recent entries from Digital Stories with thumbnails, in the WHO News/Stories style — a horizontal row of large image cards with a coloured theme tag, headline, and subtle hover lift.

### What it looks like (WHO style)
- Section header row: small label "Stories" + heading "Latest from HISP India" on the left, "View all stories" link on the right.
- Grid: 1 / 2 / 3 columns (mobile / tablet / desktop) of large story cards.
- Each card: full-width thumbnail (4:3), coloured theme pill on top-left of the image, two-line headline below image on white background, subtle hover image-zoom and shadow lift.
- Clean, editorial, lots of whitespace — no teaser paragraph (matches WHO concise style).

### Data source
- Extract the `storiesData` array from `src/pages/DigitalStories.tsx` into a shared module `src/data/stories.ts` so both the Digital Stories page and the homepage section import the same source of truth.
- Pick the latest 6 stories: flatten all themes, take the first 6 in defined order (which is curated newest-first on that page). Keep theme color + label per story.
- Each card links to `/research/digital-stories/{id}`.

### Placement on Home
Insert between **Our Expertise** and **Our Offerings** so the hero/stats lead, expertise frames credibility, latest stories give freshness, then offerings invite action.

### Files touched
- `src/data/stories.ts` (new) — exports `storiesData`, `Story`, `ThemeSection`, plus a helper `getLatestStories(n)`.
- `src/pages/DigitalStories.tsx` — replace local `storiesData` with import from `src/data/stories.ts`. No UI change.
- `src/components/LatestStories.tsx` (new) — the homepage section component (WHO-style cards).
- `src/pages/Home.tsx` — import and render `<LatestStories />` between Expertise and Offerings.

### Visual details
- Cards: `rounded-2xl`, `bg-card`, `shadow-sm` → `hover:shadow-xl`, image `transition-transform duration-500 group-hover:scale-105`.
- Theme pill: existing per-theme color (`bg-teal-500`, `bg-blue-500`, etc.) on top-left of image, white text, small rounded.
- Headline: `font-heading text-lg font-semibold line-clamp-2 group-hover:text-primary`.
- Section background: `bg-muted/30` to separate it from neighbouring sections.
- Reuse `animate-fade-in-up` with stagger for entrance.

No backend, no new dependencies.