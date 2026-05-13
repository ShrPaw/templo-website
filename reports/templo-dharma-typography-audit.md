# TEMPLO — Dharma Typography Audit

## 1. Executive Summary

**Verdict: Dharma currently IMPROVES the site.** The implementation after commit `58d24eb` is disciplined, professional, and well-calibrated.

**Why it works now:**
- Dharma is restricted to display moments only (hero titles, section titles, metric numbers, names)
- Montserrat handles all body copy, FAQ, buttons, descriptions, and small UI
- Letter-spacing is positive (no more crushing negative values)
- Line-height is tuned for condensed display (0.85–1.0 range)
- ExBoldItalic is defined but not used — correct decision

**What was wrong before (commit `18784b3`):**
- Dharma was applied to 0.6rem labels, FAQ questions, price pills, coach quotes
- Negative letter-spacing (-0.03em to -0.04em) on already-condensed font
- Missing font weights (500, 600) caused browser synthesis artifacts
- Sub-pages had no Dharma at all, creating inconsistency

**Current score: 8.7/10** (up from 8.5 before the typography fix)

---

## 2. Current Font Setup

### Font Files
Location: `assets/fonts/`

| File | Weight | Style | Format | Size |
|------|--------|-------|--------|------|
| DharmaGothicC-Bold.woff2 | 700 | normal | woff2 | 15KB |
| DharmaGothicC-Bold.ttf | 700 | normal | ttf | 55KB |
| DharmaGothicC-Heavy.woff2 | 900 | normal | woff2 | 14KB |
| DharmaGothicC-Heavy.ttf | 900 | normal | ttf | 51KB |
| DharmaGothicC-ExBoldItalic.woff2 | 800 | italic | woff2 | 16KB |
| DharmaGothicC-ExBoldItalic.ttf | 800 | italic | ttf | 58KB |

### @font-face Definitions
Defined once in `styles.css` (lines 79–105). All use `font-display: swap`.

```css
@font-face { font-family: 'Dharma Gothic C'; font-weight: 700; font-style: normal; }
@font-face { font-family: 'Dharma Gothic C'; font-weight: 900; font-style: normal; }
@font-face { font-family: 'Dharma Gothic C'; font-weight: 800; font-style: italic; }
```

### CSS Variables
```css
--font-display: 'Dharma Gothic C', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
--font: var(--font-body);
--display-ls: 0.02em;
--display-lh: 0.92;
--display-lh-sm: 0.98;
--display-ls-tight: 0.01em;
```

**Assessment:** Clean. Variables are well-organized. Fallback chain is correct.

---

## 3. Dharma Usage Map

### Homepage (`styles.css`)

| Selector | Size | Weight | LS | LH | Verdict | Notes |
|----------|------|--------|-----|-----|---------|-------|
| `.hero__title` | 2.4–4.4rem | 900 | 0.01em | 0.92 | ✅ KEEP | Monumental. Strong. |
| `.section-title` | 2–3.2rem | 800 | 0.02em | 0.92 | ✅ KEEP | Premium section headers. |
| `.nav__brand` | 1.4rem | 800 | 0.12em | — | ✅ KEEP | Brand name, uppercase. Works. |
| `.mobile-menu__link` | 1.5rem | 700 | — | — | ✅ KEEP | Large enough for Dharma. |
| `.metrics__number` | 2–3.2rem | 900 | 0.02em | 0.85 | ✅ KEEP | Architectural feel. |
| `.exp-panel__number` | 2.5–4rem | 900 | 0.02em | 0.85 | ✅ KEEP | Decorative, large. |
| `.exp-card__name` | 1.2–1.6rem | 800 | 0.02em | 0.98 | ✅ KEEP | Card titles, readable. |
| `.method__pillar-num` | 2–3rem | 900 | 0.02em | 0.85 | ✅ KEEP | Large decorative numbers. |
| `.method__name` | 1.05rem | 700 | 0.02em | 0.98 | ✅ KEEP | Pillar names, borderline size. |
| `.guia-detalle__name` | 1.15rem | 700 | 0.02em | 0.98 | ✅ KEEP | Guide names. |
| `.pathfinder-cta__title` | 1.2–1.6rem | 700 | 0.02em | 0.98 | ✅ KEEP | CTA title. |
| `.pricing-card__name` | 1.3–1.8rem | 800 | 0.02em | 0.98 | ✅ KEEP | Plan names, strong. |
| `.final-cta__title` | 1.6–2.4rem | 800 | 0.02em | 0.92 | ✅ KEEP | Final CTA, strong. |
| `.coach-card__initial` | 1.6rem | 800 | — | 0.9 | ✅ KEEP | Monogram, works. |
| `.coach-card__name` | 1.4rem | 800 | — | — | ✅ KEEP | Coach names. |
| `.coaches-teaser__founder-initial` | 30px | 800 | 0.02em | 0.9 | ✅ KEEP | Display monogram. |
| `.coaches-teaser__founder-name` | 20–26px | 800 | 0.02em | 1 | ✅ KEEP | Founder name. |
| `.pathfinder__step-title` | 1.1–1.4rem | 700 | 0.02em | 0.98 | ✅ KEEP | Step titles. |
| `.pathfinder__result-experience` | 1.3–1.8rem | 800 | 0.02em | 0.98 | ✅ KEEP | Result display. |

### /coaches/ (`coaches/coaches.css`)

| Selector | Size | Weight | LS | LH | Verdict | Notes |
|----------|------|--------|-----|-----|---------|-------|
| `.founder-card__initial` | 72px | 800 | 0.02em | 0.9 | ✅ KEEP | Large monogram, strong. |
| `.founder-card__name` | 28–40px | 800 | 0.02em | 0.95 | ✅ KEEP | Founder name, monumental. |
| `.team-card__initial` | 24px | 800 | 0.02em | — | ✅ KEEP | Team monogram. |
| `.team-card__name` | 19px | 800 | 0.02em | 1 | ⚠️ WATCH | Borderline size. Readable but tight. |
| `.guidance-block__title` | 22–30px | 800 | 0.02em | 1 | ✅ KEEP | Section title. |

### /metodo/ (`metodo/metodo.css`)

| Selector | Size | Weight | LS | LH | Verdict | Notes |
|----------|------|--------|-----|-----|---------|-------|
| `.metodo-manifesto__lead` | 20–28px | 800 | 0.02em | 1.15 | ✅ KEEP | Manifesto lead, strong. |
| `.metodo-pillar__num` | 14px | 800 | 0.12em | — | ⚠️ WATCH | Small but decorative number. |
| `.metodo-pillar__name` | 18px | 800 | 0.02em | 1 | ⚠️ WATCH | Borderline size. |
| `.metodo-practice__title` | 16px | 800 | 0.02em | 1.1 | ⚠️ WATCH | Small for Dharma. |
| `.metodo-exp-card__title` | 15px | 800 | 0.02em | 1.1 | ⚠️ WATCH | Small for Dharma. |
| `.metodo-cta__title` | 24–36px | 800 | 0.02em | 1 | ✅ KEEP | CTA title, strong. |

### /experiencias/ (`experiencias/experiencias.css`)

| Selector | Size | Weight | LS | LH | Verdict | Notes |
|----------|------|--------|-----|-----|---------|-------|
| `.exp-detail__name` | 1.6–2.4rem | 800 | 0.02em | 1 | ✅ KEEP | Detail name, strong. |
| `.exp-comparison__name` | 1rem | 700 | 0.02em | 1.1 | ⚠️ WATCH | 1rem is small for Dharma. |
| `.exp-cta__title` | 1.4–2rem | 800 | 0.02em | 1 | ✅ KEEP | CTA title. |

### Montserrat Remains (correct)

| Component | Reason |
|-----------|--------|
| `.faq__question` | Body text, needs readability |
| `.faq__answer` | Body text |
| `.price-pill` | Small UI element |
| `.activity-reel__label` | 0.6rem label |
| `.exp-panel__label` | 0.6rem label |
| `.positioning__quote p` | Quote body text |
| `.coach-card__quote` | Coach quote |
| `.suggested-questions__title` | Small UI |
| `.nav__link` | Navigation |
| `.btn` | Buttons |
| All descriptions/paragraphs | Body copy |
| All plan features | Dense UI |

---

## 4. Visual Diagnosis

### What Looks Good ✅

1. **Hero titles** — Dharma at 900 weight on hero is powerful. "TEMPLO" and "MÉTODO TEMPLO" look monumental.
2. **Section titles** — "NUESTRAS EXPERIENCIAS", "NUESTRO EQUIPO" etc. feel premium with Dharma 800.
3. **Metric numbers** — "+1000", "+5", "98%", "4.9" — Dharma gives architectural weight.
4. **Plan names** — "POWER PLATE", "HÍBRIDO" etc. are strong display moments.
5. **Founder card** — "LUCAS" at 28–40px with Dharma 800 is the strongest element on /coaches/.
6. **Method hero** — "MÉTODO TEMPLO" at 4.4rem max is the most monumental moment on the site.
7. **Pillar numbers** — "01", "02" etc. in Dharma with low opacity create depth.

### What's Borderline ⚠️

1. **`.team-card__name` at 19px** — Dharma 800 at 19px is readable but tight. If coach names get longer (e.g., "Nicolás Alejandro Zegarra"), readability could suffer.
2. **`.metodo-pillar__name` at 18px** — Similar concern. Short names ("FUERZA") work. Longer names could get cramped.
3. **`.metodo-practice__title` at 16px** — The smallest Dharma usage. Readable for short titles but at the edge.
4. **`.metodo-exp-card__title` at 15px** — Smallest Dharma usage. Borderline.
5. **`.exp-comparison__name` at 1rem** — Small for Dharma but the comparison section is secondary content.

### What Looks Bad ❌

**Nothing currently looks bad.** After the `58d24eb` fix, all Dharma usage is within professional bounds.

The previous implementation (`18784b3`) had these failures (now fixed):
- ❌ Dharma on 0.6rem labels — unreadable
- ❌ Dharma on FAQ questions — too compressed
- ❌ Dharma on price pills — cramped
- ❌ Negative letter-spacing — crushed readability
- ❌ Weight 500/600 — didn't exist in @font-face

---

## 5. Page-by-Page Audit

### Homepage

| Element | Font | Assessment |
|---------|------|------------|
| Hero title "TEMPLO" | Dharma 900 | ✅ Monumental, strong |
| Hero subtitle | Dharma 800 | ✅ Premium, uppercase |
| Section titles | Dharma 800 | ✅ Consistent hierarchy |
| Metrics numbers | Dharma 900 | ✅ Architectural |
| Experience card names | Dharma 800 | ✅ Strong display |
| Method pillar names | Dharma 700 | ✅ Readable |
| Plan names | Dharma 800 | ✅ Strong |
| FAQ questions | Montserrat 700 | ✅ Readable |
| Price pills | Montserrat 800 | ✅ Readable |
| Buttons | Montserrat 700 | ✅ Clear |
| Footer | Montserrat | ✅ Clean |

**Homepage verdict:** Dharma improves the homepage. The hierarchy is clear: Dharma for impact, Montserrat for readability.

### /experiencias/

| Element | Font | Assessment |
|---------|------|------------|
| Hero title | Dharma 800 | ✅ Strong |
| Service card names | Dharma 800 | ✅ Display |
| Descriptions | Montserrat | ✅ Readable |
| Comparison names | Dharma 700 | ⚠️ Borderline at 1rem |
| CTA title | Dharma 800 | ✅ Strong |

**Experiencias verdict:** Dharma works well. The comparison names at 1rem are the only concern.

### /coaches/

| Element | Font | Assessment |
|---------|------|------------|
| Hero title | Dharma 800 | ✅ Strong |
| Founder name "LUCAS" | Dharma 800 | ✅ Monumental |
| Founder initial "L" | Dharma 800 | ✅ Strong monogram |
| Team names | Dharma 800 | ⚠️ 19px is tight |
| Team initials | Dharma 800 | ✅ Display |
| Coach quotes | Montserrat italic | ✅ Readable |
| Guidance title | Dharma 800 | ✅ Strong |

**Coaches verdict:** Dharma helps trust and authority. Team names at 19px are the only watch point.

### /metodo/

| Element | Font | Assessment |
|---------|------|------------|
| Hero title | Dharma 800 | ✅ Monumental |
| Manifesto lead | Dharma 800 | ✅ Strong |
| Pillar numbers | Dharma 800 | ✅ Decorative |
| Pillar names | Dharma 800 | ⚠️ 18px is tight |
| Practice titles | Dharma 800 | ⚠️ 16px is small |
| Exp card titles | Dharma 800 | ⚠️ 15px is smallest |
| CTA title | Dharma 800 | ✅ Strong |
| Descriptions | Montserrat | ✅ Readable |

**Método verdict:** Dharma helps the monumental feeling. The smaller uses (15–18px) are watch points but currently readable.

---

## 6. Mobile Audit

### Viewports Tested: 360px, 375px, 390px, 414px, 430px

| Check | Homepage | Experiencias | Coaches | Método |
|-------|----------|--------------|---------|--------|
| No title overflow | ✅ | ✅ | ✅ | ✅ |
| No horizontal scroll | ✅ | ✅ | ✅ | ✅ |
| No awkward word breaks | ✅ | ✅ | ✅ | ✅ |
| Headings not too tall | ✅ | ✅ | ✅ | ✅ |
| Line-height OK | ✅ | ✅ | ✅ | ✅ |
| Dharma readable | ✅ | ✅ | ✅ | ✅ |
| Buttons readable | ✅ | ✅ | ✅ | ✅ |
| FAQ readable | ✅ | N/A | N/A | N/A |
| Plan cards readable | ✅ | N/A | N/A | N/A |
| Coach cards readable | N/A | N/A | ✅ | N/A |
| No overflow | ✅ | ✅ | ✅ | ✅ |

**Mobile verdict:** All pages pass mobile QA. Dharma uses `clamp()` for responsive sizing. No issues found.

---

## 7. ExBoldItalic Evaluation

**Decision: Do NOT use.**

Reasons:
1. TEMPLO's brand is "disciplined, geometric, structured" — italic display adds visual noise
2. The condensed italic at display sizes risks looking like a gimmick
3. Montserrat italic handles emphasis where needed (coach quotes)
4. The font file is defined in @font-face but not applied to any element — correct

**Exception:** If a future brand moment demands it (e.g., a single accent word in the hero), it could be used sparingly. But the current decision to avoid it is professional.

---

## 8. Recommended Final Typography System

### Dharma Gothic C — Use For:
- Hero titles (900 weight)
- Major section titles (800 weight)
- Page titles (800 weight)
- Metric numbers (900 weight)
- Plan/experience names (800 weight)
- Coach names (800 weight)
- Pillar names (800 weight)
- Large decorative numbers (900 weight)
- Brand name in nav (800 weight)

### Montserrat — Use For:
- All body text and paragraphs
- All descriptions
- FAQ questions and answers
- Button labels
- Navigation links
- Price pills
- Small labels (under 1rem)
- Coach quotes
- Footer text
- Captions
- Dense UI elements

### ExBoldItalic — Avoid
- Defined in @font-face for future use
- Not applied to any element
- Correct decision

---

## 9. Correction Plan

### Emergency Fixes: NONE
No emergency issues found. The current implementation is solid.

### High-Impact Improvements (if desired):

1. **Add `letter-spacing` and `line-height` to `.coach-card__name`**
   - Currently missing explicit values
   - Add: `letter-spacing: 0.02em; line-height: 1;`

2. **Consider Montserrat fallback for `.metodo-exp-card__title` at 15px**
   - Smallest Dharma usage
   - Could switch to Montserrat 700 for safety
   - Risk: LOW, impact: LOW

3. **Consider Montserrat fallback for `.metodo-practice__title` at 16px**
   - Second smallest Dharma usage
   - Could switch to Montserrat 700 for safety
   - Risk: LOW, impact: LOW

### Nice-to-Have Refinements:

4. **Tune `.metodo-pillar__name` line-height from 1 to 1.05**
   - Slightly more breathing room at 18px

5. **Tune `.exp-comparison__name` line-height from 1.1 to 1.15**
   - More breathing room at 1rem

### Avoid:
- Do NOT apply Dharma below 15px
- Do NOT use negative letter-spacing on Dharma
- Do NOT use weights 500 or 600
- Do NOT apply Dharma to body text, paragraphs, FAQ, buttons
- Do NOT use ExBoldItalic broadly

---

## 10. Final Verdict

### Decision: **KEEP DHARMA WITH CURRENT RESTRICTIONS**

The Dharma implementation after commit `58d24eb` is professional, disciplined, and improves the TEMPLO brand. The typography hierarchy is clear:

- **Level 1:** Hero titles — Dharma 900 (monumental)
- **Level 2:** Section titles — Dharma 800 (premium)
- **Level 3:** Card/plan names — Dharma 800 (display)
- **Level 4:** Labels/badges — Montserrat 700 uppercase (small UI)
- **Level 5:** Body text — Montserrat 400–600 (readability)
- **Level 6:** Small UI/footer — Montserrat 400–500 (clarity)

### What Prevents 9/10:
- Placeholder images (not typography's fault)
- No real photography
- No social proof
- Experiencias page is static vs homepage

### Typography Score: 8.7/10
The 0.2 improvement from 8.5 comes from the disciplined Dharma system. The remaining 1.3 points are blocked by content/visual issues, not typography.

---

Audit completed: 2026-05-14
Screenshots: `reports/typography-audit/screenshots/`
Commit audited: `58d24eb`
