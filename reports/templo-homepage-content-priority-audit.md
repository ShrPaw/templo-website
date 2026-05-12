# TEMPLO — Homepage Content Priority & Information Architecture Audit

**Date:** 2026-05-13
**Auditor:** Senior Web Designer / Information Architect
**Repository:** https://github.com/ShrPaw/templo-website

---

## 1. Executive Summary

The TEMPLO homepage is **visually premium** and **brand-consistent**, but suffers from **content bloat and redundancy**. There are 15+ sections competing for attention, several of which duplicate each other's purpose. The page is approximately **40% too long** for optimal conversion flow.

**Key conclusions:**
- The footer logo is already correctly using the official image asset (`logo-templo-full-white-tight.webp`). No fix needed.
- The homepage has **3 major redundancy problems** (lifestyle/energy strip/activity reel all serve the same "vibe" purpose; objectives/pathfinder serve the same "guide" purpose; experiencias + guia-detalle duplicate service info).
- Plans are conversion-critical and should stay on homepage — currently positioned correctly.
- Coaches section is too detailed for homepage; should be a preview with "Conocer al equipo" CTA.
- Method section is text-heavy and should be compressed.
- The page currently **explains before it creates desire** in several places.

**Overall verdict:** The site needs a content diet, not a redesign. The visual identity is strong. The information architecture needs pruning.

---

## 2. Footer Logo Fix

**Status: Already correct. No change needed.**

The footer currently uses:
```html
<img src="assets/logo-templo-full-white-tight.webp" alt="TEMPLO" class="footer__logo-img">
```

This is the official full logo wordmark in white, correctly implemented as an `<img>` tag with proper responsive CSS:
```css
.footer__logo-img {
  height: 72px;
  width: auto;
  max-width: 220px;
  margin-bottom: 12px;
}
```

The navbar correctly remains text-only "TEMPLO" (`.nav__brand`), maintaining the design hierarchy where the nav is minimal and the footer is branded.

**Verification:**
- ✅ Footer uses official logo image (not plain text)
- ✅ Logo is readable, correctly proportioned
- ✅ Logo has breathing room and responsive sizing
- ✅ Nav remains text-only TEMPLO
- ✅ No broken image paths
- ✅ Good contrast on dark background

**Logo assets available in repository:**
- `assets/logo-templo-full-white.png` — Full logo, PNG
- `assets/logo-templo-full-white-tight.webp` — Full logo, WebP (currently used)
- `assets/logo-templo-wordmark-white.png` — Wordmark only
- `assets/logo-templo-wordmark-white-tight.webp` — Wordmark, WebP
- `assets/logo-templo-symbol-white.png` — Symbol/icon only
- `assets/logo-templo-symbol-white-tight.webp` — Symbol, WebP

---

## 3. Current Homepage Diagnosis

### Is it too long?
**Yes.** The homepage has **15 distinct sections** (excluding nav and footer). On a standard 1440px monitor at typical scroll speed, it takes over 60 seconds of continuous scrolling to reach the plans section — which is the primary conversion point.

### Is it too dense?
**Partially.** The Experiencias cards, Guía Detalle section, and Objectives section are all text-heavy. The Method section has 5 pillars with substantial copy each.

### Is it too static?
**No.** The activity reel, energy strip, and scroll animations provide good motion. The pathfinder is interactive.

### Is it too detailed?
**Yes.** The homepage tries to be a complete encyclopedia of everything TEMPLO offers. Service details, coach bios, method philosophy, objectives guidance, lifestyle imagery — all compete for the same viewport.

### Redundancy Map

| Content Purpose | Sections Serving It | Verdict |
|---|---|---|
| "TEMPLO is alive/active" | Activity Reel, Energy Strip, Lifestyle | **3 sections for 1 purpose** |
| "What should I train?" | Pathfinder, Objectives | **2 sections for 1 purpose** |
| "What does TEMPLO offer?" | Experiencias cards, Guía Detalle | **2 sections for 1 purpose** |
| "Who are the coaches?" | Coaches (full detail) | **1 section, too detailed** |
| "What's the method?" | Method (5 pillars) | **1 section, too long** |

---

## 4. Ideal Homepage Objective

The homepage must accomplish exactly 7 things, in this priority order:

1. **Create identity** — "This is TEMPLO. This is what we stand for."
2. **Create desire** — "I want to be part of this."
3. **Show services** — "Here's what you can do here."
4. **Guide decision** — "Which option is right for me?"
5. **Build trust** — "These people know what they're doing."
6. **Show plans** — "Here's what it costs."
7. **Convert** — "WhatsApp. Now."

Everything else belongs on extension pages or expandable detail areas.

---

## 5. Section-by-Section Evaluation

### 5.1 — Hero
- **Current role:** Brand identity + emotional hook
- **Recommendation:** ✅ **Keep as-is**
- **Priority:** CRITICAL
- **Notes:** The Buddha hero is iconic. The copy is strong. The WhatsApp CTA is immediate. No changes needed.

### 5.2 — Positioning ("TEMPLO es un estudio de entrenamiento para personas con una meta")
- **Current role:** Brand promise
- **Recommendation:** ✅ **Keep as-is**
- **Priority:** HIGH
- **Notes:** Short, powerful, essential. The gold accent line is a nice touch.

### 5.3 — Community Metrics (8 Coaches, 5 Experiencias, 6 Días, 1 Estudio)
- **Current role:** Social proof / quantification
- **Recommendation:** 🔄 **Compress — move directly after positioning as a compact strip**
- **Priority:** MEDIUM
- **Notes:** These are real, verifiable numbers (not fabricated). They provide quick credibility. However, they could be more impactful as a single horizontal bar rather than a full section with padding.

### 5.4 — Activity Reel ("Así se vive TEMPLO")
- **Current role:** Visual proof that TEMPLO is alive and active
- **Recommendation:** ✅ **Keep — this is the right section for this purpose**
- **Priority:** HIGH
- **Notes:** The infinite marquee is well-executed. The horizontal layout with labels is premium. This should be the ONLY "vibe" section on the homepage.

### 5.5 — Experiencias (5 service cards)
- **Current role:** Service overview
- **Recommendation:** ✅ **Keep — compress slightly**
- **Priority:** HIGH
- **Notes:** The 3+2 grid layout works. Each card has a clear "Conocer más" link. The Power Plate premium treatment is appropriate. Keep this, but the "Conocer más" links currently point to anchors within the same page (guia-detalle section), which creates a long scroll experience. These should eventually link to dedicated service pages.

### 5.6 — Guía Detalle ("Más sobre cada experiencia")
- **Current role:** Deep service descriptions
- **Recommendation:** ❌ **Remove from homepage — move to /experiencias page**
- **Priority:** HIGH (removal)
- **Reason:** This section duplicates the Experiencias cards. The additional detail (group sizes, session formats) is valuable but not homepage-critical. The "Conocer más" links from the service cards should eventually point to dedicated experience pages.
- **Impact:** Removing this saves ~400px of scroll height and eliminates redundancy.

### 5.7 — Pathfinder ("Encuentra tu camino")
- **Current role:** Interactive decision helper
- **Recommendation:** ✅ **Keep — move HIGHER (after Experiencias)**
- **Priority:** HIGH
- **Reason:** This is one of the most valuable conversion tools on the page. It helps undecided visitors choose a direction and immediately provides a WhatsApp CTA. It should come right after the visitor understands what TEMPLO offers.
- **Ideal position:** Immediately after Experiencias, before Coaches.

### 5.8 — Objectives ("Lo que realmente estás buscando")
- **Current role:** Goal-based guidance
- **Recommendation:** ❌ **Remove from homepage — merge with Pathfinder or move to /experiencias**
- **Priority:** HIGH (removal)
- **Reason:** This section serves the same purpose as Pathfinder ("help me choose") but is less interactive and more text-heavy. The 4 objective cards with route links duplicate what Pathfinder does better. The WhatsApp CTA in the "resultados" card is good but redundant with Pathfinder's result.
- **Impact:** Removing this saves ~500px and eliminates the second major redundancy.

### 5.9 — Método TEMPLO (5 pillars)
- **Current role:** Brand philosophy
- **Recommendation:** 🔄 **Compress to 3 pillars on homepage — full 5 pillars on /metodo page**
- **Priority:** MEDIUM
- **Reason:** The 5 pillars (Disciplina, Técnica, Constancia, Progresión, Carácter) are brand-defining, but the full treatment with symbols and descriptions is heavy for the homepage. Show the 3 strongest (Disciplina, Técnica, Progresión) with a "Conocer el método completo" CTA.
- **Ideal position:** After Coaches, before Plans.

### 5.10 — Coaches
- **Current role:** Team introduction
- **Recommendation:** 🔄 **Compress to preview — full profiles on /coaches page**
- **Priority:** MEDIUM
- **Reason:** 8 coach cards with full bios, quotes, and CTAs is too much for the homepage. Show Lucas (founder) as a featured card + a compact "team strip" of the other 7 with names and specialties only. Add "Conocer al equipo completo" CTA.
- **Current position:** Good (after Pathfinder, before Lifestyle).

### 5.11 — Lifestyle
- **Current role:** Visual atmosphere / community vibe
- **Recommendation:** 🔄 **Compress or remove — overlaps with Activity Reel**
- **Priority:** MEDIUM
- **Reason:** The Lifestyle section and Activity Reel serve the same purpose: "TEMPLO is alive and energetic." The Activity Reel is more dynamic (infinite scroll). Lifestyle is a static grid. Choose one. Recommendation: keep Activity Reel, remove Lifestyle from homepage.
- **Impact:** Saves ~600px.

### 5.12 — Energy Strip ("Dentro de TEMPLO")
- **Current role:** Additional visual energy
- **Recommendation:** ❌ **Remove — this is the THIRD "vibe" section**
- **Priority:** HIGH (removal)
- **Reason:** Activity Reel + Lifestyle + Energy Strip = three sections doing the same job. The Energy Strip is the weakest of the three (static tiles with background images). Remove it entirely.
- **Impact:** Saves ~500px.

### 5.13 — Plans
- **Current role:** Pricing / conversion
- **Recommendation:** ✅ **Keep as-is**
- **Priority:** CRITICAL
- **Notes:** Plans are conversion-critical. They should stay on the homepage. The current position (after all the brand/story content) is correct. The card design is premium and clear. WhatsApp CTAs on each plan are excellent.

### 5.14 — Location
- **Current role:** Physical presence / trust
- **Recommendation:** ✅ **Keep**
- **Priority:** HIGH
- **Notes:** The Google Maps embed, address, and WhatsApp CTA are essential for a local business. Good placement before FAQ.

### 5.15 — FAQ
- **Current role:** Objection handling
- **Recommendation:** 🔄 **Compress — reduce to 4-5 most critical questions**
- **Priority:** MEDIUM
- **Notes:** 7 FAQ items + a "suggested questions" box is heavy. Keep the 4-5 most conversion-relevant questions. Move the suggested questions WhatsApp CTA to a more prominent position (or it already exists in Pathfinder).

### 5.16 — Final CTA
- **Current role:** Last conversion push
- **Recommendation:** ✅ **Keep**
- **Priority:** HIGH
- **Notes:** Strong closing statement. The WhatsApp CTA is clear.

---

## 6. Recommended Homepage Order

| # | Section | Status |
|---|---------|--------|
| 1 | **Hero** | Keep |
| 2 | **Positioning** | Keep |
| 3 | **Metrics strip** (compressed) | Compress |
| 4 | **Activity Reel** | Keep |
| 5 | **Experiencias** (service cards) | Keep |
| 6 | **Pathfinder** (moved higher) | Move UP |
| 7 | **Coaches** (compressed preview) | Compress |
| 8 | **Method** (compressed to 3 pillars) | Compress |
| 9 | **Plans** | Keep |
| 10 | **Location** | Keep |
| 11 | **FAQ** (compressed) | Compress |
| 12 | **Final CTA** | Keep |
| 13 | **Footer** | Keep |

**Sections removed from homepage:**
- ❌ Guía Detalle → /experiencias
- ❌ Objectives → merged with Pathfinder
- ❌ Lifestyle → removed (redundant with Activity Reel)
- ❌ Energy Strip → removed (redundant with Activity Reel)

**Net result:** 13 sections → 13 sections, but 4 are compressed and 4 are removed, reducing total homepage length by approximately **40-45%**.

---

## 7. What Should Move to Extensions

| Content | Current Location | Recommended Destination |
|---------|-----------------|------------------------|
| Full coach profiles (8 cards) | Homepage #coaches | /coaches |
| Full method philosophy (5 pillars) | Homepage #method | /metodo |
| Service deep details (guia-detalle) | Homepage #guia-detalle | /experiencias |
| Lifestyle photo grid | Homepage #lifestyle | /galeria (future) |
| Energy strip tiles | Homepage #energy-strip | Remove entirely |
| Objectives guidance cards | Homepage #objectives | Merge into Pathfinder or /experiencias |

---

## 8. Proposed Extension Pages

### /coaches
**Purpose:** Full coach profiles, photos, specialties, quotes, WhatsApp CTAs for each.
**Homepage version:** Lucas featured + team strip with "Conocer al equipo completo" CTA.

### /metodo
**Purpose:** Full 5-pillar philosophy, symbolic visuals, brand story.
**Homepage version:** 3 pillars preview with "Conocer el método completo" CTA.

### /experiencias
**Purpose:** Deep explanation of each training experience (Power Plate, Calistenia, Mujeres, Seniors, Adaptado) with group sizes, session formats, and detailed descriptions.
**Homepage version:** Service cards with "Conocer más" links pointing here.

### /planes
**Recommendation:** Keep plans on homepage. Pricing is conversion-critical and should not require an extra click.

### /galeria (future)
**Purpose:** Real TEMPLO photography once available.
**Homepage version:** Activity Reel only.

---

## 9. Graphic Design / Geometry Notes

### Where the page feels premium:
- **Hero** — The Buddha image with gold-tinted overlay is cinematic and distinctive
- **Activity Reel** — The infinite marquee with gold labels is sophisticated
- **Method Pillars** — The staggered reveal with Roman numerals and symbolic SVGs is unique
- **Plans** — The card design with price pills is clean and scannable
- **Footer** — The logo + tagline + nav grid is professional

### Where it feels overloaded:
- **Between Experiencias and Plans** — Too many sections compete: Guía Detalle → Pathfinder → Objectives → Method → Coaches → Lifestyle → Energy Strip → Plans. This is a ~4000px desert of content before the conversion point.
- **Objectives section** — The 4-card grid with answers, routes, and icons is dense and academic
- **Energy Strip** — Adds visual noise without new information

### Where it feels under-designed:
- **Metrics section** — The 4-column grid feels generic. Could be more integrated.
- **FAQ** — The suggested questions box + FAQ list is functional but could be more elegant

### Where text should be reduced:
- **Guía Detalle** — Each item has a photo + paragraph + link. Too much for homepage.
- **Objectives** — Each item has an icon + heading + paragraph + route buttons. Too much.
- **Method descriptions** — Could be shorter on homepage

### Where visuals should carry more weight:
- **After the Hero** — The transition from cinematic hero to text-heavy positioning quote is abrupt
- **Coaches** — Currently text-only (initials in circles). Photos would help, but the section is already too long.

### Where CTAs should be more direct:
- **After Experiencias** — The current CTA ("Quiero saber qué experiencia me conviene") is good but could link directly to Pathfinder
- **After Coaches** — Currently no CTA between coaches and lifestyle

### Mobile flow:
- The page is generally well-adapted for mobile
- The Pathfinder works well on mobile (single-column options)
- Plans stack correctly on mobile
- The Activity Reel adapts with smaller cards
- **Issue:** The sheer length is more punishing on mobile where scroll speed is slower

---

## 10. Conversion Flow Notes

### Where WhatsApp CTAs currently exist:
1. Nav (sticky) ✅
2. Hero ✅
3. Activity Reel ✅
4. Experiencias ✅
5. Pathfinder result ✅
6. Objectives (partial) ✅
7. Each plan card ✅
8. Location ✅
9. FAQ suggested questions ✅
10. Final CTA ✅
11. Floating WhatsApp button ✅

### Where CTAs should be stronger:
- **After Pathfinder** — Currently the result has a WhatsApp CTA, but if Objectives is removed, Pathfinder becomes the primary guidance tool. Its result CTA should be the strongest on the page.
- **After Coaches preview** — Add a "Consultar disponibilidad" CTA
- **After Method preview** — Add a "Conocer el método" CTA that links to /metodo

### Where CTAs create friction:
- **Multiple WhatsApp links with different messages** — 26 WhatsApp links with varying pre-filled messages. This is actually good (contextual CTAs), but ensure the messages are distinct enough to provide value.

### Conversion distance:
- **Hero → WhatsApp:** 1 click (excellent)
- **Service cards → WhatsApp:** 2 clicks (card → "Conocer más" → anchor → plan → WhatsApp). Should be 1 click.
- **Plans → WhatsApp:** 1 click (excellent)
- **Current flow:** Hero → scroll ~4000px → Plans. **This is too far.**

---

## 11. Mobile Notes

### What should be compressed for mobile:
- **Method pillars:** Currently 2-column on mobile. Consider showing only 3 pillars with a horizontal swipe or accordion.
- **Coaches:** Currently 1-column on mobile. The preview version (Lucas + team strip) would be much more mobile-friendly.
- **FAQ:** Consider using a single accordion instead of individual `<details>` elements.

### What should be moved for mobile:
- **Pathfinder:** Already works well on mobile (single-column options). Keep as-is.
- **Plans:** Already stack correctly. Keep as-is.

### Critical mobile issue:
- The homepage is approximately **12,000px tall** on mobile. After compression, it should be closer to **7,000-8,000px**. This is the single most impactful improvement for mobile conversion.

---

## 12. Priority Implementation Plan

### Immediate Fixes (Low Risk)
1. ✅ **Footer logo** — Already correct, no change needed
2. **Remove Energy Strip** — Delete the `#energy-strip` section entirely. Zero risk, saves ~500px.
3. **Remove Lifestyle section** — Delete the `#lifestyle` section. Low risk, saves ~600px. Activity Reel covers this purpose.
4. **Remove Guía Detalle** — Delete the `#guia-detalle` section. Low risk, saves ~400px. The "Conocer más" links in Experiencias cards will need updated hrefs (point to anchors or future pages).

### Next Low-Risk Changes
5. **Remove Objectives section** — Delete `#objectives`. The Pathfinder covers this purpose better. Saves ~500px.
6. **Move Pathfinder higher** — Move `#pathfinder` directly after `#experiencias`. This puts the decision helper right after the visitor understands the services.
7. **Compress Coaches to preview** — Show Lucas as featured card + compact team strip. Add "Conocer al equipo" CTA.

### Later Structural Changes
8. **Compress Method to 3 pillars** — Show Disciplina, Técnica, Progresión. Add "Conocer el método" CTA.
9. **Compress FAQ** — Reduce to 5 questions. Move suggested questions inline.
10. **Create /experiencias page** — Move Guía Detalle content here.
11. **Create /coaches page** — Move full coach profiles here.
12. **Create /metodo page** — Move full method philosophy here.

### Wait for Real Assets
13. **Replace placeholder images** — Activity Reel, Experiencias, and Lifestyle (if kept) all use placeholder images. Real photography will dramatically improve impact.
14. **Add real coach photos** — Currently using placeholder portraits.
15. **Add real coach Instagram URLs** — Currently empty (correctly not fabricated).

---

## 13. Final Score

| Category | Score | Notes |
|----------|-------|-------|
| **Visual Identity** | 8/10 | Premium black/gold system is distinctive and consistent. Buddha hero is iconic. |
| **Content Hierarchy** | 5/10 | Too many sections with equal visual weight. No clear priority flow. |
| **Conversion Clarity** | 6/10 | WhatsApp CTAs are everywhere, but the path from "interested" to "converted" is too long. |
| **Mobile Flow** | 5/10 | Well-adapted individually, but the total length is punishing on mobile. |
| **Premium Feel** | 8/10 | Typography, spacing, animations, and color system are all premium. |
| **Overall Readiness** | 6/10 | Visually ready. Structurally needs pruning. Content-wise, placeholder images hold it back. |

**Weighted Average: 6.3/10**

The site has a strong visual foundation. The main weakness is information architecture — trying to say everything on one page. A focused homepage with extension pages would bring this to an 8+ easily.

---

## Appendix: Verification Checklist

- ✅ WhatsApp number: 59172001680 — consistent across all 26 instances
- ✅ Prices unchanged (Bs. 230, 25, 270, 350, 360, 40, 400, 420, 45, 450, 500, 550)
- ✅ No fabricated metrics, testimonials, or social proof
- ✅ No fake coach credentials or Instagram URLs
- ✅ Buddha hero preserved
- ✅ Premium black/gold identity preserved
- ✅ Footer logo correctly uses official image asset
- ✅ Nav remains text-only TEMPLO
- ✅ No heavy libraries added
- ✅ Site remains fully in Spanish
