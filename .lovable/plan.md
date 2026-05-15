# Relevant Icons in Digital Story Stat Cards

Replace the single `Globe` icon currently shown above every stat in `StoryDetail.tsx` with a contextually relevant Lucide icon, applied uniformly across all digital stories.

## Approach

Use a **keyword-based icon resolver** so we don't have to manually annotate every one of the ~40 stats. The label text already describes what the stat is — we map keywords in the label to a Lucide icon. We also add an **optional `icon` override** on the stat type so any future stat can pin a specific icon.

This keeps the stat data clean and means new stories automatically get sensible icons.

## Files changed

- `src/pages/StoryDetail.tsx` — extend the `stats` type with an optional `icon` field, add a `getStatIcon(label)` resolver, render the resolved icon instead of `Globe`.

## Icon mapping (label keyword → Lucide icon)

| Label contains | Icon |
|---|---|
| countries, global, world, population | `Globe` |
| districts | `MapPin` |
| public health facilities, hospitals, health centres | `Hospital` |
| private facilities | `Building2` |
| people, individuals, supported | `Users` |
| households | `Home` |
| students, enrolled | `GraduationCap` |
| years, leadership | `Award` (leadership) / `Calendar` (years) |
| modules, platforms, integrated | `Layers` |
| workers, ANMs | `UserCog` |
| tablets | `Tablet` |
| coverage, ART, HIV | `HeartPulse` |
| prescriptions | `FileText` |
| antimicrobials, antibiotics, AST, broad-spectrum | `Pill` |
| challenges | `AlertCircle` |
| conferences | `Presentation` |
| phases, project phases | `CheckCircle2` |
| year of implementation, 2017 etc. | `Calendar` |
| research, theory, analysis, design | `Microscope` |
| pilot | `Rocket` |
| multi-stakeholder, collaboration | `Handshake` |
| data, registered | `Database` |
| time spent, % | `Clock` (time) / `Percent` (raw %) |
| **fallback** | `Globe` |

Resolver runs case-insensitive substring checks in priority order, returns the first match.

## Concrete examples (from current stories)

- `Districts covered` → `MapPin`
- `Public health facilities` → `Hospital`
- `Private facilities integrated` → `Building2`
- `Project phases completed` → `CheckCircle2`
- `Households registered` → `Home`
- `Health workers with tablets` → `Tablet`
- `ART coverage achieved by 2021` → `HeartPulse`
- `Prescriptions analysed` → `FileText`
- `Broad-spectrum antibiotics` → `Pill`
- `Countries using DHIS2` → `Globe`
- `Years of HISP India leadership` → `Award`

## Out of scope

- No changes to stat values, labels, layout, sizing, colors, or the surrounding section heading.
- No icon changes elsewhere on the site (Hero, Project cards, Offerings, etc.).
- No new dependency — all icons come from `lucide-react`, already used in the project.
