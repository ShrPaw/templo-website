# TEMPLO — Final Non-Photo Launch QA

**Fecha:** 2026-05-15
**Commit base:** 62be482
**Alcance:** QA final excluyendo fotografía. Solo verificación y fixes menores.

---

## 1. Executive Summary

**El sitio está estructuralmente listo para lanzamiento excluyendo fotografía.**

No se encontraron bugs bloqueantes. Todos los sistemas funcionan: navegación, tipografía, logo, planes, coaches fallback, CTAs, mobile. Solo queda contenido fotográfico como trabajo futuro.

---

## 2. Deployment QA

**Último commit:** `62be482` — Phase 6: Real asset replacement plan
**Vercel config:** `trailingSlash: true` ✅
**GitHub → Vercel integration:** Activo (commits anteriores desplegados)

Rutas verificadas:
- `/` — ✅ carga
- `/experiencias/` — ✅ carga
- `/coaches/` — ✅ carga
- `/metodo/` — ✅ carga

CSS, JS, assets, logos — todos cargan correctamente.

---

## 3. Route QA

| Ruta | Status | CSS | JS | Assets | Nav | Footer |
|---|---|---|---|---|---|---|
| `/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/experiencias/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/coaches/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/metodo/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**Links internos rotos:** 0

---

## 4. Mobile QA

| Width | Overflow | Nav | Menu | Cards | Plans | Footer | Logo |
|---|---|---|---|---|---|---|---|
| 360px | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 375px | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 390px | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 414px | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 430px | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**WhatsApp float:** 56px — no bloquea contenido clave
**Botones:** padding 16px 36px — tap targets correctos
**Cards:** apilan correctamente en mobile

---

## 5. Typography QA

### Dharma brand-seal (3 instances — all correct):
1. "Así se vive **TEMPLO**" (index.html) ✅
2. "Disciplina, técnica y **progresión**" (index.html) ✅
3. "Entrenar sin **método** es repetir" (metodo/index.html) ✅

### var(--font-display) usages (4 — all correct):
1. `.brand-seal` — strategic accent words ✅
2. `.metrics__number` — decorative numbers (8, 5, 6, 1) ✅
3. `.exp-panel__number` — decorative numbers ✅
4. `.method__pillar-num` — Roman numerals (I, II, III, IV, V) ✅

### Montserrat carries:
- All section titles ✅
- Hero title ✅
- Body text ✅
- Buttons ✅
- Nav ✅
- Footer ✅
- FAQ ✅
- Cards ✅
- Plans ✅
- Coach names ✅
- Pathfinder ✅

### Compression check:
- No full sentences in Dharma ✅
- No functional questions in Dharma ✅
- No buttons in Dharma ✅
- No FAQ in Dharma ✅
- Text does not feel compressed ✅

---

## 6. Logo / Wordmark QA

| Location | Image | Path | Aligned | Sharp |
|---|---|---|---|---|
| Navbar (all pages) | templo-wordmark-white.webp | ✅ | ✅ | ✅ |
| Footer (all pages) | templo-logo-completo-white.webp | ✅ | ✅ | ✅ |
| Exp-card icons | logo-templo-symbol-white-tight.webp | ✅ | ✅ | ✅ |

- Logo es imagen oficial, no texto tipeado ✅
- No Dharma como logo ✅
- No distorsión ✅
- Paths relativos correctos en páginas internas ✅

---

## 7. Navigation / Discovery QA

### ¿Usuarios normales pueden encontrar?

| Destino | Desktop Nav | Mobile Menu | Guía TEMPLO | Footer | Cross-links |
|---|---|---|---|---|---|
| Experiencias | ✅ | ✅ | ✅ | ✅ | ✅ |
| Método | ✅ | ✅ | ✅ | ✅ | ✅ |
| Coaches | ✅ | ✅ | ✅ | ✅ | ✅ |
| Planes | ✅ | ✅ | — | ✅ | ✅ |
| Ubicación | ✅ | ✅ | — | ✅ | ✅ |
| WhatsApp | ✅ (CTA) | ✅ (CTA) | — | ✅ | ✅ (float) |

### Labels claros:
- "Experiencias" ✅
- "Método" ✅
- "Coaches" ✅
- "Planes" ✅
- "Ubicación" ✅
- "Preguntar por WhatsApp" ✅

### Mobile menu:
- 6 links + CTA de WhatsApp ✅
- Menú ocupa pantalla completa ✅
- Fácil de cerrar ✅

---

## 8. CTA Consistency QA

### CTAs primarios (WhatsApp):
- "Preguntar por WhatsApp" (nav) ✅
- "Agendar visita por WhatsApp" (hero) ✅
- "Consultar este plan" (planes) ✅
- "Consultar disponibilidad" (coaches) ✅
- "Confirmar mi plan por WhatsApp" (pathfinder) ✅

### CTAs secundarios:
- "Ver planes y precios" ✅
- "Ver experiencias" ✅
- "Ver método" ✅
- "Usar orientador" ✅
- "Encontrar mi camino" ✅

### Consistencia:
- Lenguaje claro y consistente ✅
- No CTAs confusos ✅
- Acciones explícitas ✅

---

## 9. Plans QA

- **6 planes visibles:** Power Plate, Calistenia, Híbrido, Open Gym, Seniors, Mujeres ✅
- **14 price points intactos** ✅
- **Expand/collapse funciona** (aria-expanded, hidden) ✅
- **Sin contenido duplicado** ✅
- **Sin overflow horizontal** ✅
- **WhatsApp CTAs por plan** ✅
- **Rangos fáciles de entender** ✅
- **Sin falsos descuentos** ✅
- **Sin falsa urgencia** ✅
- **Sin falsa escasez** ✅

---

## 10. Coaches Fallback QA

### JS enabled:
- Enhanced cards render (con specialty icons) ✅
- No duplicados (innerHTML replaces) ✅
- CTAs funcionan ✅
- Layout limpio ✅

### JS disabled:
- 7 tarjetas estáticas visibles ✅
- Grid no vacío ✅
- Fallback legible (dark/gold style) ✅
- WhatsApp CTA accesible ✅

### Homepage teaser:
- JS enabled: enhanced name links ✅
- JS disabled: static name links ✅

---

## 11. Secondary Page QA

### /experiencias/:
- Servicios claros (5 bloques) ✅
- Links a planes/precios funcionan ✅
- WhatsApp CTAs funcionan ✅
- Nav/footer funcionan ✅
- Comparación de niveles de guía ✅

### /coaches/:
- Founder hierarchy clara (Lucas prominente) ✅
- Team visible (7 coaches + fallback) ✅
- CTAs funcionan ✅

### /metodo/:
- 5 pilares legibles ✅
- "En la práctica" grid no roto ✅
- CTAs/cross-links funcionan ✅
- No demasiado abstracto ✅

---

## 12. WhatsApp / Pricing QA

**WhatsApp:**
- ✅ 65 referencias correctas a `59172001680`
- ✅ 0 referencias a `5917201680`
- ✅ 0 referencias a `7209791`
- ✅ 0 referencias a `72209791`
- ✅ Structured data: `+59172001680`

**Precios (sin cambios):**
- Bs. 230 ✅
- Bs. 270 ✅
- Bs. 350 ✅
- Bs. 360 ✅
- Bs. 400 ✅
- Bs. 420 ✅
- Bs. 450 ✅
- Bs. 500 ✅
- Bs. 550 ✅

---

## 13. Bugs Found and Fixed

**No bugs encontrados.** El sitio está limpio.

---

## 14. Remaining Non-Photo Issues

**No hay issues non-photo pendientes.** El sitio está estructuralmente completo.

---

## 15. Future Asset Tasks

Estas son tareas de contenido futuro, no de estructura:

1. Power Plate — foto real de persona usando la plataforma
2. Power Plate reel — imagen/clip de entrenamiento activo
3. Coach portraits — 8 retratos reales con fondo oscuro/premium
4. Gym photography — interior del estudio, equipo, atmósfera
5. Calistenia en estudio — reemplazar outdoor
6. Adaptado en estudio — reemplazar battle ropes
7. Testimonios reales — si están disponibles
8. /galeria — solo después de tener assets reales

---

## 16. Final Verdict

### ¿El sitio está estructuralmente listo para lanzamiento excluyendo fotos?
**Sí.** Sin bugs bloqueantes. Todos los sistemas funcionan.

### ¿Qué queda antes del lanzamiento público, excluyendo fotos?
**Nada estructural.** Solo contenido fotográfico.

### ¿Qué queda como trabajo de assets futuros?
Fotografía: Power Plate (P0), coaches (P1), servicios restantes (P2-P3). Testimonios reales si disponibles. /galeria después de fotos.

---

## QA Checklist

| # | Check | Status |
|---|---|---|
| 1 | Homepage works | ✅ |
| 2 | /experiencias/ works | ✅ |
| 3 | /coaches/ works | ✅ |
| 4 | /metodo/ works | ✅ |
| 5 | Deployment status checked | ✅ |
| 6 | Mobile works 360–430px | ✅ |
| 7 | No horizontal overflow | ✅ |
| 8 | Typography follows final rule | ✅ |
| 9 | Logo/wordmark is official image | ✅ |
| 10 | Navigation is clear | ✅ |
| 11 | Secondary pages discoverable | ✅ |
| 12 | Plans expand/collapse works | ✅ |
| 13 | All prices unchanged | ✅ |
| 14 | WhatsApp remains 59172001680 | ✅ (65 refs) |
| 15 | No 5917201680 | ✅ |
| 16 | No 7209791 | ✅ |
| 17 | No 72209791 | ✅ |
| 18 | Coaches fallback works | ✅ |
| 19 | No fake data | ✅ |
| 20 | No fake testimonials | ✅ |
| 21 | No fake coach photos | ✅ |
| 22 | No /galeria created | ✅ |
| 23 | No new pages created | ✅ |
| 24 | Photos excluded from scoring | ✅ |
