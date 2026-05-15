## Problem

The offering pages use inconsistent colors for the rounded "pill" section headings (e.g. "Our Approach", "Key Components", "Case Study"). Across the 7 offering pages they currently mix three tokens:

- `bg-primary` (cyan / sky blue, 195°) — used in OfferingOpenMRS, OfferingRHIS, OfferingCIS
- `bg-accent` (teal, 183°) — used in OfferingResearch, OfferingDataAnalytics, OfferingCapacityBuilding, OfferingClimateHealth, and mixed into the others
- `bg-secondary` (deeper blue, 199°) — used in OfferingCIS

Because the same visual element (a section heading pill) shifts color from page to page — and even within a single page — the offerings feel disjointed.

## Decision

Unify every section-heading pill on all offering pages to **`bg-primary text-primary-foreground`** (brand cyan). Cyan is already the project's primary accent for interactive UI (per project memory), so using it consistently for these section labels reinforces the brand and removes the teal/sky inconsistency.

Step-number circles, icon badges, stat backgrounds, and CTAs are **out of scope** — only the inline section-heading pills change.

## Files to update

Only the eyebrow / section-title pills matching the pattern:
`inline-block bg-{primary|accent|secondary} text-{...}-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md`
(and the smaller `px-5 py-1.5 ... text-sm` variant in OfferingCIS).

- `src/pages/OfferingResearch.tsx` — pills at lines 122, 143, 173, 222 → `bg-primary`
- `src/pages/OfferingDataAnalytics.tsx` — pills at lines 122, 143, 173, 222 → `bg-primary`
- `src/pages/OfferingCapacityBuilding.tsx` — pills at lines 100, 139, 222, 243, 264 → `bg-primary`
- `src/pages/OfferingClimateHealth.tsx` — any `bg-accent` section pills → `bg-primary`
- `src/pages/OfferingOpenMRS.tsx` — pills at lines 320, 375, 420 (currently `bg-accent`) → `bg-primary`
- `src/pages/OfferingRHIS.tsx` — pills at lines 204, 248 (currently `bg-accent`) → `bg-primary`
- `src/pages/OfferingCIS.tsx` — pills at lines 113, 138, 168, 193 (currently `bg-secondary` / `bg-accent`) → `bg-primary`

## Out of scope

- Step-number circles (`w-10 h-10 rounded-full`) — keep current colors; they intentionally distinguish ordered phases.
- Icon tiles, stat cards, CTAs, badges on the OpenMRS phase grid.
- The `from-sky/cyan` tokens in `OfferingOpenMRS` line 186/191 phase pills (those encode phase categories).
- No changes to `index.css` tokens.

## Verification

After the edit, screenshot each `/offerings/*` route and confirm every section-heading pill renders in the same cyan.
