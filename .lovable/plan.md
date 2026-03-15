

# Plan: Replace Downloadable Resources with Books Published Section

## Overview
Remove the "Downloadable Resources" section and replace it with a "Books Published" section showcasing 4 books with their cover images and Amazon purchase links.

## Changes

### 1. Copy uploaded book cover images to `src/assets/books/`
- `1-3-2.jpg` → `digital-development.jpg`
- `2-3.jpg` → `public-health-informatics.jpg`
- `3-3.jpg` → `integrated-health-info-architecture.jpg`
- `4-3.jpg` → `global-it-outsourcing.jpg`
- `5-4.jpg` → `gis-developing-countries.jpg`

### 2. Update `src/pages/Research.tsx`
- Remove the `resources` array (lines 69-74)
- Remove the `Download` icon import
- Replace the "Downloadable Resources" section (lines 253-279) with a "Books Published" section:
  - Display books in a responsive grid (2-4 columns)
  - Each book card: cover image, title, authors, and "Buy on Amazon" link
  - Books:
    1. **Digital Development** — Sundeep Sahay, Arunima Mukherjee, Geoff Walsham, Thomas Hylland Eriksen
    2. **Public Health Informatics** — Sundeep Sahay, T. Sundararaman, Jorn Braa
    3. **Integrated Health Information Architecture** — Jorn Braa, Sundeep Sahay
    4. **Global IT Outsourcing** — Sundeep Sahay, Brian Nicholson, S. Krishna
    5. **The Use of GIS in Developing Countries** — Sundeep Sahay, Geoff Walsham

