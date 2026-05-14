# Plan: Make Hero Image Visible Behind Text

**Problem**: Centered, large title + subtitle + dark 50% overlay cover the hero image on slide 1.

## Changes (`src/components/HeroSlider.tsx`)

1. **Lighter image overlay**: Replace full `bg-black/50` with a bottom-weighted gradient `bg-gradient-to-t from-black/70 via-black/30 to-transparent` so the top/center of the image stays visible.

2. **Anchor text to the bottom** instead of centering it:
   - Change content wrapper from centered flex to bottom-aligned (`justify-end pb-32`).
   - Remove the invisible spacer block (lines 125–133) — no longer needed once content is bottom-anchored.

3. **Smaller, tighter text** so it occupies less vertical space:
   - Title: `text-3xl md:text-4xl lg:text-5xl` (down from up to `7xl`).
   - Description: `text-base md:text-lg` (down from `xl`).
   - Reduce `space-y-6` → `space-y-3`.

4. **Reposition dots/scroll indicator** slightly so they don't collide with the lowered text block (keep current positions; verify spacing).

CTA buttons remain visible below the text.

Result: image fills the viewport, text sits as a readable caption band at the bottom over a soft gradient.
