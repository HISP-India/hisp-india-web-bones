

# Plan: Add "Institutionalising Information Systems for Universal Health Coverage" Digital Story

## Overview

This plan will add the complete content for the "Institutionalising Information Systems for Universal Health Coverage" digital story based on the provided document, following the established website format.

## Current State

| Location | Status |
|----------|--------|
| `DigitalStories.tsx` | Story card EXISTS with placeholder Unsplash image |
| `StoryDetail.tsx` | Story content does NOT exist - clicking the card shows "Story Not Found" |
| Cover image | No custom image provided |

## Document Content Summary

The document describes a research study co-authored by Prof. Sundeep Sahay exploring how health information systems must evolve to support Universal Health Coverage (UHC). Key themes include:

1. **UHC and Information Systems** - The critical but under-discussed role of HIS in achieving universal health coverage
2. **The Study Context** - A UHC-HIS pilot in a northern Indian state with participatory design and living labs
3. **Contradictions Encountered** - Health workers caught between paper-based and digital systems, infrastructure challenges
4. **Institutional Work** - Framing HIS implementation as institutional change, not just technology deployment
5. **Design Guidelines** - Strengthening existing processes, designing for connectivity gaps, enabling interoperability
6. **HISP India Philosophy** - "Aeroplanes don't fly, airlines do" - systems must work in real-world contexts

## Story Structure to Create

### Metadata
- **ID:** `uhc-information-systems`
- **Title:** Bridging Institutions and Information: HISP India's Work on Universal Health Coverage and HIS Reform
- **Subtitle:** Insights from a Research Study on Institutionalising Health Information Systems
- **Theme:** Research & Impact Stories
- **Theme Color:** `bg-blue-500`
- **Location:** Northern India
- **Year:** 2024

### Sections

1. **Understanding Universal Health Coverage in Practice**
   - UHC goals: equity, quality, financial protection
   - Why information systems are a critical but under-discussed pillar
   - Need for patient-centric systems vs upward reporting

2. **The Study: Empirical Reflections from an Indian State**
   - UHC-HIS pilot through collaboration (Norwegian/Indian universities, NGO, HISP India)
   - Living labs and participatory design with health workers
   - Key contradictions: ANMs and doctors caught between old and new systems

3. **The Institutional Layer Beyond Technology**
   - New systems must engage with embedded norms, practices, belief systems
   - Doctors resisting longitudinal tracking
   - ANMs lacking infrastructure
   - Patients unfamiliar with continuity-of-care responsibilities

4. **From Contradictions to Design Opportunities**
   - Strengthening existing care processes, not replacing overnight
   - Judicious incremental design
   - Designing for connectivity gaps (hybrid paper/digital)
   - Enabling interoperability through open architecture
   - Empowering health workers by reducing data burdens

5. **A Vision Rooted in Reality**
   - HISP India's philosophy: "Aeroplanes don't fly, airlines do"
   - Balance between technology and context, innovation and institution
   - Limitations as opportunities for reimagining design

### Statistics
- Research piloted in a northern Indian state
- Multiple stakeholders (universities, NGO, HISP India)
- Design guidelines based on institutional theory

### Closing Note
As UHC remains a global mandate, this study from HISP India adds critical insights for countries attempting to make information systems work at the frontlines. The way forward is a layered and inclusive journey that acknowledges tensions while building pathways to more integrated, equitable, and people-centred health systems.

### Related Stories
- Link to "Reframing Antimicrobial Stewardship" story
- Link to "Contemporary Challenges in Public Health Informatics"

## Files to Modify

### File 1: `src/pages/StoryDetail.tsx`

**Action:** Add new story entry to `storiesDatabase` object

Add the complete `uhc-information-systems` story object with:
- All content sections from the document
- Stats highlighting key research aspects
- Appropriate icons (location for hero, lightbulb for closing)
- Related stories links
- Gradient fallback for hero image (no custom image provided)

### File 2: `src/pages/DigitalStories.tsx`

**Action:** Update teaser text if needed (currently already accurate)

The existing teaser text is appropriate: "An in-depth exploration of UHC-HIS implementation, unpacking tensions between institutional practices and digital design."

## Technical Implementation

The story entry will follow this structure:

```text
"uhc-information-systems": {
  id: "uhc-information-systems",
  title: "Bridging Institutions and Information...",
  subtitle: "Insights from a Research Study...",
  theme: "Research & Impact Stories",
  themeColor: "bg-blue-500",
  location: "Northern India",
  year: "2024",
  heroImage: undefined, // Gradient fallback
  heroImageCaption: "...",
  heroIcon: "location",
  closingIcon: "lightbulb",
  sections: [...], // 5 content sections
  stats: [...], // Research highlights
  closingNote: "...",
  relatedStories: [...]
}
```

## Summary of Changes

| File | Change |
|------|--------|
| `src/pages/StoryDetail.tsx` | Add complete story entry with all content from document |
| `src/pages/DigitalStories.tsx` | No changes needed - existing card is accurate |

## Notes

- The story will use a gradient placeholder for the hero image since no custom cover image was provided
- Content is mapped directly from the document to maintain accuracy
- The story follows the "Impact Story" template based on its research-focused nature
- The full paper link (https://doi.org/10.17705/1CAIS.04403) will be included in the closing note
- If you have a cover image for this story, we can add it in a follow-up update

