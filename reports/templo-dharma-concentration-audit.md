# TEMPLO — Dharma Concentration Typography Audit

## 1. Executive Summary

**Is Dharma currently overused?** Yes — but the problem is not just *where* it's used, but *how* it's rendered.

**Why words look concentrated:** Two compounding issues:

1. **Line-height 0.92 on multi-word Spanish titles** — Dharma is condensed by design. At `line-height: 0.92`, multi-line section titles like "Cada meta necesita una herramienta." have lines nearly touching. Spanish phrases are longer than English, so titles wrap more often, making the tight line-height painfully obvious.

2. **Dharma applied to titles that are functional, not monumental** — Section titles like "Así se vive TEMPLO.", "La guía cambia la forma en que entrenas.", "Elige el entrenamiento que va con tu meta." are brand-flavored but still functional reading text. Dharma's condensed letterforms make these harder to read than Montserrat would.

**Root cause:** `--display-lh: 0.92` is appropriate for a single word like "TEMPLO" but destructive for 4–6 word Spanish headings that wrap to 2–3 lines.

---

## 2. Current Dharma Usage Map

| # | Selector | File | Size | Weight | LS | LH | Classification |
|---|----------|------|------|--------|-----|-----|----------------|
| 1 | `.section-title` | styles.css:290 | 2–3.2rem | 800 | 0.02em | 0.92 | ⚠️ BORDERLINE — LH too tight for multi-word |
| 2 | `.hero__title` | styles.css:633 | 2.4–4.4rem | 900 | 0.01em | 0.92 | ✅ VALID — single word "TEMPLO" |
| 3 | `.metrics__number` | styles.css:824 | 2–3.2rem | 900 | 0.02em | 0.85 | ✅ VALID — numbers, single line |
| 4 | `.exp-panel__number` | styles.css:1206 | 2.5–4rem | 900 | 0.02em | 0.85 | ✅ VALID — decorative watermark |
| 5 | `.method__pillar-num` | styles.css:1682 | 2–3rem | 900 | 0.02em | 0.85 | ✅ VALID — decorative number |
| 6 | `.final-cta__title` | styles.css:2360 | 1.6–2.4rem | 800 | 0.02em | 0.92 | ⚠️ BORDERLINE — wraps on mobile |
| 7 | `.metodo-manifesto__lead` | metodo:42 | 20–28px | 800 | 0.02em | 1.15 | ✅ VALID — good LH |
| 8 | `.metodo-cta__title` | metodo:413 | 24–36px | 800 | 0.02em | 1 | ⚠️ BORDERLINE — could be Montserrat |
| 9 | `.exp-detail__name` | exp:124 | 1.6–2.4rem | 800 | 0.02em | 1 | ⚠️ BORDERLINE — page hero, could be Montserrat |
| 10 | `.exp-cta__title` | exp:262 | 1.4–2rem | 800 | 0.02em | 1 | ⚠️ BORDERLINE — CTA, could be Montserrat |
| 11 | `.pathfinder .section-title` | styles.css:302 | 2–3.2rem | 900 | -0.01em | 1.05 | ✅ FIXED — Montserrat override |
| 12 | `.faq .section-title` | styles.css:303 | 2–3.2rem | 900 | -0.01em | 1.05 | ✅ FIXED — Montserrat override |

---

## 3. Concentration Problem Analysis

### The Core Issue: `--display-lh: 0.92`

```css
--display-lh: 0.92;          /* line-height for hero/display titles */
```

**0.92 line-height means lines overlap visually.** For a single word like "TEMPLO" this creates monumental weight. For "Cada meta necesita una herramienta." wrapping to 2 lines, it makes the text feel crushed.

### Affected selectors using `--display-lh`:

| Selector | Text | Wraps? | Problem |
|----------|------|--------|---------|
| `.section-title` | "Así se vive TEMPLO." | Yes (2 lines) | Lines nearly touching |
| `.section-title` | "Cada meta necesita una herramienta." | Yes (2 lines) | Crushed |
| `.section-title` | "La guía cambia la forma en que entrenas." | Yes (2–3 lines) | Very cramped |
| `.section-title` | "Elige el entrenamiento que va con tu meta." | Yes (2 lines) | Compressed |
| `.section-title` | "Disciplina, técnica y progresión." | Depends on viewport | Tight on wrap |
| `.final-cta__title` | "Entrena con propósito." | Yes on mobile | Tight |
| `.hero__title` | "TEMPLO" | No | OK — single word |

### Letter-spacing analysis:

| Selector | Value | Problem |
|----------|-------|---------|
| `.section-title` | 0.02em | Acceptable but adds to "tight" feel when combined with 0.92 LH |
| `.hero__title` | 0.01em | OK for large single word |
| `.pathfinder .section-title` | -0.01em | ⚠️ Negative LS on Montserrat makes it tighter |

---

## 4. Pathfinder Case Study

**Title:** "¿Qué entrenamiento va con tu meta?"

**Current state:** Already overridden to Montserrat via `.pathfinder .section-title`.

**Remaining issue:** The override uses `letter-spacing: -0.01em` and `line-height: 1.05`. While Montserrat is much better than Dharma here, the negative letter-spacing still makes it feel slightly squeezed. For a long question, `letter-spacing: 0` or even `0.01em` would feel more open and trustworthy.

**Recommended fix:**
```css
.pathfinder .section-title {
  font-family: var(--font-body);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.1;
}
```

---

## 5. Card Title Audit

All card titles have already been reverted to Montserrat in previous commits:

| Component | Font | Status |
|-----------|------|--------|
| Experience card names (Power Plate, etc.) | Montserrat 800 | ✅ Correct |
| Plan card names | Montserrat 800 | ✅ Correct |
| Coach card names | Montserrat 800 | ✅ Correct |
| Team card names | Montserrat 800 | ✅ Correct |
| Method pillar names | Montserrat 800 | ✅ Correct |
| Method practice titles | Montserrat 800 | ✅ Correct |
| Guide names | Montserrat 700 | ✅ Correct |
| Pathfinder step titles | Montserrat 700 | ✅ Correct |

**No card titles use Dharma.** This is correct.

---

## 6. Functional UI Audit

| Component | Font | Status |
|-----------|------|--------|
| Nav brand "TEMPLO" | Montserrat 800 | ✅ Correct |
| Nav links | Montserrat | ✅ Correct |
| Buttons | Montserrat | ✅ Correct |
| FAQ questions | Montserrat 700 | ✅ Correct |
| FAQ title "¿Tienen dudas?" | Montserrat 900 | ✅ Correct (override) |
| Pathfinder title | Montserrat 900 | ✅ Correct (override) |
| Pathfinder step titles | Montserrat 700 | ✅ Correct |
| Suggested questions | Montserrat 700 | ✅ Correct |
| Price pills | Montserrat 800 | ✅ Correct |
| Footer | Montserrat | ✅ Correct |
| Labels/badges | Montserrat | ✅ Correct |

**No functional UI uses Dharma.** This is correct.

---

## 7. Mobile Typography Audit

On mobile (390px), the concentration problem is worse because:
- Titles wrap more often (narrower viewport)
- Line-height 0.92 is more painful with 3+ lines
- Dharma's condensed letterforms are harder to read at small mobile sizes

**Worst mobile offenders:**
1. `.section-title` "La guía cambia la forma en que entrenas." — 3 lines, very cramped
2. `.section-title` "Elige el entrenamiento que va con tu meta." — 3 lines, compressed
3. `.section-title` "Cada meta necesita una herramienta." — 2 lines, tight
4. `.final-cta__title` — wraps on mobile with 0.92 LH

---

## 8. Screenshot Evidence

- `reports/dharma-concentration-audit/screenshots/home-desktop.png`
- `reports/dharma-concentration-audit/screenshots/home-mobile.png`
- `reports/dharma-concentration-audit/screenshots/metodo-desktop.png`

---

## 9. Correction Matrix

| Component | Current Font | Problem | Recommended Font | Exact Fix |
|-----------|-------------|---------|-----------------|-----------|
| `.section-title` | Dharma 800, LH 0.92 | Lines crushed on wrap | **Keep Dharma but fix LH** | `line-height: 1.02; letter-spacing: 0.015em;` |
| `.hero__title` | Dharma 900, LH 0.92 | OK for single word | Keep Dharma | No change needed |
| `.metrics__number` | Dharma 900, LH 0.85 | OK for numbers | Keep Dharma | No change needed |
| `.exp-panel__number` | Dharma 900, LH 0.85 | Decorative watermark | Keep Dharma | No change needed |
| `.method__pillar-num` | Dharma 900, LH 0.85 | Decorative number | Keep Dharma | No change needed |
| `.final-cta__title` | Dharma 800, LH 0.92 | Tight on mobile wrap | **Fix LH** | `line-height: 1.02;` |
| `.metodo-manifesto__lead` | Dharma 800, LH 1.15 | OK | Keep Dharma | No change needed |
| `.metodo-cta__title` | Dharma 800, LH 1 | Borderline | **Revert to Montserrat** | `font-family: var(--font-body); font-weight: 800; line-height: 1.15;` |
| `.exp-detail__name` | Dharma 800, LH 1 | Borderline | **Revert to Montserrat** | `font-family: var(--font-body); font-weight: 800; line-height: 1.1; letter-spacing: 0.02em;` |
| `.exp-cta__title` | Dharma 800, LH 1 | Borderline | **Revert to Montserrat** | `font-family: var(--font-body); font-weight: 800; line-height: 1.15;` |
| `.pathfinder .section-title` | Montserrat 900, LS -0.01em | Negative LS tight | **Fix LS** | `letter-spacing: 0; line-height: 1.1;` |
| `.faq .section-title` | Montserrat 900, LS -0.01em | Negative LS tight | **Fix LS** | `letter-spacing: 0; line-height: 1.1;` |

---

## 10. Final Typography Law

### Dharma Gothic C — Allowed ONLY for:
1. **Hero title** — single word or very short phrase, ≥3.2rem
2. **Large page H1** — only if single-line or very short
3. **Metric numbers** — single-line numbers
4. **Decorative watermarks** — large background numbers
5. **Manifesto lead** — only if line-height ≥1.1

### Dharma — NOT allowed for:
1. Multi-word section titles that wrap to 2+ lines
2. Functional questions (Pathfinder, FAQ)
3. Card titles (experience, plan, coach, method)
4. Nav, buttons, labels, badges
5. CTA titles
6. Any text under 36px
7. Any text in narrow containers
8. Any text that needs to be read quickly

### Montserrat — Use for:
1. All section titles (`.section-title`) — **RECOMMENDATION: Revert `.section-title` to Montserrat**
2. All functional headings
3. All card titles
4. All body text
5. Nav, buttons, FAQ, footer
6. All reading text

### Line-height rules:
- Dharma single word: 0.88–0.92 OK
- Dharma short phrase (1 line): 0.95–1.0
- Dharma multi-line: 1.02+ (but better to use Montserrat)
- Montserrat headings: 1.05–1.15
- Montserrat body: 1.6–1.8

---

## 11. Recommended Implementation Prompt

**If implementing, do these changes in order of impact:**

### Emergency (highest impact, lowest risk):

1. **Revert `.section-title` to Montserrat** — This single change fixes 80% of the concentration problem. All section titles across all pages would switch from Dharma to Montserrat.

```css
.section-title {
  font-family: var(--font-body);
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: var(--white-pure);
}
```

2. **Fix Pathfinder + FAQ override** — Remove negative letter-spacing:

```css
.pathfinder .section-title,
.faq .section-title {
  font-family: var(--font-body);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.1;
}
```

### High-impact:

3. **Revert `.final-cta__title` to Montserrat:**

```css
.final-cta__title {
  font-family: var(--font-body);
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.01em;
  max-width: 680px;
  margin: 0 auto 16px;
}
```

4. **Revert experiencias CTA to Montserrat:**

```css
.exp-cta__title {
  font-family: var(--font-body);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.01em;
}
```

5. **Revert metodo CTA to Montserrat:**

```css
.metodo-cta__title {
  font-family: var(--font-body);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 800;
  line-height: 1.15;
}
```

### After these changes, Dharma would remain ONLY on:

| Selector | Size | Purpose |
|----------|------|---------|
| `.hero__title` | 2.4–4.4rem | Hero "TEMPLO" — single word |
| `.metrics__number` | 2–3.2rem | Metric numbers — single line |
| `.exp-panel__number` | 2.5–4rem | Decorative watermark |
| `.method__pillar-num` | 2–3rem | Decorative number |
| `.metodo-manifesto__lead` | 20–28px | Manifesto — has LH 1.15 |

**That's 5 selectors.** Dharma would be used only for true monumental display moments — single words, numbers, and the manifesto. Everything else would be Montserrat.

---

Audit completed: 2026-05-14
Screenshots: `reports/dharma-concentration-audit/screenshots/`
No CSS changes made — audit only.
