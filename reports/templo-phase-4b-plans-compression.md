# TEMPLO — Phase 4B Plans Compression

## 1. Problem

Plans was the heaviest homepage section. Each of the 6 plan cards showed:
- Eyebrow, name, badge
- Full description paragraph
- Guide level block (separate box)
- Notes tags (2–3 tags)
- Schedule block (Seniors)
- "Opciones" label
- Full pricing option rows (1–5 per card)
- CTA button

Power Plate alone had 5 pricing options visible at once. On mobile, the section was extremely long and required significant scrolling before a visitor could decide or act.

## 2. Strategy

**Compact cards with progressive disclosure.** Each card now shows only what's needed for a 5–8 second decision:
- Plan name
- Short positioning / ideal-for line
- Price (or price range)
- Expand button to reveal options
- WhatsApp CTA

Detailed pricing options are hidden by default and revealed with a single tap/click. This reduces visual weight by ~60% while preserving all data.

## 3. What Changed

### HTML (index.html)
- Removed: eyebrow, description paragraph, guide block, notes tags, schedule block, options-label, visible pricing options
- Added: `pricing-card__compact` (name + ideal-for + price + expand), `pricing-card__details` (hidden options), `plans__decide` (decision helper)
- Each card now has 2 layers: compact (always visible) and details (hidden, expandable)
- Decision helper replaces loose "¿No sabes?" note with dual CTA (orientador + WhatsApp)

### CSS (styles.css)
- Grid: `repeat(3, 1fr)` desktop → 2-col tablet → 1-col mobile
- Card padding moved to `pricing-card__compact` (no outer padding)
- New classes: `pricing-card__compact`, `pricing-card__top`, `pricing-card__ideal`, `pricing-card__price-block`, `pricing-card__price`, `pricing-card__price-note`, `pricing-card__expand`, `pricing-card__expand-icon`, `pricing-card__expand-label`, `pricing-card__details`, `pricing-card__detail-block`, `pricing-card__detail-label`, `plans__decide`, `plans__decide-text`, `plans__decide-actions`, `btn--sm`
- Removed: `pricing-card__eyebrow`, `pricing-card__desc`, `pricing-card__guide`, `pricing-card__guide-label`, `pricing-card__guide-text`, `pricing-card__notes`, `pricing-card__schedule`, `pricing-card__schedule-label`, `pricing-options-label`, `plans__note`
- Details animation: `detailsReveal` keyframe (fade + slide up)

### JS (script.js)
- Added `initPlansExpand()` — delegated click handler on `.pricing-card__expand` buttons
- Toggles `[hidden]` attribute on `.pricing-card__details`
- Updates button label (Ver ↔ Ocultar) and `aria-expanded`

## 4. Price Integrity

All 14 original plan option prices preserved:

| Plan | Options | Prices |
|------|---------|--------|
| Power Plate | 5 | Bs. 360, 400, 450, 500, 550 |
| Calistenia | 2 | Bs. 230, 270 |
| Híbrido | 2 | Bs. 350, 400 |
| Open Gym | 2 | Bs. 230, 270 |
| Seniors | 1 | Bs. 420 |
| Mujeres | 2 | Bs. 350, 400 |

Price ranges shown on compact cards:
- Power Plate: Bs. 360 – 550
- Calistenia: Bs. 230 – 270
- Híbrido: Bs. 350 – 400
- Open Gym: Bs. 230 – 270
- Seniors: Bs. 420
- Mujeres: Bs. 350 – 400

**No prices were changed, hidden, or invented.**

## 5. Final Plans Structure

```
┌─────────────────────────────────────────────────┐
│ Section header: "Elige el entrenamiento..."      │
├───────────────┬───────────────┬─────────────────┤
│ Power Plate   │ Calistenia    │ Híbrido         │
│ ◆ Premium     │               │                 │
│ Max 3 people  │ Strength +    │ Calisthenics +  │
│ 30 min sessions│ bodyweight   │ weights + func  │
│               │               │                 │
│ Bs. 360–550   │ Bs. 230–270   │ Bs. 350–400     │
│ 5 opciones ▼  │ Ver opciones ▼│ Ver opciones ▼  │
│               │               │                 │
│ [Consultar]   │ [Consultar]   │ [Consultar]     │
├───────────────┼───────────────┼─────────────────┤
│ Open Gym      │ Seniors       │ Mujeres         │
│ ◆ Nuevo       │               │                 │
│ Free weights  │ Mobility +    │ Machines + HIIT │
│ + bar park    │ balance       │ + calisthenics  │
│               │               │                 │
│ Bs. 230–270   │ Bs. 420       │ Bs. 350–400     │
│ Ver opciones ▼│ Ver detalles ▼│ Ver opciones ▼  │
│               │               │                 │
│ [Consultar]   │ [Consultar]   │ [Consultar]     │
├───────────────┴───────────────┴─────────────────┤
│ ¿No sabes cuál elegir?                          │
│ [Usar orientador]  [Consultar por WhatsApp]     │
└─────────────────────────────────────────────────┘
```

## 6. CTA Flow

Each plan card has a WhatsApp CTA at the bottom with a contextual message:

| Plan | WhatsApp Message |
|------|-----------------|
| Power Plate | "Hola, me interesa el Plan Power Plate de TEMPLO. ¿Me pueden dar información?" |
| Calistenia | "Hola, me interesa el Plan Calistenia de TEMPLO. ¿Me pueden dar información?" |
| Híbrido | "Hola, me interesa el Plan Híbrido de TEMPLO. ¿Me pueden dar información?" |
| Open Gym | "Hola, me interesa Open Gym en TEMPLO. ¿Me pueden dar información?" |
| Seniors | "Hola, me interesa el Plan Seniors de TEMPLO. ¿Me pueden dar información?" |
| Mujeres | "Hola, me interesa el Plan Mujeres de TEMPLO. ¿Me pueden dar información?" |

Decision helper adds two paths:
- **Usar orientador** → scrolls to Pathfinder (#pathfinder)
- **Consultar por WhatsApp** → opens WhatsApp with general orientation message

All WhatsApp links use `59172001680`. No `5917201680` or `72209791`.

## 7. Mobile QA

| Check | Status |
|-------|--------|
| Grid collapses to 1 column at 600px | ✅ |
| Grid is 2 columns at 601–960px | ✅ |
| Grid is 3 columns at 961px+ | ✅ |
| Price visible without expanding | ✅ |
| CTA easy to tap (full width) | ✅ |
| No horizontal overflow | ✅ |
| Decision helper stacks buttons on mobile | ✅ |
| Card padding adjusts on mobile | ✅ |
| Typography readable at all sizes | ✅ |

## 8. What Was Not Changed

| Item | Status |
|------|--------|
| Prices | ✅ All 14 option prices unchanged |
| Plan names | ✅ All 6 names preserved exactly |
| WhatsApp number | ✅ 59172001680 throughout |
| Plan anchors | ✅ All `#plan-*` IDs preserved |
| Section position | ✅ After Pathfinder CTA, before Method |
| Secondary pages | ✅ /experiencias/, /coaches/, /metodo/ untouched |
| Hero | ✅ Unchanged |
| Business data | ✅ No invented testimonials, metrics, discounts, urgency |
| No external libs | ✅ Pure CSS + vanilla JS |
| No new pages | ✅ No /galeria or other new routes |

## 9. Remaining TODOs

- Replace placeholder images with real TEMPLO photography
- Confirm per-session prices should be visible (currently only in expanded options)
- Consider adding per-session price back as a small note in compact view
- Final visual review on real devices
- Confirm Dharma font file availability
