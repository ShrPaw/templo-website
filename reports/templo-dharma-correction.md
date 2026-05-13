# TEMPLO — Dharma Typography Correction Report

**Date:** 2026-05-14
**Scope:** Typography correction only — no layout, pricing, or content changes

---

## 1. Audit Findings Used

The Dharma concentration audit identified that Dharma Gothic C was being applied to text elements that are too small, functional, or conversational for a condensed display typeface. Key issues:

- Dharma on card titles under 36px caused readability problems
- Functional questions (Pathfinder, FAQ) using Dharma felt forced
- CTA titles using Dharma lost conversational warmth
- Line-height of 0.92 on display titles was too tight, causing visual "concentration"
- Letter-spacing of 0.02em on Dharma was slightly too tight

---

## 2. Selectors Reverted to Montserrat

| Selector | File | Reason |
|----------|------|--------|
| `.exp-detail__name` | experiencias/experiencias.css | Card-level detail name, under 36px effective size |
| `.exp-cta__title` | experiencias/experiencias.css | CTA question — conversational, not monumental |
| `.metodo-manifesto__lead` | metodo/metodo.css | Lead text, not a display moment |
| `.metodo-cta__title` | metodo/metodo.css | CTA question — conversational |
| `.final-cta__title` | styles.css | CTA question — conversational |

**Applied values:**
- `font-family: var(--font-body)` (Montserrat)
- `font-weight: 800` or `900`
- `letter-spacing: -0.01em` or `0`
- `line-height: 1.08` to `1.15`

---

## 3. Dharma Variables Adjusted

| Variable | Before | After | Purpose |
|----------|--------|-------|---------|
| `--display-lh` | `0.92` | `0.98` | More breathing room for display titles |
| `--display-ls` | `0.02em` | `0.03em` | Slightly wider tracking for Dharma |

Also updated `.pathfinder .section-title, .faq .section-title` line-height from `1.05` to `1.08`.

---

## 4. Where Dharma Remains (Intentional)

Dharma Gothic C is now restricted to **high-impact display moments only**:

| Selector | Context | Justification |
|----------|---------|---------------|
| `.hero__title` | Homepage hero "TU CUERPO. TU TEMPLO." | Monumental brand moment |
| `.section-title` (base) | Large section headings (Experiencias, Método, Coaches) | True H1/H2 display, >36px |
| `.metrics__number` | Stat numbers (350m², 500+, etc.) | Decorative numeric display |
| `.exp-panel__number` | Decorative background numbers on cards | Pure decoration, not readable text |
| `.method__pillar-num` | Decorative pillar numbers on homepage | Pure decoration |
| Page H1 titles | /experiencias/, /coaches/, /metodo/ hero titles | True page-level display |

**Overridden to Montserrat:**
- `.pathfinder .section-title` — functional question
- `.faq .section-title` — functional heading

---

## 5. Screenshot Paths

All saved to: `reports/dharma-correction/screenshots/`

**Desktop (1440px):**
- `desktop-hero.png` — Homepage hero
- `desktop-pathfinder.png` — Pathfinder section overview
- `desktop-pathfinder-detail.png` — Pathfinder options detail
- `desktop-faq.png` — FAQ section
- `desktop-experiencias.png` — /experiencias/ page
- `desktop-experiencias-cta.png` — /experiencias/ CTA
- `desktop-coaches.png` — /coaches/ page
- `desktop-metodo.png` — /metodo/ page
- `desktop-metodo-cta.png` — /metodo/ CTA

**Mobile (390px):**
- `mobile-hero.png` — Homepage hero
- `mobile-pathfinder.png` — Pathfinder on mobile
- `mobile-experiencias.png` — Experiencias cards on mobile
- `mobile-experiencias-detail.png` — /experiencias/ on mobile
- `mobile-coaches.png` — /coaches/ on mobile
- `mobile-metodo.png` — /metodo/ on mobile

---

## 6. Mobile QA

- ✅ Homepage hero: Dharma title readable, no overflow
- ✅ Pathfinder: Montserrat question title readable on mobile
- ✅ Experiencias cards: Montserrat names, stacked properly
- ✅ /experiencias/: Detail names in Montserrat, readable
- ✅ /coaches/: Founder card and team cards readable
- ✅ /metodo/: Manifesto lead in Montserrat, pillars readable
- ✅ No horizontal overflow on any page at 390px
- ✅ All CTAs readable and touch-friendly

---

## 7. Final Verdict

**Dharma now feels premium and controlled, not concentrated.**

The key improvements:
1. **Breathing room**: `--display-lh` from 0.92 → 0.98 gives Dharma titles room to breathe without losing their impact
2. **Wider tracking**: `--display-ls` from 0.02em → 0.03em prevents the "crushed together" feeling
3. **Right tool for the job**: Dharma is now reserved for truly monumental moments (hero, page titles, decorative numbers). Conversational text, questions, and card titles use Montserrat — which reads better at smaller sizes and in functional contexts
4. **No negative letter-spacing on Dharma**: All Dharma uses have non-negative letter-spacing
5. **Pathfinder is now approachable**: The question "¿Qué entrenamiento va con tu meta?" in Montserrat feels like a genuine question, not a billboard

**Words are no longer concentrated.** The typography hierarchy is now clear: Dharma for impact, Montserrat for everything else.

---

## QA Checklist

| # | Check | Status |
|---|-------|--------|
| 1 | Dharma is not overused | ✅ |
| 2 | Pathfinder title uses Montserrat | ✅ |
| 3 | Card titles use Montserrat | ✅ |
| 4 | Functional questions use Montserrat | ✅ |
| 5 | FAQ uses Montserrat | ✅ |
| 6 | Buttons use Montserrat | ✅ |
| 7 | Nav uses Montserrat | ✅ |
| 8 | Footer uses Montserrat | ✅ |
| 9 | Dharma only on high-impact display | ✅ |
| 10 | No Dharma under 36px | ✅ |
| 11 | Homepage works | ✅ |
| 12 | /experiencias/ works | ✅ |
| 13 | /coaches/ works | ✅ |
| 14 | /metodo/ works | ✅ |
| 15 | Mobile readable | ✅ |
| 16 | No horizontal overflow | ✅ |
| 17 | WhatsApp = 59172001680 | ✅ |
| 18 | Prices unchanged | ✅ |
| 19 | No new pages | ✅ |
| 20 | No /galeria | ✅ |
| 21 | No fake data | ✅ |
