# TEMPLO Website — Deliverables

## 1. Page Structure (Clean)

```
┌─────────────────────────────────────────────┐
│  NAVBAR (fixed)                             │
│  TEMPLO  |  Método  Planes  Ubicación       │
│                          [Agendar Visita]    │
├─────────────────────────────────────────────┤
│  HERO — Full-screen Buddha background       │
│  "No vienes solo a entrenar.                │
│   Vienes a construirte."                    │
│  [Agendar visita WhatsApp] [Conocer método] │
├─────────────────────────────────────────────┤
│  POSITIONING                                │
│  "TEMPLO no es un gym más.                  │
│   Es un entorno para entrenar con           │
│   dirección, técnica y disciplina."         │
├─────────────────────────────────────────────┤
│  METHOD (4 pillars)                         │
│  01 Entrenamiento Guiado                    │
│  02 Técnica y Progresión                    │
│  03 Fuerza y Acondicionamiento              │
│  04 Disciplina Compartida                   │
├─────────────────────────────────────────────┤
│  EXPERIENCE / FACILITIES                    │
│  "Diseñado para elevar tu estándar"         │
│  Photo grid: Training, Weights, Calisthenics│
├─────────────────────────────────────────────┤
│  WHO IS IT FOR (4 cards)                    │
│  Desde cero | Disciplina |                  │
│  Transformación | Cansado de improvisar     │
├─────────────────────────────────────────────┤
│  PLANS (3 cards)                            │
│  Mensual | Guiado (★) | Premium             │
│  [Consultar] — WhatsApp CTAs                │
├─────────────────────────────────────────────┤
│  FOUNDER — Lucas                            │
│  Photo + grounded copy + quote              │
├─────────────────────────────────────────────┤
│  COMMUNITY (6-photo grid)                   │
│  "La disciplina se contagia"                │
│  [Ver comunidad en Instagram →]             │
├─────────────────────────────────────────────┤
│  TESTIMONIALS                               │
│  "Más fuerte. Más seguro.                   │
│   Más dueño de tu proceso."                 │
│  2 testimonial cards                        │
├─────────────────────────────────────────────┤
│  LOCATION                                   │
│  Address + Map + Hours + WhatsApp CTA       │
│  Compact social links (6 channels)          │
├─────────────────────────────────────────────┤
│  FAQ (6 questions, accordion)               │
├─────────────────────────────────────────────┤
│  FINAL CTA                                  │
│  "Empieza con una visita.                   │
│   Lo demás se construye con disciplina."    │
│  [Agendar mi visita por WhatsApp]           │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  TEMPLO | Nav | Contact + Social            │
├─────────────────────────────────────────────┤
│  🟢 WhatsApp floating button (always)       │
└─────────────────────────────────────────────┘
```

## 2. Cleanup Confirmed

- ✅ Single `<title>` tag
- ✅ Single `og:title`, `og:description`, `og:image`
- ✅ No duplicated sections
- ✅ No `591XXXXXXXX` — only `+59172001680`
- ✅ No "familia" overkill
- ✅ No social hub in upper page — compact links in Location area
- ✅ No broken mobile menu
- ✅ No duplicate nav links
- ✅ No malformed CSS comments
- ✅ CSS brace balance: 0
- ✅ Valid HTML structure
- ✅ All `<a>` tags properly closed (38 open / 38 close)

## 3. Copywriting Decisions

| Section | Decision |
|---------|----------|
| Hero | "No vienes solo a entrenar. Vienes a construirte." — Strong, identity-driven |
| Positioning | Single powerful blockquote, not two competing versions |
| Method | 4 pillars (not 5, not duplicated 03s) |
| Experience | Minimal copy, let the space speak |
| Audience | Emotional pain triggers, not soft "belonging" language |
| Plans | WhatsApp-only pricing ("Consultar"), no invented prices |
| Founder | Grounded, no guru language, one clean quote |
| Community | "La disciplina se contagia" — not "familia" |
| Testimonials | Placeholder format with clear [brackets] |
| FAQ | 6 concise questions handling real objections |
| Final CTA | Single emotionally strong line + WhatsApp action |

## 4. Visual Direction

- **Color:** Black/charcoal base, warm gold (#c9a96e) accent
- **Typography:** Playfair Display (headlines) + Inter (body)
- **Corners:** Sharp (2px max) — signals discipline
- **Animations:** Subtle fade-in on scroll only
- **Hero:** Dark Buddha SVG placeholder — replace with 4K photo asset

## 5. Remaining Real-World TODOs

1. **Hero image** — Replace SVG with 4K premium Buddha photography (dark stone, cinematic, gold lighting, negative space left)
2. **Gym photos** — Replace all SVG placeholders with real photos (training area, weights, calisthenics, community, Lucas)
3. **Opening hours** — Confirm exact hours for Location section
4. **Google Maps** — Confirm embed coordinates are accurate
5. **Testimonials** — Get 2 authorized real testimonials
6. **Pricing** — Decide: WhatsApp-only (current) or publish real prices
7. **Favicon** — Replace with final brand mark if different

## 6. Midjourney Prompt for Hero Image

```
A monumental seated Buddha statue, dark black stone / gunmetal material, positioned right of frame with clean negative space on the left. Cinematic low-key lighting, warm amber gold highlights, subtle rim light, dark modern minimalist temple architecture, charcoal walls, soft haze, dramatic shadows. Wide 16:9 composition. Ultra-realistic, photorealistic, 4K, luxury editorial quality. No text, no logos, no people. --ar 16:9 --s 750 --v 6.1
```

## 7. Recommended Next Phase

1. Source and replace all placeholder images
2. Add Meta Pixel for WhatsApp conversion tracking
3. Consider hero video background (10s loop)
4. Instagram API feed integration for community section
5. A/B test hero headlines
6. Google Analytics setup
