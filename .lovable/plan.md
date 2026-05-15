# Uniform page top bar

Make every page (except the Home page, which keeps its custom Impact bento hero) start with the same compact cyan top bar, matching the About page screenshot. The bar shows a **title** and an **optional subtitle**. Description text is removed from the bar (moved into the page body where it adds value).

## Reference look (from About screenshot)

- Full-width cyan band (current `from-primary via-primary/90 to-primary/80` gradient)
- Centered large title in white
- Optional small subtitle line above the title (uppercase, tracked) — empty if the page has no subtitle
- Fixed vertical rhythm — same height on every page regardless of content length

## Changes

### 1. `src/components/Hero.tsx`

- Lock the non-fullscreen variants to a single height: replace `py-12 md:py-16` with a fixed `min-h-[220px] md:min-h-[260px]` plus `py-12` so a title-only and a title+subtitle bar render at the same height.
- Stop rendering the `description` paragraph in the top bar. Keep the prop for backward compatibility but ignore it (or drop it — see Technical Notes).
- Remove the bottom CTA `children` slot from the top bar so action buttons don't inflate height (CTAs that exist today are already inside page bodies).
- Keep the `fullscreen` variant untouched (only the homepage's old fullscreen hero used it; nothing currently does).

### 2. Pages that already use `<Hero>` — drop the `description` prop

Trim every call site to `title` + optional `subtitle` + the standard cyan className. Affected files:

- `src/pages/About.tsx` — already title-only, leave as is
- `src/pages/Work.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Research.tsx`
- `src/pages/Careers.tsx`
- `src/pages/Offerings.tsx`
- `src/pages/Sitemap.tsx` (also add the cyan className it currently lacks)
- `src/pages/ProjectDetail.tsx` (currently passes `description={project.hero}` — drop)
- `src/pages/JobDetail.tsx`
- `src/pages/OfferingDetail.tsx`, `OfferingCIS.tsx`, `OfferingCapacityBuilding.tsx`, `OfferingClimateHealth.tsx`, `OfferingDataAnalytics.tsx`, `OfferingOpenMRS.tsx`, `OfferingResearch.tsx`, `OfferingRHIS.tsx` — add the standard cyan className so they match the others (today they render with the default white background, hence "no top bar" feel)

Where a description currently lives in the bar and adds context, move it into the first body section as a lead paragraph (e.g. Work, Contact, Research, Careers, Offerings).

### 3. Pages missing a top bar — add one

Insert the standard `<Hero>` at the top of these pages:

- `src/pages/DigitalStories.tsx` — title `"Digital Stories"`, subtitle `"Research"`
- `src/pages/Gallery.tsx` — title `"Gallery"`, subtitle `"Moments & Milestones"` (and remove the current decorative blob hero header that duplicates this)
- `src/pages/Team.tsx` — title `"Our Team"`, subtitle `"People"` (replace the current intro `bg-muted` band)
- `src/pages/Privacy.tsx` — title `"Privacy Policy"`, no subtitle
- `src/pages/Terms.tsx` — title `"Terms & Conditions"`, no subtitle

### 4. Home page

Untouched. The Impact bento hero stays as the homepage's distinct opener.

## Technical notes

- The `description` prop is removed from `HeroProps`, and the prop is removed from every call site in the same change so TypeScript stays clean.
- The `children` slot and `showScrollIndicator` prop on the non-fullscreen variants are dropped at call sites; the `fullscreen` branch keeps them.
- No new dependencies, no backend changes.
- Quick QA: open About, Work, Contact, Privacy, Gallery, Team, an Offering detail page, and confirm the cyan band is visually identical in height and styling.
