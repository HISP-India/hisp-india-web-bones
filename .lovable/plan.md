# Plan: Show News Ticker in Initial Viewport

**Problem**: `HeroSlider` uses `min-h-screen`, pushing the `NewsTicker` below the fold.

## Change

**`src/components/HeroSlider.tsx`** (line 68): change the section height from `min-h-screen` to `min-h-[calc(100svh-44px)]` so the hero reserves space for the ~44px-tall news ticker, allowing it to peek into the initial viewport.

Also nudge the bottom-anchored content padding from `pb-32 md:pb-36` down to `pb-24 md:pb-28` to compensate for the slightly shorter hero so the dots/scroll indicator don't crowd the text.

That's the only change. NewsTicker placement in `Home.tsx` stays the same (right after `<HeroSlider />`).
