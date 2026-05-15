# PHASE 2 — Visual, Brand, UX & Business-Readiness Plan

**Date:** 2026-05-16
**Repository:** https://github.com/ShrPaw/templo-website
**Auditor:** Senior Frontend Designer / Brand Strategist / UX Auditor
**Context:** Phase 1 (technical audit + cleanup) is complete. CSS syntax fixed, sitemap expanded, Twitter Cards added, dead assets removed, skip-to-content added, reports archived. This is the brand/visual/business layer.

---

## 1. Executive Summary

**Overall Visual/Business Readiness Score: 5.5 / 10**

**Private Preview Readiness: Yes, with reservations.**
The site can be shown to a small group of trusted people (friends, early prospects, collaborators) who understand it's a work in progress. The structure, copy, and conversion flow are functional. The dark/gold aesthetic is coherent.

**Public Launch Readiness: No.**
The site cannot be launched publicly, shared on social media, used in paid advertising, or shown to clients/employers in its current state. The placeholder imagery, absence of social proof, and generic stock photos would actively damage credibility rather than build it.

**Main Diagnosis (Plain English):**
TEMPLO has a well-structured skeleton — good information architecture, consistent WhatsApp conversion flow, professional copywriting, and a distinctive dark/gold premium aesthetic. But the site has no flesh. Every image is a stock placeholder. There are zero testimonials. The coaches are represented by letter initials. The hero shows a Buddha statue that has nothing to do with the actual gym. A visitor would see a polished template that *could* be a real business, but has no evidence that it *is* one.

**The Single Biggest Blocker:**
**Real photography.** Not code. Not copy. Not design. The site needs real photos of the TEMPLO space, the coaches, and the training sessions. Everything else is secondary.

**Fastest Path to Professional:**
1. Replace hero image with real TEMPLO interior (1 day of photography)
2. Add real coach photos — at minimum Lucas (1 day)
3. Add 3 real client testimonials (ask 3 current clients)
4. Set up a custom domain (30 minutes)

That's it. Those 4 things would take the site from 5.5 to 8.0.

---

## 2. Current Strengths

These are real, specific strengths — not generic praise:

**A. WhatsApp conversion flow is excellent.**
30 WhatsApp CTAs on the homepage alone, placed after every major section. The floating button with the label "¿No sabes qué elegir? Te orientamos" is smart — it addresses indecision, not just "contact us." The contextual pre-filled messages (different for each plan, each coach, each section) show real thought. This is better than 90% of local business websites.

**B. Information architecture is commercially logical.**
The homepage flow: Hero → Positioning → Activity Reel → Metrics → Site Guide → Start Here → Experiences → Pathfinder → CTA → Plans → After-Write → Method → Coaches → Location → FAQ → Final CTA. This is a long page, but each section has a purpose. The "Start Here" section is particularly good for reducing decision paralysis.

**C. Pricing is transparent.**
Showing actual Bs. prices (230–550 range) with expandable detail cards is the right call for a local market. Hiding prices behind "contact us" creates friction. TEMPLO avoids this.

**D. Pathfinder (decision tree) is functional and useful.**
The 3-step goal→level→style selector produces contextual recommendations with WhatsApp pre-fill. This is a genuine conversion tool, not a gimmick.

**E. Dark/gold aesthetic is distinctive and consistent.**
The color system (`--accent: #d4a853`, dark backgrounds, warm whites) creates a premium feel. CSS custom properties are used well. The Dharma Gothic C accent font is used sparingly (only 2 `.brand-seal` instances on homepage) — this restraint is correct.

**F. Copywriting is grounded.**
No "transform your life" hype. No "best gym in Cochabamba" claims. The tone is calm, confident, and specific: "Guía, técnica y disciplina para construir un cuerpo que refleje tu meta." This matches the target audience.

**G. Mobile-first CSS approach.**
`clamp()` values for typography and spacing. Proper responsive breakpoints (480px, 600px, 768px, 900px). Mobile hamburger menu with focus trapping. Touch support on the activity reel.

**H. Accessibility foundations are solid.**
`lang="es"`, proper heading hierarchy (1 H1, 11 H2s, 29 H3s), `alt` text on all images, `aria-label` on interactive elements, `prefers-reduced-motion` respected, skip-to-content link added.

---

## 3. Current Weaknesses

### P0 — Critical (blocks launch)

**W1. Hero image is a Buddha statue.**
The hero shows a dark stone Buddha. TEMPLO is a fitness studio. The name "TEMPLO" combined with a Buddha image creates a fundamental brand confusion: Is this a meditation center? A spiritual retreat? A gym? A yoga studio? The visitor must not guess. The hero must answer immediately. This is the single image that damages trust the most because it's the first thing anyone sees.

**W2. All coach "portraits" are letter initials.**
For a business that sells personal guidance and coaching, showing NZ/AB/NA/AS/SL/OE/SR in circles instead of real faces is a dealbreaker. Visitors cannot trust a coach they can't see. This makes the entire coaches section feel like a placeholder — which it is.

**W3. Zero social proof.**
No testimonials. No client count. No transformation photos. No Google reviews. No "X personas han entrenado en TEMPLO." For a fitness business, social proof is the #1 conversion driver after price. Its absence is deafening.

### P1 — High (strongly hurts credibility)

**W4. All service/reel images are Unsplash stock.**
The activity reel shows 8 generic fitness photos. The 5 service cards show generic gym photos. A visitor who clicks "Ver experiencia" on the Power Plate card sees a stock photo of a woman on a vibration plate — not TEMPLO's actual Power Plate. This undermines every claim about TEMPLO being a real, specific place.

**W5. Hero subtitle doesn't clarify what TEMPLO is.**
"Guía, técnica y disciplina para construir un cuerpo que refleje tu meta" is aspirational but abstract. A first-time visitor still doesn't know: Is this a gym membership? Personal training? Group classes? The answer doesn't arrive until the "Positioning" section 2 screens later: "TEMPLO es un estudio de entrenamiento para personas con una meta." That's 5+ seconds of confusion.

**W6. 30 WhatsApp CTAs feel repetitive.**
While the placement strategy is correct (after every section), the sheer volume creates a "desperate" impression. The same WhatsApp CTA appears in: nav, hero, activity reel, site guide, start-here, pathfinder result, pathfinder-cta, each of 6 plan cards (6x), after-write, method teaser, coaches teaser, location, final CTA, floating button, and mobile menu. That's ~20 distinct WhatsApp buttons on one page. The intent is right; the execution is heavy-handed.

**W7. Google Maps uses placeholder coordinates.**
The embed URL contains `!1m18!1m12!1m3!1d3807.5!2d-66.1!3d-17.4` — these are approximate city-level coordinates, not the actual TEMPLO location. A visitor clicking "Ver ubicación en Google Maps" would see a generic area, not the studio. For a local business, this is a trust killer.

**W8. No opening hours shown.**
The location section says "Consultar por WhatsApp" for hours. Visitors want to know immediately: When can I go? Even approximate hours (e.g., "Lun–Vie 6:00–21:00, Sáb 7:00–13:00") reduce friction significantly.

### P2 — Medium (should improve, doesn't block soft launch)

**W9. Section order could be tighter.**
The homepage has 16 sections. Some feel redundant:
- "Site Guide" (3 cards linking to subpages) overlaps with "Start Here" (4 steps linking to similar places)
- "After Write" (what happens after WhatsApp) could be merged into the FAQ
- "Method teaser" on homepage duplicates the method page content
- "Pathfinder CTA" section exists right after the Pathfinder section — this could be integrated into the Pathfinder result instead of being a separate section

**W10. Activity reel is purely decorative.**
The horizontal scrolling photo marquee looks nice but adds no information. The 8 cards just show stock photos with labels (Power Plate, Calistenia, Mujeres, etc.) — the same services listed in the section directly below. On mobile, this section takes up significant vertical space for minimal value.

**W11. Community metrics are features, not proof.**
"8 Coaches, 5 Experiencias, 6 Días, 1 Estudio" — these are organizational facts, not social proof. A visitor doesn't care that TEMPLO has 8 coaches; they care that other people like them have trained there and gotten results.

**W12. The "Positioning" section is one sentence.**
"TEMPLO es un estudio de entrenamiento para personas con una meta." This is a strong sentence, but it occupies an entire section with a full-width border and gold accent line. It could be integrated into the hero subtitle for more impact with less space.

**W13. Dharma Gothic C font is underutilized.**
Only 2 instances of `.brand-seal` on the homepage. The font files (3 files, 224KB) are loaded for essentially 2 words. Either use it more strategically (section titles, key numbers) or remove it to save bandwidth.

**W14. Footer is functional but dense.**
3-column layout with brand, navigation, and contact. The navigation column duplicates the main nav. The contact column lists WhatsApp, Instagram, Google Maps, Facebook — all external links. This is fine but could be simplified.

### P3 — Minor (polish)

**W15. "Brand seal" accent word usage is inconsistent.**
"TEMPLO" appears as a brand-seal in "Así se vive TEMPLO" and "Disciplina, técnica y progresión" but not in other section titles where it could also work. Minor consistency issue.

**W16. Some hover animations are too subtle to notice.**
The gold top-line reveal on `.method__pillar::before` and the text nudge on `.exp-card__name` are technically well-implemented but so subtle that most users won't perceive them. They add code complexity without proportional UX value.

**W17. WhatsApp floating button label appears on desktop only.**
The "¿No sabes qué elegir? Te orientamos" label uses `@media (min-width: 769px)`. On mobile — where WhatsApp is most used — the label is hidden. This is backwards.

---

## 4. Top 10 Priority Improvements

| # | Severity | Issue | Why It Matters | Fix | Needs Real Content? |
|---|----------|-------|----------------|-----|---------------------|
| 1 | P0 | Hero image is a Buddha statue | First impression creates brand confusion. Visitor doesn't know if this is a gym or meditation studio. | Replace with real TEMPLO interior photo. Dark, moody, showing equipment/space. | **Yes** — needs real photography |
| 2 | P0 | Coach portraits are letter initials | Visitors can't trust coaches they can't see. Looks unfinished. | Replace with real headshots. At minimum, Lucas. | **Yes** — needs real photos |
| 3 | P0 | Zero social proof | No evidence anyone has actually trained here. Biggest conversion killer for fitness. | Add 3-5 real testimonials with names. Add client count if impressive. | **Yes** — needs real client data |
| 4 | P1 | Hero subtitle doesn't clarify what TEMPLO is | 5+ seconds of confusion about what the business offers. | Rewrite subtitle to include "estudio de entrenamiento guiado" and service keywords. | No — can fix now |
| 5 | P1 | 30 WhatsApp CTAs feel repetitive | Creates desperation impression. Reduces perceived value. | Reduce to 8-12 strategic placements. Remove redundant CTAs from between closely-spaced sections. | No — can fix now |
| 6 | P1 | All service/reel images are stock | Undermines claims of being a real, specific place. | Replace with real TEMPLO photography. | **Yes** — needs real photos |
| 7 | P1 | Google Maps uses placeholder coordinates | Visitors clicking for directions get wrong location. | Get exact coordinates from Lucas and update the embed URL. | **Yes** — needs real data |
| 8 | P1 | No opening hours | Visitors can't plan a visit without asking WhatsApp. | Add real hours to location section. | **Yes** — needs real data |
| 9 | P2 | Section order could be tighter | 16 sections on homepage. Some redundancy between Site Guide, Start Here, and Pathfinder. | Consolidate: merge Site Guide into Start Here, remove Pathfinder CTA section (integrate into result). | No — can fix now |
| 10 | P2 | WhatsApp floating label hidden on mobile | The label that addresses indecision is hidden on the device where WhatsApp is most used. | Show label on mobile too (adjust positioning). | No — can fix now |

---

## 5. First Screen / Hero Audit

### Current Diagnosis

The hero occupies 100vh with a dark cinematic overlay on a Buddha statue image. Content is left-aligned on desktop, centered on mobile. The headline is strong. The CTAs are clear. But the image fundamentally undermines the message.

### What Works
- **Headline:** "No vienes solo a entrenar. Vienes a construirte." — This is strong. It's personal, aspirational, and specific to fitness. Keep it.
- **Accent treatment:** The gold "Vienes a construirte" creates visual hierarchy. Good.
- **Location tag:** "COCHABAMBA · BOLIVIA" immediately grounds the visitor. Good.
- **CTA pair:** "Agendar visita por WhatsApp" (primary) + "Ver planes y precios" (ghost) — correct. One action-oriented, one information-oriented.
- **Scroll indicator:** Subtle gold line animation. Nice touch, not distracting.
- **Overlay gradient:** Dark left-to-right gradient ensures text readability. Well-calibrated.

### What Fails
- **Image:** A Buddha statue. This is not a gym. It's not a training space. It's not a person exercising. It's a decorative stone sculpture. The visitor's brain must work to reconcile "TEMPLO" + "Buddha" + "entrenar" — and the answer isn't obvious. This is the #1 failure on the entire site.
- **Subtitle:** "Guía, técnica y disciplina para construir un cuerpo que refleje tu meta." — Aspirational but abstract. Doesn't tell me what TEMPLO *is*. A gym? A class? Personal training?
- **Hero image alt text:** "Estatua Buda en piedra oscura — símbolo visual de TEMPLO" — This is descriptive but confirms the confusion. The alt text literally says "visual symbol" which implies the Buddha is symbolic, not literal.

### Recommended Layout Direction
Keep the current layout (left-aligned content, full-bleed background, dark overlay). It's correct for the brand. Only the image and subtitle need to change.

### Recommended Headline Direction
Keep: "No vienes solo a entrenar. Vienes a construirte."
This is strong. Don't change it.

### Recommended Subtitle Direction
**Current:** "Guía, técnica y disciplina para construir un cuerpo que refleje tu meta."

**Option A (direct):** "Entrenamiento guiado con Power Plate, calistenia y método en Cochabamba."
**Option B (aspirational + specific):** "Estudio de entrenamiento guiado. Power Plate, calistenia, fuerza y programa dirigido."
**Option C (minimal):** "Entrenamiento guiado · Cochabamba"

Option A is the strongest because it answers "what is TEMPLO?" within the first screen.

### Recommended Image Direction
A real photo of the TEMPLO interior. Dark, moody, cinematic lighting. Show the actual equipment (Power Plate, bars, weights) with negative space on the left side for the text overlay. No people needed in this shot — the space itself should convey premium, clean, intentional. Avoid: bright/clinical lighting, cluttered equipment, generic gym aesthetics.

---

## 6. Section-by-Section Audit

### 1. Hero (`#hero`)
**Verdict:** Keep. Change image and subtitle.
- **Problem:** Buddha image + abstract subtitle.
- **Fix:** Replace image with real TEMPLO interior. Replace subtitle with "Entrenamiento guiado con Power Plate, calistenia y método en Cochabamba."
- **Priority:** P0

### 2. Positioning (`#positioning`)
**Verdict:** Keep but integrate.
- **Problem:** One sentence occupies an entire section with full border treatment. Wastes vertical space.
- **Fix:** Either merge this sentence into the hero subtitle, or expand it to 2-3 sentences that add more substance about what TEMPLO is and who it's for.
- **Priority:** P2

### 3. Activity Reel (`#activity-reel`)
**Verdict:** Keep if real photos exist. Remove or minimize if only stock.
- **Problem:** 8 stock photo cards with labels duplicate information available in the Experiences section below. On mobile, this is ~400px of vertical space for decorative content.
- **Fix:** If real TEMPLO photos exist, keep the reel — it creates atmosphere. If only stock, remove this section entirely or replace with a single full-width atmospheric photo.
- **Priority:** P1 (depends on photography)

### 4. Community Metrics (`#metrics`)
**Verdict:** Repurpose or remove.
- **Problem:** "8 Coaches, 5 Experiencias, 6 Días, 1 Estudio" are features, not proof. A visitor doesn't derive trust from these numbers.
- **Fix:** Replace with real social proof metrics: "X personas entrenan en TEMPLO" or "X años de experiencia" or "X sesiones por semana." If no real numbers are available, remove this section.
- **Priority:** P2

### 5. Site Guide (`#guide`)
**Verdict:** Merge into Start Here or remove.
- **Problem:** 3 cards linking to Experiences, Method, Coaches — the same destinations available in the nav and in the Start Here section below. This creates redundancy.
- **Fix:** Merge the 3 cards into the Start Here section as the first step, or remove entirely since the nav already provides this navigation.
- **Priority:** P2

### 6. Start Here (`#start-here`)
**Verdict:** Keep. Strong section.
- **Problem:** Minor — the 4 steps (Experiences → Pathfinder → Plans → WhatsApp) are good, but Step 1 (Experiences) duplicates the Site Guide above.
- **Fix:** If Site Guide is removed, Start Here becomes the primary guided path. Adjust Step 1 to "Conoce las experiencias" with a brief one-liner about what TEMPLO offers.
- **Priority:** P3

### 7. Experiences Preview (`#experiencias`)
**Verdict:** Keep. Change images.
- **Problem:** 5 service cards with stock photos. The card layout, copy, and structure are excellent — only the images fail.
- **Fix:** Replace placeholder images with real TEMPLO photography for each service. Keep everything else.
- **Priority:** P1 (depends on photography)

### 8. Pathfinder (`#pathfinder`)
**Verdict:** Keep. Excellent conversion tool.
- **Problem:** None significant. The 3-step decision tree is well-implemented.
- **Fix:** Integrate the "Pathfinder CTA" section (currently separate) into the Pathfinder result view instead of having it as its own section. This removes one section from the page.
- **Priority:** P3

### 9. Pathfinder CTA (`#pathfinder-cta`)
**Verdict:** Merge into Pathfinder result.
- **Problem:** A separate section that says "¿Ya tienes una dirección?" with a WhatsApp button — right after the Pathfinder already shows a WhatsApp button in its result. Redundant.
- **Fix:** Move this copy into the Pathfinder result view. Remove the standalone section.
- **Priority:** P2

### 10. Plans (`#plans`)
**Verdict:** Keep. Strong section.
- **Problem:** Minor — 6 plan cards on mobile create a very long vertical scroll.
- **Fix:** Consider showing only 3-4 most popular plans by default, with a "Ver todos los planes" toggle. Or add a sticky "Consultar por WhatsApp" bar that follows the user as they scroll through plans.
- **Priority:** P3

### 11. After Write (`#after-write`)
**Verdict:** Merge into FAQ or remove.
- **Problem:** "¿Qué pasa después de escribirnos?" is a 4-step trust block. It's useful but occupies a full section for information that could fit in the FAQ.
- **Fix:** Add this as an FAQ item: "¿Qué pasa después de escribirles por WhatsApp?" with the same 4-step answer. Remove the standalone section.
- **Priority:** P3

### 12. Method Teaser (`#method`)
**Verdict:** Keep if method page is weak. Remove if method page is strong.
- **Problem:** The 3-pillar teaser (Disciplina, Técnica, Progresión) duplicates content from the Method page. The Method page already has all 5 pillars with more detail.
- **Fix:** If the Method page is well-structured (it is), remove this teaser from the homepage and link to the Method page from the nav and Start Here instead. This removes ~300px of homepage length.
- **Priority:** P2

### 13. Coaches Teaser (`#coaches`)
**Verdict:** Keep. Change photos.
- **Problem:** Lucas's portrait is a letter initial. Team coaches are names linked to WhatsApp. This is the right structure — only the imagery fails.
- **Fix:** Replace Lucas's initial with a real portrait photo. Keep the name-link format for team coaches (it's compact and functional).
- **Priority:** P1 (depends on photography)

### 14. Location (`#location`)
**Verdict:** Keep. Fix map and add hours.
- **Problem:** Placeholder Google Maps coordinates. No opening hours.
- **Fix:** Get exact coordinates from Lucas. Add real opening hours. Keep everything else.
- **Priority:** P1

### 15. FAQ (`#faq`)
**Verdict:** Keep. Expand.
- **Problem:** 7 items. Good start but could cover more objections.
- **Fix:** Add: "¿Qué pasa después de escribirles?" (from After-Write section), "¿Necesito experiencia previa?", "¿Puedo cambiar de plan?", "¿Tienen estacionamiento?" if relevant.
- **Priority:** P3

### 16. Final CTA (`#final-cta`)
**Verdict:** Keep. Good closer.
- **Problem:** None significant. The headline "Si tienes una meta, entrenar al azar no es suficiente" is strong.
- **Fix:** None needed.
- **Priority:** P3

---

## 7. Visual Upgrade Plan

### Typography
- **Current:** Montserrat for everything, Dharma Gothic C for 2 accent words. This is correct.
- **Issue:** Heading scale is too flat. H1 is `clamp(2.4rem, 6vw, 4.4rem)`, H2 is `clamp(2rem, 4.5vw, 3.2rem)`. The difference is subtle. On mobile, they look nearly identical.
- **Fix:** Increase H1 size or decrease H2 size to create more visual contrast. Consider H1 at `clamp(2.8rem, 7vw, 5rem)` or H2 at `clamp(1.6rem, 3.5vw, 2.4rem)`.
- **Body text:** Line-height 1.6–1.75 is good. No change needed.
- **Letter-spacing:** Uppercase labels at `0.28em` are slightly wide. Consider `0.2em` for a more refined feel.

### Spacing
- **Section padding:** `clamp(80px, 12vw, 160px)` — this is generous and creates breathing room. Good.
- **Issue:** Some sections have inconsistent internal padding. The Plans section cards have `clamp(20px, 2.5vw, 32px)` padding while Experience cards have `clamp(24px, 3vw, 40px)`. Minor but noticeable on desktop.
- **Fix:** Standardize card internal padding to `clamp(24px, 3vw, 36px)` across all card types.

### Color Usage
- **Gold accent:** Used well. Borders, badges, labels, hover states — consistent.
- **Issue:** The `--accent-subtle` (6% opacity gold) is almost invisible on dark backgrounds. The `--accent-soft` (10%) is also very faint.
- **Fix:** Consider increasing `--accent-subtle` to 8% and `--accent-soft` to 12% for better visibility on dark backgrounds.

### Buttons
- **Primary:** Gold background, dark text. Good contrast. `border-radius: 2px` — sharp, premium.
- **Ghost:** Transparent with white border. Good secondary option.
- **Issue:** The CTA pulse animation (`btn--primary::after`) is subtle but adds visual noise. On a dark page with gold accents, the pulsing gold glow can feel busy.
- **Fix:** Remove the pulse animation. Let the gold background speak for itself.

### Cards
- **Experience cards:** Vertical layout with image + body. Clean.
- **Pricing cards:** Compact with expandable details. Functional.
- **Issue:** Card borders use `rgba(255,255,255,0.04)` which is almost invisible. On dark backgrounds, cards blend into the page.
- **Fix:** Increase card border to `rgba(255,255,255,0.08)` for subtle but visible separation.

### Images
- **Current:** All Unsplash stock. Dark, moody, fitness-related. But generic.
- **Fix:** Replace with real TEMPLO photography. Maintain the dark/moody aesthetic but with authentic content.
- **Priority:** P0 — this is the #1 visual upgrade needed.

### Section Backgrounds
- **Pattern:** Alternating `--black` (#0a0a0a) and `--dark` (#0e0e0e). This is very subtle — the difference is almost imperceptible.
- **Fix:** Consider making the alternation more visible. Use `--dark` (#0e0e0e) and `--dark-2` (#161616) for more contrast between sections. Or use the gold-tinted subtle gradient (`rgba(212,168,83,0.03)`) more consistently as a section differentiator.

### Icons
- **Current:** Custom SVG icons for each experience (Power Plate, Calistenia, etc.) and method pillar. These are geometric, minimal, and gold. Good.
- **Issue:** Some icons are very abstract (the "Adaptado" icon looks like a chart, not fitness). The "Mujeres" icon is a stick figure.
- **Fix:** If real photography replaces the card images, the icons become less critical. If kept, consider more recognizable fitness-related symbols.

### Mobile Layout
- **Hero:** Content centers properly. CTA buttons stack. Good.
- **Navigation:** Hamburger menu with full-screen overlay. Functional.
- **Plans:** 1-column stack on mobile. 6 cards create ~1800px of vertical scroll. Long.
- **Fix:** Consider collapsible plan groups or a sticky WhatsApp bar during plan browsing.

### Footer
- **3-column:** Brand + Nav + Contact. Clean.
- **Issue:** Nav column duplicates main navigation. Contact column is just external links.
- **Fix:** Consider simplifying to 2 columns (Brand + Contact) and moving navigation links into the brand column.

### CTA Blocks
- **Current:** Gold buttons with uppercase text. Consistent.
- **Issue:** "Pathfinder CTA" section and "After Write" section are standalone CTA blocks that could be integrated into adjacent sections.
- **Fix:** Merge redundant CTA blocks. Reduce standalone CTA sections from 4 to 2.

---

## 8. Copywriting Improvement Plan

### Weak Copy → Stronger Replacements

**Hero Subtitle (current):**
> Guía, técnica y disciplina para construir un cuerpo que refleje tu meta.

**Why it's weak:** Abstract. Doesn't say what TEMPLO is. A visitor still doesn't know if this is a gym, personal training, or group classes.

**Replacements:**
- **Option A:** "Entrenamiento guiado con Power Plate, calistenia y método en Cochabamba."
- **Option B:** "Estudio de entrenamiento guiado. Power Plate, calistenia, fuerza y programa dirigido."
- **Option C:** "Entrenamiento guiado · Cochabamba"

**Recommended:** Option A — it's specific, answers "what," and includes location.

---

**Positioning Quote (current):**
> TEMPLO es un estudio de entrenamiento para personas con una meta.

**Why it's weak:** Not actually weak — this is strong copy. But it occupies an entire section for one sentence. It could be more impactful if expanded slightly.

**Replacement (if expanded):**
> TEMPLO es un estudio de entrenamiento guiado en Cochabamba. No es un gym abierto. No es una clase genica. Es un espacio donde cada sesión tiene dirección, técnica y un coach que te acompaña.

---

**Activity Reel Subtitle (current):**
> Movimiento, técnica y energía en un espacio diseñado para entrenar con dirección.

**Why it's weak:** Vague. "Movimiento, técnica y energía" could describe any gym.

**Replacement:**
> Power Plate, calistenia, fuerza funcional y programas dirigidos. Así se entrena en TEMPLO.

---

**Services Subtitle (current):**
> Power Plate, calistenia y programas enfocados se integran para construir un cuerpo más fuerte, capaz y disciplinado.

**Why it's weak:** "Programas enfocados" is vague. "Cuerpo más fuerte, capaz y disciplinado" is aspirational but generic.

**Replacement:**
> Cada experiencia tiene un formato, un coach y un objetivo distinto. Elegí la que va con tu meta.

---

**Plans Section Title (current):**
> Elige el entrenamiento que va con tu meta.

**Why it's weak:** Fine but generic.

**Replacement:**
> Planes y precios. Sin letra chica.

---

**Method Teaser Subtitle (current):**
> El entrenamiento cambia cuando deja de ser azar y empieza a tener método.

**Why it's weak:** "Deja de ser azar" is a strong phrase, but "empieza a tener método" is redundant with the section title.

**Replacement:**
> Disciplina, técnica y progresión. No improvisación.

---

**Final CTA Subtitle (current):**
> Agenda tu visita. Conoce el espacio. Empieza con dirección.

**Why it's weak:** Actually good. Keep it.

---

### CTA Copy Options

**Current primary CTA:** "Agendar visita por WhatsApp"

**Alternatives:**
- "Escribir por WhatsApp" (more casual)
- "Consultar disponibilidad" (implies limited spots)
- "Hablar con un coach" (more personal)
- "Empezar ahora" (more urgent)

**Recommended:** Keep "Agendar visita por WhatsApp" for the hero. Use "Consultar disponibilidad" for coach-specific CTAs. Use "Escribir por WhatsApp" for the floating button.

---

### Hero Headline Options

**Current:** "No vienes solo a entrenar. Vienes a construirte."

**This is strong. Don't change it.** It's personal, aspirational, and fitness-specific. It works.

**Alternatives (only if testing reveals the current one doesn't resonate):**
- "No entrenes al azar. Entrena con método."
- "Tu cuerpo necesita dirección. TEMPLO te la da."
- "Entrenar es fácil. Entrenar bien requiere guía."

---

## 9. Real Content / Asset Requirements

### Required Photos (Blocking for Launch)

| # | Asset | Where Used | Why It Matters | Min Quality |
|---|-------|------------|----------------|-------------|
| 1 | **TEMPLO interior — hero shot** | Homepage hero, OG image | First impression. Must show the actual space, not stock. | 4K, landscape, dark/moody lighting, negative space left |
| 2 | **Lucas Bustamante — founder portrait** | Coaches page, homepage coaches teaser | Founder credibility. People buy from people. | 800×800, square crop, professional or action shot |
| 3 | **Power Plate session** | Experiences page, homepage cards | Shows the actual equipment and experience | 800×600, shows TEMPLO's actual Power Plate |
| 4 | **Calistenia session** | Experiences page, homepage cards | Shows the actual bars/area | 800×600, shows TEMPLO's actual calistenia setup |
| 5 | **Women's training** | Experiences page, homepage cards | Shows the actual environment for this program | 800×600, shows TEMPLO's actual space |
| 6 | **Seniors session** | Experiences page, homepage cards | Shows the actual seniors program | 800×600, shows TEMPLO's actual setup |
| 7 | **Adapted training** | Experiences page, homepage cards | Shows the adapted training approach | 800×600 |
| 8 | **3-5 client testimonials** | Homepage (new section) or integrated into existing sections | Social proof. #1 conversion driver for fitness. | Name, plan, quote. Photo optional but adds credibility. |

### Optional Photos (Enhance but Don't Block)

| # | Asset | Where Used | Purpose |
|---|-------|------------|---------|
| 9 | Coach headshots (7 remaining) | Coaches page | Full team visibility |
| 10 | Community/group training shot | Activity reel, social proof | Shows energy and group dynamic |
| 11 | Equipment detail shots | Activity reel | Shows quality and variety |
| 12 | TEMPLO entrance/exterior | Location section | Helps visitors recognize the place |
| 13 | Founder coaching in action | Coaches page, about section | Shows Lucas in his element |

### Founder/Coach Information Needed

| Item | Why | Where Used |
|------|-----|------------|
| Lucas's full bio | Humanizes the brand | Coaches page |
| Coach certifications (if any) | Builds trust | Coaches page |
| Years of experience | Credibility | Coaches page, homepage |
| Instagram URLs for coaches | Social proof, personality | Coaches page |
| Coach specialties confirmed by team | Accuracy | Pathfinder, coaches page |

### Location Information Needed

| Item | Why | Where Used |
|------|-----|------------|
| Exact Google Maps coordinates | Visitors need to find the place | Location section embed |
| Exact opening hours | Visitors need to plan visits | Location section, Schema.org |
| Entrance description/photos | Helps visitors recognize the place | Location section |
| Parking information (if relevant) | Reduces friction | Location section, FAQ |
| Public transport access (if relevant) | Reduces friction | Location section |

### Service/Session Details Needed

| Item | Why | Where Used |
|------|-----|------------|
| Exact session durations per plan | Transparency | Plans section |
| Group size per experience (confirmed) | Sets expectations | Experiences page |
| Coach assignment per experience | Personalization | Pathfinder, experiences |
| Cancellation/rescheduling policy | Reduces friction | FAQ |

### Brand Assets Needed

| Item | Why | Where Used |
|------|-----|------------|
| Final logo files (if different from current) | Brand consistency | Nav, footer, favicon |
| Brand photography style guide | Ensures consistent imagery | All image areas |
| Dharma Gothic C font license confirmation | Legal compliance | CSS @font-face |

---

## 10. Conversion Flow Plan

### Ideal User Journey

```
Visitor lands → Hero (understands what TEMPLO is + location)
    ↓
Positioning (one clear statement about what TEMPLO is)
    ↓
Activity Reel / Atmosphere (feels the space)
    ↓
Experiences (sees the options)
    ↓
Pathfinder (finds the right fit)
    ↓
Plans (sees the price)
    ↓
FAQ (objections answered)
    ↓
WhatsApp CTA (takes action)
```

### Where Trust Should Be Built
1. **Hero** — authentic photo + clear subtitle
2. **After Experiences** — real photos of each service
3. **Before Plans** — social proof (testimonials or client count)
4. **Coaches section** — real photos + credentials
5. **Location section** — real map + hours + entrance photo

### Where CTAs Should Appear
1. **Hero** — primary CTA (WhatsApp) + secondary (plans)
2. **After Pathfinder result** — WhatsApp (already exists)
3. **After Plans** — WhatsApp (already exists)
4. **Final CTA** — WhatsApp (already exists)
5. **Floating button** — WhatsApp (already exists)

**CTAs to REMOVE:**
- Activity reel CTA (too early, no value delivered yet)
- Pathfinder CTA standalone section (redundant with Pathfinder result)
- Method teaser CTA (not a conversion point)
- Coaches teaser "Consultar disponibilidad" (redundant with coaches page)

**Net result:** Reduce from ~30 WhatsApp CTAs to ~10-12 strategic placements.

### Objections That Need Answering

| Objection | Where to Address | How |
|-----------|-----------------|-----|
| "Is this a real gym or just a concept?" | Hero + Location | Real photos, real address, real hours |
| "How much does it cost?" | Plans section | Already addressed — transparent pricing |
| "Is it for beginners?" | FAQ | Already addressed |
| "Will I get personal attention?" | Experiences page | Explain group sizes and coaching levels |
| "Who are the coaches?" | Coaches page | Real photos, real bios |
| "What happens after I message?" | After-Write or FAQ | 4-step process (already exists) |
| "Is it worth the price?" | Testimonials | Social proof from real clients |
| "Where exactly is it?" | Location section | Real map coordinates, entrance photo |

### How WhatsApp Should Be Positioned
WhatsApp should be positioned as **the natural next step**, not a sales pitch. Current positioning is correct: "Preguntar por WhatsApp," "Agendar visita," "Consultar disponibilidad." These are low-pressure, action-oriented CTAs.

**Do NOT change WhatsApp positioning to:**
- "¡Escríbenos ahora!" (too aggressive)
- "¡No pierdas esta oportunidad!" (hype)
- "Reserva tu lugar antes de que se llene" (false scarcity)

**Keep the current tone:** Calm, professional, inviting.

---

## 11. Local SEO / Discoverability Plan

### Missing Local SEO Elements
1. **Google Business Profile** — If TEMPLO doesn't have one, create it. This is the #1 local discovery channel.
2. **NAP consistency** — Name, Address, Phone must be identical everywhere (website, Google, social media).
3. **Local keywords in headings** — Currently no mention of "Cochabamba" in any H2 or H3. Only in the hero tag and Schema.org.
4. **Reviews on Google** — Encourage clients to leave Google reviews. These appear in local search results.

### Recommended Page Title Direction
**Current:** "TEMPLO — Estudio de Entrenamiento en Cochabamba"
**This is good.** Keep it.

### Recommended Meta Description Direction
**Current:** "TEMPLO: estudio de entrenamiento premium con Power Plate, calistenia, fuerza y método guiado en Cochabamba. Agenda tu visita por WhatsApp."
**This is good.** Keep it.

### Recommended Heading Improvements
- Add "Cochabamba" to at least one H2 on the homepage (e.g., "Entrenamiento guiado en Cochabamba" instead of "Conoce el camino antes de elegir")
- The Location section heading "Ven a conocernos" could include the neighborhood: "Ven a conocernos en [barrio]"

### Local Keywords to Consider (if accurate)
- entrenamiento guiado cochabamba
- power plate cochabamba
- calistenia cochabamba
- gimnasio boutique cochabamba
- entrenador personal cochabamba
- studio fitness cochabamba

### Google Maps / Business Profile
- Claim/create Google Business Profile with exact address
- Add photos to Google Business Profile (same as website photos)
- Add hours to Google Business Profile
- Encourage clients to leave reviews
- Add Google Maps link to website (already exists, but coordinates need fixing)

---

## 12. Mobile Polish Plan

### Hero
- **Current:** Content centers properly. CTA buttons stack vertically. Good.
- **Issue:** On very small screens (320px), the headline at `clamp(2.4rem, 6vw, 4.4rem)` may be tight.
- **Fix:** Test on 320px width. If cramped, reduce mobile headline to `clamp(2rem, 8vw, 2.8rem)`.

### Navigation
- **Current:** Hamburger menu with full-screen overlay. Focus trapped. Body overflow hidden. Good.
- **Issue:** The mobile menu links don't include "Planes" as a direct anchor — it says "Planes y precios" which links to `#plans`. This is correct.
- **Fix:** None needed.

### Typography
- **Current:** `clamp()` used throughout. Responsive.
- **Issue:** Section labels (`.section-label`) at `0.68rem` may be too small on mobile for touch readability.
- **Fix:** Consider increasing to `0.72rem` on mobile.

### CTA Placement
- **Current:** WhatsApp floating button is fixed bottom-right. Good.
- **Issue:** The floating label "¿No sabes qué elegir? Te orientamos" is hidden on mobile (`@media (min-width: 769px)`).
- **Fix:** Show the label on mobile too. Position it above the button or to the left. This label addresses indecision and should be visible where WhatsApp is most used.

### Images
- **Current:** Hero uses `<picture>` with mobile portrait crop. Activity reel cards scale down. Service cards stack.
- **Fix:** Ensure all placeholder images (when replaced with real photos) have proper mobile crops. Hero needs a portrait crop specifically for mobile.

### Section Spacing
- **Current:** `clamp(80px, 12vw, 160px)` section padding. On mobile (320px), this resolves to ~38px. Reasonable.
- **Issue:** Some sections (Plans, Experiences) have additional internal padding that makes them feel dense on mobile.
- **Fix:** Reduce internal card padding on mobile from `clamp(20px, 2.5vw, 32px)` to `16px` for a lighter feel.

### Footer
- **Current:** 3-column grid collapses to 1-column on mobile. Good.
- **Issue:** The footer has many links. On mobile, this creates a long scroll before the copyright line.
- **Fix:** Consider collapsible footer sections (click to expand nav/contact).

---

## 13. Implementation Roadmap

### Phase 2A — Immediate Polish (No New Assets Required)

These changes can be implemented now using existing code structure.

| # | Task | Files Affected | Impact | Risk | Acceptance Criteria |
|---|------|---------------|--------|------|---------------------|
| 1 | Rewrite hero subtitle to clarify what TEMPLO is | `index.html` | High | Low | Visitor understands TEMPLO is a training studio within 3 seconds |
| 2 | Reduce WhatsApp CTAs from ~30 to ~10-12 | `index.html` | Medium | Low | CTAs appear after Hero, Pathfinder, Plans, Final CTA, floating button. Remove from: reel, site guide, method teaser, coaches teaser, pathfinder-cta |
| 3 | Merge Pathfinder CTA into Pathfinder result | `index.html`, `script.js` | Medium | Low | "¿Ya tienes una dirección?" copy appears inside the Pathfinder result view |
| 4 | Merge After-Write into FAQ | `index.html` | Low | Low | "¿Qué pasa después de escribirles?" becomes an FAQ item. Standalone section removed. |
| 5 | Remove or reduce Method Teaser on homepage | `index.html` | Medium | Low | Either remove entirely (link to method page from nav) or reduce to a single-line CTA |
| 6 | Show WhatsApp floating label on mobile | `styles.css` | Medium | Low | Label visible on mobile, positioned above or left of the green button |
| 7 | Increase card border visibility | `styles.css` | Low | Low | Card borders at `rgba(255,255,255,0.08)` instead of `0.04` |
| 8 | Remove CTA pulse animation | `styles.css` | Low | Low | `btn--primary::after` animation removed |
| 9 | Increase heading scale contrast | `styles.css` | Medium | Low | H1 and H2 have more visible size difference |
| 10 | Expand Positioning section or merge into hero | `index.html` | Medium | Low | Either add 2-3 more sentences or merge the one sentence into hero subtitle |
| 11 | Add opening hours placeholder | `index.html` | Medium | Low | Location section shows "Lun–Vie 6:00–21:00, Sáb 7:00–13:00 (confirmar por WhatsApp)" |

**Files affected:** `index.html`, `styles.css`, `script.js`
**Expected impact:** Cleaner page flow, less CTA desperation, better first-screen clarity
**Risk level:** Low — all changes are content/CSS, no structural rewrites

### Phase 2B — Real-Content Upgrade (Depends on Photography + Business Data)

| # | Task | Files Affected | Impact | Risk | Acceptance Criteria |
|---|------|---------------|--------|------|---------------------|
| 12 | Replace hero image with real TEMPLO photo | `assets/`, `index.html` | Critical | Low | Hero shows actual TEMPLO interior, dark/moody, with negative space for text |
| 13 | Replace coach photos with real headshots | `assets/placeholders/`, coach pages | Critical | Low | Lucas has a real portrait. Other coaches have real photos or keep initials. |
| 14 | Replace service card images with real photos | `assets/placeholders/` | High | Low | Each of 5 services has a real TEMPLO photo |
| 15 | Replace activity reel images with real photos | `assets/placeholders/` | High | Low | 8 reel cards show real TEMPLO training moments |
| 16 | Add 3-5 real client testimonials | `index.html` | Critical | Low | Testimonials include name, plan, and quote. Photo optional. |
| 17 | Fix Google Maps coordinates | `index.html` | High | Low | Embed shows actual TEMPLO location |
| 18 | Add confirmed opening hours | `index.html`, Schema.org | High | Low | Hours displayed in location section and structured data |
| 19 | Add coach Instagram URLs | `script.js`, `coaches/index.html` | Medium | Low | Real Instagram links for each coach |
| 20 | Update OG image with real photo | `index.html`, subpages | Medium | Low | OG image shows TEMPLO brand, not Buddha |
| 21 | Add Google Business Profile | External | High | Medium | GBP created with address, hours, photos |

**Files affected:** All HTML files, `assets/`, `script.js`
**Expected impact:** Transforms site from template to real business
**Risk level:** Low — replacing content, not structure

### Phase 2C — Post-Launch Optimization

| # | Task | Files Affected | Impact | Risk | Acceptance Criteria |
|---|------|---------------|--------|------|---------------------|
| 22 | Add analytics (Plausible or GA4) | All HTML files | Medium | Low | Tracking active, events configured for WhatsApp clicks |
| 23 | Add FAQ structured data (FAQPage schema) | `index.html` | Medium | Low | FAQ appears in search results |
| 24 | Split CSS into page-specific files | `styles.css` | Low | Medium | Shared base + page-specific CSS |
| 25 | Add `package.json` with minification scripts | Project root | Low | Low | CSS/JS minified for production |
| 26 | Consider A/B testing hero subtitle | `index.html` | Medium | Medium | Test "Option A" vs current subtitle |
| 27 | Add client transformation section (if data available) | `index.html` | High | Medium | Before/after or progress stories |
| 28 | Add Instagram feed integration | `index.html` | Medium | Medium | Real recent posts displayed |
| 29 | Create blog/content section for SEO | New pages | Medium | High | 3-5 articles about training, nutrition, etc. |
| 30 | Evaluate migration to static site generator | Project structure | Low | High | Only if maintenance becomes painful |

---

## 14. Acceptance Criteria

### Ready for Private Preview
- [x] Site loads without errors on all 4 pages
- [x] WhatsApp links work correctly
- [x] Mobile menu functions properly
- [x] Pathfinder produces recommendations
- [x] Pricing is accurate
- [ ] Hero image is real (not Buddha) — **BLOCKED on photography**
- [ ] At least Lucas has a real portrait — **BLOCKED on photography**
- [ ] Opening hours displayed — **BLOCKED on business data**
- [ ] Google Maps shows correct location — **BLOCKED on business data**

### Ready for Public Launch
- [ ] All of "Private Preview" criteria met
- [ ] All 5 service images are real TEMPLO photos
- [ ] 3-5 real client testimonials displayed
- [ ] All coach photos are real (or explicitly designed as abstract)
- [ ] Custom domain configured (not Vercel preview URL)
- [ ] Google Business Profile created
- [ ] OG image is brand-appropriate (not Buddha)
- [ ] Opening hours confirmed and displayed

### Ready for Portfolio Showcase
- [ ] All of "Public Launch" criteria met
- [ ] Page loads in under 3 seconds on 3G
- [ ] Lighthouse score: Performance 90+, Accessibility 90+, SEO 90+
- [ ] No placeholder images remain
- [ ] CSS/JS minified
- [ ] Analytics configured

### Ready for Client Acquisition
- [ ] All of "Portfolio" criteria met
- [ ] Google reviews integrated or displayed
- [ ] Testimonials include photos
- [ ] Instagram feed active
- [ ] Blog/content section exists for SEO
- [ ] Conversion funnel tracked end-to-end

---

## 15. Final Recommendation

### Is the site worth improving?
**Yes.** The foundation is strong. The architecture, conversion flow, copywriting, and visual direction are all above average for a local fitness business. The gap is content, not capability.

### Is it ready to show privately?
**With reservations.** Show it to people who understand it's a work in progress. Do NOT show it to potential clients expecting a finished product. The Buddha hero image and initial-only coaches will create confusion.

### Is it ready to launch publicly?
**No.** The placeholder imagery and absence of social proof would actively damage credibility. A competitor with an Instagram page and real photos would inspire more confidence.

### What must happen before launch?
1. Real hero photo (TEMPLO interior)
2. Real coach photo (at minimum Lucas)
3. 3 real testimonials
4. Custom domain
5. Opening hours

### What should not be wasted time on?
- Migrating to a framework (React, Next.js)
- Adding a CMS
- Complex animations or parallax
- English language version
- Blog/content creation (until after launch)
- Splitting CSS into modules (until after launch)
- Adding analytics (until after launch)

### What is the next best action?
**Schedule a 2-hour photography session at TEMPLO.** Shoot: the space (hero), Lucas (portrait), 3 training sessions (service cards), and ask 3 clients for a quote + photo. That single afternoon would move this project from 5.5 to 8.0.

---

*End of Phase 2 report.*
