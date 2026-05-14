# TEMPLO — Image Intent Audit & Photo Brief

**Fecha:** 2026-05-15
**Fase:** 5A — Reference Image Intent Audit & Replacement Plan

---

## 1. Executive Summary

Las imágenes actuales del sitio web TEMPLO tienen un rendimiento **desigual**. La mayoría de las imágenes de experiencias comunican correctamente el servicio, pero hay **dos problemas críticos** con Power Plate que impiden que un visitante entienda visualmente el servicio antes de leer el texto.

Las imágenes de coaches son consistentes y profesionales. Las imágenes del reel de actividad son en su mayoría funcionales. No se usan imágenes externas hotlinkadas. No se inventaron testimonios ni fotos falsas.

**Veredicto general:** El sitio necesita **una imagen de Power Plate con persona usando la plataforma** para cerrar la brecha de comprensión más urgente.

---

## 2. Critical Finding — Power Plate

### Problema 1: `assets/placeholders/powerplate.webp`
- **Qué muestra:** Una mujer sentada pasivamente sobre una máquina Power Plate en lo que parece un entorno doméstico/oficina.
- **Qué NO muestra:** No hay entrenamiento activo. No hay coach. No se ve la vibración de la plataforma. El entorno no es un estudio premium.
- **Impacto:** Un visitante no entiende qué es Power Plate ni cómo se usa. La imagen no genera deseo ni comunica la experiencia premium descrita en el texto.
- **Veredicto:** ❌ **REEMPLAZAR**

### Problema 2: `assets/placeholders/reel-powerplate.webp`
- **Qué muestra:** Una persona vestida de negro haciendo lo que parece ser un movimiento de artes marciales/danza.
- **Qué NO muestra:** No hay plataforma Power Plate. No hay vibración. No hay contexto de entrenamiento en plataforma.
- **Impacto:** La etiqueta dice "Power Plate" pero la imagen muestra otra cosa. Confunde al visitante.
- **Veredicto:** ❌ **REEMPLAZAR**

### Imagen ideal para Power Plate:
- Persona de pie/sentadilla/lunge/push-up **sobre** la plataforma Power Plate
- Coach corrigiendo postura cerca (idealmente Lucas)
- Entorno de estudio premium con iluminación controlada
- Plataforma visible bajo los pies
- Movimiento/activación visible
- Estilo visual compatible con negro/dorado/oscuro

---

## 3. Image Audit Table

| Página | Sección | Imagen actual | Propósito | Problema | Keep/Replace | Imagen ideal |
|---|---|---|---|---|---|---|
| / | Hero | BUDDHA-desktop.webp | Identidad visual de marca | Ninguno | ✅ KEEP | — |
| / | Reel | reel-powerplate.webp | Mostrar Power Plate en acción | No muestra Power Plate, muestra artes marciales | ❌ REPLACE | Persona en plataforma Power Plate con coach |
| / | Reel | reel-calistenia.webp | Mostrar calistenia | Es outdoor, no en TEMPLO | ⚠️ KEEP (aceptable) | Barra/dominadas en estudio TEMPLO |
| / | Reel | reel-mujeres.webp | Mostrar entrenamiento mujeres | Ninguno | ✅ KEEP | — |
| / | Reel | reel-seniors.webp | Mostrar entrenamiento senior | Ninguno | ✅ KEEP | — |
| / | Reel | reel-adaptado.webp | Mostrar entrenamiento adaptado | Muestra battle ropes outdoor | ⚠️ KEEP (aceptable) | Ejercicio controlado en estudio |
| / | Reel | reel-fuerza.webp | Mostrar fuerza guiada | Ninguno | ✅ KEEP | — |
| / | Reel | reel-comunidad.webp | Mostrar ambiente grupal | Ninguno — excelente: coach + grupo | ✅ KEEP | — |
| / | Reel | reel-tecnica.webp | Mostrar técnica/postura | Ninguno | ✅ KEEP | — |
| / | Experiencias | powerplate.webp | Explicar servicio Power Plate | Persona sentada pasivamente, entorno doméstico | ❌ REPLACE | Persona activa en plataforma, estudio premium |
| / | Experiencias | calistenia.webp | Explicar calistenia | Outdoor, no en TEMPLO | ⚠️ KEEP (aceptable) | Movimiento de barra en TEMPLO |
| / | Experiencias | mujeres.webp | Explicar entrenamiento mujeres | Ninguno — cable crossover en gym | ✅ KEEP | — |
| / | Experiencias | seniors.webp | Explicar entrenamiento senior | Ninguno — máquina de fuerza | ✅ KEEP | — |
| / | Experiencias | adaptado.webp | Explicar entrenamiento adaptado | Ninguno — persona en silla de ruedas usando equipo | ✅ KEEP | — |
| /experiencias/ | Power Plate | powerplate.webp | Igual que homepage | Igual problema | ❌ REPLACE | Igual |
| /experiencias/ | Calistenia | calistenia.webp | Igual que homepage | Igual | ⚠️ KEEP | Igual |
| /experiencias/ | Mujeres | mujeres.webp | Igual que homepage | Ninguno | ✅ KEEP | — |
| /experiencias/ | Seniors | seniors.webp | Igual que homepage | Ninguno | ✅ KEEP | — |
| /experiencias/ | Adaptado | adaptado.webp | Igual que homepage | Ninguno | ✅ KEEP | — |
| /coaches/ | Coach cards | 8 fotos de coach | Identificar coaches | Ninguno — consistentes, profesional | ✅ KEEP | — |
| /metodo/ | Pillars/practice | SVGs simbólicos | Comunicar pilares del método | Ninguno — geométricos, consistentes | ✅ KEEP | — |
| / | Location | iframe de Google Maps | Mostrar ubicación | Ninguno | ✅ KEEP | — |

---

## 4. Replacements Applied

**No se aplicaron reemplazos.** No existen imágenes locales en `assets/` que muestren a una persona usando la plataforma Power Plate. Las imágenes disponibles en `assets/placeholders/` (energy-01 a energy-06, lifestyle-01 a lifestyle-04) son fotografías de fitness de alta calidad pero ninguna muestra Power Plate.

Forzar un reemplazo con una imagen incorrecta empeoraría la situación. Se documenta la necesidad exacta en la sección 5.

---

## 5. Images That Must Be Replaced Later

### URGENTE — Bloquea comprensión del servicio:

1. **`assets/placeholders/powerplate.webp`**
   - Usado en: Homepage (experiencias section) + /experiencias/ (Power Plate detail)
   - Reemplazar con: **Persona activa sobre plataforma Power Plate en estudio TEMPLO, coach corrigiendo postura**
   - Orientación: horizontal (400×300 en card, más grande en detail)
   - Acción visible: sentadilla, lunge, push-up o standing exercise sobre la plataforma
   - Evitar: máquina vacía, producto shot, entorno doméstico

2. **`assets/placeholders/reel-powerplate.webp`**
   - Usado en: Homepage activity reel (2× por el infinite scroll)
   - Reemplazar con: **Close-up o medium shot de persona en Power Plate, vibración visible, movimiento activo**
   - Orientación: horizontal (400×300)
   - Evitar: artes marciales, danza, equipo sin usar

### DESEABLE — Mejoraría comunicación:

3. **`assets/placeholders/calistenia.webp`** y **`assets/placeholders/reel-calistenia.webp`**
   - Actual: outdoor, no en TEMPLO
   - Ideal: movimiento de barra/dominadas/flexiones **en el estudio TEMPLO**
   - No urgente — la imagen actual muestra acción correcta

4. **`assets/placeholders/reel-adaptado.webp`**
   - Actual: battle ropes outdoor
   - Ideal: ejercicio controlado de bajo impacto en estudio con coach
   - No urgente — comunica "entrenamiento" aunque no específicamente "adaptado"

---

## 6. Ideal Photo Brief — Shot List para Lucas/TEMPLO

### MUST-HAVE (Urgente):

| # | Shot | Orientación | Uso | Acción | Evitar |
|---|---|---|---|---|---|
| 1 | Power Plate con persona | Horizontal | Homepage card + /experiencias/ detail | Persona de pie/sentadilla/lunge sobre plataforma Power Plate, coach (Lucas) corrigiendo postura, iluminación premium | Máquina vacía, producto shot, entorno doméstico, persona pasiva |
| 2 | Power Plate close-up | Horizontal | Activity reel | Persona en movimiento sobre plataforma, vibración visible, esfuerzo controlado | Artes marciales, danza, equipo sin usar |

### SHOULD-HAVE (Mejorable):

| # | Shot | Orientación | Uso | Acción | Evitar |
|---|---|---|---|---|---|
| 3 | Calistenia en estudio | Horizontal | Homepage card + /experiencias/ + reel | Dominadas, muscle-up, o flexiones en barra/dentro de TEMPLO | Outdoor genérico |
| 4 | Entrenamiento adaptado en estudio | Horizontal | Reel | Ejercicio controlado con coach, bajo impacto, en TEMPLO | Battle ropes, outdoor |
| 5 | Coach portrait — Lucas | Vertical | Founder card / coaches page | Retrato vertical, fondo oscuro/premium, postura neutral y confidencial | Poses falsas, cheesy, fondo genérico |

### NICE-TO-HAVE:

| # | Shot | Orientación | Uso | Acción | Evitar |
|---|---|---|---|---|---|
| 6 | Small group training | Horizontal | Reel / comunidad | 3-5 personas entrenando, coach observando, mezcla de fuerza y funcional | Grupo masivo, sin coach |
| 7 | Open gym / equipo | Horizontal | Reel / experiencias | Espacio limpio, equipo organizado, ambiente premium | Desorden, equipo viejo |
| 8 | Studio atmosphere | Horizontal | Location / about | Interior del estudio con iluminación cálida, equipo visible | Oscuridad total, espacios vacíos |
| 9 | Exterior/location | Horizontal | Location section | Fachada o entrada de TEMPLO, identificable | Genérico, sin contexto |

### Estilo visual consistente:
- Iluminación: cálida, controlada, premium
- Color dominante: negro/dorado/oscuro (compatible con tema del sitio)
- Ambiente: real, no stock, no fake
- Equipo TEMPLO visible cuando sea relevante
- Coach presente cuando sea posible

---

## 7. Mobile Image QA

Las imágenes se inspeccionaron visualmente a tamaños de referencia. Observaciones:

- **powerplate.webp:** En mobile (360-430px), la mujer sentada en la máquina es aún menos comprensible — se ve como una persona en una silla. La comunicación se degrada en pantallas pequeñas. **Prioridad de reemplazo: ALTA.**
- **reel-powerplate.webp:** En mobile, el movimiento de artes marciales no se asocia con Power Plate en absoluto. **Prioridad de reemplazo: ALTA.**
- **Coach images:** Se renderizan a 68×68px en mobile. Los retratos profesionales con fondo oscuro se leen bien a ese tamaño. **OK.**
- **Calistenia, Mujeres, Seniors, Adaptado:** Todas comunican correctamente en mobile. Las acciones son visibles y comprensibles. **OK.**
- **No se detectaron:** overflow horizontal, imágenes borrosas, crops problemáticos, o problemas de page speed evidentes.

---

## 8. What Was Not Changed

- ✅ Precios: sin cambios (Bs. 230 – 550 según plan)
- ✅ WhatsApp: **59172001680** — verificado en 50 referencias, sin errores
- ✅ Sin números incorrectos (no hay 5917201680 ni 72209791)
- ✅ Sin testimonios falsos
- ✅ Sin fotos de coach inventadas
- ✅ Sin resultados falsos
- ✅ Sin claims médicos
- ✅ Sin /galeria creada
- ✅ Sin imágenes externas hotlinkadas
- ✅ Sin nuevas páginas creadas
- ✅ /experiencias/ funciona
- ✅ /coaches/ funciona
- ✅ /metodo/ funciona
- ✅ Homepage funciona
- ✅ Planes expand/collapse funciona

---

## 9. QA Checklist Final

| # | Check | Status |
|---|---|---|
| 1 | Power Plate image audited | ✅ |
| 2 | Power Plate ideal image defined as person using platform | ✅ |
| 3 | No fake coach photos added | ✅ |
| 4 | No external images hotlinked | ✅ |
| 5 | No fake testimonials added | ✅ |
| 6 | No fake results implied | ✅ |
| 7 | No medical claims added | ✅ |
| 8 | Existing local assets inspected | ✅ |
| 9 | Better local replacements used only if appropriate | ✅ (none found for Power Plate) |
| 10 | /experiencias/ works | ✅ |
| 11 | /coaches/ works | ✅ |
| 12 | /metodo/ works | ✅ |
| 13 | Homepage works | ✅ |
| 14 | Plans expand/collapse works | ✅ |
| 15 | WhatsApp remains exactly 59172001680 | ✅ (50 refs verified) |
| 16 | No 5917201680 | ✅ |
| 17 | No 72209791 | ✅ |
| 18 | Prices unchanged | ✅ |
| 19 | No /galeria created | ✅ |
| 20 | Mobile images checked | ✅ |

---

## 10. Veredicto Final

### ¿Las imágenes comunican los servicios mejor que antes?

**Parcialmente.** La mayoría de las imágenes son correctas y funcionales:
- **Mujeres, Seniors, Adaptado:** Comunican bien. ✅
- **Coaches:** Consistentes y profesionales. ✅
- **Método:** SVGs simbólicos funcionan para el contexto. ✅
- **Comunidad:** Excelente — coach + grupo visible. ✅

**Pero Power Plate tiene un problema grave.** Las dos imágenes de Power Plate (card + reel) NO comunican el servicio. Un visitante que no sepa qué es Power Plate no lo entenderá visualmente. Esto es la imagen más urgente del sitio.

### Fotos más urgentes (prioridad):

1. 🔴 **Power Plate con persona usando la plataforma** — URGENTE
2. 🔴 **Power Plate reel (close-up/movement)** — URGENTE
3. 🟡 Calistenia en estudio TEMPLO — MEJORABLE
4. 🟡 Adaptado en estudio con coach — MEJORABLE
5. 🟢 Coach portraits reales — FUTURO

### Resumen para Lucas:

> Las 2 imágenes de Power Plate son las únicas que realmente fallan. Una muestra a alguien sentado pasivamente, la otra muestra artes marciales. Ninguna muestra la plataforma en uso. Prioriza una sesión de fotos con alguien usando la Power Plate en el estudio — eso solo cambia la percepción del servicio más que cualquier otro cambio visual.
