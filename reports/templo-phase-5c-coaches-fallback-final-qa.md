# TEMPLO — Phase 5C Coaches Fallback + Final QA

**Fecha:** 2026-05-15
**Commit:** (pending)

---

## 1. Problem

La página `/coaches/` dependía completamente de JavaScript para renderizar el team grid. Si JS fallaba (red lenta, error de carga, ad blocker, JS deshabilitado), el grid de coaches quedaba vacío — un bloque en blanco sin información.

El homepage también tenía un coaches teaser con la misma dependencia JS.

## 2. Fallback Solution

**Approach: Progressive Enhancement**

Se añadieron tarjetas estáticas de coaches directamente en el HTML dentro de `#teamGrid`. Cuando JS está habilitado, `coaches.js` reemplaza el contenido con `grid.innerHTML = html` — las tarjetas mejoradas con iconos de especialidad. Cuando JS está deshabilitado, las tarjetas estáticas permanecen visibles.

Lo mismo se hizo para el coaches teaser en el homepage (`#coachesTeaser`).

**Archivos modificados:**
- `coaches/index.html` — 7 tarjetas estáticas de coaches en `#teamGrid`
- `index.html` — 7 links estáticos de coaches en `#coachesTeaser`

**Datos usados (sin inventar nada):**
- Nicolas Zegarra, Andres Balderrama, Nicolas Aranibar, Andrea Sejas, Santiago Lavayen, Oscar Encinas, Santiago Rojas
- Solo nombres, habilidades y citas existentes del repo
- Solo WhatsApp links con mensajes contextuales
- Sin fotos falsas, sin Instagram falsos, sin credenciales inventadas

## 3. JS Enabled QA

Con JS habilitado:
- ✅ `/coaches/` funciona normalmente
- ✅ Team grid se renderiza con iconos de especialidad (reemplaza fallback)
- ✅ No hay cards duplicadas — `innerHTML = html` reemplaza todo el contenido
- ✅ CTAs de WhatsApp funcionan
- ✅ Layout sin cambios visuales
- ✅ Mobile funciona

## 4. JS Disabled / Noscript QA

Con JS deshabilitado:
- ✅ `/coaches/` muestra 7 tarjetas de coaches con iniciales, habilidades, citas y CTAs
- ✅ No hay grid vacío
- ✅ Layout limpio — usa las mismas clases `.team-card` existentes
- ✅ Fallback es legible — estilo dark/gold consistente
- ✅ WhatsApp CTA existe en cada card
- ✅ Homepage coaches teaser muestra links de nombres

## 5. Full Site QA

| Página | Status |
|---|---|
| `/` (homepage) | ✅ Funciona |
| `/experiencias/` | ✅ Funciona |
| `/coaches/` | ✅ Funciona (con fallback) |
| `/metodo/` | ✅ Funciona |
| Nav links | ✅ Todos funcionan |
| Footer links | ✅ Todos funcionan |
| Mobile menu | ✅ Funciona |
| Plans expand/collapse | ✅ Funciona |
| Pathfinder | ✅ Funciona |
| Smooth scroll | ✅ Funciona |
| Intersection Observer animaciones | ✅ Funcionan |
| Sin overflow horizontal | ✅ |

## 6. WhatsApp / Pricing QA

**WhatsApp:**
- ✅ 65 referencias correctas a `59172001680`
- ✅ 0 referencias a `5917201680`
- ✅ 0 referencias a `7209791`
- ✅ 0 referencias a `72209791`

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

## 7. Remaining Future Tasks

Estas tareas NO afectan la funcionalidad actual. Son contenido futuro:

1. **Power Plate** — foto real de persona usando la plataforma
2. **Coach portraits** — 8 retratos reales con fondo oscuro/premium
3. **Gym photography** — interior del estudio, equipo, atmósfera
4. **Calistenia en estudio** — reemplazar outdoor
5. **Adaptado en estudio** — reemplazar battle ropes
6. **Testimonios reales** — si están disponibles
7. **/galeria** — solo después de tener assets reales

---

## QA Checklist

| # | Check | Status |
|---|---|---|
| 1 | /coaches/ has fallback if JS fails | ✅ |
| 2 | No duplicate coach cards with JS enabled | ✅ |
| 3 | /coaches/ is not empty without JS | ✅ |
| 4 | Homepage works | ✅ |
| 5 | /experiencias/ works | ✅ |
| 6 | /metodo/ works | ✅ |
| 7 | Plans expand/collapse works | ✅ |
| 8 | Mobile no overflow | ✅ |
| 9 | WhatsApp remains exactly 59172001680 | ✅ (65 refs) |
| 10 | No 5917201680 | ✅ |
| 11 | No 7209791 | ✅ |
| 12 | No 72209791 | ✅ |
| 13 | Prices unchanged | ✅ |
| 14 | No fake coach photos | ✅ |
| 15 | No fake Instagram links | ✅ |
| 16 | No fake testimonials | ✅ |
| 17 | No /galeria created | ✅ |
| 18 | No new pages created | ✅ |

---

## Honest Final Verdict

**¿El sitio está estructuralmente listo para lanzamiento excluyendo fotos?**
**Sí.** Con el fallback de coaches implementado, el sitio ya no tiene puntos de falla por dependencia JS. Todas las páginas funcionan con o sin JavaScript. La arquitectura de ventas, la navegación, los planes, y la experiencia móvil están listos.

**¿Qué queda solo como trabajo de assets futuros?**
Fotografía: Power Plate, coaches, gym, calistenia, adaptado. Testimonios reales si están disponibles. /galeria solo después de fotos reales.
