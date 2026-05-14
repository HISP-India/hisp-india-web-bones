# Plan: Optimize Hero Slider Text Placement

Give the image more visual real estate and make text pop with a subtle translucent panel behind it.

## Changes (`src/components/HeroSlider.tsx`)

1. **Lighten the full-image overlay** (line 88): Replace the current dark gradient with a much softer one (`from-black/40 via-transparent to-transparent`) so the image is visible across most of the slide.

2. **Anchor text to the bottom** (line 100): Tighten bottom padding from `pb-24 md:pb-28` to `pb-20 md:pb-24` so text sits closer to the bottom edge, freeing up the upper ~75% for the image.

3. **Add a translucent "glass" panel behind the text block** (lines 102–124):
   - Wrap the text content in a panel with `bg-black/40 backdrop-blur-sm rounded-xl px-6 py-5 md:px-8 md:py-6 border border-white/10 shadow-xl`.
   - Constrain its width (`max-w-3xl mx-auto`) so it reads as a contained highlight card, not a full-width bar.
   - Reduce the min-height (`min-h-[150px] md:min-h-[170px]`) since the panel itself provides visual weight.

4. **CTA buttons** stay below the panel (unchanged), keeping breathing room between the highlighted text card and the buttons.

## Result

- Image gets ~75% of vertical space, unobstructed by heavy gradients.
- Text sits in a compact, frosted-glass card at the bottom — high contrast and clearly highlighted without darkening the whole image.
