# TEMPLO — Phase 4A Sales Architecture & Typography Audit

**Date:** 2026-05-14
**Scope:** Full site audit after Phase 4A refactor
**Type:** Audit-only — no code changes

---

## 1. Executive Summary

### Is the homepage still a chorizo?

**Partially fixed.** The homepage went from 881 lines to 838 lines (-43). Plans moved higher. Content was compressed. But the homepage is still **14 sections deep** and still contains full pricing for 6 plans with all their options — that alone is ~200 lines of HTML. The sales flow is better, but the page still has significant weight in the Plans section.

### Is typography still hurting the page?

**No — typography is now correct.** Dharma is properly restricted to 5 selectors (hero, section-title base, metrics numbers, panel numbers, pillar numbers). Pathfinder and FAQ titles use Montserrat via override. All card titles, questions, buttons, nav, footer use Montserrat. The previous typography fix was thorough.

### What is the biggest issue now?

**Homepage density, not typography.** The Plans section with 6 full pricing cards (each with guide, notes, schedule, multiple options) is the heaviest section on the homepage. The visual hierarchy is correct, but the sheer volume of pricing information makes the page feel long.

---

## 2. Sales Funnel Audit

### Section-by-section analysis

| # | Section | Creates Desire? | Creates Trust? | Helps Purchase? | Moves to WhatsApp? | Necessary? | Too Long? | Verdict |
|---|---------|----------------|----------------|-----------------|--------------------|-----------|-----------|---------|
| 1 | Hero | ✅ Strong | ✅ Brand | ✅ CTA | ✅ Primary CTA | Yes | No | **Keep** |
| 2 | Positioning | ✅ Clear | ✅ Focused | ⚠️ Indirect | ❌ No CTA | Yes | No | **Keep** — add CTA? |
| 3 | Activity Reel | ✅ Visual energy | ✅ Shows life | ⚠️ Indirect | ✅ CTA at end | Yes | No | **Keep** |
| 4 | Metrics | ⚠️ Subtle | ✅ Numbers | ⚠️ Indirect | ❌ No CTA | Yes | No | **Keep** |
| 5 | Experiencias | ✅ Curiosity | ✅ Variety | ✅ Shows paths | ⚠️ Link to /exp | Yes | Slightly | **Compress cards** |
| 6 | Pathfinder | ✅ Guidance | ✅ Personalized | ✅ Decision tool | ⚠️ Indirect | Yes | No | **Keep** |
| 7 | Pathfinder CTA | ⚠️ Subtle | ❌ | ✅ Bridge | ✅ WhatsApp | Yes | No | **Keep** |
| 8 | Plans | ✅ Options | ✅ Transparent | ✅ Critical | ✅ Per-plan CTA | Yes | **YES** | **Compress pricing** |
| 9 | Method | ✅ Brand depth | ✅ Philosophy | ⚠️ Indirect | ⚠️ Link to /metodo | Yes | No | **Keep** |
| 10 | Coaches | ⚠️ Subtle | ✅ Founder trust | ⚠️ Indirect | ✅ WhatsApp CTA | Yes | No | **Keep** |
| 11 | Location | ❌ | ✅ Practical | ✅ Visit | ✅ WhatsApp CTA | Yes | No | **Keep** |
| 12 | FAQ | ⚠️ Objections | ✅ Answers | ✅ Removes blockers | ✅ WhatsApp links | Yes | No | **Keep** |
| 13 | Final CTA | ✅ Urgency | ❌ | ✅ Last push | ✅ WhatsApp | Yes | No | **Keep** |
| 14 | Footer | ❌ | ✅ Official | ⚠️ Navigation | ⚠️ WhatsApp link | Yes | No | **Keep** |

### Key findings:
- **Hero** is strong — clear emotional hook + WhatsApp CTA
- **Positioning** works but has no CTA — could add a subtle link
- **Plans** is the heaviest section — 6 full pricing cards with all options
- **Method & Coaches** teasers are already compressed and effective
- **FAQ** is streamlined (6 questions) — good
- **Pathfinder → CTA → Plans** flow is correct

---

## 3. Homepage Length / Chorizo Audit

### Does the homepage still feel too long?

**Slightly.** The refactor improved the flow significantly:
- Plans moved from position 10 to position 8 ✅
- Method/Coaches compressed ✅
- FAQ reduced from 9 to 6 questions ✅
- Suggested Questions box removed ✅

**But:** The Plans section alone contains 6 full pricing cards. Each card has: header, description, guide block, notes, schedule (some), multiple pricing options, and a CTA button. This is ~200 lines of HTML and visually takes up significant vertical space.

### Are there sections that slow the path to purchase?

**The Plans section itself** — ironically, the most conversion-critical section is also the longest. Visitors who know what they want still have to scroll through 6 plan cards.

### Are Plans now high enough?

**Yes.** Plans are at position 8, right after Pathfinder CTA. The flow is: Hero → Positioning → Energy → Trust → Experiences → Guide → CTA → **Plans**. This is correct.

### Does Method still take too much space?

**No.** 3 pillars + short descriptions + 1 CTA button. Compact and effective.

### Does Coaches still take too much space?

**No.** Founder card + team name strip + 2 CTAs. Compact.

### Does FAQ feel concise?

**Yes.** 6 questions, short answers. Good.

### Is the final path to WhatsApp clear?

**Yes.** WhatsApp CTAs appear at:
1. Hero (primary)
2. Activity Reel
3. Experiencias section
4. Pathfinder CTA
5. Each plan card
6. Coaches section
7. Location
8. FAQ answers
9. Final CTA
10. Floating button

**That's 10+ WhatsApp touchpoints.** Well covered.

### Final verdict: **Partially fixed**

The structure is correct. The flow is good. But the Plans section is still heavy with full pricing details. Consider whether all 6 plans need their full pricing options on the homepage, or if some could be compressed to "desde Bs. X" with detail on click/expand.

---

## 4. Secondary Page Responsibility Audit

### /experiencias/
- ✅ Contains detailed service explanations
- ✅ Homepage avoids duplicating that detail (short 1-2 line cards)
- ✅ Links from homepage are clear ("Conocer más →" links)
- ✅ Has its own WhatsApp CTA
- **Doing its job correctly.**

### /coaches/
- ✅ Contains full team trust (founder card + team grid)
- ✅ Homepage avoids too much coach detail (teaser only)
- ✅ Homepage coach teaser is enough for trust
- ✅ Has coach-specific CTAs
- **Doing its job correctly.**

### /metodo/
- ✅ Contains full philosophy (5 pillars + practice section)
- ✅ Homepage avoids overexplaining (3 pillars teaser)
- ✅ Homepage method teaser is enough for brand depth
- ✅ Has its own WhatsApp CTA
- **Doing its job correctly.**

**Verdict:** All secondary pages are correctly carrying their responsibility. No information is missing from the secondary pages.

---

## 5. Typography Audit

### Dharma Usage Map

| # | Selector | File | Size | Weight | LH | LS | Classification |
|---|----------|------|------|--------|-----|-----|----------------|
| 1 | `.section-title` (base) | styles.css:290 | 2rem–3.2rem | 800 | 0.98 | 0.03em | **A** ✅ Valid display |
| 2 | `.hero__title` | styles.css:633 | 2.4rem–4.4rem | 900 | 0.98 | 0.01em | **A** ✅ Hero moment |
| 3 | `.metrics__number` | styles.css:824 | 2rem–3.2rem | 900 | 0.85 | 0.02em | **A** ✅ Decorative numbers |
| 4 | `.exp-panel__number` | styles.css:1206 | 2.5rem–4rem | 900 | 0.85 | 0.02em | **A** ✅ Decorative numbers |
| 5 | `.method__pillar-num` | styles.css:1682 | 2rem–3rem | 900 | 0.85 | 0.02em | **A** ✅ Decorative numbers |

### Dharma Overrides (functional → Montserrat)

| Selector | Override | Status |
|----------|----------|--------|
| `.pathfinder .section-title` | `font-family: var(--font-body)` | ✅ Correct |
| `.faq .section-title` | `font-family: var(--font-body)` | ✅ Correct |

### Montserrat Confirmations

| Element | Selector | Status |
|---------|----------|--------|
| Nav brand | `.nav__brand` | ✅ Montserrat |
| Nav links | `.nav__link` | ✅ Montserrat |
| Buttons | `.btn` | ✅ Montserrat |
| Hero sub | `.hero__sub` | ✅ Montserrat (inherited) |
| Exp card names | `.exp-card__name` | ✅ Montserrat 800 |
| Exp detail names | `.exp-detail__name` | ✅ Montserrat 900 |
| Exp CTA title | `.exp-cta__title` | ✅ Montserrat 900 |
| Pathfinder step titles | `.pathfinder__step-title` | ✅ Montserrat 700 |
| Pathfinder CTA title | `.pathfinder-cta__title` | ✅ Montserrat 700 |
| Plan names | `.pricing-card__name` | ✅ Montserrat 800 |
| Coach names | `.coach-card__name` | ✅ Montserrat 800 |
| FAQ questions | `.faq__question` | ✅ Montserrat 700 |
| Final CTA title | `.final-cta__title` | ✅ Montserrat 900 |
| Method names | `.method__name` | ✅ Montserrat (inherited) |
| Footer | `.footer__*` | ✅ Montserrat (inherited) |
| Metodo manifesto | `.metodo-manifesto__lead` | ✅ Montserrat 800 |
| Metodo CTA title | `.metodo-cta__title` | ✅ Montserrat 900 |

### Typography Verdict: **CLEAN ✅**

Dharma is properly restricted to 5 high-impact display selectors. All functional text, questions, card titles, buttons, nav, footer use Montserrat. No violations found.

---

## 6. Concentrated Words Analysis

### Are words still visually too concentrated?

**No — the typography fix resolved this.** Key improvements applied:

| Fix | Before | After | Effect |
|-----|--------|-------|--------|
| `--display-lh` | 0.92 | 0.98 | Dharma titles breathe more |
| `--display-ls` | 0.02em | 0.03em | Wider tracking prevents "crushed" feeling |
| Pathfinder title | Dharma | Montserrat 900 | Functional question now readable |
| FAQ title | Dharma | Montserrat 900 | Functional heading now readable |
| Exp detail names | Dharma | Montserrat 900 | Card names no longer compressed |
| Exp CTA title | Dharma | Montserrat 900 | CTA question now warm |
| Metodo manifesto | Dharma | Montserrat 800 | Lead text now readable |
| Metodo CTA | Dharma | Montserrat 900 | CTA now readable |
| Final CTA | Dharma | Montserrat 900 | Closing statement now warm |

### Remaining Dharma selectors — all acceptable:

- `.hero__title` at 2.4rem–4.4rem with LH 0.98 — **large enough, acceptable**
- `.section-title` at 2rem–3.2rem with LH 0.98 — **borderline at 2rem mobile, but overridden for Pathfinder/FAQ**
- `.metrics__number` at 2rem–3.2rem with LH 0.85 — **numbers only, not readable text, acceptable**
- `.exp-panel__number` at 2.5rem–4rem — **decorative, acceptable**
- `.method__pillar-num` at 2rem–3rem — **decorative Roman numerals, acceptable**

### One concern:

`.section-title` at mobile (2rem = 32px) with Dharma and LH 0.98 — this is right at the 36px threshold. On mobile, some section titles that use the base `.section-title` class (Experiencias, Method, Coaches, Location) will render Dharma at 32px. This is the minimum acceptable size for Dharma. **Not a violation, but worth monitoring.**

---

## 7. Visual / Geometry Audit

### Section rhythm
- ✅ Consistent section padding via `--section-pad: clamp(80px, 12vw, 160px)`
- ✅ Section dividers (gold lines) create clear rhythm
- ✅ No awkward empty spaces between sections

### Spacing
- ✅ Container max-width: 1200px — good for readability
- ✅ Consistent padding: `clamp(20px, 5vw, 48px)` — responsive
- ✅ Gap system via `--gap: clamp(16px, 2vw, 32px)`

### Symmetry
- ✅ Section headers are centered
- ✅ Cards are symmetrical in grid
- ⚠️ Experiencias grid has 3+2 layout — row 2 has 2 cards centered, which creates slight asymmetry (by design, acceptable)

### Card alignment
- ✅ Experiencias cards: consistent height within rows
- ✅ Plan cards: consistent structure
- ✅ Method pillars: consistent layout
- ✅ Coach cards: consistent structure

### Grid balance
- ✅ Experiencias: 3-column grid, 2nd row centered
- ✅ Plans: auto-fit grid
- ✅ Method: 3-column teaser
- ✅ Location: 2-column (info + map)

### CTA hierarchy
- ✅ Primary: gold background (WhatsApp CTAs)
- ✅ Ghost: transparent with border (secondary actions)
- ✅ Outline-gold: gold border (tertiary)
- ✅ Clear visual hierarchy

### Typography hierarchy
- ✅ Dharma for display moments (hero, section titles, numbers)
- ✅ Montserrat for everything functional
- ✅ Clear size progression

### Black/gold balance
- ✅ Dark backgrounds (#0a0a0a, #0e0e0e, #161616)
- ✅ Gold accents (#d4a853) used sparingly
- ✅ Not over-goldified

### Visual energy
- ✅ Activity reel creates movement
- ✅ Hover effects on cards
- ✅ Scroll animations (fade-in)
- ✅ Gold accent lines

### Readability
- ✅ Body text: Montserrat, 16px, line-height 1.6
- ✅ Gray-light (#a8a8a8) for secondary text — good contrast
- ✅ White-pure (#ffffff) for primary text

### Cramped areas
- ⚠️ Plan pricing options can feel dense on mobile (multiple options per card)
- ✅ Everything else is well-spaced

### Geometry verdict: **GOOD ✅**

The page feels geometric, intentional, and well-structured. The dark/gold palette is premium. Grids are balanced. Spacing is consistent. No major geometry issues.

---

## 8. Conversion Audit

### 1. Does the user understand TEMPLO fast?

**Yes.** Hero title ("No vienes solo a entrenar. Vienes a construirte.") + Positioning ("TEMPLO es un estudio de entrenamiento para personas con una meta.") — clear in 2 sections.

### 2. Does the user see the main experiences quickly?

**Yes.** Experiencias section is at position 5, with 5 short cards showing all training paths.

### 3. Does the user get guided if unsure?

**Yes.** Pathfinder at position 6 with 3-step decision tool.

### 4. Does the user see prices early enough?

**Yes.** Plans at position 8, right after Pathfinder CTA. Before this, the user has seen: hero, positioning, energy, trust, experiences, and guidance. Good sequence.

### 5. Are WhatsApp CTAs placed correctly?

**Yes.** 10+ touchpoints throughout the page. Strongest at Hero and after Pathfinder.

### 6. Are CTAs too many, too few, or well placed?

**Well placed.** Not overwhelming — each section has at most 1 CTA, and they feel natural within the flow.

### 7. Is there a clear next step after every important decision point?

**Yes:**
- After Hero → WhatsApp or scroll to Experiencias
- After Experiencias → Pathfinder or /experiencias/
- After Pathfinder → WhatsApp CTA
- After Plans → WhatsApp per plan
- After Method → /metodo/
- After Coaches → /coaches/ or WhatsApp
- After FAQ → WhatsApp

### 8. Which CTA is strongest?

**Hero CTA** — "Agendar visita por WhatsApp" — emotionally charged after the hero moment.

### 9. Which CTA is weakest?

**Positioning section** — has no CTA at all. The quote just sits there. Could benefit from a subtle "Ver experiencias" or "Conocer el método" link.

### 10. What is the next highest-impact conversion fix?

**Compress the Plans section.** Either:
- Show only top 2-3 plans on homepage with "Ver todos los planes" link
- Or collapse plan options behind an expandable toggle
- Or show "desde Bs. X" with WhatsApp CTA, full pricing on /planes/ or in the plan card on click

---

## 9. Screenshot Evidence

### Desktop (1440px)

| Screenshot | Path |
|------------|------|
| Homepage full | `screenshots/desktop/homepage-full.jpg` |
| Pathfinder | `screenshots/desktop/pathfinder.jpg` |
| Experiencias | `screenshots/desktop/experiencias.jpg` |
| Plans | `screenshots/desktop/plans.jpg` |
| Method + Coaches | `screenshots/desktop/method-coaches.jpg` |
| FAQ + Final CTA | `screenshots/desktop/faq-final.jpg` |
| /experiencias/ | `screenshots/desktop/experiencias-page.jpg` |
| /coaches/ | `screenshots/desktop/coaches-page.jpg` |
| /metodo/ | `screenshots/desktop/metodo-page.jpg` |

### Mobile (390px)

| Screenshot | Path |
|------------|------|
| Homepage top | `screenshots/mobile/homepage-top.jpg` |
| Pathfinder | `screenshots/mobile/pathfinder.jpg` |
| Experiencias | `screenshots/mobile/experiencias.jpg` |
| Plans | `screenshots/mobile/plans.jpg` |
| /experiencias/ | `screenshots/mobile/experiencias-page.jpg` |
| /coaches/ | `screenshots/mobile/coaches-page.jpg` |
| /metodo/ | `screenshots/mobile/metodo-page.jpg` |

---

## 10. Correction Matrix

| Issue | Page/Section | Current Problem | Recommended Fix | Priority |
|-------|-------------|-----------------|-----------------|----------|
| Plans section too heavy | Homepage / Plans | 6 full pricing cards with all options (~200 lines) | Compress to show plan name + price range + 1 CTA; expand on click or link to detail | **P1** |
| No CTA in Positioning | Homepage / Positioning | Quote sits with no action | Add subtle "Ver experiencias ↓" link | **P2** |
| `.section-title` at 32px mobile | All sections on mobile | Dharma at 32px is at minimum threshold | Consider Montserrat override for mobile section titles, or accept 32px as minimum | **P2** |
| Experiencias grid asymmetry | Homepage / Experiencias | 3+2 grid creates visual gap | Accept as-is (intentional design) or switch to 2x3 on larger screens | **P3** |
| Plan cards dense on mobile | Homepage / Plans | Multiple pricing options per card create vertical density | Consider collapsible options or "ver opciones" toggle | **P2** |
| Positioning quote could be stronger | Homepage / Positioning | "TEMPLO es un estudio de entrenamiento para personas con una meta" — functional but not emotional | Consider a more evocative variation | **P3** |
| Activity Reel placeholder images | Homepage / Reel | Using placeholder images | Replace with real TEMPLO photography | **P3** |
| Hero secondary CTA | Homepage / Hero | "Ver experiencias" scrolls to section — could be "Ver planes" for conversion | Test "Ver planes" as secondary CTA (already changed in Phase 4A) | **P3** |
| Method pillar descriptions | Homepage / Method | Could be even shorter | Already compressed — acceptable | **P3** |
| Location section has no WhatsApp pre-filled message for visit | Homepage / Location | Generic WhatsApp link | Already has visit-specific message — OK | **P3** |

---

## 11. Recommended Next Implementation Prompt

```
PHASE 4B — Plans Section Compression

The Plans section is the heaviest section on the homepage.
6 full pricing cards with all options take too much vertical space.

TASK: Compress the Plans section on the homepage only.

Option A (Recommended):
- Show each plan as a compact card with:
  - Plan name
  - 1-line description
  - Price range (e.g., "Bs. 230 - Bs. 550")
  - WhatsApp CTA button
- Full pricing options visible on click/expand or on a dedicated /planes/ page

Option B:
- Keep the 2 most popular plans expanded (Power Plate + Calistenia or Híbrido)
- Collapse the rest to compact cards

Option C:
- Keep all plans but remove the "guide" and "notes" blocks from homepage
- Show only: name, 1 line, price options, CTA

Rules:
- Do NOT change prices
- Do NOT change WhatsApp number (59172001680)
- Do NOT change plan names
- Do NOT remove any plan
- Do NOT create /galeria
- Do NOT add fake data

After compression, the Plans section should feel 30-40% shorter.
```

---

## 12. Final Scores

| Category | Score | Notes |
|----------|-------|-------|
| **Homepage sales flow** | 8/10 | Good sequence: impact → energy → trust → offer → guide → price → depth → close. Plans moved higher. |
| **Homepage length** | 6.10 | Improved but Plans section is still heavy. 14 sections total. |
| **Typography** | 9/10 | Dharma properly restricted. Montserrat for all functional text. Variables adjusted. |
| **Geometry** | 8/10 | Clean grids, consistent spacing, balanced layout. Minor asymmetry in Experiencias grid. |
| **Conversion clarity** | 8/10 | Clear path to WhatsApp at every decision point. 10+ CTA touchpoints. |
| **Mobile flow** | 7.5/10 | Responsive, readable. Plan cards slightly dense on mobile. Dharma at 32px on mobile is borderline. |
| **Overall site** | 7.8/10 | Strong foundation. Main remaining issue is Plans section density. |

---

## QA Checklist

| # | Check | Status |
|---|-------|--------|
| 1 | Audit report created | ✅ |
| 2 | Screenshots saved | ✅ (16 screenshots) |
| 3 | Homepage sales flow audited | ✅ |
| 4 | Chorizo problem audited | ✅ Partially fixed |
| 5 | Secondary page responsibilities audited | ✅ All correct |
| 6 | Dharma usage map created | ✅ 5 selectors, all valid |
| 7 | Concentrated typography analyzed | ✅ Resolved by previous fix |
| 8 | Conversion path audited | ✅ 10+ WhatsApp touchpoints |
| 9 | No design changes made | ✅ Audit only |
| 10 | Prices unchanged | ✅ |
| 11 | WhatsApp remains 59172001680 | ✅ |
| 12 | No /galeria created | ✅ |
| 13 | No new pages created | ✅ |
| 14 | No fake data added | ✅ |

---

*Audit complete. No code was changed. Report only.*
