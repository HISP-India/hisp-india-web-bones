

# Plan: Add TVHA Training Leh Ladakh Album to Gallery

## Overview

This plan will add a new gallery album for the TVHA Training event in Leh Ladakh with the uploaded cover image.

## Album Details (Extracted from User Request)

| Field | Value |
|-------|-------|
| **Title** | TVHA Training in Leh Ladakh |
| **Date** | October 2025 |
| **Location** | Leh, Ladakh, India |
| **Category** | Training |
| **Cover Image** | User-provided training session photo |

## Files to Modify

### Step 1: Copy Cover Image to Assets

**Action:** Copy the uploaded image to the project assets folder

- Source: `user-uploads://Untitled_design_6.jpg`
- Destination: `src/assets/tvha-training-leh-2025.jpg`

### Step 2: Update Gallery.tsx

**Action:** Add new album entry to the `albums` array

- Add import statement for the new cover image
- Add new album object with:
  - ID: `tvha-training-leh-2025`
  - Title: "TVHA Training in Leh Ladakh"
  - Description: A brief description of the TVHA training event
  - Date: "October 2025"
  - Location: "Leh, Ladakh, India"
  - Category: "Training"
  - Cover image: The imported image
  - Google Photos URL: Placeholder link (can be updated later with actual album link)

## Summary of Changes

| File | Change |
|------|--------|
| `src/assets/tvha-training-leh-2025.jpg` | New cover image file |
| `src/pages/Gallery.tsx` | Add import + new album entry |

## Notes

- The album will use a placeholder Google Photos URL that can be updated later with the actual album link
- The description will be brief since no detailed description was provided - you can request a more detailed description if needed
- The image shows a training workshop setting which aligns perfectly with the "Training" category

