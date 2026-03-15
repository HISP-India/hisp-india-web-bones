

# Plan: Update Research Publications from CSV with Search and Filters

## Overview
Replace the 4 hardcoded publications with all 210 entries from the CSV, sorted by year (newest first). Add a search bar and filters for Type and Year. Show 20 at a time with "Load More."

## Changes to `src/pages/Research.tsx`

1. **Replace `publications` array** with 210 entries from CSV, each with: `title`, `publicationName`, `year`, `type`, `url`. Array pre-sorted by year descending.

2. **Add search bar** (text input) above the publications list to filter by title or publication name (case-insensitive).

3. **Add two filter dropdowns** alongside search:
   - **Type**: All Types, Journal Publication, Conference Publication, Special Issue, Special Article, Workshop, Review Article, Book Review
   - **Year**: All Years, then individual years 2025 down to 1991

4. **Update publication cards**:
   - Show title, publication name, year, type badge
   - "View Publication" link only when URL exists
   - Remove `authors`, `abstract`, `category` fields

5. **Add "Load More" pagination** — show 20 at a time

6. **Show result count** — "Showing X of Y publications"

