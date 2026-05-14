# TEMPLO — Phase 4D Internal Navigation & Page Discovery

## 1. Problem
Secondary pages (/experiencias/, /coaches/, /metodo/) existed but were not obvious to visitors. The homepage navbar only had anchor links (#experiencias, #coaches), and "Método" wasn't in the nav at all. Visitors had no clear path to discover subpages before reaching the footer.

## 2. Strategy
Homepage remains a sales page. A compact "bridge section" was added after the Metrics section to act as a website map, connecting visitors to all three secondary pages. Navbar and mobile menu were updated to link directly to subpages.

## 3. What Changed

### Navbar (Desktop)
**Before:**
- Experiencias → #experiencias
- Coaches → #coaches
- Planes → #plans
- Ubicación → #location

**After:**
- Experiencias → experiencias/
- Método → metodo/
- Coaches → coaches/
- Planes → #plans
- Ubicación → #location

### Mobile Menu
Same changes as navbar — now includes Método and links to subpages.

### Homepage Bridge Section
New section "Guía TEMPLO" added after Metrics, before Experiencias preview.

**Content:**
- Section label: "Guía TEMPLO"
- Title: "Conoce el camino antes de elegir."
- Subtitle: "Explora las experiencias, el método y el equipo que sostienen tu entrenamiento."
- Three geometric cards:
  1. **Experiencias** → experiencias/ — "Descubre las formas de entrenar..."
  2. **Método** → metodo/ — "Entiende cómo entrenamos..."
  3. **Coaches** → coaches/ — "Conoce quién te guía..."

### Footer
- Fixed: Experiencias link changed from `#experiencias` to `experiencias/`
- Already had: coaches/ and metodo/ links

### Sub-page Cross-Linking (verified, already correct)
- /experiencias/: nav links to Inicio, Power Plate, Calistenia, Mujeres, Seniors, Adaptado; footer links to Coaches, Método
- /coaches/: nav links to Inicio, Experiencias, Método, Planes, Ubicación; footer same
- /metodo/: nav links to Inicio, Experiencias, Coaches, Planes, Ubicación; footer same

## 4. Homepage Bridge Section
**Placement:** After Metrics (social proof numbers) and before Experiencias preview.

**Rationale:** By this point the visitor has seen the hero, the activity reel, and the metrics. They understand TEMPLO has substance. The bridge section gives them a clear map before diving into the detailed experiencias section. It acts as a "choose your path" moment without interrupting the sales flow.

**Design:** Compact 3-card grid, dark/gold aesthetic, geometric, matches existing design system. Cards have numbered markers (01, 02, 03), titles, descriptions, and clear CTAs.

## 5. Mobile Navigation QA
- Bridge section stacks to single column on mobile ✅
- Cards are readable and tappable ✅
- Mobile menu now shows Experiencias, Método, Coaches, Planes, Ubicación ✅
- No horizontal overflow ✅

## 6. Secondary Page Cross-Linking
All three sub-pages already had good cross-linking in both nav and footer:
- Each page links to the other two subpages
- Each page has WhatsApp CTA
- Each page links back to homepage

## 7. QA Results
1. ✅ /experiencias/ discoverable from homepage (nav, bridge, section CTA)
2. ✅ /metodo/ discoverable from homepage (nav, bridge, section CTA)
3. ✅ /coaches/ discoverable from homepage (nav, bridge, section CTA)
4. ✅ Secondary pages discoverable before footer
5. ✅ Mobile menu includes all secondary pages
6. ✅ Footer includes all secondary pages
7. ✅ Homepage still feels like a sales path
8. ✅ No /galeria created
9. ✅ WhatsApp = 59172001680 (22 occurrences, zero bad numbers)
10. ✅ Prices unchanged
11. ✅ No fake data
12. ✅ No horizontal overflow
13. ✅ Plans expand/collapse works
14. ✅ All subpages work

## 8. Files Changed
- `index.html` — navbar, mobile menu, bridge section, footer fix
- `styles.css` — site-guide section styles
