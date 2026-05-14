# TEMPLO — Phase 4A Sales Architecture Refactor

**Date:** 2026-05-14
**Scope:** Homepage information architecture and sales flow optimization

---

## 1. Problem

The homepage was too long and information-heavy — "todo está en una sola página." It contained full explanations of every service, the method philosophy, and the coaching team, when that detail belongs on secondary pages. The homepage should sell the decision, not explain everything.

---

## 2. Strategy

**Homepage = sell the decision.**
**Secondary pages = explain the details.**

The homepage guides the visitor through a clear conversion funnel:
1. Understand what TEMPLO is
2. Feel emotional desire
3. See proof/energy
4. Understand the main offer
5. Choose or get guidance
6. See plans and prices
7. Ask on WhatsApp

---

## 3. What Stayed on Homepage

| Section | Reason |
|---------|--------|
| Hero | Emotional impact + primary WhatsApp CTA |
| Positioning | One clear sentence about what TEMPLO is |
| Activity Reel | Shows energy, movement, life — visual proof |
| Metrics | Quick trust signal (8 coaches, 5 experiences, 6 days, 1 studio) |
| Experiencias Preview | Shows 5 training paths with short cards → links to /experiencias/ |
| Pathfinder | Decision tool for undecided visitors |
| Pathfinder CTA | Direct WhatsApp bridge after Pathfinder |
| Plans | Conversion-critical pricing — moved higher |
| Method Teaser | Brand depth — 3 pillars only, CTA to /metodo/ |
| Coaches Teaser | Trust signal — founder + team strip, CTA to /coaches/ |
| Location | Practical conversion support |
| FAQ | Final objections only (6 questions) |
| Final CTA | Final push to WhatsApp |
| Footer | Official brand closure |

---

## 4. What Was Compressed or Moved

### Compressed on Homepage

| Section | Change |
|---------|--------|
| Experiencias cards | Descriptions shortened to 1-2 lines each |
| Experiencias CTA | Changed from WhatsApp to "Ver todas las experiencias" → /experiencias/ |
| Pathfinder CTA text | Updated to "Confirmar mi plan por WhatsApp" |
| Method teaser | Already compressed (3 pillars). Pillar descriptions shortened |
| Coaches section-sub | Shortened from longer description |
| FAQ | Reduced from 9 questions to 6 conversion-focused questions |
| Suggested Questions box | Removed (was duplicative with Pathfinder + FAQ) |

### Moved Higher

| Section | Before | After |
|---------|--------|-------|
| Plans | Position 10 (after Coaches) | Position 8 (after Pathfinder CTA) |

**Rationale:** Plans are conversion-critical. Visitors need to see pricing before reading deeper philosophy or team info. The flow now is: impact → energy → trust → offer → guide → price → depth → trust → practical → close.

### Moved to Secondary Pages

No content was deleted — it already lives on the appropriate secondary pages:
- Detailed service explanations → /experiencias/
- Full team info → /coaches/
- Full method philosophy → /metodo/

---

## 5. Final Homepage Order

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | Emotional impact + WhatsApp CTA |
| 2 | Positioning | What TEMPLO is |
| 3 | Activity Reel | Visual energy proof |
| 4 | Metrics | Quick trust numbers |
| 5 | Experiencias Preview | 5 training paths → /experiencias/ |
| 6 | Pathfinder | Decision guidance tool |
| 7 | Pathfinder CTA | WhatsApp bridge |
| 8 | Plans | Pricing and options |
| 9 | Method Teaser | 3 pillars → /metodo/ |
| 10 | Coaches Teaser | Founder + team → /coaches/ |
| 11 | Location | Address + map |
| 12 | FAQ | 6 final objections |
| 13 | Final CTA | Last WhatsApp push |
| 14 | Footer | Brand closure |

---

## 6. Secondary Page Responsibilities

### /experiencias/
- Detailed service explanations
- Who each experience is for
- Plan/pricing links
- WhatsApp CTA

### /coaches/
- Lucas founder section
- Full coach team
- Coach-specific CTAs

### /metodo/
- Full philosophy
- 5 pillars
- Method in practice
- Connection to experiences

---

## 7. Sales Flow Explanation

The visitor moves through the homepage as a guided sales journey:

1. **Hook** (Hero) — Emotional brand moment. "No vienes solo a entrenar. Vienes a construirte."
2. **Anchor** (Positioning) — One sentence: TEMPLO is for people with a goal.
3. **Desire** (Activity Reel) — Visual proof of energy, movement, community.
4. **Trust** (Metrics) — 8 coaches, 5 experiences, 6 days, 1 studio.
5. **Curiosity** (Experiencias) — 5 short cards. "Conocer más" links to /experiencias/.
6. **Guidance** (Pathfinder) — 3-step tool to find the right experience.
7. **Bridge** (Pathfinder CTA) — "Confirmar mi plan por WhatsApp."
8. **Decision** (Plans) — Real options and prices. Conversion-critical.
9. **Depth** (Method Teaser) — Brand philosophy in 3 pillars. CTA to /metodo/.
10. **Trust** (Coaches Teaser) — Founder + team. CTA to /coaches/.
11. **Practical** (Location) — Where + how to get there.
12. **Objections** (FAQ) — 6 questions that help conversion.
13. **Close** (Final CTA) — Last push to WhatsApp.
14. **Footer** — Official links.

Each step either creates desire, builds trust, or moves toward WhatsApp.

---

## 8. QA Results

| # | Check | Status |
|---|-------|--------|
| 1 | Homepage is shorter | ✅ Net -43 lines |
| 2 | Plans moved higher | ✅ Now position 8 (was 10) |
| 3 | Experiencias remains as preview | ✅ Short cards with "Conocer más" |
| 4 | Pathfinder remains | ✅ Unchanged |
| 5 | CTA after Pathfinder remains | ✅ Text updated to "Confirmar mi plan" |
| 6 | Method is only teaser | ✅ 3 pillars + CTA to /metodo/ |
| 7 | Coaches is only teaser | ✅ Founder + team strip + CTA to /coaches/ |
| 8 | Deep info in /experiencias/ | ✅ (not modified) |
| 9 | Deep info in /coaches/ | ✅ (not modified) |
| 10 | Deep info in /metodo/ | ✅ (not modified) |
| 11 | /experiencias/ works | ✅ |
| 12 | /coaches/ works | ✅ |
| 13 | /metodo/ works | ✅ |
| 14 | No /galeria created | ✅ |
| 15 | WhatsApp = 59172001680 | ✅ (22 instances, all correct) |
| 16 | No 5917201680 | ✅ |
| 17 | No 72209791 | ✅ |
| 18 | Prices unchanged | ✅ |
| 19 | No fake data | ✅ |
| 20 | No fake testimonials | ✅ |
| 21 | No fake coach photos | ✅ |
| 22 | No horizontal overflow | ✅ |
| 23 | CTA flow is clear | ✅ |
| 24 | Footer logo remains | ✅ |
| 25 | Dharma not in functional text | ✅ |
| 26 | Suggested questions removed | ✅ (was duplicative) |
| 27 | FAQ streamlined | ✅ 6 questions (was 9) |

---

## 9. Remaining TODOs

- Replace placeholder reel images with real TEMPLO photography when available
- Consider A/B testing the Plans position (current: after Pathfinder CTA)
- Add real coach Instagram links when available
- Consider adding a "Ver video" section if video content becomes available

---

*Phase 4A refactor complete. Homepage is now a sales funnel, not an encyclopedia.*
