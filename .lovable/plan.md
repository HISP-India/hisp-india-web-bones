

# Plan: Add News Ticker to Homepage

## Overview
Add an animated horizontal news ticker/marquee below the Hero section on the homepage, displaying latest news items from HISP India. The ticker will scroll continuously from right to left.

## Changes

### 1. Create `src/components/NewsTicker.tsx`
- Horizontal scrolling ticker with CSS animation (marquee-style, using `@keyframes`)
- Array of latest news items (hardcoded for now), each with text and optional link
- Styled with a colored background bar (brand blue/primary), white text
- Smooth infinite loop animation using duplicated content for seamless scroll
- Pause on hover for readability
- News items separated by a bullet/dot divider

### 2. Update `src/pages/Home.tsx`
- Import and place `<NewsTicker />` immediately after the `<Hero>` component and before the "About Us in Brief" section

### Sample news items (can be updated later):
- "HISP India conducts DHIS2 training in Nepal for HIV program strengthening"
- "New partnership with RV University for Health Informatics education"
- "HISP India supports Philippines nutrition surveillance system rollout"
- "Data Science Workshop 2025 successfully concluded"
- "HISP India Annual Retreat 2024 highlights collaboration and innovation"

