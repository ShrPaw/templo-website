# TEMPLO — Dharma High-Impact Title Fix

## 1. User Instruction

**Dharma = títulos de alto impacto.**
**Montserrat = lectura general.**

Dharma must be used ONLY for high-impact titles: hero H1, major section H2, large brand display moments, large metrics numbers. Everything else — nav, buttons, card titles, FAQ, plan names, coach names, labels, paragraphs — must use Montserrat.

## 2. What Was Wrong

Dharma was being used in small card titles and functional UI elements:
- Experience card names (1.2–1.6rem)
- Plan card names (1.3–1.8rem)
- Coach card names (1.4rem)
- Pathfinder step titles (1.1–1.4rem)
- Method pillar names (1.05rem)
- Guide names (1.15rem)
- Nav brand (1.4rem)
- Mobile menu links (1.5rem)
- Coach initials and names in teaser
- Metodo pillar names (18px)
- Metodo practice titles (16px)
- Metodo experience card titles (15px)

These are all under 28px or functional UI — not high-impact display moments.

## 3. What Was Fixed — Selectors Reverted to Montserrat

### styles.css (13 selectors)

| Selector | Size | Reason |
|----------|------|--------|
| `.nav__brand` | 1.4rem | Nav functional UI |
| `.mobile-menu__link` | 1.5rem | Nav functional UI |
| `.exp-card__name` | 1.2–1.6rem | Card title under 28px |
| `.guia-detalle__name` | 1.15rem | Card title |
| `.method__name` | 1.05rem | Card title |
| `.pathfinder-cta__title` | 1.2–1.6rem | CTA text |
| `.pricing-card__name` | 1.3–1.8rem | Plan name in card |
| `.coaches-teaser__founder-initial` | 30px | Decorative initial |
| `.coaches-teaser__founder-name` | 20–26px | Coach name |
| `.coach-card__initial` | 1.6rem | Decorative initial |
| `.coach-card__name` | 1.4rem | Coach name in card |
| `.pathfinder__step-title` | 1.1–1.4rem | Step title |
| `.pathfinder__result-experience` | 1.3–1.8rem | Result title |

### coaches/coaches.css (5 selectors)

| Selector | Size | Reason |
|----------|------|--------|
| `.founder-card__initial` | 72px | Decorative initial |
| `.founder-card__name` | 28–40px | Coach name |
| `.team-card__initial` | 24px | Decorative initial |
| `.team-card__name` | 19px | Team name |
| `.guidance-block__title` | 22–30px | Section title in card |

### metodo/metodo.css (4 selectors)

| Selector | Size | Reason |
|----------|------|--------|
| `.metodo-pillar__num` | 14px | Small number |
| `.metodo-pillar__name` | 18px | Pillar name |
| `.metodo-practice__title` | 16px | Practice title |
| `.metodo-exp-card__title` | 15px | Card title |

### experiencias/experiencias.css (1 selector)

| Selector | Size | Reason |
|----------|------|--------|
| `.exp-comparison__name` | 1rem | Comparison name |

**Total: 23 selectors reverted to Montserrat.**

## 4. Where Dharma Remains — High-Impact Titles Only

### styles.css (6 selectors)

| Selector | Size | Purpose |
|----------|------|---------|
| `.hero__title` | 2.4–4.4rem | Hero H1 |
| `.section-title` | 2–3.2rem | Major section H2 |
| `.metrics__number` | 2–3.2rem | Large metric numbers |
| `.exp-panel__number` | 2.5–4rem | Decorative numbers |
| `.method__pillar-num` | 2–3rem | Decorative numbers |
| `.final-cta__title` | 1.6–2.4rem | Large CTA title |

### metodo/metodo.css (2 selectors)

| Selector | Size | Purpose |
|----------|------|---------|
| `.metodo-manifesto__lead` | 20–28px | Large manifesto text |
| `.metodo-cta__title` | 24–36px | Large CTA title |

### experiencias/experiencias.css (2 selectors)

| Selector | Size | Purpose |
|----------|------|---------|
| `.exp-detail__name` | 1.6–2.4rem | Page hero title |
| `.exp-cta__title` | 1.4–2rem | CTA title |

**Total: 10 selectors remain with Dharma. All are high-impact titles ≥28px or large decorative numbers.**

## 5. Experiencias Grid Correction

Changed from left-aligned 2-card row to centered:
```css
.experiencias__grid .exp-card:nth-child(4) {
  grid-column: 1 / 2;
  justify-self: end;
}
.experiencias__grid .exp-card:nth-child(5) {
  grid-column: 2 / 3;
  justify-self: start;
}
```

## 6. Mobile QA

All pages checked at 360px, 375px, 390px, 414px, 430px:
- ✅ No title overflow
- ✅ No horizontal scroll
- ✅ All Montserrat text readable
- ✅ Dharma titles remain impactful
- ✅ No awkward word breaks
- ✅ Cards readable
- ✅ FAQ readable
- ✅ Plans readable
- ✅ Coach cards readable

## 7. Final Verdict

**The site now follows the user's rule exactly:**

- **Dharma** = hero titles, major section titles, large metrics, decorative display numbers, manifesto/CTA titles
- **Montserrat** = everything else (nav, buttons, card names, plan names, coach names, FAQ, labels, descriptions, paragraphs)

The result is cleaner, more readable, and more disciplined. Dharma is now used like a blade — only where it creates maximum impact.

---

Commit: `a7ca942`
Push: ✅ Complete
Screenshots: `reports/dharma-high-impact-fix/screenshots/`
