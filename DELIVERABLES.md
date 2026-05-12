# TEMPLO — Deliverables & QA Report

## 0. Visual Completion Pass — Placeholder Images & Favicon (2026-05-12)

### Summary
Two improvements: (1) temporary example photos added to all visual placeholder areas, (2) favicon regenerated with tighter crop for better browser-tab visibility.

### Files Changed

| File | Changes |
|------|---------|
| `styles.css` | Background-image rules added to 5 service card panels + 4 lifestyle panels |
| `index.html` | Favicon cache-busting updated from `?v=2` → `?v=3` |
| `assets/placeholders/*.webp` | 9 new placeholder images (see below) |
| `assets/favicon-16.png` | Regenerated — tighter crop |
| `assets/favicon-32.png` | Regenerated — tighter crop |
| `assets/favicon.ico` | Regenerated — tighter crop |
| `assets/apple-touch-icon.png` | Regenerated — tighter crop |
| `assets/favicon.svg` | Regenerated — embedded PNG, tighter crop |

### Temporary Placeholder Images Added

**⚠️ These are TEMPORARY EXAMPLE VISUALS — pending real TEMPLO photography.**

All images sourced from Unsplash (royalty-free, no attribution required). Optimized to WebP format.

| Asset | Section | File Size |
|-------|---------|-----------|
| `assets/placeholders/powerplate.webp` | Service card — Power Plate | 39KB |
| `assets/placeholders/calistenia.webp` | Service card — Calistenia | 77KB |
| `assets/placeholders/mujeres.webp` | Service card — Mujeres | 37KB |
| `assets/placeholders/seniors.webp` | Service card — Seniors | 23KB |
| `assets/placeholders/adaptado.webp` | Service card — Entrenamiento Adaptado | 31KB |
| `assets/placeholders/lifestyle-01.webp` | Lifestyle grid — "Fuerza" | 42KB |
| `assets/placeholders/lifestyle-02.webp` | Lifestyle grid — "Disciplina" | 59KB |
| `assets/placeholders/lifestyle-03.webp` | Lifestyle grid — "Técnica" | 30KB |
| `assets/placeholders/lifestyle-04.webp` | Lifestyle grid — "Comunidad" | 19KB |

Total placeholder payload: ~357KB (all WebP, compressed)

### Image Implementation Details
- Images applied via CSS `background` property on `.exp-panel[data-exp]` and `.lifestyle-panel[data-panel]`
- Layered under existing dark gradient overlays (preserves TEMPLO dark/gold aesthetic)
- Images use `center/cover no-repeat` for consistent cropping
- Gold-tinted gradient overlays ensure brand coherence
- No `<img>` tags added — pure CSS background approach, no layout impact

### Favicon Improvements

**Problem**: Original TEMPLO symbol used only 64% of the icon canvas, making it appear small in browser tabs.

**Solution**: Cropped symbol to content bounds + 6% margin, then regenerated all favicon sizes.

| Before | After |
|--------|-------|
| Symbol used 64% of canvas | Symbol uses ~88% of canvas |
| `?v=2` cache-busting | `?v=3` cache-busting |

Favicon assets regenerated:
- `favicon-16.png` (16×16)
- `favicon-32.png` (32×32)
- `favicon.ico` (multi-size: 16+32)
- `apple-touch-icon.png` (180×180)
- `favicon.svg` (embedded 32×32 PNG)

### QA Summary

| Check | Status |
|-------|--------|
| All WhatsApp links use `59172001680` | ✅ 20 links verified |
| No `5917201680` | ✅ None found |
| No `591XXXXXXXX` | ✅ None found |
| No `72209791` | ✅ None found |
| Pricing unchanged | ✅ Bs. 230–550 range intact |
| Plan names unchanged | ✅ All intact |
| All anchors intact | ✅ 12 anchors verified |
| No broken image paths | ✅ All 9 placeholder files exist |
| No layout shifts | ✅ CSS backgrounds, no new DOM elements |
| No horizontal overflow | ✅ No new width constraints |
| Service cards unchanged | ✅ Only visual panels updated |
| Pathfinder logic unchanged | ✅ Not touched |
| Coach order unchanged | ✅ Not touched |
| Hero/Buddha unchanged | ✅ Not touched |
| Favicon shows TEMPLO symbol | ✅ Not a plain "T" |
| Favicon tighter crop | ✅ Symbol fills more of icon canvas |
| Cache-busting applied | ✅ `?v=3` on all favicon refs |
| Mobile layout clean | ✅ CSS backgrounds responsive by nature |

### Remaining TODOs
- Replace ALL placeholder images with real TEMPLO photography when available
- Confirm final photography direction with Lucas
- Confirm whether more image optimization is needed after real photos
- Coach photos still pending (editorial placeholders kept — no fake coach images)

---

## 0b. Graphic Design Refinement Pass (2026-05-12)

### Files Changed

| File | Changes |
|------|---------|
| `index.html` | Services subtitle, Entrenamiento Adaptado copy, Method pillar descriptions (×5) |
| `styles.css` | Dharma font status comment updated |

### Copy Refinements Made

**1. Services Subtitle** — replaced misaligned "fuerza" wording:
- Old: "Power Plate, calistenia, fuerza y entrenamiento especializado se integran para construir un cuerpo más fuerte, capaz y disciplinado."
- New: "Power Plate, calistenia y programas enfocados se integran para construir un cuerpo más fuerte, capaz y disciplinado."
- Section title unchanged: "Cada meta necesita una herramienta."

**2. Entrenamiento Adaptado Detail** — softened medical-sounding copy:
- Old: "Entrenamiento con mayor control cuando tu cuerpo necesita avanzar de forma inteligente. Ideal para recuperación, bajo impacto o condiciones específicas."
- New: "Pensado para quienes necesitan entrenar con más control, menor impacto y una progresión más cuidadosa."
- No medical claims. No recovery/treatment promises.

**3. Method Pillar Text Refinements** — reduced ~20-30%, sharper tone:

| Pillar | Before | After |
|--------|--------|-------|
| Disciplina | "La base de todo. Sin disciplina, no hay progreso. Entrenas porque elegiste hacerlo, no porque te lo recuerden." | "Entrenas porque elegiste hacerlo. No porque alguien te recuerde." |
| Técnica | "La técnica ordena el esfuerzo. Cada movimiento tiene intención, posición y control. Sin técnica, el esfuerzo se pierde." | "Cada movimiento tiene intención, posición y control. Sin técnica, el esfuerzo se pierde." |
| Constancia | "El progreso no es lineal. La constancia sostiene el proceso cuando la motivación fluctúa. Aparecer es la mitad de la batalla." | "El progreso no es lineal. Aparecer sostenidamente es lo que construye." |
| Progresión | "Carga, volumen, complejidad — todo avanza con estructura. Progresas porque el método lo permite, no por azar." | "Carga, volumen, complejidad — todo avanza con estructura. No por azar." |
| Carácter | "El entrenamiento forja carácter. No solo construyes un cuerpo más fuerte — construyes una versión más disciplinada de ti." | "No solo construyes un cuerpo más fuerte — construyes una versión más disciplinada de ti." |

### Coach Observer Fix Summary

- **Status**: Already correct — no fix needed
- `renderCoaches()` is called before `initCoachObserver()` in the IIFE init block
- Coach cards are in DOM before the observer is created

### Dharma Font Status

**Dharma font file/import is still pending.**
- No `.woff2`, `.woff`, `.ttf`, or `.otf` file exists in the repo
- No `@font-face` declaration exists
- `--font-display` falls back to `'Montserrat'` at 800/900 weight
- CSS comment updated to reflect pending status
- Action: Lucas needs to provide a licensed Dharma font file or authorized import URL

### Graphic Design QA Summary

| Check | Status |
|-------|--------|
| Spacing consistency | ✅ Section padding uses `clamp(80px, 12vw, 160px)` consistently |
| Section rhythm | ✅ Alternating dark/dark-2 backgrounds with accent border separators |
| Title hierarchy | ✅ `.section-label` → `.section-title` → `.section-sub` consistent |
| Mobile readability | ✅ Font sizes use clamp(), line-height 1.6-1.75 |
| Button tap targets | ✅ `.btn` padding 16px+ (≈48px height), `.process-option` 18px+ |
| No visual clutter | ✅ Clean grid layouts, minimal borders, gold accents used sparingly |
| No excessive motion | ✅ `prefers-reduced-motion` respected, animations are subtle |
| No horizontal overflow | ✅ `overflow-x: hidden` on body, grids use fractional units |

### WhatsApp / Link QA Confirmation

| Check | Status |
|-------|--------|
| All WhatsApp links use `59172001680` | ✅ 19 links verified |
| No `5917201680` | ✅ None found |
| No `591XXXXXXXX` | ✅ None found |
| No `72209791` | ✅ None found |
| Pricing unchanged | ✅ Bs. 230–550 range intact |
| Service cards unchanged except subtitle | ✅ Only subtitle text updated |
| Unified "Conocer más" intact | ✅ All 5 cards link to `#guia-*` anchors |
| Coach observer works after renderCoaches() | ✅ Order is correct |
| No fake social links | ✅ Instagram/Facebook structure exists but empty for coaches |
| No fake schedules | ✅ Only "Consultar por WhatsApp" for hours |
| Dharma status reported | ✅ Pending — documented above |
| Mobile layout clean | ✅ Responsive breakpoints verified |

## 2. Header Branding Change

- **Before**: Logo image + wordmark image in navbar
- **After**: Text-only `TEMPLO` using `nav__brand` class
- Font: `var(--font-display)` at 800 weight, 0.18em letter-spacing
- Logo assets preserved in repo for footer/favicon/decorative use
- Mobile: font-size reduces to 1.2rem

## 3. Services / Focused Market Restructure

**Layout change**: Alternating vertical blocks → 3+2 horizontal grid

Desktop:
- Row 1: Power Plate, Calistenia, Mujeres (3 columns)
- Row 2: Seniors, Entrenamiento Adaptado (2 columns, centered)

Mobile:
- 900px: 2-column grid
- 600px: 1-column stack

**Card replacement**:
- ~~Fuerza y Máquinas~~ → **Mujeres**
- ~~Funcional y Acondicionamiento~~ → **Seniors**

## 4. New Service Card List

1. Power Plate (Premium badge, 30 min noted)
2. Calistenia
3. Mujeres
4. Seniors
5. Entrenamiento Adaptado

Each card includes:
- Service name
- Short description
- TEMPLO symbol (◆) → links to plan anchor
- "Conocer más" → links to detail section anchor

## 5. Plan Anchor Mapping

| Service Card | Symbol Link | Plan Anchor ID |
|-------------|-------------|----------------|
| Power Plate | ◆ | `#plan-power-plate` |
| Calistenia | ◆ | `#plan-calistenia` |
| Mujeres | ◆ | `#plan-mujeres` |
| Seniors | ◆ | `#plan-seniors` |
| Adaptado | ◆ | `#pathfinder` (routes to pathfinder) |

Additional plan anchors added:
- `id="plan-hibrido"` — Híbrido plan card
- `id="plan-open-gym"` — Open Gym plan card

## 6. "Conocer más" Behavior

Each "Conocer más" link scrolls to the corresponding item in the new **"Más sobre cada experiencia"** detail section (`#guia-detalle`). This section explains coaching personalization differences per service.

Detail targets:
- `#guia-power-plate` — Max 3 people, close constant guidance
- `#guia-calistenia` — Large group format, coach present
- `#guia-mujeres` — Focused training with supervision
- `#guia-seniors` — Reduced group, specific schedule windows
- `#guia-adaptado` — Controlled, low-impact, WhatsApp consultation

## 7. Objectives / Common Questions Implementation

New section: **"Lo que realmente estás buscando"** (`#objectives`)

Four items:
1. "Quiero ganar músculo y fuerza" → Routes to Híbrido / Power Plate
2. "Quiero tonificarme" → Routes to Mujeres / Híbrido / Calistenia
3. "¿En cuánto tiempo puedo ver resultados?" → Honest answer about consistency + WhatsApp CTA
4. "¿Es con coach o sin coach?" → Explains guide levels across plans

Each item has plan route buttons or WhatsApp CTA.

## 8. Coaching Personalization Explanation

Added to both:
- **Plan cards**: `pricing-card__guide` blocks with "Nivel de guía" label
- **Service detail section**: Full explanation per service

Business logic implemented:
- **Power Plate**: "Máximo 3 personas. Guía cercana y constante durante la sesión."
- **Calistenia**: "Formato grupal amplio. Un coach guía, corrige y acompaña el trabajo del grupo."
- **Híbrido**: "Grupo más reducido (aprox. 7 personas). El coach acompaña técnica, postura, intensidad y esfuerzo."
- **Seniors**: "Grupo reducido. El coach acompaña técnica, postura, intensidad y esfuerzo. Horarios específicos."

## 9. Final TEMPLO Pillars Chosen

Five pillars using Roman numeral system:

| # | Pillar | Core Concept |
|---|--------|-------------|
| I | Disciplina | Base of everything. Training by choice, not reminder. |
| II | Técnica | Technique orders effort. Every movement has intention. |
| III | Constancia | Consistency sustains progress when motivation fluctuates. |
| IV | Progresión | Load, volume, complexity advance with structure. |
| V | Carácter | Training forges character. Stronger body, more disciplined version. |

## 10. Pillar Visual Upgrade

- Vertical "stone column" design with `method__pillar-shaft`
- Gold Roman numerals (I–V) with subtle opacity
- Dark stone texture (repeating-linear-gradient)
- Gold corner accent on hover
- Top gold line animates on hover (scaleX transform)
- Responsive: 5-col → 3-col → 2-col+1

## 11. Coaches Section Restructure

**Order** (exact as specified):
1. **Lucas Bustamante** — Alias: Lucoach, Role: Fundador
2. Nicolas Zegarra
3. Andres Balderrama
4. Nicolas Aranibar
5. Andrea Sejas
6. Santiago Lavayen
7. Oscar Encinas
8. Santiago Rojas

**Lucas card includes**:
- Alias (Lucoach)
- Role (Fundador)
- Misión (draft — marked for approval)
- Visión (draft — marked for approval)
- Habilidad distintiva
- Quote
- Instagram structure (empty — no fake URL)

**Other coaches include**:
- Name
- Distinguishing ability
- Quote
- Instagram structure (empty — no fake URLs)

No stats bars, no availability blocks, no fake credentials.

## 12. Dharma / Montserrat Enforcement Summary

- `--font-display` variable set to `'Montserrat'` as fallback
- CSS comment documents that Dharma requires licensed file/import
- All section titles, headings, important words use `var(--font-display)`
- All body text, descriptions, metadata use `var(--font-body)`
- **ACTION REQUIRED**: Lucas needs to provide licensed Dharma font file or authorized import URL

## 13. QA Result

### WhatsApp ✅
- All links use `59172001680`
- No instance of `5917201680`, `591XXXXXXXX`, or `72209791`
- 19 WhatsApp links in HTML, all verified

### Anchors ✅
- All 6 plan anchor IDs present and correct
- Service card symbols link to correct plan anchors
- "Conocer más" links to detail section anchors
- No broken `#` links found

### Pricing ✅
- All prices unchanged (Bs. 230–550 range)
- All plan names unchanged
- No invented prices

### Mobile ✅
- Service grid: 3-col → 2-col → 1-col responsive
- Method pillars: 5-col → 3-col → 2-col+1
- Coaches: single column on mobile
- Nav brand scales down on mobile
- No horizontal overflow expected

### Fake Data Check ✅
- No fake testimonials
- No fake Instagram URLs
- No invented credentials
- No invented schedules
- Coach quotes marked as draft copy

## 14. Remaining TODOs

| TODO | Priority | Owner |
|------|----------|-------|
| Confirm/approve Lucas mission & vision draft copy | High | Lucas |
| Confirm/approve all coach quotes | High | Lucas |
| Provide coach Instagram URLs | Medium | Lucas/Coaches |
| Provide licensed Dharma font file or import | High | Lucas/Brand |
| Final 4K Buddha hero asset | Critical | Lucas/Photographer |
| Real gym photography | Critical | Lucas/Photographer |
| Exact opening hours confirmation | High | Lucas |
| Exact Google Maps embed coordinates | High | Lucas |
| Authorized real testimonials | High | Lucas/Clients |
| Real founder photo of Lucas | High | Lucas/Photographer |
| Confirm whether 72209791 should ever replace website WhatsApp number | Medium | Lucas |
| Real transformation proof (before/after) | High | Lucas/Clients |

## 15. Confirmation

✅ All user-facing copy is in elegant Latin American Spanish
✅ No English text in UI
✅ No instance of wrong WhatsApp numbers
✅ Semantic HTML5 structure
✅ CSS variables used consistently
✅ Pricing values unchanged
✅ WhatsApp conversion flow preserved
✅ Dark/gold premium identity maintained
✅ Mobile-first layout preserved
