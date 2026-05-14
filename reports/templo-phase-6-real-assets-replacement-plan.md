# TEMPLO — Phase 6 Real Asset Replacement Plan

**Fecha:** 2026-05-15
**Alcance:** Plan de reemplazo de imágenes placeholder con fotografía real de TEMPLO. Sin cambios de código — solo planificación.

---

## 1. Image Inventory

### Brand / Logo Assets (KEEP — no reemplazo necesario)
| Archivo | Uso | Status |
|---|---|---|
| `assets/brand/templo-wordmark-white.webp` | Navbar logo (todas las páginas) | ✅ KEEP — wordmark oficial |
| `assets/brand/templo-logo-completo-white.webp` | Footer logo (todas las páginas) | ✅ KEEP — logo oficial |
| `assets/logo-templo-symbol-white-tight.webp` | Icono en exp-card learn links | ✅ KEEP — símbolo oficial |
| `assets/favicon-*.png/svg` | Favicon | ✅ KEEP |

### Hero / Identity Assets (KEEP)
| Archivo | Uso | Status |
|---|---|---|
| `assets/BUDDHA-desktop.webp` | Hero background (desktop) | ✅ KEEP — identidad de marca |
| `assets/BUDDHA-mobile-portrait.webp` | Hero background (mobile) | ✅ KEEP — identidad de marca |
| `assets/BUDDHA-mobile.webp` | Hero mobile variant | ✅ KEEP |
| `assets/BUDDHA-og.webp` | Open Graph social sharing | ✅ KEEP |
| `assets/BUDDHA.png` | Source/original | ✅ KEEP |

### Service Card Images (REPLACE)
| Archivo | Uso | Prioridad | Problema |
|---|---|---|---|
| `assets/placeholders/powerplate.webp` | Power Plate card (homepage + /experiencias/) | 🔴 P0 | Persona sentada pasivamente, no muestra servicio |
| `assets/placeholders/calistenia.webp` | Calistenia card (homepage + /experiencias/) | 🟡 P2 | Outdoor, no en TEMPLO |
| `assets/placeholders/mujeres.webp` | Mujeres card (homepage + /experiencias/) | ✅ P3 | Aceptable — cable crossover en gym |
| `assets/placeholders/seniors.webp` | Seniors card (homepage + /experiencias/) | ✅ P3 | Aceptable — máquina de fuerza |
| `assets/placeholders/adaptado.webp` | Adaptado card (homepage + /experiencias/) | ✅ P3 | Aceptable — silla de ruedas usando equipo |

### Activity Reel Images (REPLACE)
| Archivo | Uso | Prioridad | Problema |
|---|---|---|---|
| `assets/placeholders/reel-powerplate.webp` | Reel: Power Plate (×2) | 🔴 P0 | Artes marciales, no Power Plate |
| `assets/placeholders/reel-calistenia.webp` | Reel: Calistenia (×2) | 🟡 P2 | Outdoor |
| `assets/placeholders/reel-mujeres.webp` | Reel: Mujeres (×2) | ✅ P3 | Aceptable |
| `assets/placeholders/reel-seniors.webp` | Reel: Seniors (×2) | ✅ P3 | Aceptable |
| `assets/placeholders/reel-adaptado.webp` | Reel: Adaptado (×2) | 🟡 P2 | Battle ropes outdoor |
| `assets/placeholders/reel-fuerza.webp` | Reel: Fuerza (×2) | ✅ P3 | Aceptable |
| `assets/placeholders/reel-comunidad.webp` | Reel: Comunidad (×2) | ✅ P3 | Excelente — coach + grupo |
| `assets/placeholders/reel-tecnica.webp` | Reel: Técnica (×2) | ✅ P3 | Aceptable |

### Coach Portrait Images (REPLACE)
| Archivo | Uso | Prioridad | Problema |
|---|---|---|---|
| `assets/placeholders/coach-lucas.webp` | Founder card + coaches page | 🟡 P2 | Placeholder con inicial, no retrato real |
| `assets/placeholders/coach-nicolas-z.webp` | Coaches page | 🟡 P2 | Idem |
| `assets/placeholders/coach-andres.webp` | Coaches page | 🟡 P2 | Idem |
| `assets/placeholders/coach-nicolas-a.webp` | Coaches page | 🟡 P2 | Idem |
| `assets/placeholders/coach-andrea.webp` | Coaches page | 🟡 P2 | Idem |
| `assets/placeholders/coach-santiago-l.webp` | Coaches page | 🟡 P2 | Idem |
| `assets/placeholders/coach-oscar.webp` | Coaches page | 🟡 P2 | Idem |
| `assets/placeholders/coach-santiago-r.webp` | Coaches page | 🟡 P2 | Idem |

### Unused Assets (NOT REFERENCED)
| Archivo | Status |
|---|---|
| `assets/placeholders/energy-01.webp` through `energy-06.webp` | No usados en HTML |
| `assets/placeholders/lifestyle-01.webp` through `lifestyle-04.webp` | No usados en HTML |
| `assets/hero.svg` | No usado |
| `assets/space-main.svg` | No usado |
| `assets/space-calisthenics.svg` | No usado |
| `assets/space-weights.svg` | No usado |
| `assets/lucas.svg` | No usado |
| `assets/community-1.svg` through `community-6.svg` | No usados |

---

## 2. Priority Replacement List

### 🔴 P0 — MUST REPLACE (bloquea comunicación del servicio)

| # | Imagen actual | Servicio | Problema | Reemplazo requerido |
|---|---|---|---|---|
| 1 | `powerplate.webp` | Power Plate | Persona sentada pasivamente, entorno doméstico | Persona activa en plataforma Power Plate, estudio TEMPLO |
| 2 | `reel-powerplate.webp` | Power Plate reel | Artes marciales, no Power Plate | Close-up de persona en Power Plate, movimiento activo |

### 🟡 P1 — SHOULD REPLACE (mejora comunicación)

| # | Imagen actual | Servicio | Problema | Reemplazo requerido |
|---|---|---|---|---|
| 3 | `coach-lucas.webp` | Coach Lucas | Placeholder con inicial | Retrato vertical, fondo oscuro, postura confidencial |
| 4 | `coach-nicolas-z.webp` | Coach Nicolas Z | Idem | Idem |
| 5 | `coach-andres.webp` | Coach Andres | Idem | Idem |
| 6 | `coach-nicolas-a.webp` | Coach Nicolas A | Idem | Idem |
| 7 | `coach-andrea.webp` | Coach Andrea | Idem | Idem |
| 8 | `coach-santiago-l.webp` | Coach Santiago L | Idem | Idem |
| 9 | `coach-oscar.webp` | Coach Oscar | Idem | Idem |
| 10 | `coach-santiago-r.webp` | Coach Santiago R | Idem | Idem |

### 🟡 P2 — CAN REPLACE (mejora calidad visual)

| # | Imagen actual | Servicio | Problema | Reemplazo requerido |
|---|---|---|---|---|
| 11 | `calistenia.webp` | Calistenia card | Outdoor, no TEMPLO | Barra/dominadas en estudio TEMPLO |
| 12 | `reel-calistenia.webp` | Calistenia reel | Outdoor | Movimiento de barra en TEMPLO |
| 13 | `reel-adaptado.webp` | Adaptado reel | Battle ropes outdoor | Ejercicio controlado en estudio con coach |

### ✅ P3 — ACCEPTABLE (reemplazar cuando haya fotos reales)

| # | Imagen actual | Servicio | Status |
|---|---|---|---|
| 14 | `mujeres.webp` | Mujeres card | Cable crossover — comunica bien |
| 15 | `seniors.webp` | Seniors card | Máquina de fuerza — comunica bien |
| 16 | `adaptado.webp` | Adaptado card | Silla de ruedas usando equipo — comunica bien |
| 17 | `reel-mujeres.webp` | Mujeres reel | Dumbbell curls — comunica bien |
| 18 | `reel-seniors.webp` | Seniors reel | Cable row — comunica bien |
| 19 | `reel-fuerza.webp` | Fuerza reel | Dumbbell row — comunica bien |
| 20 | `reel-comunidad.webp` | Comunidad reel | Grupo con coach — excelente |
| 21 | `reel-tecnica.webp` | Técnica reel | Push-ups — comunica bien |

---

## 3. Power Plate Requirements (P0)

### Current image problems:
- `powerplate.webp`: Woman sitting passively on machine at home. No training, no coach, no studio.
- `reel-powerplate.webp`: Martial arts/dance movement. No Power Plate platform visible.

### Required replacement:

**Card image (`powerplate-session-horizontal.webp`):**
- Persona de pie/sentadilla/lunge/push-up **sobre** la plataforma Power Plate
- Coach (idealmente Lucas) corrigiendo postura cerca
- Entorno de estudio TEMPLO — iluminación premium
- Plataforma visible bajo los pies
- Movimiento/activación visible
- Orientación: horizontal
- Aspect ratio: 4:3 (800×600px mínimo)

**Reel image (`powerplate-reel-horizontal.webp`):**
- Close-up o medium shot de persona en Power Plate
- Vibración de la plataforma visible si posible
- Esfuerzo controlado, técnica
- Orientación: horizontal
- Aspect ratio: 16:10 (800×500px mínimo)

**Lo que NO debe verse:**
- Máquina vacía
- Producto shot (Power Plate como objeto)
- Entorno doméstico/oficina
- Persona pasiva/sentada
- Artes marciales o danza
- Imagen genérica de stock

---

## 4. Filename Plan — Future Real Assets

### Service Images
| Filename | Descripción | Orientación | Aspect Ratio | Dimensiones mínimas |
|---|---|---|---|---|
| `powerplate-session-horizontal.webp` | Persona en Power Plate con coach | Horizontal | 4:3 | 800×600 |
| `powerplate-reel-horizontal.webp` | Close-up Power Plate | Horizontal | 16:10 | 800×500 |
| `calistenia-studio-horizontal.webp` | Barra/dominadas en TEMPLO | Horizontal | 4:3 | 800×600 |
| `calistenia-reel-horizontal.webp` | Movimiento de barra en TEMPLO | Horizontal | 16:10 | 800×500 |
| `mujeres-real-horizontal.webp` | Mujer entrenando fuerza en TEMPLO | Horizontal | 4:3 | 800×600 |
| `seniors-real-horizontal.webp` | Adulto mayor entrenando con guía | Horizontal | 4:3 | 800×600 |
| `adaptado-studio-horizontal.webp` | Ejercicio controlado en TEMPLO | Horizontal | 4:3 | 800×600 |
| `adaptado-reel-horizontal.webp` | Ejercicio controlado con coach | Horizontal | 16:10 | 800×500 |

### Coach Portraits
| Filename | Descripción | Orientación | Aspect Ratio | Dimensiones mínimas |
|---|---|---|---|---|
| `coach-lucas-portrait.webp` | Lucas Bustamante | Vertical | 4:5 | 400×500 |
| `coach-nicolas-z-portrait.webp` | Nicolas Zegarra | Vertical | 4:5 | 400×500 |
| `coach-andres-portrait.webp` | Andres Balderrama | Vertical | 4:5 | 400×500 |
| `coach-nicolas-a-portrait.webp` | Nicolas Aranibar | Vertical | 4:5 | 400×500 |
| `coach-andrea-portrait.webp` | Andrea Sejas | Vertical | 4:5 | 400×500 |
| `coach-santiago-l-portrait.webp` | Santiago Lavayen | Vertical | 4:5 | 400×500 |
| `coach-oscar-portrait.webp` | Oscar Encinas | Vertical | 4:5 | 400×500 |
| `coach-santiago-r-portrait.webp` | Santiago Rojas | Vertical | 4:5 | 400×500 |

### Additional Reel Images (optional)
| Filename | Descripción | Orientación | Aspect Ratio | Dimensiones mínimas |
|---|---|---|---|---|
| `reel-small-group-horizontal.webp` | Grupo pequeño entrenando | Horizontal | 16:10 | 800×500 |
| `reel-open-gym-horizontal.webp` | Espacio de entrenamiento libre | Horizontal | 16:10 | 800×500 |
| `reel-studio-atmosphere-horizontal.webp` | Interior del estudio | Horizontal | 16:10 | 800×500 |

---

## 5. Dimensions / Aspect Ratios Reference

| Contexto | Orientación | Aspect Ratio | Dimensiones recomendadas | Dimensiones mínimas |
|---|---|---|---|---|
| Hero desktop | Horizontal | 16:9 | 1920×1080 | 1440×810 |
| Hero mobile | Vertical | 9:16 | 1080×1920 | 720×1280 |
| Service card (exp-card) | Horizontal | 4:3 | 800×600 | 600×450 |
| Service detail (/experiencias/) | Horizontal | 4:3 | 800×600 | 600×450 |
| Activity reel | Horizontal | 16:10 | 800×500 | 600×375 |
| Coach portrait | Vertical | 4:5 | 400×500 | 300×375 |
| OG social sharing | Square | 1:1 | 1200×1200 | 600×600 |
| Favicon | Square | 1:1 | 32×32 / 16×16 | — |

---

## 6. What NOT to Shoot

- ❌ Máquinas vacías sin personas
- ❌ Producto shots de equipos
- ❌ Entornos domésticos u oficinas
- ❌ Poses falsas o exageradas
- ❌ Stock fitness genérico
- ❌ Imágenes que impliquen tratamiento médico
- ❌ Imágenes que garanticen resultados
- ❌ Personas que no sean coaches/clientes reales de TEMPLO
- ❌ Falsos testimonios visuales
- ❌ Cualquier imagen con marca de agua de stock
- ❌ Fotos oscuras sin acción visible
- ❌ Fotos borrosas o de baja resolución

---

## 7. Replacement Workflow

Cuando las fotos reales estén listas:

1. **Guardar** en `assets/placeholders/` con los nombres definidos arriba
2. **No renombrar** los archivos actuales — reemplazar directamente
3. **Verificar** que las dimensiones y aspect ratios cumplan los mínimos
4. **Optimizar** a WebP con calidad 80-85 para web
5. **Verificar** que WhatsApp y precios no se alteraron
6. **Commit + push**

No se necesitan cambios de HTML o CSS — los paths ya están configurados.

---

## 8. Summary

| Categoría | Total | P0 | P1 | P2 | P3 |
|---|---|---|---|---|---|
| Service cards | 5 | 1 | 0 | 1 | 3 |
| Reel images | 8 | 1 | 0 | 2 | 5 |
| Coach portraits | 8 | 0 | 8 | 0 | 0 |
| **Total** | **21** | **2** | **8** | **3** | **8** |

**Bloquea comunicación del servicio:** 2 imágenes (Power Plate)
**Mejora confianza:** 8 imágenes (coach portraits)
**Mejora calidad visual:** 3 imágenes (calistenia, adaptado)
**Aceptables temporalmente:** 8 imágenes
