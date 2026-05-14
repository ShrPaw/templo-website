# TEMPLO — Phase 5B Dharma Brand-Seal Typography System

**Fecha:** 2026-05-15
**Commit:** 373d04d

---

## 1. Problem

Dharma Gothic C was used as the full title font across the entire website (`.section-title`, `.hero__title`). This created a visually compressed, hard-to-read experience. Dharma works as a powerful accent but fails as a reading font — full sentences and long headings in Dharma reduce readability and feel forced.

## 2. New Typography Law

**Dharma = strategic brand-seal accent words only**
- Maximum 1–2 words per section
- Only allowed words: TEMPLO, FUERZA, MÉTODO, DISCIPLINA, TÉCNICA, PROGRESIÓN, CONTROL, ENERGÍA, DIRECCIÓN, CARÁCTER
- Never for full sentences, buttons, nav, footer, FAQ, cards, plan names, coach names

**Montserrat = full reading system**
- All titles, body text, UI, buttons, nav, footer, FAQ, cards, labels, badges, CTAs
- Weight 800–900 for headings
- Letter-spacing: -0.015em to -0.01em for headings

## 3. What Changed

### CSS (styles.css)
| Element | Before | After |
|---|---|---|
| `.section-title` | `var(--font-display)` (Dharma) | `var(--font-body)` (Montserrat) |
| `.hero__title` | `var(--font-display)` (Dharma) | `var(--font-body)` (Montserrat) |
| `.pathfinder .section-title` etc. | Redundant Montserrat override | Removed (base is now Montserrat) |
| `.brand-seal` | Did not exist | New class created for Dharma accent words |

### HTML — Brand-seal words added
| Page | Section | Text | Brand-seal word |
|---|---|---|---|
| index.html | Activity reel | "Así se vive TEMPLO" | TEMPLO |
| index.html | Method teaser | "Disciplina, técnica y progresión" | progresión |
| metodo/index.html | Hero title | "Entrenar sin método es repetir" | método |

## 4. Strategic Dharma Words

3 brand-seal instances total across the entire site:
1. **TEMPLO** — homepage activity reel section title
2. **progresión** — homepage method teaser section title
3. **método** — metodo page hero title

No Dharma in: FAQ, buttons, nav, footer, cards, plans, coaches, Pathfinder, instructions.

## 5. Where Montserrat Dominates

- All `.section-title` elements (every page)
- `.hero__title` (homepage)
- All body text, descriptions, paragraphs
- All buttons (`.btn`)
- Navigation (`.nav`)
- Footer (`.footer`)
- FAQ (`.faq`)
- All cards (`.exp-card`, `.pricing-card`, `.team-card`, `.site-guide__card`)
- Plan names and prices
- Coach names and quotes
- Pathfinder tool
- Section labels
- Mobile menu

## 6. Where Dharma Remains

- `.brand-seal` — 3 strategic accent words
- `.metrics__number` — decorative numbers (8, 5, 6, 1)
- `.exp-panel__number` — decorative numbers
- `.method__pillar-num` — Roman numerals (I, II, III, IV, V)
- Font files remain loaded (not removed)

## 7. Logo Rule

- Navbar uses official wordmark image (`assets/brand/templo-wordmark-white.webp`)
- Footer uses official logo image (`assets/brand/templo-logo-completo-white.webp`)
- No typed Dharma "TEMPLO" used as logo
- Official wordmark image paths verified working on all pages

## 8. Mobile QA

- Section titles readable at 360–430px
- Brand-seal words render correctly inline
- No horizontal overflow
- No Dharma text too small to read
- Montserrat line-height optimized for mobile (1.08)

## 9. What Was Not Changed

- ✅ Prices unchanged (Bs. 230–550)
- ✅ WhatsApp: 59172001680 — 51 refs, 0 incorrect
- ✅ No new pages created
- ✅ No /galeria created
- ✅ No fake data added
- ✅ Plan names unchanged
- ✅ Business data unchanged
- ✅ Sales architecture unchanged
- ✅ Dharma font files not removed

## 10. Final Verdict

**Does the typography still feel compressed?**
No. Montserrat with weight 900 and letter-spacing -0.01em gives section titles strong presence without the visual compression of Dharma. The text breathes more and reads faster.

**Does Dharma now feel like a brand seal instead of a forced title font?**
Yes. Dharma appears exactly 3 times across the entire site, always as a single strategic word inside a Montserrat sentence. It reads as a visual accent — a brand stamp — not as a font system. The contrast between Montserrat headings and a single Dharma word creates the "power moment" the brand needs without sacrificing readability.

---

## QA Checklist

| # | Check | Status |
|---|---|---|
| 1 | Dharma no longer used for full sentences | ✅ |
| 2 | Dharma no longer used for full titles broadly | ✅ |
| 3 | Dharma appears only as selected strategic words | ✅ (3 instances) |
| 4 | Montserrat carries all reading | ✅ |
| 5 | Pathfinder uses Montserrat only | ✅ |
| 6 | Plans use Montserrat only | ✅ |
| 7 | Cards use Montserrat only | ✅ |
| 8 | FAQ uses Montserrat only | ✅ |
| 9 | Buttons use Montserrat only | ✅ |
| 10 | Nav uses Montserrat/official wordmark image | ✅ |
| 11 | Footer uses Montserrat/official image | ✅ |
| 12 | Coach names use Montserrat | ✅ |
| 13 | Service names use Montserrat | ✅ |
| 14 | Método body text uses Montserrat | ✅ |
| 15 | Official logo is not recreated with Dharma | ✅ |
| 16 | Homepage works | ✅ |
| 17 | /experiencias/ works | ✅ |
| 18 | /coaches/ works | ✅ |
| 19 | /metodo/ works | ✅ |
| 20 | Plans expand/collapse still works | ✅ |
| 21 | Mobile readable | ✅ |
| 22 | No horizontal overflow | ✅ |
| 23 | WhatsApp remains exactly 59172001680 | ✅ |
| 24 | No 5917201680 | ✅ |
| 25 | No 72209791 | ✅ |
| 26 | Prices unchanged | ✅ |
| 27 | No new pages | ✅ |
| 28 | No /galeria | ✅ |
| 29 | No fake data added | ✅ |
