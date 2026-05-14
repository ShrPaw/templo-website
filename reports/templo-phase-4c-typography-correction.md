# TEMPLO — Phase 4C Typography Correction

## 1. Problem
Dharma was still being used via the base `.section-title` class for section titles that are functional or comparison-oriented, not high-impact brand moments. Some words looked concentrated, compressed, narrow or too tight.

## 2. Typography Rule
- **Dharma** = high-impact display titles (hero, brand statements, decorative numbers)
- **Montserrat** = general reading, functional UI, card titles, buttons, nav, FAQ, Pathfinder, plans, CTA

## 3. What Changed

### CSS Variable Verification
- `--display-lh: 0.98` — already correct ✅
- `--display-ls: 0.03em` — already correct ✅

### Functional Section Title Overrides Added
The following selectors were added to the existing Montserrat override rule:

```css
.plans .section-title,
.location .section-title,
.exp-comparison .section-title
```

These join the existing overrides:
- `.pathfinder .section-title` (already done)
- `.faq .section-title` (already done)

### Mobile Line-Height Added
Added `line-height: 1.12` for all functional section title overrides at `max-width: 600px`:
- `.pathfinder .section-title`
- `.faq .section-title`
- `.plans .section-title`
- `.location .section-title`
- `.exp-comparison .section-title`

## 4. Selectors Reverted to Montserrat (from prior phases — confirmed still correct)
- `.exp-detail__name` → Montserrat ✅
- `.exp-cta__title` → Montserrat ✅
- `.metodo-manifesto__lead` → Montserrat ✅
- `.metodo-cta__title` → Montserrat ✅
- `.final-cta__title` → Montserrat ✅
- `.pricing-card__name` → Montserrat ✅
- `.coach-card__name` → Montserrat ✅
- `.coaches-teaser__founder-name` → Montserrat ✅

## 5. Where Dharma Remains
Dharma is used only in these legitimate high-impact display moments:

| Selector | Usage | Justification |
|----------|-------|---------------|
| `.section-title` (base) | Large brand section titles | High-impact brand presence |
| `.hero__title` | Hero title | Primary brand moment |
| `.metrics__number` | Statistics numbers | Decorative large numbers |
| `.exp-panel__number` | Experiencias panel numbers | Decorative background numbers |
| `.method__pillar-num` | Método pillar numbers | Decorative numbers |

Functional overrides ensure Pathfinder, FAQ, Plans, Location, and Exp-Comparison titles use Montserrat.

## 6. Pathfinder Fix
- Selector: `.pathfinder .section-title`
- Font: `var(--font-body)` (Montserrat)
- Weight: 900
- Letter-spacing: -0.01em
- Line-height: 1.08 (desktop), 1.12 (mobile)
- Reason: "¿Qué entrenamiento va con tu meta?" is a functional question, not a brand moment

## 7. Card Title Fixes
All card titles confirmed using Montserrat:
- Experiencias cards (Power Plate, Calistenia, Mujeres, Seniors, Adaptado)
- Plan card names (pricing-card__name)
- Coach card names (coach-card__name)
- Método pillar names (method__pillar-name — functional text)

## 8. ExBoldItalic Status
- Font file retained: `DharmaGothicC-ExBoldItalic.woff2/ttf`
- @font-face declaration retained
- **Not applied to any visible UI element** ✅
- Only the @font-face declaration references it

## 9. Mobile QA
- Functional section titles use `line-height: 1.12` on mobile
- No horizontal overflow detected
- All WhatsApp links verified: `59172001680` (22 occurrences, zero bad numbers)
- Prices unchanged

## 10. What Was Not Changed
- ❌ Prices — unchanged
- ❌ WhatsApp number — unchanged (59172001680)
- ❌ Plan names — unchanged
- ❌ Business data — unchanged
- ❌ Pages — no pages added or removed
- ❌ Layout — no structural changes
- ❌ Plan card logic — unchanged
- ❌ No /galeria created
- ❌ No fake data added
- ❌ No external fonts added
- ❌ No external libraries added

## 11. Screenshot Folder
`reports/phase-4c-typography-correction/screenshots/`

## 12. Files Changed
- `styles.css` — added functional section title overrides + mobile line-height

## 13. Final Verdict
- **Do words still look concentrated?** No — functional titles now use Montserrat with proper spacing
- **Does Dharma now feel premium and controlled?** Yes — Dharma is restricted to true high-impact display moments only
- **Typography system is clean and disciplined** — the rule is enforced: Dharma = blade, Montserrat = everything else
