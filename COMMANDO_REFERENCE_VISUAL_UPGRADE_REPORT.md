# Phase 2C — Reference-Guided Visual Upgrade Report

**Date:** 2026-05-16
**Reference:** https://commandostudio.com/mx/#nosotros
**Approach:** Principles extracted and adapted to TEMPLO's identity — not copied

---

## 1. Summary

A reference-guided visual upgrade pass was executed, studying Commando Studio's strengths in service clarity, CTA flow, section rhythm, and commercial presentation. Design principles were extracted and adapted to TEMPLO's darker, more grounded identity.

### What was improved
- Service/experience cards: stronger hierarchy, bolder names, deeper hover states
- CTA/booking flow: WhatsApp positioned as reservation system, not just contact
- Typography: larger headings, tighter tracking, stronger weight contrast
- Visual rhythm: deeper shadows, more lift on hover, better section pacing
- CTA microcopy: booking-oriented language near all WhatsApp actions
- Footer: more spacious, stronger heading hierarchy
- Coaches section: larger portrait, more presence
- Location: added booking microcopy

### What was intentionally not copied
- No Commando text, assets, or brand identity
- No fake stats ("+2.5M classes" etc.)
- No multi-location structure
- No bright/neon color scheme
- No "endorfinas" or hype messaging
- No exact layout structure
- No fake testimonials or social proof

---

## 2. Reference Principles Extracted

| Principle | How Commando Does It | How TEMPLO Adapts It |
|-----------|---------------------|---------------------|
| **Service clarity** | Full-width blocks per discipline, bold names, short descriptions | Improved card hierarchy, bolder names (900 weight), clearer descriptions |
| **CTA/booking flow** | "Reservar" repeated, feels like booking system | "Consultar disponibilidad" via WhatsApp — positioned as reservation, not random contact |
| **Section rhythm** | Strong alternation, generous spacing, visual breaks | Deeper shadows, more hover lift, better padding, stronger section labels |
| **Typography** | Huge bold headings, editorial feel | Increased heading scale (2-3.2rem), tighter tracking (-0.018em), 900 weight |
| **Community proof** | Stats + lifestyle messaging | Existing metrics (8 coaches, 5 experiences, 6 days) with larger numbers |
| **Coach presence** | Dedicated section with grid | Strengthened teaser: larger portrait (88px), more padding, stronger name |
| **Footer** | Structured columns, repeated CTA | More spacious (80px top), stronger heading hierarchy, better gap |
| **Visual energy** | Bright, vibrant, high contrast | Dark premium energy — stronger gold accents, deeper shadows, better rhythm |

---

## 3. TEMPLO Adaptations

### Service Cards → More Premium, More Impact
- Card borders: `rgba(255,255,255,0.06)` (was 0.08) — subtler base
- Hover: `-3px` lift (was `-2px`), `0.35` shadow opacity (was `0.3`)
- Service names: 900 weight, 0.06em tracking (was 800, 0.04em)
- Description: 0.92rem, 1.72 line-height (was 0.9rem, 1.7)
- **Why:** Each offering feels more concrete and selectable

### CTA Flow → Booking System, Not Contact
- Nav: "Consultar" (was "Preguntar por WhatsApp") — shorter, calmer
- Hero: "Consultar disponibilidad" (was "Agendar visita por WhatsApp")
- Pricing: "Consultar disponibilidad" (was "Consultar este plan")
- Final CTA: "Agendar mi visita" with microcopy "Confirmamos horarios, disponibilidad y el tipo de acompañamiento adecuado"
- Start-here: "Consultar por WhatsApp" with "Sin compromiso"
- Location: added "Te respondemos por WhatsApp para confirmar horarios y disponibilidad"
- **Why:** WhatsApp now feels like a professional booking path, not random contact

### Typography → More Editorial, More Presence
- Section titles: 2rem–3.2rem (was 1.9–3.0rem)
- Hero title: 2.8rem–5.2rem (was 2.6–4.8rem), line-height 1.0 (was 1.02)
- Title tracking: -0.018em (was -0.015em) — tighter, more premium
- Pricing names: 900 weight, 0.03em tracking (was 800, 0.02em)
- Start-here titles: 800 weight (was 700)
- **Why:** Stronger visual hierarchy, more editorial feel

### Visual Rhythm → More Depth, More Life
- Service card hover: 12px 40px shadow (was 8px 32px)
- Pricing card hover: -2px lift (was none)
- Site-guide hover: 10px 36px shadow (was 8px 32px)
- Start-here: 32px padding (was 28px), deeper hover
- Coaches teaser: 88px portrait (was 80px), more padding
- Metrics numbers: 2.2–3.6rem (was 2–3.2rem)
- Location: 18px gap (was 16px), 36px margin (was 32px)
- Footer: 80px top padding (was 72px), 56px gap (was 48px)
- FAQ: 28px question padding (was 26px)
- WhatsApp: 60px (was 58px), stronger shadow
- **Why:** Site feels more alive, less flat, more studio-like

---

## 4. Files Changed

| File | Changes | Risk |
|------|---------|------|
| `styles.css` | Typography scale, card styling, hover states, spacing, CTA styling, footer | Low — visual only |
| `index.html` | CTA labels, microcopy, booking language | Low — copy changes |
| `REFERENCE_COMPARISON_COMMANDO.md` | New file — comparison notes | None — documentation |

---

## 5. Hero Improvements

### Before (Phase 2B)
- Hero title: 2.6–4.8rem, line-height 1.02
- CTA: "Agendar visita por WhatsApp"
- Subtitle: good but could be tighter

### After (Phase 2C)
- Hero title: 2.8–5.2rem, line-height 1.0 — bigger, tighter, more editorial
- CTA: "Consultar disponibilidad" — calmer, more professional
- Same strong image from Phase 2B

### Impact
- Hero feels more premium and intentional
- CTA feels like a booking action, not a random contact
- Typography carries more visual weight

---

## 6. Service/Experience Improvements

### Changes
- Card borders subtler at rest, more dramatic on hover
- Service names bolder (900 weight) with wider tracking
- Descriptions slightly larger with better line-height
- Hover state: deeper shadow, more lift

### Impact
- Each offering feels more like its own section
- Names are visual anchors, not just labels
- Cards feel more premium and selectable

---

## 7. CTA/Reservation Flow Improvements

### Before
- CTAs said "Preguntar por WhatsApp" or "Consultar este plan"
- Felt like "contact us" — generic, not booking-oriented
- No microcopy explaining what happens next

### After
- CTAs say "Consultar disponibilidad" or "Agendar mi visita"
- Feels like a reservation/booking path
- Microcopy added: "Confirmamos horarios, disponibilidad y el tipo de acompañamiento adecuado"
- Location block: "Te respondemos por WhatsApp para confirmar horarios y disponibilidad"

### Impact
- WhatsApp now positioned as a professional booking system
- User knows what happens when they click: availability check, scheduling
- CTAs feel confident, not desperate

---

## 8. Hours/Contact Improvements

- Verified hours preserved exactly as provided
- No Sunday hours added (not verified)
- No unverified address added
- Location microcopy added for booking clarity
- Hours block remains in the location section with correct formatting

---

## 9. Visual System Improvements

### Typography
- Section titles: larger (2–3.2rem), tighter (-0.018em)
- Hero title: bigger (2.8–5.2rem), tighter line-height (1.0)
- Card titles: bolder (900 weight), wider tracking (0.06em)
- Pricing names: 900 weight, 0.03em tracking
- Micro-labels: slightly larger (0.7rem)

### Spacing
- Footer: 80px top (was 72px)
- Footer grid: 56px gap (was 48px)
- Location details: 18px gap, 36px margin
- FAQ questions: 28px padding
- Start-here steps: 32px padding

### Cards
- Service cards: subtler base border, deeper hover
- Pricing cards: hover lift added (-2px)
- Site-guide cards: more padding, deeper hover
- Coaches teaser: larger portrait, more padding

### Images
- No changes to image system (Phase 2B images remain)
- Dark/moody direction preserved
- Documentation: still temporary placeholders

### Mobile
- All improvements cascade via clamp() values
- WhatsApp float: 60px (larger tap target)
- Typography improvements affect mobile via responsive clamp()

---

## 10. What Was Not Copied

- ❌ No Commando Studio text
- ❌ No Commando Studio assets or images
- ❌ No Commando Studio layout structure
- ❌ No fake stats ("+2.5M classes", "+190 coaches")
- ❌ No fake coaches or testimonials
- ❌ No fake locations or addresses
- ❌ No "endorfinas" or hype messaging
- ❌ No bright/neon color scheme
- ❌ No multi-location structure
- ❌ No exact CTA structure (TEMPLO uses WhatsApp, not popup booking)
- ❌ No Commando-specific discipline names
- ❌ No commercial/hype elements inappropriate for TEMPLO's identity

---

## 11. Remaining Blockers

| Blocker | Priority | Status |
|---------|----------|--------|
| Real TEMPLO photography | P0 | Still placeholder Unsplash images |
| Real Lucas/coach portrait | P0 | Still placeholder fitness portraits |
| Real testimonials | P1 | No testimonials on site |
| Verified address / Google Maps | P1 | Still placeholder coordinates |
| Production domain | P2 | Still Vercel preview URL |
| Coach Instagram URLs | P2 | Still empty |
| Google Business Profile | P2 | Not created |

---

## 12. Updated Readiness Score

| Metric | Phase 2B | Phase 2C | Notes |
|--------|----------|----------|-------|
| **Visual polish** | 7.0 | 7.5 | Stronger rhythm, better typography, more premium cards |
| **Business credibility** | 6.5 | 6.8 | CTA flow more professional, but still no real proof |
| **Public launch readiness** | ❌ Not ready | ❌ Not ready | Real content blockers remain |
| **Private preview** | ✅ Ready | ✅ Ready | Good for stakeholder review |
| **Portfolio showcase** | ⚠️ Better | ⚠️ Better | Visual quality improved, still stock imagery |
| **Overall score** | 6.8 | 7.2 | Honest assessment |

---

## 13. Next Action

**Collect real content:**
1. Photography session (hero interior, Lucas portrait, 3-5 training shots)
2. 3 client testimonials with permission
3. Exact Google Maps embed URL
4. Production domain

Once real assets are available, implementation is a 15-minute file swap.
