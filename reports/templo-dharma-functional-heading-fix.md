# TEMPLO — Dharma Functional Heading Fix

## 1. What Was Wrong

The Pathfinder section title "¿Qué entrenamiento va con tu meta?" was using Dharma Gothic via the `.section-title` class. As a functional question, it looked:
- Too condensed
- Hard to read
- Not premium
- Not appropriate for a functional UI prompt

## 2. Why Pathfinder Title Should Not Use Dharma

Dharma is a condensed display font designed for monumental brand moments. A Pathfinder question is functional text — it asks the user to make a decision. Functional questions need:
- Wide, readable letterforms (Montserrat)
- Trust and clarity (Montserrat)
- Not condensed/aggressive display typography (Dharma)

**Rule:** Dharma = high-impact display titles. Montserrat = functional headings, questions, UI.

## 3. Selectors Fixed

| Selector | Fix | Reason |
|----------|-----|--------|
| `.pathfinder .section-title` | Montserrat 900, ls -0.01em, lh 1.05 | Functional question |
| `.faq .section-title` | Montserrat 900, ls -0.01em, lh 1.05 | Functional question |

## 4. Remaining Dharma Usage (High-Impact Display Only)

| Selector | Page | Size | Purpose |
|----------|------|------|---------|
| `.hero__title` | Home | 2.4–4.4rem | Hero H1 |
| `.section-title` (global) | All | 2–3.2rem | Major section H2 |
| `.metrics__number` | Home | 2–3.2rem | Large metrics |
| `.exp-panel__number` | Home | 2.5–4rem | Decorative numbers |
| `.method__pillar-num` | Home | 2–3rem | Decorative numbers |
| `.final-cta__title` | Home | 1.6–2.4rem | Large CTA |
| `.metodo-manifesto__lead` | /metodo/ | 20–28px | Manifesto |
| `.metodo-cta__title` | /metodo/ | 24–36px | CTA |
| `.exp-detail__name` | /experiencias/ | 1.6–2.4rem | Page hero |
| `.exp-cta__title` | /experiencias/ | 1.4–2rem | CTA |

**Overrides applied:**
- `.pathfinder .section-title` → Montserrat (functional question)
- `.faq .section-title` → Montserrat (functional question)

## 5. QA

- ✅ Pathfinder title uses Montserrat
- ✅ FAQ title uses Montserrat
- ✅ No functional questions use Dharma
- ✅ Dharma remains only on true high-impact display titles
- ✅ WhatsApp: 59172001680
- ✅ Prices unchanged
- ✅ No new pages / galeria
- ✅ Mobile readable

## 6. Final Verdict

The Pathfinder title now looks readable, wide, and premium. It no longer feels cramped or aggressive. The typography rule is strictly enforced: Dharma for brand display only, Montserrat for everything functional.

---

Commit: `9c664bc`
Push: ✅ Complete
