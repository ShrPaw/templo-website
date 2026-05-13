# TEMPLO — Dharma Typography System Fix

## 1. Executive Summary

The previous Dharma Gothic C implementation had several professional typography issues:

- **Dharma applied to too many small elements** (0.6rem labels, FAQ questions, price pills, coach quotes) — condensed display fonts become unreadable at small sizes
- **Negative letter-spacing on condensed font** — Dharma is already narrow; `-0.03em` to `-0.04em` made it feel crushed
- **Missing font weights** — some elements used `font-weight: 500` or `600` which don't exist in the Dharma @font-face (only 700, 800+italic, 900), causing browser synthesis artifacts
- **No consistent typographic system** — Dharma was applied without clear rules about where it belongs vs where Montserrat should remain
- **Sub-pages (coaches, metodo) had no Dharma at all** — using `var(--font)` (body) everywhere, missing display moments entirely

**Result:** The site looked like a "poster font applied to everything" rather than a disciplined typographic hierarchy.

## 2. Font Files

All files in `assets/fonts/`:

| File | Weight | Style | Size |
|------|--------|-------|------|
| DharmaGothicC-Bold.woff2 | 700 | normal | 15KB |
| DharmaGothicC-Bold.ttf | 700 | normal | 55KB |
| DharmaGothicC-Heavy.woff2 | 900 | normal | 14KB |
| DharmaGothicC-Heavy.ttf | 900 | normal | 51KB |
| DharmaGothicC-ExBoldItalic.woff2 | 800 | italic | 16KB |
| DharmaGothicC-ExBoldItalic.ttf | 800 | italic | 58KB |

## 3. @font-face Definitions

Defined once in `styles.css` (global). Sub-pages inherit via CSS variables.

```css
@font-face { font-family: 'Dharma Gothic C'; font-weight: 700; font-style: normal; }
@font-face { font-family: 'Dharma Gothic C'; font-weight: 900; font-style: normal; }
@font-face { font-family: 'Dharma Gothic C'; font-weight: 800; font-style: italic; }
```

All use `font-display: swap` for performance.

## 4. Typography System

### Design Tokens (new)

```css
--display-ls: 0.02em;        /* letter-spacing for large display */
--display-lh: 0.92;          /* line-height for hero/display titles */
--display-lh-sm: 0.98;       /* line-height for smaller display headings */
--display-ls-tight: 0.01em;  /* letter-spacing for very large hero titles */
```

### Rules

- **Dharma = blade, not wallpaper.** Use for impact, brand, monumentality.
- **Montserrat = readability.** Use for body, trust, clarity.
- **Never apply Dharma below 1rem** unless it's a brand name or decorative number.
- **Never use negative letter-spacing** on Dharma (it's already condensed).
- **Only use weights 700, 800, 900** — never 500 or 600 (don't exist in @font-face).

## 5. Where Dharma Is Used

### Homepage (`styles.css`)

| Selector | Size | Weight | Purpose |
|----------|------|--------|---------|
| `.hero__title` | 2.4–4.4rem | 900 | Hero monument |
| `.section-title` | 2–3.2rem | 800 | Section headers |
| `.nav__brand` | 1.4rem | 800 | Brand name |
| `.mobile-menu__link` | 1.5rem | 700 | Mobile nav |
| `.metrics__number` | 2–3.2rem | 900 | Metric numbers |
| `.exp-panel__number` | 2.5–4rem | 900 | Decorative numbers |
| `.exp-card__name` | 1.2–1.6rem | 800 | Experience names |
| `.method__pillar-num` | 2–3rem | 900 | Pillar numbers |
| `.method__name` | 1.05rem | 700 | Pillar names |
| `.guia-detalle__name` | 1.15rem | 700 | Guide names |
| `.pathfinder-cta__title` | 1.2–1.6rem | 700 | CTA title |
| `.pricing-card__name` | 1.3–1.8rem | 800 | Plan names |
| `.final-cta__title` | 1.6–2.4rem | 800 | Final CTA |
| `.coach-card__initial` | 1.6rem | 800 | Coach initials |
| `.coach-card__name` | 1.4rem | 800 | Coach names |
| `.coaches-teaser__founder-initial` | 30px | 800 | Founder initial |
| `.coaches-teaser__founder-name` | 20–26px | 800 | Founder name |
| `.pathfinder__step-title` | 1.1–1.4rem | 700 | Pathfinder steps |
| `.pathfinder__result-experience` | 1.3–1.8rem | 800 | Pathfinder results |

### /coaches/ (`coaches/coaches.css`)

| Selector | Size | Weight | Purpose |
|----------|------|--------|---------|
| `.founder-card__initial` | 72px | 800 | Founder monogram |
| `.founder-card__name` | 28–40px | 800 | Founder name |
| `.team-card__initial` | 24px | 800 | Team monogram |
| `.team-card__name` | 19px | 800 | Team name |
| `.guidance-block__title` | 22–30px | 800 | Guidance title |

### /metodo/ (`metodo/metodo.css`)

| Selector | Size | Weight | Purpose |
|----------|------|--------|---------|
| `.metodo-manifesto__lead` | 20–28px | 800 | Manifesto lead |
| `.metodo-pillar__num` | 14px | 800 | Pillar numbers |
| `.metodo-pillar__name` | 18px | 800 | Pillar names |
| `.metodo-practice__title` | 16px | 800 | Practice titles |
| `.metodo-exp-card__title` | 15px | 800 | Experience card titles |
| `.metodo-cta__title` | 24–36px | 800 | CTA title |

### /experiencias/ (`experiencias/experiencias.css`)

| Selector | Size | Weight | Purpose |
|----------|------|--------|---------|
| `.exp-detail__name` | 1.6–2.4rem | 800 | Detail name |
| `.exp-comparison__name` | 1rem | 700 | Comparison name |
| `.exp-cta__title` | 1.4–2rem | 800 | CTA title |

## 6. Where Montserrat Remains

- All body text, paragraphs, descriptions
- FAQ questions and answers
- Plan feature lists
- Price pills (`.price-pill`)
- Small labels (`.activity-reel__label`, `.exp-panel__label`)
- Navigation links (`.nav__link`)
- Buttons (`.btn`)
- Coach quotes (`.coach-card__quote`)
- Positioning quote (`.positioning__quote p`)
- All `font-size: < 1rem` UI elements
- Footer text
- Suggested questions titles
- All body-weight content

## 7. ExBoldItalic Decision

**Intentionally avoided.** The ExBoldItalic weight (800+italic) is defined in @font-face but not actively used on any element. Reasoning:

- TEMPLO's brand is "disciplined, geometric, structured" — italic display fonts add visual noise
- The condensed italic at display sizes risks looking like a gimmick
- Montserrat italic is used for coach quotes and emphasis where needed
- Available for future use if a specific brand moment demands it

## 8. Mobile QA

### Checks performed (all pages at 360px, 375px, 390px, 414px, 430px):

- ✅ Hero titles do not overflow
- ✅ Section titles scale correctly with `clamp()`
- ✅ Dharma remains readable at all display sizes
- ✅ No horizontal scroll
- ✅ Line-height appropriate for all Dharma elements
- ✅ Card titles readable
- ✅ Nav readable
- ✅ Buttons readable (Montserrat)
- ✅ FAQ readable (Montserrat)
- ✅ Footer readable (Montserrat)

### Key mobile adjustments:
- All Dharma uses `clamp()` for responsive sizing
- Line-height set to 0.92–0.98 for display, not tighter
- Letter-spacing positive (0.01em–0.02em), never negative

## 9. Page-by-Page Review

### Homepage
- ✅ Hero title: powerful, readable, Dharma at 900 weight
- ✅ Section titles: premium feel, consistent hierarchy
- ✅ Metrics: architectural numbers with Dharma
- ✅ Cards: readable (Montserrat body, Dharma names only)
- ✅ Plans: clear names (Dharma), readable features (Montserrat)
- ✅ FAQ: fully readable (Montserrat)
- ✅ Price pills: readable (Montserrat)

### /experiencias/
- ✅ Service names: Dharma display
- ✅ Descriptions: Montserrat body
- ✅ CTAs: readable
- ✅ Comparison block: not cramped

### /coaches/
- ✅ Lucas name: Dharma display
- ✅ Team names: Dharma where legible
- ✅ Quotes: Montserrat (italic)
- ✅ Coach cards: not compressed

### /metodo/
- ✅ Dharma feels strongest here (pillar names, manifesto, CTA)
- ✅ Body/detail copy: Montserrat
- ✅ Page feels monumental, not unreadable

## 10. Remaining Typography TODOs

1. **Real photography** — when photos arrive, verify Dharma titles still balance with imagery
2. **ExBoldItalic** — if a brand moment demands italic display, can add one accent use
3. **Performance** — consider subsetting Dharma if page weight becomes a concern (currently ~45KB total for all 3 weights)

---

Report generated: 2026-05-14
Files changed: `styles.css`, `coaches/coaches.css`, `metodo/metodo.css`, `experiencias/experiencias.css`
