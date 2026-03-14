

# Plan: Show All 6 Other Offerings in "Explore Other Offerings" Section

## Context
Currently, the RHIS page only shows 3 other offerings. The user wants all 6 remaining offerings listed (excluding the current page's offering). This applies to both `OfferingRHIS.tsx` and the upcoming `OfferingCIS.tsx`.

## All 7 Offerings
1. Community Information Systems (`community-info-systems`)
2. Routine Health Information Systems (`routine-health-info-systems`)
3. OpenMRS Integrated Hospital Information Systems (`openmrs-his`)
4. Data Analytics, Integration & Data Management (`data-analytics`)
5. Action & Implementation Research (`research`)
6. Capacity Building & Education (`capacity-building`)
7. Climate & Health Data Analytics (`climate-health-analytics`)

## Changes

### 1. Update `src/pages/OfferingRHIS.tsx`
- Replace the 3-card array with all 6 other offerings (excluding RHIS)
- Change grid from `md:grid-cols-3` to `md:grid-cols-3 lg:grid-cols-3` with 2 rows (6 cards total)

### 2. Apply same pattern to `OfferingCIS.tsx` when created
- Show 6 offerings excluding CIS

### 3. Update `src/pages/OfferingDetail.tsx`
- In the "Explore Other Offerings" section (if present), filter out the current offering and show the remaining 6

