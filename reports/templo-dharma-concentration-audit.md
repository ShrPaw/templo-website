# TEMPLO — Auditoría Tipográfica: Dharma Gothic y Concentración

**Fecha:** 2026-05-14  
**Alcance:** Auditoría completa del uso de Dharma Gothic C en todo el sitio  
**Problema reportado:** El texto se ve demasiado concentrado/comprimido

---

## 1. Resumen Ejecutivo

### ¿Está Dharma sobreutilizado?

**Sí, moderadamente.** Hay 10 selectores que usan `font-family: var(--font-display)` (Dharma Gothic C). De estos:

- **4 son válidos** (hero title, números de métricas, números decorativos de paneles, números de pilares)
- **3 son borderline** (final-cta title, metodo-cta title, section-title base class que comparten 12+ títulos)
- **3 son inválidos** y deben revertirse a Montserrat (exp-detail__name, exp-cta__title, metodo-manifesto__lead)

### ¿Por qué las palabras se ven concentradas?

Hay **3 factores combinados** que crean la sensación de compresión:

1. **Line-height de 0.92** (`--display-lh`): Es el principal culpable. Dharma Gothic C ya es una fuente condensed por diseño. Con un line-height menor a 1.0, las líneas se montan visualmente. Esto es aceptable en un hero title de 4.4rem, pero problemático en títulos de 2rem-3rem.

2. **Letter-spacing mínimo (0.01em-0.02em)**: Las letras de Dharma ya están naturalmente juntas. Sin algo de espacio extra (0.03em-0.05em), el texto se siente pegado.

3. **Dharma usada en tamaños pequeños (20px-32px)**: Dharma funciona como display font a tamaños grandes (>36px). A tamaños menores, sus formas condensadas generan problemas de legibilidad y la sensación de "bloque de texto comprimido".

### ¿Ayuda o perjudica al sitio?

**Perjudica en 3 zonas específicas:**
- Los nombres de experiencia en `/experiencias/` (exp-detail__name) se ven como bloques comprimidos
- El CTA de experiencias ("¿Quieres saber cuál experiencia va contigo?") es una pregunta larga en Dharma pequeña
- El manifesto lead en `/metodo/` usa Dharma a 28px para texto de lectura

**Funciona bien en:**
- Hero title del homepage
- Números de métricas (8, 5, 6, 1)
- Números decorativos de paneles
- Números romanos de pilares (I, II, III)

---

## 2. Mapa de Uso Actual de Dharma (Selector por Selector)

### 2.1 Definiciones CSS de la fuente

| Línea | Archivo | Declaración | Valores |
|-------|---------|-------------|---------|
| 48 | styles.css | `--font-display` | `'Dharma Gothic C', 'Montserrat', sans-serif` |
| 55 | styles.css | `--display-lh` | `0.92` |
| 56 | styles.css | `--display-lh-sm` | `0.98` |
| 54 | styles.css | `--display-ls` | `0.02em` |
| 57 | styles.css | `--display-ls-tight` | `0.01em` |
| 80-83 | styles.css | `@font-face` Bold | `DharmaGothicC-Bold.woff2`, weight: 700 |
| 89-92 | styles.css | `@font-face` Heavy | `DharmaGothicC-Heavy.woff2`, weight: 900 |
| 98-102 | styles.css | `@font-face` ExBoldItalic | `DharmaGothicC-ExBoldItalic.woff2`, weight: 800, style: italic |

### 2.2 Selectores con `font-family: var(--font-display)`

| # | Selector | Archivo:Línea | Tamaño | Weight | Line-Height | Letter-Spacing | Clasificación |
|---|----------|---------------|--------|--------|-------------|----------------|---------------|
| 1 | `.section-title` | styles.css:290 | `clamp(2rem, 4.5vw, 3.2rem)` | 800 | `var(--display-lh)` = 0.92 | `var(--display-ls)` = 0.02em | **B** (compartido por 12+ títulos) |
| 2 | `.hero__title` | styles.css:633 | `clamp(2.4rem, 6vw, 4.4rem)` | 900 | `var(--display-lh)` = 0.92 | `var(--display-ls-tight)` = 0.01em | **A** ✓ |
| 3 | `.metrics__number` | styles.css:824 | `clamp(2rem, 4vw, 3.2rem)` | 900 | 0.85 | 0.02em | **A** ✓ |
| 4 | `.exp-panel__number` | styles.css:1206 | `clamp(2.5rem, 4vw, 4rem)` | 900 | 0.85 | 0.02em | **A** ✓ |
| 5 | `.method__pillar-num` | styles.css:1682 | `clamp(2rem, 3.5vw, 3rem)` | 900 | 0.85 | 0.02em | **A** ✓ |
| 6 | `.final-cta__title` | styles.css:2360 | `clamp(1.6rem, 3.5vw, 2.4rem)` | 800 | `var(--display-lh)` = 0.92 | `var(--display-ls)` = 0.02em | **B** |
| 7 | `.metodo-manifesto__lead` | metodo/metodo.css:42 | `clamp(20px, 2.5vw, 28px)` | 800 | 1.15 | 0.02em | **C** ❌ |
| 8 | `.metodo-cta__title` | metodo/metodo.css:413 | `clamp(24px, 3vw, 36px)` | 800 | 1 | 0.02em | **B** |
| 9 | `.exp-detail__name` | experiencias/experiencias.css:124 | `clamp(1.6rem, 3vw, 2.4rem)` | 800 | 1 | 0.02em | **C** ❌ |
| 10 | `.exp-cta__title` | experiencias/experiencias.css:262 | `clamp(1.4rem, 3vw, 2rem)` | 800 | 1 | 0.02em | **C** ❌ |

### 2.3 Selectores correctamente en Montserrat (ya corregidos)

| Selector | Archivo:Línea | Contexto |
|----------|---------------|----------|
| `.pathfinder .section-title` | styles.css:302 | "¿Qué entrenamiento va con tu meta?" |
| `.faq .section-title` | styles.css:303 | "¿Tienes dudas?" |
| `.pathfinder__step-title` | styles.css:2994 | "¿Cuál es tu objetivo principal?" etc. |
| `.pathfinder-cta__title` | styles.css:1778 | "¿Ya tienes una dirección?" |
| `.faq__question` | styles.css:2273 | Todas las preguntas FAQ |
| `.suggested-questions__title` | styles.css:3367 | "¿No sabes por dónde empezar?" |
| `.pricing-card__name` | styles.css:1875 | Nombres de planes |
| `.coach-card__name` | styles.css:2816 | Nombres de coaches |
| `.nav__brand` | styles.css:362 | Logo "TEMPLO" |
| `.btn` | styles.css:166 | Todos los botones |
| `.team-card__name` | coaches/coaches.css | Nombres del equipo |
| `.founder-card__name` | coaches/coaches.css | Nombre del fundador |

---

## 3. Análisis del Problema de Concentración

### 3.1 El factor principal: line-height 0.92

Dharma Gothic C es una fuente **condensed** por naturaleza. Sus glyphs ya son más estrechos que los de una fuente normal. Cuando aplicas `line-height: 0.92`:

- Las líneas de texto se montan parcialmente una sobre otra
- Los ascendentes (b, d, h, l) y descendentes (g, p, q, y) se acercan peligrosamente
- El texto se siente como un "bloque sólido" en lugar de texto legible

**Comparación de line-heights:**

| Line-height | Efecto | Uso recomendado |
|-------------|--------|-----------------|
| 0.85 | Muy comprimido, solo para números decorativos | Números de métricas, pilares |
| 0.92 | Comprimido, problemático para texto con descendentes | Solo hero titles > 4rem |
| 0.98 | Ligeramente ajustado, aceptable | Títulos display > 3rem |
| 1.0-1.1 | Neutral, seguro | Todos los títulos generales |
| 1.15-1.2 | Cómodo para lectura | Subtítulos, leads |

### 3.2 Letter-spacing insuficiente

| Letter-spacing | Efecto en Dharma |
|----------------|------------------|
| 0.01em | Muy denso, las letras parecen tocarse |
| 0.02em | Apenas perceptible, insuficiente para Dharma |
| 0.03-0.05em | Mejor para Dharma display |
| 0.08-0.12em | Ideal para Dharma uppercase a tamaños medianos |

### 3.3 Dharma a tamaños pequeños

Dharma Gothic C fue diseñada para **impacto visual a gran escala**. A tamaños menores a 36px:

- Los counters (espacios internos de a, e, o, p) se cierran
- Las formas condensadas se vuelven difíciles de distinguir
- El tracking (espacio entre letras) se percibe como negativo
- La lectura de frases largas se vuelve fatigante

### 3.4 Frases largas en español con Dharma

El español tiende a frases más largas que el inglés. Combinado con Dharma condensada:

| Texto | Caracteres | Tamaño | ¿Problemático? |
|-------|-----------|--------|-----------------|
| "¿Quieres saber cuál experiencia va contigo?" | 47 chars | 32px max | **Sí** ❌ |
| "Entrenar sin método es repetir. Entrenar con método es construir." | 65 chars | 3.2rem | **Sí** ❌ |
| "Elige el entrenamiento que va con tu meta." | 44 chars | 3.2rem | **Borderline** |
| "No entrenas solo. Entrenas con dirección." | 42 chars | 3.2rem | **Borderline** |
| "Si tienes una meta, entrenar al azar no es suficiente." | 54 chars | 2.4rem | **Borderline** |

---

## 4. Caso de Estudio: Pathfinder

### Estado actual

El Pathfinder ya tiene la corrección correcta aplicada:

```css
/* styles.css:302 */
.pathfinder .section-title,
.faq .section-title {
  font-family: var(--font-body);  /* Montserrat ✓ */
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 1.05;
}
```

### Textos del Pathfinder en el HTML

| Texto | Selector | Fuente actual | ¿Correcto? |
|-------|----------|---------------|-------------|
| "¿Qué entrenamiento va con tu meta?" | `.pathfinder .section-title` | Montserrat 900 | ✅ Correcto |
| "¿Cuál es tu objetivo principal?" | `.pathfinder__step-title` | Montserrat 700 | ✅ Correcto |
| "¿Cuál es tu nivel actual?" | `.pathfinder__step-title` | Montserrat 700 | ✅ Correcto |
| "¿Qué estilo prefieres?" | `.pathfinder__step-title` | Montserrat 700 | ✅ Correcto |
| "¿Ya tienes una dirección?" | `.pathfinder-cta__title` | Montserrat 700 | ✅ Correcto |

### Valoración

**El Pathfinder está correctamente implementado.** Las preguntas funcionales usan Montserrat. No se necesitan cambios aquí.

### Recomendación

Mantener tal cual. Este es un ejemplo de la correcta separación Dharma (brand) vs Montserrat (functional).

---

## 5. Auditoría de Títulos de Cards

### 5.1 Cards de Experiencias (homepage)

Los cards de experiencia en el homepage usan `h3` sin clase específica de fuente. Heredan la fuente del body (Montserrat). **No hay problema aquí.**

| Card | Selector | Fuente |
|------|----------|--------|
| Power Plate | `h3` genérico | Montserrat (heredado) ✓ |
| Calistenia | `h3` genérico | Montserrat (heredado) ✓ |
| Mujeres | `h3` genérico | Montserrat (heredado) ✓ |
| Seniors | `h3` genérico | Montserrat (heredado) ✓ |
| Entrenamiento Adaptado | `h3` genérico | Montserrat (heredado) ✓ |

### 5.2 Nombres de Experiencias (página /experiencias/)

| Card | Selector | Fuente | Tamaño | ¿Problemático? |
|------|----------|--------|--------|-----------------|
| Power Plate | `.exp-detail__name` | **Dharma** ❌ | 2.4rem max | **Sí** |
| Calistenia | `.exp-detail__name` | **Dharma** ❌ | 2.4rem max | **Sí** |
| Mujeres | `.exp-detail__name` | **Dharma** ❌ | 2.4rem max | **Sí** |
| Seniors | `.exp-detail__name` | **Dharma** ❌ | 2.4rem max | **Sí** |
| Entrenamiento Adaptado | `.exp-detail__name` | **Dharma** ❌ | 2.4rem max | **Sí** (frase larga) |

**CSS actual:**
```css
/* experiencias/experiencias.css:123 */
.exp-detail__name {
  font-family: var(--font-display);  /* Dharma */
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1;
}
```

**Problemas:**
- Dharma + uppercase + line-height 1 = bloque comprimido
- "ENTRENAMIENTO ADAPTADO" en Dharma a 38px es difícil de leer
- `text-transform: uppercase` amplifica la sensación de compresión en Dharma

**Recomendación:** Revertir a Montserrat 800, mantener uppercase, aumentar letter-spacing a 0.06em-0.08em, line-height a 1.15.

### 5.3 Nombres de Planes (homepage)

| Plan | Selector | Fuente | ¿Correcto? |
|------|----------|--------|-------------|
| Power Plate | `.pricing-card__name` | Montserrat 800 | ✅ |
| Calistenia | `.pricing-card__name` | Montserrat 800 | ✅ |
| Híbrido | `.pricing-card__name` | Montserrat 800 | ✅ |
| Open Gym | `.pricing-card__name` | Montserrat 800 | ✅ |
| Seniors | `.pricing-card__name` | Montserrat 800 | ✅ |
| Mujeres | `.pricing-card__name` | Montserrat 800 | ✅ |

**Los nombres de planes están correctamente en Montserrat.** No se necesitan cambios.

### 5.4 Nombres de Coaches

| Coach | Selector | Fuente | ¿Correcto? |
|-------|----------|--------|-------------|
| Lucas Bustamante | `.coach-card__name` | Montserrat 800 | ✅ |
| Todos los coaches | `.team-card__name` (coaches page) | Montserrat 800 | ✅ |

**Los nombres de coaches están correctamente en Montserrat.** No se necesitan cambios.

---

## 6. Auditoría de UI Funcional (Nav, Botones, FAQ, CTAs)

### 6.1 Navegación

| Elemento | Selector | Fuente | ¿Correcto? |
|----------|----------|--------|-------------|
| Logo "TEMPLO" | `.nav__brand` | Montserrat 800 | ✅ |
| Links de nav | `.nav__link` | Montserrat 600 | ✅ |
| CTA de nav | `.nav__cta` | Montserrat 700 | ✅ |

**La navegación está correctamente en Montserrat.**

### 6.2 Botones

| Elemento | Selector | Fuente | ¿Correcto? |
|----------|----------|--------|-------------|
| Todos los botones | `.btn` | Montserrat 700 | ✅ |

**Los botones están correctamente en Montserrat.**

### 6.3 FAQ

| Elemento | Selector | Fuente | ¿Correcto? |
|----------|----------|--------|-------------|
| "¿Tienes dudas?" | `.faq .section-title` | Montserrat 900 | ✅ |
| "¿No sabes por dónde empezar?" | `.suggested-questions__title` | Montserrat 700 | ✅ |
| Preguntas FAQ | `.faq__question` | Montserrat 700 | ✅ |

**El FAQ está correctamente en Montserrat.**

### 6.4 CTAs de sección

| Elemento | Selector | Fuente | Tamaño | ¿Problemático? |
|----------|----------|--------|--------|-----------------|
| "Si tienes una meta..." | `.final-cta__title` | **Dharma** | 2.4rem max | **Borderline** |
| "¿Quieres saber cuál experiencia va contigo?" | `.exp-cta__title` | **Dharma** ❌ | 2rem max | **Sí** |
| "Tu entrenamiento necesita dirección." | `.metodo-cta__title` | **Dharma** | 36px max | **Borderline** |

### 6.5 Footer

| Elemento | Selector | Fuente | ¿Correcto? |
|----------|----------|--------|-------------|
| Títulos footer | `.footer__nav h4` | Montserrat (heredado) | ✅ |
| Links footer | `.footer__nav a` | Montserrat (heredado) | ✅ |
| Tagline | `.footer__tagline` | Montserrat (heredado) | ✅ |

**El footer está correctamente en Montserrat. No hay fugas de Dharma.**

---

## 7. Auditoría de Tipografía Mobile

### 7.1 Problemas específicos de mobile

En mobile (390px), los problemas de concentración se **amplifican**:

1. **`.section-title` a 2rem**: En desktop es 3.2rem (aceptable). En mobile es 2rem (32px) — Dharma a 32px con line-height 0.92 es problemático.

2. **`.hero__title` a 2.4rem**: En mobile, el hero title baja a 2.4rem (38.4px). Con line-height 0.92, las líneas se montan.

3. **`.final-cta__title` a 1.6rem**: En mobile baja a 1.6rem (25.6px). Dharma a 25.6px es ilegible.

4. **`.exp-detail__name` a 1.6rem**: En mobile, 1.6rem (25.6px) en Dharma uppercase es un bloque comprimido.

5. **`.exp-cta__title` a 1.4rem**: En mobile, 1.4rem (22.4px) en Dharma es inaceptable.

### 7.2 Media queries relevantes

```css
/* styles.css:3184 — mobile override for Pathfinder */
@media (max-width: 430px) {
  .pathfinder__step-title {
    font-size: 1.05rem;  /* Ya en Montserrat, OK */
  }
}
```

No hay media queries que ajusten el line-height de Dharma en mobile.

### 7.3 Recomendaciones mobile

- Dharma NO debe usarse por debajo de 2.5rem (40px) en mobile
- Los títulos de sección en mobile deben tener line-height mínimo 1.0
- Las preguntas y CTAs en mobile deben ser Montserrat

---

## 8. Evidencia Fotográfica

Capturas realizadas el 2026-05-14:

### Desktop (1440px)

| Captura | Ruta | Sección |
|---------|------|---------|
| Hero | `screenshots/desktop-hero.jpg` | Hero title "No vienes solo a entrenar..." |
| Pathfinder | `screenshots/desktop-pathfinder.jpg` | "¿Qué entrenamiento va con tu meta?" |
| Experiencias | `screenshots/desktop-experiencias.jpg` | Cards de experiencia |
| FAQ | `screenshots/desktop-faq.jpg` | "¿Tienes dudas?" + preguntas |
| Full page | `screenshots/desktop-full-page.jpg` | Homepage completa |
| Experiencias page | `screenshots/desktop-experiencias-page.jpg` | /experiencias/ completa |
| Coaches page | `screenshots/desktop-coaches-page.jpg` | /coaches/ completa |
| Método page | `screenshots/desktop-metodo-page.jpg` | /metodo/ completa |

### Mobile (390px)

| Captura | Ruta | Sección |
|---------|------|---------|
| Hero | `screenshots/mobile-hero.jpg` | Hero title en mobile |
| Pathfinder | `screenshots/mobile-pathfinder.jpg` | Pathfinder en mobile |
| FAQ | `screenshots/mobile-faq.jpg` | FAQ en mobile |
| Experiencias page | `screenshots/mobile-experiencias-page.jpg` | /experiencias/ en mobile |

---

## 9. Matriz de Correcciones

| Componente | Selector | Fuente Actual | Problema | Fuente Recomendada | Corrección CSS Exacta |
|------------|----------|---------------|----------|-------------------|----------------------|
| Section titles (base) | `.section-title` | Dharma | line-height 0.92 demasiado comprimido | Mantener Dharma, ajustar spacing | `line-height: 0.98; letter-spacing: 0.03em;` |
| Hero title | `.hero__title` | Dharma | line-height 0.92 en mobile | Mantener Dharma | `line-height: 0.95;` (mobile: `line-height: 1.0;`) |
| Metric numbers | `.metrics__number` | Dharma | line-height 0.85, pero son números | Mantener Dharma | Sin cambios |
| Panel numbers | `.exp-panel__number` | Dharma | Decorativo, no problemático | Mantener Dharma | Sin cambios |
| Pillar numbers | `.method__pillar-num` | Dharma | Decorativo, no problemático | Mantener Dharma | Sin cambios |
| Final CTA title | `.final-cta__title` | Dharma | 2.4rem en mobile es muy pequeño para Dharma | **Montserrat 800** | `font-family: var(--font-body); font-weight: 800; line-height: 1.15; letter-spacing: 0.01em;` |
| Exp detail names | `.exp-detail__name` | Dharma ❌ | Uppercase + Dharma + line-height 1 = bloque comprimido | **Montserrat 800** | `font-family: var(--font-body); font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; line-height: 1.15;` |
| Exp CTA title | `.exp-cta__title` | Dharma ❌ | Pregunta larga en español, 32px en Dharma | **Montserrat 800** | `font-family: var(--font-body); font-weight: 800; line-height: 1.15; letter-spacing: 0.01em;` |
| Metodo manifesto lead | `.metodo-manifesto__lead` | Dharma ❌ | 28px max, es texto de lectura, no título | **Montserrat 800** | `font-family: var(--font-body); font-weight: 800; line-height: 1.25;` |
| Metodo CTA title | `.metodo-cta__title` | Dharma | 36px borderline | **Montserrat 800** | `font-family: var(--font-body); font-weight: 800; line-height: 1.15;` |
| Pathfinder title | `.pathfinder .section-title` | Montserrat | Ya correcto | Montserrat 900 | Sin cambios ✓ |
| FAQ title | `.faq .section-title` | Montserrat | Ya correcto | Montserrat 900 | Sin cambios ✓ |
| Pathfinder step titles | `.pathfinder__step-title` | Montserrat | Ya correcto | Montserrat 700 | Sin cambios ✓ |
| FAQ questions | `.faq__question` | Montserrat | Ya correcto | Montserrat 700 | Sin cambios ✓ |
| Plan names | `.pricing-card__name` | Montserrat | Ya correcto | Montserrat 800 | Sin cambios ✓ |
| Coach names | `.coach-card__name` | Montserrat | Ya correcto | Montserrat 800 | Sin cambios ✓ |
| Nav links | `.nav__link` | Montserrat | Ya correcto | Montserrat 600 | Sin cambios ✓ |
| Buttons | `.btn` | Montserrat | Ya correcto | Montserrat 700 | Sin cambios ✓ |
| Footer | `.footer__*` | Montserrat | Ya correcto | Montserrat | Sin cambios ✓ |

---

## 10. Ley Tipográfica Final (10 Reglas)

### Regla 1: Dharma es para impacto, no para lectura
Dharma Gothic C es una fuente display condensed. Úsala SOLO para momentos de alto impacto visual: hero titles, números monumentales, títulos de marca a gran escala. NUNCA para texto funcional, preguntas, cards o CTAs.

### Regla 2: Minimum 36px para Dharma
Dharma no debe usarse por debajo de 36px (2.25rem). A tamaños menores, sus formas condensadas se vuelven ilegibles y comprimidas. Excepción: números decorativos que no son texto de lectura.

### Regla 3: Line-height mínimo 0.95 para Dharma display
El line-height de 0.92 es demasiado comprimido para cualquier cosa que no sea un hero title monumental (>4rem). Para títulos Dharma de 36px-64px, usa line-height 0.98-1.0. Para hero titles >64px, 0.95 es aceptable.

### Regla 4: Letter-spacing 0.03em-0.05em para Dharma
Las letras de Dharma ya están naturalmente juntas. Un letter-spacing de 0.03em-0.05em da aire sin perder impacto. Para uppercase Dharma, usa 0.06em-0.08em.

### Regla 5: Montserrat para todo lo funcional
Nav, botones, card titles, preguntas, FAQ, labels, footer, CTAs, subtítulos — todo en Montserrat. Si el usuario necesita LEER el texto (no solo IMPACTARSE por él), es Montserrat.

### Regla 6: Las preguntas van en Montserrat
Cualquier texto que empiece con ¿, qué, cuál, cómo, dónde — es texto funcional de interfaz. Va en Montserrat 700-900. Nunca en Dharma.

### Regla 7: Los nombres de cards van en Montserrat
Plan names, coach names, experience names, feature names — todos son elementos de UI scrolleables. Van en Montserrat 800 con letter-spacing 0.02em-0.06em.

### Regla 8: Frases largas en español + Dharma = NO
El español produce frases más largas que el inglés. Dharma condensada + frase larga = bloque ilegible. Si el título tiene más de 40 caracteres, considera Montserrat.

### Regla 9: En mobile, reduce el uso de Dharma
En pantallas < 768px, Dharma solo para hero title principal. Todos los demás títulos de sección pueden beneficiarse de Montserrat 800-900 con line-height 1.05-1.15 para mejor legibilidad.

### Regla 10: Dharma = blade, not wallpaper
El comentario en el código lo dice bien: "Dharma = blade, not wallpaper." Si estás usando Dharma en más de 3-4 elementos por página, la estás sobreutilizando. Cada uso de Dharma debe ser una decisión deliberada de impacto.

---

## 11. Prompt de Implementación Recomendado

```
Implementa las correcciones tipográficas de la auditoría Dharma Gothic.

CAMBIOS A REALIZAR (NO toques nada más):

1. styles.css — Ajustar variables display:
   --display-lh: 0.98;      (era 0.92)
   --display-ls: 0.03em;    (era 0.02em)

2. styles.css — .section-title:
   line-height: var(--display-lh);  (ahora 0.98 con el cambio de variable)
   letter-spacing: var(--display-ls);  (ahora 0.03em)

3. styles.css — .final-cta__title:
   Cambiar font-family: var(--font-display) → font-family: var(--font-body)
   font-weight: 800;
   line-height: 1.15;
   letter-spacing: 0.01em;

4. experiencias/experiencias.css — .exp-detail__name:
   Cambiar font-family: var(--font-display) → font-family: var(--font-body)
   font-weight: 800;
   text-transform: uppercase;
   letter-spacing: 0.06em;
   line-height: 1.15;

5. experiencias/experiencias.css — .exp-cta__title:
   Cambiar font-family: var(--font-display) → font-family: var(--font-body)
   font-weight: 800;
   line-height: 1.15;
   letter-spacing: 0.01em;

6. metodo/metodo.css — .metodo-manifesto__lead:
   Cambiar font-family: var(--font-display) → font-family: var(--font-body)
   font-weight: 800;
   line-height: 1.25;

7. metodo/metodo.css — .metodo-cta__title:
   Cambiar font-family: var(--font-display) → font-family: var(--font-body)
   font-weight: 800;
   line-height: 1.15;

NO CAMBIAR:
- WhatsApp number 59172001680
- Hero title (.hero__title) — mantener Dharma
- Metrics numbers (.metrics__number) — mantener Dharma
- Panel numbers (.exp-panel__number) — mantener Dharma
- Pillar numbers (.method__pillar-num) — mantener Dharma
- Pathfinder/FAQ overrides — ya están en Montserrat
- Pricing card names — ya están en Montserrat
- Coach card names — ya están en Montserrat
- Nav, buttons, footer — ya están en Montserrat

PRUEBA DESPUÉS:
- Homepage: hero, section titles, metrics, final CTA
- /experiencias/: experience names, CTA title
- /metodo/: manifesto lead, CTA title
- /coaches/: sin cambios necesarios
- Mobile (390px): verificar que los títulos no se ven comprimidos
```

---

## 12. Resumen de Cambios Propuestos

### Se mantienen en Dharma (4 selectores):
1. `.hero__title` — Hero del homepage
2. `.metrics__number` — Números de métricas
3. `.exp-panel__number` — Números decorativos de paneles
4. `.method__pillar-num` — Números romanos de pilares

### Se cambian a Montserrat (5 selectores):
1. `.final-cta__title` — CTA final del homepage
2. `.exp-detail__name` — Nombres de experiencia en /experiencias/
3. `.exp-cta__title` — CTA de /experiencias/
4. `.metodo-manifesto__lead` — Lead de /metodo/
5. `.metodo-cta__title` — CTA de /metodo/

### Se ajustan parámetros (2 selectores):
1. `.section-title` — line-height de 0.92 → 0.98, letter-spacing de 0.02em → 0.03em
2. `.hero__title` — line-height de 0.92 → 0.95 (via variable)

### Resultado neto:
- Dharma pasa de 10 selectores a 4 selectores
- Todos los textos funcionales quedan en Montserrat
- El line-height base de display sube de 0.92 a 0.98
- La sensación de "concentración" se elimina en los 5 selectores problemáticos

---

*Auditoría completada. No se modificó ningún archivo CSS. Solo se generó este reporte.*
