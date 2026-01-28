

# Plan: Update "Reframing Antimicrobial Stewardship" Digital Story

## Overview

This plan will update the "Reframing Antimicrobial Stewardship" digital story to include the full content from the provided document, following the established story format used throughout the website.

## Current State

- The story exists as a card in `DigitalStories.tsx` with a placeholder Unsplash image
- The story detail page does NOT exist in `StoryDetail.tsx` - clicking the card currently shows "Story Not Found"
- No custom cover image exists for this story

## What Will Be Created

### 1. Story Content Based on Document

**Title:** Reframing Antimicrobial Stewardship through a Biosocial Lens

**Subtitle:** Insights from a Public Health Study in North India

**Theme:** Research & Impact Stories (using `bg-blue-500`)

**Location:** North India

**Year:** 2024

**Sections to Include:**

1. **Understanding the Issue: Antibiotic Overuse in Everyday Practice**
   - Context of AMR challenges in low- and middle-income countries
   - Prof. Sundeep Sahay's collaboration with Indian and Norwegian colleagues
   - HISP India's commitment to health systems strengthening

2. **Why a Biosocial Perspective?**
   - Departure from conventional biomedical assessments
   - Integration of biological and social factors
   - Methodology: 1100+ prescriptions analysed, interviews conducted

3. **Key Findings from the Study**
   - 98% of prescriptions contained antimicrobials
   - 74% were broad-spectrum antibiotics
   - Only 9% preceded by antimicrobial sensitivity testing
   - Issues with incomplete prescriptions

4. **Biosocial Themes: What Really Shapes Prescriptions**
   - Risk avoidance through broad-spectrum drugs
   - Perceived inferiority of hospital drugs for children
   - "Doctor Knows Best" culture
   - Lack of time for counselling
   - Inconsistent follow-up behaviour
   - Symptom-based prescriptions

5. **Implications for Health Policy and Practice**
   - Strengthening diagnostic support and AST access
   - Empowering pharmacists through AMS frameworks
   - Fostering collaborative care
   - Investing in public awareness campaigns
   - Enhancing drug quality in public pharmacies

6. **Grounded in HISP India's Philosophy**
   - Technology and systems working with people
   - Context-sensitive research approach
   - Integrated responses to real-world challenges

**Statistics to Display:**
- 1,100+ prescriptions analysed
- 98% contained antimicrobials
- 74% broad-spectrum antibiotics
- 9% preceded by AST testing

**Closing Note:** Aligned with the document's conclusion about context-sensitive research and learning from frontline experiences.

**Related Stories:** Links to other relevant research or implementation stories

## Files to Modify

### File 1: `src/pages/StoryDetail.tsx`

**Action:** Add new story entry to `storiesDatabase` object

- Add the complete story data object for `antimicrobial-stewardship`
- Include all sections mapped from the document content
- Use placeholder for `heroImage` (no custom image provided) or use a gradient fallback
- Set appropriate icons and theme colors consistent with "Research & Impact Stories"

### File 2: `src/pages/DigitalStories.tsx`

**Action:** Update the story card entry

- Keep the existing title and update teaser if needed
- The image remains as the Unsplash placeholder until a custom cover image is provided

## Technical Details

The story entry will follow this structure:

```text
"antimicrobial-stewardship": {
  id: "antimicrobial-stewardship",
  title: "Reframing Antimicrobial Stewardship...",
  subtitle: "Insights from a Public Health Study...",
  theme: "Research & Impact Stories",
  themeColor: "bg-blue-500",
  location: "North India",
  year: "2024",
  heroImage: undefined, // Gradient fallback
  heroImageCaption: "...",
  heroIcon: "location",
  closingIcon: "brain",
  sections: [...],
  stats: [...],
  closingNote: "...",
  relatedStories: [...]
}
```

## Summary of Changes

| File | Change |
|------|--------|
| `src/pages/StoryDetail.tsx` | Add complete story entry with all content from document |
| `src/pages/DigitalStories.tsx` | Minor teaser update if needed |

## Notes

- The story will use a gradient placeholder for the hero image since no custom cover image was provided with this request
- Content is mapped directly from the document to maintain accuracy
- The story follows the "Impact Story" template (not "Tribute Story") based on its research-focused nature
- If you have a cover image for this story, we can add it in a follow-up update

