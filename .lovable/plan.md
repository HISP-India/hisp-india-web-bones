

# Plan: Add FPHI Workshop Album to Gallery

## Overview

This plan will add a new gallery album for the Two-Day Workshop on Fundamentals of Public Health Informatics (FPHI) with the uploaded cover image.

## Album Details (Extracted from User Request)

| Field | Value |
|-------|-------|
| **Title** | Two-Day Workshop on Fundamentals of Public Health Informatics (FPHI) |
| **Subtitle** | Hands-on Applications for Teaching and Practice |
| **Organized by** | Parul Institute of Public Health (PIPH), Faculty of Medicine |
| **Date** | 7-8 January 2026 |
| **Location** | Vadodara, Gujarat, India |
| **Category** | Workshop |
| **Cover Image** | User-provided group photo from the workshop |

## Files to Modify

### Step 1: Copy Cover Image to Assets

**Action:** Copy the uploaded image to the project assets folder

- Source: `user-uploads://Untitled_design_8.jpg`
- Destination: `src/assets/fphi-workshop-vadodara-2026.jpg`

### Step 2: Update Gallery.tsx

**Action:** Add new album entry to the `albums` array

Add import statement at line 17:
```typescript
import fphiWorkshopVadodara from "@/assets/fphi-workshop-vadodara-2026.jpg";
```

Add new album object after the Libya training entry:
```typescript
{
  id: "fphi-workshop-vadodara-2026",
  title: "Two-Day Workshop on Fundamentals of Public Health Informatics (FPHI)",
  description: "Hands-on Applications for Teaching and Practice. Organized by Parul Institute of Public Health (PIPH), Faculty of Medicine, this workshop focused on building foundational skills in public health informatics for educators and practitioners.",
  date: "7-8 January 2026",
  location: "Vadodara, Gujarat, India",
  coverImage: fphiWorkshopVadodara,
  googlePhotosUrl: "https://photos.app.goo.gl/placeholder9",
  category: "Workshop",
},
```

## Summary of Changes

| File | Change |
|------|--------|
| `src/assets/fphi-workshop-vadodara-2026.jpg` | New cover image file |
| `src/pages/Gallery.tsx` | Add import + new album entry |

## Notes

- The album will use a placeholder Google Photos URL that can be updated later with the actual album link
- The description combines the subtitle and organizing institution details for context
- Category set as "Workshop" which already exists in the filter options

