## Animations for the Stats Bento Hero

Add tasteful, performance-friendly motion to `src/components/ImpactHero.tsx` using existing Tailwind keyframes (`fade-in`, `scale-in`) plus a few new utilities. No new dependencies.

### 1. Entrance animations (on mount)
- **Headline column**: badge → h1 → paragraph → CTA buttons fade-in-up in sequence with staggered delays (0ms, 120ms, 240ms, 360ms).
- **Bento stat tiles**: each tile scales/fades in with a stagger (80ms apart) so the grid assembles smoothly.
- **Background blobs**: slow continuous drift (subtle translate + scale loop, 12–16s) to add ambient life without distraction.

### 2. Number count-up
- Stat values (`29+`, `10K+`, `500M+`, etc.) animate from 0 to target on first view using a lightweight `requestAnimationFrame` counter that respects the suffix (`+`, `K`, `M`).
- Triggered once via `IntersectionObserver` so it only runs when visible.

### 3. Hover micro-interactions
- Tiles already lift on hover; add:
  - icon container rotates ~6° and scales 1.1
  - a soft radial glow (`bg-primary/10` blur) fades in behind the icon
  - value text nudges up 2px
- CTA primary button: arrow icon already translates; add subtle shimmer (gradient sweep) on hover.

### 4. Live "pulse" accent
- The small dot in the "Public Health Informatics" badge keeps its existing pulse.
- Add a faint pulsing ring around the MapPin icon in the "29+ States" tile to signal "live footprint".

### 5. Accessibility
- Wrap all motion in a `prefers-reduced-motion` guard: when reduced motion is requested, skip count-up (show final value), skip stagger, keep only opacity transitions.

### Technical notes
- Add 2 keyframes to `tailwind.config.ts`: `fade-in-up` (already similar to `fade-in`) and `float-slow` for blobs.
- Use inline `style={{ animationDelay: ... }}` for staggers — no JS lib needed.
- Count-up: small inline hook `useCountUp(target, durationMs)` inside `ImpactHero.tsx`, parsing numeric prefix from `stat.value` and re-appending the suffix.
- IntersectionObserver attached to the bento grid root, fires once.
- Files touched: `src/components/ImpactHero.tsx`, `tailwind.config.ts`.

No layout, copy, or color changes — purely additive motion.