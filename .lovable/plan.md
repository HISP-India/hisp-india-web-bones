## Goal
Make partner logos significantly more prominent in the "Our Partners" carousel on the homepage so they read clearly instead of feeling like tiny thumbnails.

## Changes (single file: `src/components/PartnersCarousel.tsx`)

1. **Larger cards**
   - Card width: `240px` → `300px` (`flex-[0_0_300px]`)
   - Card height: `h-40` (160px) → `h-48` (192px)
   - Inner padding: `p-6` → `p-8`
   - Gap between cards: `gap-8` → `gap-6` (slightly tighter so more logos remain visible per row)

2. **Larger logos**
   - `max-h-20` (80px) → `max-h-28` (112px)
   - `max-w-[180px]` → `max-w-[220px]`
   - Keep `object-contain` so aspect ratios stay intact

3. **Cleaner caption**
   - Bump partner name from `text-[10px]` → `text-xs` and `mt-2` → `mt-3` for breathing room

4. **Visual polish**
   - Slight grayscale-to-color hover: add `grayscale hover:grayscale-0 transition` on the `<img>` so logos feel premium and unify visually at rest (common pattern for partner walls). Optional — included by default; easy to remove if you'd rather show full color always.

## Memory update
The existing memory `mem://design/partners-logo-dimensions` (cards 240x160, logos max-h 80, max-w 180) will be updated to the new dimensions after implementation so future changes stay consistent.

## Out of scope
- No changes to the partner list, ordering, autoscroll behavior, or section heading.
- No changes to other carousels or pages.