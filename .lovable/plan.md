

# Plan: Hero Section Image Slider for Homepage

**What**: Replace the static hero section with an auto-playing image slider/carousel. Each slide has a background image, title, subtitle, and description with navigation dots and arrow controls.

## Technical Approach

**New Component: `src/components/HeroSlider.tsx`**
- Array of slide data (image URL, title, subtitle, description)
- Auto-advances every 5-6 seconds with pause on hover
- Smooth crossfade/slide transitions using CSS animations
- Navigation: dots at bottom, left/right arrow buttons
- Each slide: full-viewport background image with dark overlay for text readability
- Text content (title + description) centered with the same styling as current Hero
- CTA buttons ("Learn More" + "Get in Touch") persist across all slides
- Scroll indicator at bottom (matching current design)
- Responsive: works on all screen sizes

**Slide Data Structure:**
```ts
{ image: "/placeholder.svg", title: "...", subtitle: "...", description: "..." }
```
Initially populated with 3-4 placeholder slides (using gradient backgrounds as fallbacks since no images are uploaded yet). You can later replace with real images.

**Modified: `src/pages/Home.tsx`**
- Replace `<Hero variant="fullscreen" ...>` block (lines 98-111) with `<HeroSlider />`
- Move CTA buttons into the slider component

**Visual Details:**
- Full-screen slides (`min-h-screen`) with background images (`object-cover`)
- Semi-transparent dark overlay for text contrast
- Fade + subtle zoom animation on slide transitions
- Active dot indicator highlighted in white, inactive dots semi-transparent
- Arrow controls appear on hover (desktop), always visible on mobile

