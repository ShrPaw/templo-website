# TEMPLO — Auditoría Profesional de Arquitectura de Información y Diseño Gráfico

**Fecha:** Mayo 2026
**Alcance:** Auditoría completa de la homepage — análisis, clasificación y recomendaciones.
**Restricción:** Sin cambios estructurales implementados. Solo recomendaciones.

---

## 1. Resumen Ejecutivo

La homepage de TEMPLO tiene una identidad visual fuerte y coherente: negro + dorado + Montserrat funciona como lenguaje premium. El Hero es impactante. Los precios son claros. El Pathfinder es una herramienta inteligente.

**El problema principal no es calidad — es cantidad.**

La homepage actual tiene **18 secciones visibles**. Un visitante promedio necesita hacer scroll por más de 15 pantallas completas para llegar al final. Hay **3 secciones de "vibes"** (Activity Reel + Lifestyle + Energy Strip) que compiten por la misma función emocional. Hay **2 secciones de guía** (Guía Detalle + Pathfinder + Objectives) que pueden comprimirse.

**Diagnóstico directo:** La homepage intenta ser galería, guía, folleto, blog y landing page al mismo tiempo. Necesita decidir si vende o si explica — y luego ejecutar esa decisión con disciplina.

**Puntuación general: 7.2/10** — Base sólida, necesita poda estratégica.

---

## 2. Diagnóstico Actual de la Homepage

### ¿Es demasiado larga?
**Sí.** La homepage actual tiene aproximadamente:
- ~18 secciones visibles
- ~15-17 pantallas de scroll en desktop
- ~20+ pantallas de scroll en mobile
- Tiempo estimado de lectura completa: 8-12 minutos

Un visitante promedio de una boutique fitness studio dedica **60-90 segundos** antes de decidir si explora o se va. La página necesita ofrecer una ruta clara de decisión en los primeros 30 segundos, y luego profundizar solo para quienes quieren más.

### ¿Es demasiado densa para mobile?
**Sí, particularmente:**
- La sección de Planes (6 tarjetas con múltiples opciones cada una) es extremadamente larga en mobile
- Guía Detalle duplica información de Experiencias
- Lifestyle + Energy Strip juntas son ~8-10 pantallas de fotos en mobile
- Los 8 coaches son 8 tarjetas completas en mobile

### ¿Crea deseo antes de explicar detalles?
**Parcialmente.** El Hero crea deseo. Positioning refuerza. Pero luego Metrics interrumpe con datos fríos antes de que el visitante haya sentido algo. El Activity Reel retoma la emoción, pero luego Experiencias + Guía Detalle se sumergen en explicaciones demasiado pronto.

### ¿Hay redundancia?
**Sí, claramente:**
- **Activity Reel + Lifestyle + Energy Strip** = 3 secciones de "vibes/energía" → deben comprimirse a máximo 2
- **Experiencias + Guía Detalle** = explican lo mismo con diferente profundidad → deben fusionarse
- **Pathfinder + Objectives** = ambas ayudan a decidir → deben comprimirse o fusionarse

---

## 3. Objetivo Comercial de la Homepage

La homepage debe lograr **exactamente 4 cosas**, en este orden:

1. **Capturar identidad** — "Esto es TEMPLO, no es un gym cualquiera"
2. **Crear deseo** — "Quiero entrenar aquí"
3. **Facilitar decisión** — "Sé qué plan me conviene"
4. **Activar contacto** — "Voy a escribir por WhatsApp"

Todo lo que no contribuya a estos 4 objetivos es secundario y debería vivir en páginas de extensión.

---

## 4. Auditoría Sección por Sección

### 4.1 — Hero
| Campo | Evaluación |
|---|---|
| **Rol actual** | Identidad emocional principal. Gancho visual. |
| **Categoría** | A. Conversion-critical + B. Brand-critical |
| **Evaluación visual** | ✅ Excelente. La imagen Buda + overlay dorado es cinematográfica. El scale-settle animation es sutil y premium. La tipografía grande con acento dorado funciona. |
| **Evaluación de ventas** | ✅ Fuerte. El copy "No vienes solo a entrenar. Vienes a construirte" es emocional y diferenciador. Dos CTAs claros: WhatsApp + Ver experiencias. |
| **Recomendación** | **Mantener como está** |
| **Prioridad** | Baja — ya funciona |

**Notas:** El scroll indicator animado es un buen toque. Los botones están bien jerarquizados (primario WhatsApp, secundario experiencias). No tocar.

---

### 4.2 — Positioning
| Campo | Evaluación |
|---|---|
| **Rol actual** | Clarificación en una frase |
| **Categoría** | B. Brand-critical |
| **Evaluación visual** | ✅ Buena. El blockquote centrado con línea dorada inferior es limpio. |
| **Evaluación de ventas** | ⚠️ Moderada. "TEMPLO es un estudio de entrenamiento para personas con una meta" es bueno pero podría ser más diferenciador. |
| **Recomendación** | **Mantener pero refinar visualmente** |
| **Prioridad** | Baja |

**Notas:** La sección ocupa mucho espacio para una sola frase. Considerar reducir el padding vertical ligeramente (de `--section-pad` a algo menor). La frase es buena pero podría ser más potente — sin embargo, esto es copy, no estructura.

---

### 4.3 — Metrics (8 Coaches / 5 Experiencias / 6 Días / 1 Estudio)
| Campo | Evaluación |
|---|---|
| **Rol actual** | Prueba social rápida y señal de autoridad |
| **Categoría** | C. Trust-building |
| **Evaluación visual** | ✅ Buena. El grid 4 columnas con números grandes dorados y labels en gris es limpio. El hover con línea dorada superior funciona. La animación de contador es elegante. |
| **Evaluación de ventas** | ⚠️ Los números son modestos (8 coaches, 5 experiencias) — honestos pero no impresionantes por sí solos. Sin embargo, para Cochabamba, un estudio con 8 coaches dedicados es diferenciador. |
| **Recomendación** | **Mantener, pero evaluar posición** |
| **Prioridad** | Media |

**Evaluación detallada:**
- **¿Aparece demasiado pronto?** Sí, ligeramente. Después del Hero emocional y el Positioning, el Metrics interrumpe con datos fríos antes de que el visitante haya sentido la energía del lugar. El visitante aún no ha visto movimiento, entrenamiento ni personas.
- **¿Debería moverse?** Recomendación: **Mover 1 posición más abajo** — después del Activity Reel. Así el visitante primero siente la energía, luego ve los números como refuerzo.
- **¿Se siente premium?** Moderadamente. Los números grandes dorados son buenos, pero el diseño es un poco genérico (podría ser de cualquier negocio). Considerar un tratamiento más editorial.
- **¿Apoya la confianza?** Sí, especialmente "6 días por semana" y "8 coaches" transmiten dedicación.
- **¿Debería quedarse?** Sí, definitivamente. Es prueba social honesta y relevante.

---

### 4.4 — Activity Reel ("Así se vive TEMPLO")
| Campo | Evaluación |
|---|---|
| **Rol actual** | Mostrar energía, movimiento y ambiente real del estudio |
| **Categoría** | C. Trust-building + E. Secondary detail |
| **Evaluación visual** | ✅ Excelente. El marquee horizontal con máscara de degradado es profesional. Las cards con overlay dorado y labels son premium. El infinite scroll funciona bien. |
| **Evaluación de ventas** | ✅ Fuerte. Muestra actividades reales, movimiento real. El CTA "Agendar una visita" después del reel es bien colocado. |
| **Recomendación** | **Mantener como está** |
| **Prioridad** | Baja |

**Notas:** Esta es la mejor de las 3 secciones de "vibes". Es dinámica, no ocupa demasiado espacio, y muestra variedad de actividades. El touch/drag support para mobile es un buen detalle. **Esta sección debe ser la ÚNICA sección de "energía/movimiento" en la homepage** — Lifestyle y Energy Strip deben moverse.

---

### 4.5 — Experiencias / Servicios (5 cards)
| Campo | Evaluación |
|---|---|
| **Rol actual** | Mostrar las 5 experiencias de entrenamiento disponibles |
| **Categoría** | A. Conversion-critical |
| **Evaluación visual** | ✅ Fuerte. Las cards con imágenes, overlay dorado y símbolos geométricos son consistentes. El badge "Premium" en Power Plate crea jerarquía. El grid 3+2 es equilibrado. |
| **Evaluación de ventas** | ✅ Buena. Cada card tiene descripción clara + "Conocer más" + CTA final "Quiero saber qué experiencia me conviene". |
| **Recomendación** | **Mantener pero comprimir descripciones** |
| **Prioridad** | Media |

**Notas:** Las descripciones de cada card son demasiado largas para una homepage. "Tecnología premium para activar, fortalecer y acondicionar el cuerpo con precisión. 30 min de sesión. Reserva tu horario" puede comprimirse a una línea. Los detalles completos deben ir en "Conocer más".

---

### 4.6 — Guía Detalle ("Más sobre cada experiencia")
| Campo | Evaluación |
|---|---|
| **Rol actual** | Explicación más profunda de cada experiencia |
| **Categoría** | E. Secondary detail |
| **Evaluación visual** | ⚠️ Moderada. Las cards con fotos + texto son funcionales pero repetitivas después de Experiencias. |
| **Evaluación de ventas** | ⚠️ Débil. Duplica lo que ya dijeron las cards de Experiencias pero con más palabras. El visitante ya vio las 5 experiencias — ¿necesita verlas otra vez? |
| **Recomendación** | **Mover a página /experiencias** |
| **Prioridad** | Alta |

**Razón:** Esta sección no añade nada que el visitante no haya visto en Experiencias. La diferencia principal es que aquí dice "máximo 3 personas" o "hasta 20 personas" — información útil pero que puede integrarse en las cards de Experiencias como badge secundario, o vivir en la página dedicada.

---

### 4.7 — Pathfinder ("Encuentra tu camino")
| Campo | Evaluación |
|---|---|
| **Rol actual** | Herramienta interactiva para guiar visitantes indecisos |
| **Categoría** | D. Orientation |
| **Evaluación visual** | ✅ Fuerte. El progress bar, las opciones con iconos SVG, y el resultado con border dorado son bien diseñados. La animación de transición entre pasos es fluida. |
| **Evaluación de ventas** | ✅ Fuerte. Reduce fricción para visitantes que no saben qué plan elegir. El resultado genera un mensaje WhatsApp personalizado — excelente para conversión. |
| **Recomendación** | **Mantener, pero evaluar si debe moverse más arriba** |
| **Prioridad** | Media |

**Notas:** El Pathfinder es una herramienta valiosa pero está posicionada demasiado tarde en la página. Un visitante indeciso que necesita orientación probablemente no llegará a la sección 7 de 18. **Considerar moverlo justo después de Experiencias** para capturar la indecision temprana.

---

### 4.8 — Objectives ("Lo que realmente estás buscando")
| Campo | Evaluación |
|---|---|
| **Rol actual** | Responder preguntas comunes y dirigir a planes específicos |
| **Categoría** | D. Orientation |
| **Evaluación visual** | ✅ Buena. Los iconos SVG personalizados son consistentes con el diseño general. Las cards con hover dorado funcionan. |
| **Evaluación de ventas** | ⚠️ Moderada. Las respuestas son útiles pero demasiado largas para una homepage. |
| **Recomendación** | **Comprimir y fusionar con Pathfinder o FAQ** |
| **Prioridad** | Alta |

**Razón:** Esta sección es esencialmente un FAQ estilizado con rutas a planes. Se solapa con:
- El Pathfinder (que ya guía según objetivos)
- El FAQ real (que responde preguntas comunes)

Las 4 preguntas/respuestas pueden comprimirse: las 2 primeras ("ganar músculo" y "tonificarme") ya las cubre el Pathfinder. Las 2 últimas ("resultados" y "coach o sin coach") pueden ir al FAQ.

---

### 4.9 — Método TEMPLO (5 pilares)
| Campo | Evaluación |
|---|---|
| **Rol actual** | Mostrar la filosofía de entrenamiento |
| **Categoría** | B. Brand-critical |
| **Evaluación visual** | ✅ Excelente. Los 5 pilares como columnas verticales con números romanos, símbolos SVG animados y reveal escalonado es uno de los elementos visuales más fuertes de la página. La textura de líneas sutiles y los acentos dorados en las esquinas son premium. |
| **Evaluación de ventas** | ⚠️ Moderada. Los pilares son filosóficos (Disciplina, Técnica, Constancia, Progresión, Carácter) — importantes para posicionamiento pero no cierran ventas directamente. |
| **Recomendación** | **Comprimir a 3 pilares en homepage, expandir a 5 en /metodo** |
| **Prioridad** | Media |

**Razón:** 5 pilares es mucho para una homepage. Los 3 más potentes (Disciplina, Técnica, Progresión) pueden quedarse con descripciones más cortas. Los otros 2 (Constancia, Carácter) pueden vivir en /metodo. Esto reduce la sección un 40% sin perder el mensaje.

---

### 4.10 — Coaches (8 coaches)
| Campo | Evaluación |
|---|---|
| **Rol actual** | Presentar el equipo de coaches |
| **Categoría** | C. Trust-building |
| **Evaluación visual** | ✅ Buena. Las cards con retratos circulares, quotes con borde dorado, y el tratamiento especial del fundador (Lucas) son coherentes. Los specialty icons son consistentes. |
| **Evaluación de ventas** | ⚠️ Moderada. 8 coaches completos en homepage es mucho. Solo Lucas como fundador necesita presencia completa. Los demás pueden ser teaser. |
| **Recomendación** | **Comprimir a teaser de 3-4 coaches + "Conocer a todo el equipo"** |
| **Prioridad** | Alta |

**Razón:** 8 tarjetas de coach en mobile son ~12 pantallas de scroll. El visitante no necesita ver a todos para decidir entrenar. Lucas (fundador) + 2-3 coaches destacados como teaser + link a /coaches es suficiente para la homepage.

---

### 4.11 — Lifestyle
| Campo | Evaluación |
|---|---|
| **Rol actual** | Mostrar el estilo de vida y comunidad TEMPLO |
| **Categoría** | E. Secondary detail |
| **Evaluación visual** | ✅ Buena. El grid asimétrico (tall + regular + wide) es atractivo. Los labels dorados y filtros consistentes. |
| **Evaluación de ventas** | ⚠️ Débil. Duplica la función del Activity Reel y Energy Strip. |
| **Recomendación** | **Mover a /galeria o eliminar** |
| **Prioridad** | Alta |

**Razón:** Lifestyle hace exactamente lo que Activity Reel y Energy Strip ya hacen: mostrar energía, comunidad y disciplina. Tres secciones de "vibes" es excesivo. Activity Reel es la mejor de las tres (dinámica, compacta, con CTA). Lifestyle y Energy Strip deben salir de la homepage.

---

### 4.12 — Energy Strip ("Dentro de TEMPLO")
| Campo | Evaluación |
|---|---|
| **Rol actual** | Mostrar energía y ambiente con fotos en grid |
| **Categoría** | E. Secondary detail |
| **Evaluación visual** | ✅ Buena. Los tiles con reveal escalonado y hover effects son atractivos. |
| **Evaluación de ventas** | ⚠️ Débil. Completamente redundante con Activity Reel y Lifestyle. |
| **Recomendación** | **Mover a /galeria o eliminar** |
| **Prioridad** | Alta |

**Razón:** Misma función que Activity Reel y Lifestyle. La sección "Dentro de TEMPLO" del Activity Reel ya cubre esto. Los tiles de energía son visualmente agradables pero no ayudan a vender — solo llenan espacio.

---

### 4.13 — Plans / Pricing (6 planes)
| Campo | Evaluación |
|---|---|
| **Rol actual** | Mostrar opciones de compra con precios |
| **Categoría** | A. Conversion-critical |
| **Evaluación visual** | ✅ Buena. Las tarjetas con header, guide level, notes, opciones y price pills son claras. El tratamiento premium de Power Plate crea jerarquía. |
| **Evaluación de ventas** | ✅ Fuerte. Cada plan tiene CTA WhatsApp directo. Las opciones están bien organizadas. |
| **Recomendación** | **Mantener, pero comprimir a vista resumida + "Ver detalles"** |
| **Prioridad** | Media |

**Notas:** Los 6 planes con todas sus opciones ocupan ~6-8 pantallas en mobile. Considerar una vista resumida (nombre + precio desde + guía level + CTA) con expansión para ver todas las opciones. El "Plan Seniors" con horarios específicos y el "Plan Mujeres" con su propia descripción son diferenciadores importantes.

---

### 4.14 — Location
| Campo | Evaluación |
|---|---|
| **Rol actual** | Información práctica + mapa |
| **Categoría** | A. Conversion-critical |
| **Evaluación visual** | ✅ Buena. El grid 50/50 con info + mapa es limpio. Los iconos SVG son consistentes. Los links sociales están bien organizados. |
| **Evaluación de ventas** | ✅ Fuerte. "Cómo llegar" + "Agendar visita por WhatsApp" + mapa embebido cubren todas las necesidades prácticas. |
| **Recomendación** | **Mantener como está** |
| **Prioridad** | Baja |

---

### 4.15 — FAQ + Suggested Questions
| Campo | Evaluación |
|---|---|
| **Rol actual** | Responder objeciones finales + facilitar contacto |
| **Categoría** | D. Orientation + A. Conversion-critical |
| **Evaluación visual** | ✅ Buena. La caja de "Suggested Questions" con borde dorado y el FAQ con accordion son funcionales. |
| **Evaluación de ventas** | ✅ Fuerte. Las suggested questions con links WhatsApp directos son una excelente herramienta de conversión. Los FAQ cubren las objeciones más comunes. |
| **Recomendación** | **Mantener, pero integrar contenido de Objectives** |
| **Prioridad** | Media |

**Notas:** Las suggested questions son una de las mejores herramientas de conversión de la página. No tocar. Los FAQ pueden absorber las respuestas de Objectives que se muevan aquí.

---

### 4.16 — Final CTA
| Campo | Evaluación |
|---|---|
| **Rol actual** | Último empujón a WhatsApp |
| **Categoría** | A. Conversion-critical |
| **Evaluación visual** | ✅ Buena. El fondo oscuro con glow dorado sutil y el botón grande son efectivos. |
| **Evaluación de ventas** | ✅ Fuerte. "Si tienes una meta, entrenar al azar no es suficiente" es un buen cierre emocional. |
| **Recomendación** | **Mantener como está** |
| **Prioridad** | Baja |

---

### 4.17 — Suggested Questions Box
| Campo | Evaluación |
|---|---|
| **Rol actual** | Facilitar preguntas frecuentes vía WhatsApp |
| **Categoría** | A. Conversion-critical |
| **Evaluación visual** | ✅ Fuerte. El diseño con borde dorado, icono de interrogación y opciones clickeables es premium. |
| **Evaluación de ventas** | ✅ Excelente. Cada opción genera un mensaje WhatsApp pre-escrito — reduce fricción a cero. |
| **Recomendación** | **Mantener como está** |
| **Prioridad** | Baja — ya es excelente |

---

### 4.18 — Footer
| Campo | Evaluación |
|---|---|
| **Rol actual** | Cierre de marca + navegación |
| **Categoría** | B. Brand-critical |
| **Evaluación visual** | ✅ Buena. El grid 2:1:1 con logo + tagline, navegación y contacto es limpio. |
| **Evaluación de ventas** | Neutral — no vende pero cierra profesionalmente. |
| **Recomendación** | **Mantener como está** |
| **Prioridad** | Baja |

---

## 5. Orden Final Recomendado para Homepage

### Orden propuesto (13 secciones — reducido de 18)

| # | Sección | Propósito | Categoría |
|---|---|---|---|
| 1 | **Hero** | Identidad emocional, gancho visual, CTA principal | A+B |
| 2 | **Positioning** | Clarificación en una frase | B |
| 3 | **Activity Reel** | Mostrar energía, movimiento y ambiente real | C |
| 4 | **Metrics** | Prueba social rápida (después de sentir la energía) | C |
| 5 | **Experiencias** | Mostrar las 5 experiencias (comprimido) | A |
| 6 | **Plans** | Opciones de compra (vista resumida) | A |
| 7 | **Pathfinder** | Guía para indecisos (ahora más temprano) | D |
| 8 | **Método TEMPLO teaser** | 3 pilares principales, no los 5 | B |
| 9 | **Coaches teaser** | Lucas + 2-3 coaches + "Ver equipo completo" | C |
| 10 | **Location** | Información práctica + mapa | A |
| 11 | **FAQ + Suggested Questions** | Objeciones finales + facilitar contacto | D+A |
| 12 | **Final CTA** | Último empujón a WhatsApp | A |
| 13 | **Footer** | Cierre de marca | B |

### ¿Por qué este orden?

1. **Hero → Positioning** = Identidad emocional + clarificación (lo que ya existe, funciona)
2. **Activity Reel → Metrics** = Primero sentir la energía, luego ver los números como refuerzo (no al revés)
3. **Experiencias → Plans** = Primero ver qué hay, luego cuánto cuesta (flujo natural de compra)
4. **Pathfinder** = Para quienes no decidieron después de ver experiencias y planes
5. **Método TEMPLO teaser** = Filosofía breve para quienes quieren saber más
6. **Coaches teaser** = Confianza humana sin sobrecargar
7. **Location → FAQ → Final CTA** = Conversión práctica + objeciones + empujón final

### Secciones que salen de la homepage

| Sección | Destino | Razón |
|---|---|---|
| Guía Detalle | /experiencias | Duplica Experiencias |
| Objectives | FAQ (absorbido) | Duplica Pathfinder + FAQ |
| Lifestyle | /galeria | Duplica Activity Reel |
| Energy Strip | /galeria | Duplica Activity Reel |
| Método TEMPLO completo | /metodo | Versión comprimida en homepage |
| Coaches completos | /coaches | Versión teaser en homepage |

---

## 6. Qué Debe Quedarse en Homepage (Contenido Vital)

- Hero con Buda + copy emocional + CTAs
- Positioning quote
- Activity Reel (la mejor sección de vibes)
- Metrics bar (8/5/6/1)
- Experiencias cards (comprimidas)
- Planes (vista resumida)
- Pathfinder (herramienta interactiva)
- Método TEMPLO (3 pilares, comprimido)
- Coaches (teaser de 3-4)
- Location + mapa
- FAQ + Suggested Questions
- Final CTA
- Footer

---

## 7. Qué Debe Comprimirse

| Sección | Cómo comprimir |
|---|---|
| Experiencias | Reducir descripciones a 1 línea. Mover detalles a "Conocer más" |
| Plans | Vista resumida: nombre + precio desde + guía level + CTA. Expandir opciones con click. |
| Método TEMPLO | 3 pilares en vez de 5. Descripciones más cortas. |
| Coaches | Solo Lucas + 2-3 destacados. Link a /coaches para el resto. |
| Positioning | Reducir padding vertical ligeramente |

---

## 8. Qué Debe Moverse a Páginas de Extensión

### /experiencias
**Propósito:** Detalles completos de cada experiencia
**Contenido de homepage:** Solo cards con descripción corta + "Conocer más"
**Contenido de extensión:**
- Power Plate: tecnología, beneficios, formato de sesión (max 3 personas), complemento gimnasio
- Calistenia: progresiones, nivel grupal (hasta 20), técnica
- Mujeres: enfoque, rutinas, ambiente
- Seniors: horarios, adaptaciones, seguridad
- Adaptado: casos, bajo impacto, consulta previa

**CTA en homepage:** "Conocer más →" en cada card
**CTA en extensión:** "Consultar este plan por WhatsApp"

---

### /coaches
**Propósito:** Perfiles completos del equipo
**Contenido de homepage:** Teaser de Lucas + 2-3 coaches
**Contenido de extensión:**
- Lucas / Lucoach: perfil completo, misión, visión, habilidad, quote
- Cada coach: foto, nombre, especialidad, habilidad, quote, Instagram (cuando esté disponible)
- CTA: "Consultar disponibilidad" por WhatsApp

**CTA en homepage:** "Conocer a todo el equipo →"
**CTA en extensión:** WhatsApp individual por coach

---

### /metodo
**Propósito:** Filosofía completa de TEMPLO
**Contenido de homepage:** 3 pilares comprimidos
**Contenido de extensión:**
- Los 5 pilares completos con descripciones largas
- Visuales simbólicos
- Principios de entrenamiento
- Copy extendido sobre disciplina, técnica, progresión, carácter

**CTA en homepage:** "Conocer nuestro método →"
**CTA en extensión:** "Agendar visita para conocer el método"

---

### /galeria
**Propósito:** Fotografía real (cuando esté disponible)
**Contenido de homepage:** Activity Reel solamente
**Contenido de extensión:**
- Fotos de entrenamiento
- Fotos del espacio
- Fotos de comunidad
- Lifestyle y Energy Strip content

**CTA en homepage:** (no necesita — el Activity Reel ya muestra el espacio)
**CTA en extensión:** "Agendar visita"

---

### /planes (opcional)
**Propósito:** Página dedicada de precios
**Contenido de homepage:** Vista resumida de planes
**Contenido de extensión:** Todos los planes con opciones completas
**Nota:** Los planes probablemente deben quedarse en homepage porque son conversion-critical. La página /planes sería un duplicado opcional para SEO.

---

## 9. Páginas de Extensión Propuestas

| Página | Propósito | Prioridad |
|---|---|---|
| /experiencias | Detalles de cada experiencia | Alta |
| /coaches | Perfiles completos del equipo | Alta |
| /metodo | Filosofía TEMPLO completa | Media |
| /galeria | Fotografía real (futuro) | Baja (esperar fotos reales) |
| /planes | Planes dedicados (opcional) | Baja |

---

## 10. Crítica de Diseño Gráfico / Geometría

### Fortalezas visuales
- **Paleta negro + dorado:** Consistente, premium, diferenciador. No hay violaciones.
- **Tipografía Montserrat:** Funciona para display y body. Los pesos están bien distribuidos (300-900).
- **Sistema de acentos dorados:** Los borders, glows, gradientes sutiles y hover effects son coherentes.
- **Cards con hover:** El patrón de "top gold line reveal on hover" es elegante y consistente.
- **Grid system:** Los grids de 2px gap con fondo sutil crean separación limpia sin líneas duras.
- **Motion system:** Las animaciones son sutiles y profesionales (fadeUp, scrollPulse, symbolFloat).
- **Reduced motion support:** ✅ Implementado correctamente con prefers-reduced-motion.

### Debilidades visuales
- **Densidad:** La página tiene demasiadas secciones compitiendo por atención. El ojo no sabe dónde descansar.
- **Ritmo visual:** Las secciones son demasiado uniformes en tamaño — no hay "respiración" entre bloques grandes y pequeños. Todo ocupa `--section-pad`.
- **Jerarquía de importancia:** Todas las secciones se sienten igual de importantes. Necesita variación en peso visual.
- **Whitespace:** El padding generoso es bueno individualmente, pero acumulado hace la página interminable.
- **Mobile:** La densidad es particularmente problemática en mobile donde cada sección ocupa más pantallas.

### Recomendaciones geométricas
1. **Variar el padding entre secciones:** Las secciones principales (Hero, Experiencias, Plans) mantienen `--section-pad`. Las secundarias (Metrics, Positioning) usan padding reducido.
2. **Crear "moments de respiración":** Insertar secciones más pequeñas entre las grandes para romper la monotonía.
3. **Unificar el tratamiento de cards:** Las exp-cards, coach-cards, guia-detalle items, objectives items, y pricing-cards tienen estilos similares pero no idénticos. Unificar.
4. **Los símbolos SVG de los coaches** son consistentes y bien diseñados — mantener.

---

## 11. Crítica de Ventas / Conversión

### ¿Está el visitante guiado claramente?
**Parcialmente.** La secuencia Hero → Positioning → Metrics → Activity Reel funciona, pero luego el visitante se pierde en un mar de explicaciones (Experiencias → Guía Detalle → Pathfinder → Objectives → Método → Coaches → Lifestyle → Energy Strip → Plans). Hay demasiado contenido entre "sé qué es TEMPLO" y "sé cuánto cuesta".

### ¿Es la oferta comprensible rápido?
**No lo suficiente.** Un visitante necesita hacer scroll por ~8 secciones antes de llegar a los precios. Los planes deberían aparecer antes — después de Experiencias, no después de 4 secciones adicionales.

### ¿Están los planes fáciles de alcanzar?
**No.** Los planes están en la sección 13 de 18. En mobile, eso son ~12 pantallas de scroll desde el inicio. Los precios son una de las primeras cosas que un visitante de fitness busca.

### ¿Se presenta WhatsApp en los momentos correctos?
**Sí, generosamente.** Hay CTAs WhatsApp en: Hero, Activity Reel, Experiencias, Objectives, cada Plan, Location, Suggested Questions, Final CTA, y Floating button. Esto es bueno — no hay exceso, hay presencia constante.

### ¿Sabe el usuario qué hacer después?
**Sí, si llega al final.** El problema es que muchos visitantes se irán antes de llegar a los planes o al Final CTA.

### ¿El Pathfinder reduce fricción?
**Sí, significativamente.** Es una herramienta bien diseñada que convierte confusión en orientación personalizada.

### ¿La página sobre-explica antes de vender?
**Sí.** Guía Detalle, Objectives y Método TEMPLO explican antes de que el visitante haya visto los precios.

### ¿Los CTAs son demasiado pasivos?
**No.** Los botones primarios dorados con texto claro ("Agendar visita", "Consultar este plan") son activos y directos.

### ¿Hay demasiados CTAs?
**No.** La presencia de WhatsApp en múltiples puntos es correcta para una landing page de servicios locales.

### ¿Qué sección debe cargar la responsabilidad de conversión más fuerte?
**Plans + Pathfinder combinados.** Plans muestra la oferta real. Pathfinder guía la decisión. Juntos deberían ser el corazón de la conversión.

### ¿Dónde debería aparecer "Agendar visita"?
- Hero (ya está)
- Después del Activity Reel (ya está)
- Después de Plans (necesita moverse más arriba)
- Final CTA (ya está)
- Floating WhatsApp (ya está)

### ¿Dónde debería aparecer "Conocer más"?
- En cada card de Experiencia (ya está)
- En Método TEMPLO teaser
- En Coaches teaser

### ¿Dónde debería aparecer "Ver plan"?
- En Pathfinder results (ya está)
- En cada card de Experiencia (puede añadirse)
- En Objectives (ya está, pero se eliminará)

---

## 12. Auditoría Mobile

### Problemas mobile actuales
1. **Plans (6 tarjetas):** ~8-10 pantallas de scroll. Cada tarjeta con múltiples opciones es enorme.
2. **Coaches (8 tarjetas):** ~12 pantallas de scroll. Demasiado para mobile.
3. **Lifestyle + Energy Strip:** ~8 pantallas de fotos redundantes.
4. **Guía Detalle + Experiencias:** ~10 pantallas de contenido duplicado.
5. **Objectives + Pathfinder:** ~8 pantallas de guía duplicada.

### Total estimado mobile actual: ~20+ pantallas de scroll

### Después de la reorganización propuesta: ~12-14 pantallas de scroll

### ¿Qué funciona bien en mobile?
- Hero: ✅ Full-width, impactante
- Activity Reel: ✅ Touch/drag support
- Pathfinder: ✅ Opciones fáciles de tocar
- FAQ accordion: ✅ Compacto
- Suggested Questions: ✅ Links directos a WhatsApp

---

## 13. Evaluación de la Sección Metrics

### ¿Mantener o refinar?
**Mantener.** Los números (8 Coaches, 5 Experiencias, 6 Días, 1 Estudio) son prueba social honesta y relevante para Cochabamba.

### Mejor posición
**Después del Activity Reel**, no antes. El orden actual (Hero → Positioning → Metrics → Activity Reel) interrumpe el flujo emocional. El visitante debería primero sentir la energía del reel, luego ver los números como refuerzo lógico.

### Tratamiento visual
El tratamiento actual es bueno pero puede refinarse:
- Los números grandes dorados funcionan
- El grid 4 columnas es limpio
- La animación de contador es elegante
- Podría ser ligeramente más editorial (quizás un subtítulo como "Nuestro estudio en números")

### ¿Se siente premium?
**Moderadamente.** El diseño es limpio y profesional, pero podría ser de cualquier negocio. Un toque más editorial lo elevaría — sin embargo, no es una prioridad.

### Veredicto final
**Mantener la sección. Moverla después del Activity Reel. Tratamiento visual actual es aceptable.**

---

## 14. Plan de Implementación Priorizado

### Cambios inmediatos (bajo riesgo)
1. **Eliminar Guía Detalle de homepage** → mover contenido a futuro /experiencias
2. **Eliminar Objectives de homepage** → absorber respuestas clave en FAQ
3. **Eliminar Lifestyle de homepage** → mover a futuro /galeria
4. **Eliminar Energy Strip de homepage** → mover a futuro /galeria
5. **Reordenar:** Activity Reel antes de Metrics
6. **Comprimir Experiencias:** descripciones más cortas

### Siguientes cambios estructurales
7. **Comprimir Plans:** vista resumida con expansión
8. **Mover Pathfinder** más arriba (después de Experiencias)
9. **Comprimir Método TEMPLO:** 3 pilares en vez de 5
10. **Comprimir Coaches:** teaser de 3-4 + link a /coaches

### Creación de páginas de extensión
11. **Crear /experiencias** con contenido de Guía Detalle
12. **Crear /coaches** con perfiles completos
13. **Crear /metodo** con los 5 pilares completos
14. **Crear /galeria** (esperar fotos reales)

### Esperar assets reales
15. Reemplazar placeholder images con fotos reales del estudio
16. Añadir fotos reales de coaches
17. Crear galería con fotografía profesional

---

## 15. Puntuaciones Finales

| Criterio | Puntuación (1-10) | Notas |
|---|---|---|
| **Identidad visual** | 8.5 | Negro + dorado + Buda es fuerte y diferenciador |
| **Geometría / composición** | 7.5 | Grids limpios, pero demasiada uniformidad en ritmo |
| **Arquitectura de información** | 6.0 | Demasiadas secciones, redundancia clara |
| **Claridad de conversión** | 7.0 | WhatsApp bien distribuido, pero planes muy lejos |
| **Flujo mobile** | 5.5 | Demasiado largo, demasiadas pantallas de scroll |
| **Sensación premium** | 8.0 | Animaciones, tipografía y colores son premium |
| **Jerarquía de contenido** | 6.5 | Todo se siente igual de importante |
| **Efectividad de ventas** | 6.5 | Buena base, pero sobre-explica antes de vender |
| **Preparación general** | 7.2 | Base sólida, necesita poda estratégica |

---

## 16. Recomendación Final

La homepage de TEMPLO tiene una base excelente: identidad visual fuerte, copy emocional, herramientas interactivas (Pathfinder), y presencia generosa de WhatsApp. El problema no es calidad — es cantidad.

**La acción más impactante es la poda:**

Eliminar 5 secciones de la homepage (Guía Detalle, Objectives, Lifestyle, Energy Strip, y Método completo) y moverlas a páginas de extensión transformará una página de 18 secciones en una de 13 — más enfocada, más rápida de consumir, y más efectiva para convertir.

**El segundo paso más impactante es reordenar:**
- Activity Reel antes de Metrics (sentir antes de contar)
- Plans antes de Pathfinder (ver precios antes de necesitar orientación)
- Pathfinder más arriba (capturar indecisos temprano)

**El tercer paso es comprimir:**
- Experiencias con descripciones más cortas
- Plans con vista resumida
- Método con 3 pilares en vez de 5
- Coaches con teaser en vez de listado completo

Estos 3 pasos — podar, reordenar, comprimir — convertirán una homepage sólida en una homepage que vende.

---

*Auditoría completada. Sin cambios de código implementados. Solo recomendaciones.*
*WhatsApp permanece: 59172001680*
*Precios sin cambios.*
*Sin datos falsos inventados.*
*Metrics no eliminada.*
