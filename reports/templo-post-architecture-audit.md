# TEMPLO — Post-Architecture Audit

**Fecha:** 2026-05-13  
**Alcance:** Homepage + /experiencias/ + /coaches/ + /metodo/  
**Estado actual:** Fases 1, 2A, 2B, 2C completadas

---

## 1. Resumen Ejecutivo

La arquitectura del sitio ahora es profesional. TEMPLO tiene una homepage enfocada en venta y tres páginas de profundidad que separan responsabilidades: experiencias (qué), coaches (quién), método (por qué). La homepage ya no está sobrecargada — se comprimió exitosamente en cada fase.

**Conclusión directa:** El sitio está listo para la fase de refinamiento visual y de conversión. No necesita más páginas nuevas todavía. Necesita que lo que existe funcione mejor.

---

## 2. Qué mejoró después de Fase 2A–2C

| Fase | Cambio | Efecto |
|------|--------|--------|
| 2A | Guía Detalle → /experiencias/ | Homepage perdió ~200 líneas de copy denso |
| 2B | Coach detail → /coaches/ | Homepage perdió 8 tarjetas completas de coaches |
| 2C | 5 pilares → /metodo/ | Homepage perdió 2 pilares y copy extendido |

**Resultado:** La homepage pasó de ser un archivo de todo a ser una página de venta con profundidad accesible.

---

## 3. Evaluación de Arquitectura Actual

### Homepage
**Rol:** Vender, guiar, crear deseo, convertir.  
**Estado:** Cumple. Más corta, más enfocada, con CTAs claros hacia páginas internas.

### /experiencias/
**Rol:** Explicar los servicios en profundidad.  
**Estado:** Cumple. Power Plate, Calistenia, Mujeres, Seniors, Adaptado — cada uno con explicación profunda.

### /coaches/
**Rol:** Generar confianza humana.  
**Estado:** Cumple. Fundador dominante + equipo con especialidades. Sin datos falsos.

### /metodo/
**Rol:** Explicar filosofía y sistema.  
**Estado:** Cumple. 5 pilares con explicación extendida, conexión a experiencias, manifiesto.

---

## 4. Auditoría de Secciones del Homepage (una por una)

| # | Sección | Líneas | Clasificación | Notas |
|---|---------|--------|---------------|-------|
| 1 | Hero (Buddha) | 20 | **A. Mantener** | Icónico, diferenciador, no tocar |
| 2 | Positioning | 5 | **A. Mantener** | Una frase potente. Suficiente. |
| 3 | Activity Reel | 100 | **B. Mantener pero refinar** | Buena energía visual. Los labels podrían ser más específicos. |
| 4 | Metrics | 20 | **A. Mantener** | 4 métricas clave. Posición correcta después del reel. |
| 5 | Experiencias | 105 | **B. Mantener pero refinar** | Los "Conocer más" links funcionan bien. Podría comprimirse un poco más el preview. |
| 6 | Pathfinder | 100 | **A. Mantener** | Herramienta de orientación única. Reduce fricción. |
| 7 | Objectives | 54 | **D. Fusionar con FAQ o Pathfinder** | Sección más redundante. Las respuestas ya están en Pathfinder/FAQ/Planes. |
| 8 | Método teaser | 64 | **A. Mantener** | 3 pilares + CTA. Correcto. |
| 9 | Coaches teaser | 29 | **A. Mantener** | Fundador + strip de nombres + CTAs. Correcto. |
| 10 | Lifestyle | 17 | **E. Mover a /galeria o eliminar** | Imágenes placeholder duplican la energía de Activity Reel. Sin fotos reales, no aporta. |
| 11 | Energy Strip | 41 | **E. Mover a /galeria o eliminar** | Mismo problema: 6 tiles de placeholder. Activity Reel ya cumple el rol de energía visual. |
| 12 | Plans | 201 | **B. Mantener pero refinar** | 5 planes bien estructurados. El más largo del homepage. Aceptable porque es la sección de decisión. |
| 13 | Location | 34 | **A. Mantener** | Mapa + dirección. Necesario. |
| 14 | FAQ | 49 | **B. Mantener pero refinar** | Algunas preguntas se solapan con Objectives. |
| 15 | Suggested Questions | — | **A. Mantener** | CTAs de WhatsApp contextuales. |
| 16 | Final CTA | 9 | **A. Mantener** | Cierre limpio. |
| 17 | Footer | — | **A. Mantener** | Consistente entre páginas. Logo correcto. |

---

## 5. Auditoría de Páginas de Extensión

### /experiencias/
- **Útil:** Sí. Explica cada servicio con profundidad que no cabe en homepage.
- **Claridad:** Alta. Cada sección tiene título, descripción, icono, CTA.
- **Polish visual:** Bueno. CSS propio, mobile correcto.
- **Soporte de conversión:** Medio. Los CTAs van a WhatsApp pero no hay pricing cross-reference directo.
- **Mejora sugerida:** Agregar "Desde Bs. XXX" o link a planes en cada experiencia.

### /coaches/
- **Confianza:** Alta. Lucas como fundador dominante es correcto.
- **Jerarquía:** Buena. Founder → equipo → orientación.
- **Polish visual:** Bueno. Iniciales como placeholders intencionales.
- **Mobile:** Correcto. Founder card se apila, grid va a 1 columna.
- **Mejora sugerida:** Cuando haya fotos reales, el impacto será mucho mayor.

### /metodo/
- **Profundidad de marca:** Alta. Los 5 pilares con SVGs y copy extendido crean identidad.
- **Fuerza simbólica:** Buena. Los símbolos de pilares son consistentes con el homepage.
- **Legibilidad:** Buena. Copy claro, sin exageraciones.
- **Soporte de conversión:** Medio. El CTA final conecta con WhatsApp y Pathfinder.
- **Mejora sugerida:** La sección "Conexión con experiencias" podría incluir links directos a cada experiencia.

---

## 6. Análisis de Redundancia

### Objectives vs Pathfinder vs FAQ

**Problema:** Las tres secciones responden preguntas de los usuarios.

- **Pathfinder:** Interactivo, guía hacia un plan específico. Único.
- **Objectives:** 4 preguntas frecuentes con respuestas y links a planes. **Se solapa con FAQ y Pathfinder.**
- **FAQ:** 5 preguntas generales. Algunas se solapan con Objectives.

**Recomendación:** Objectives es la sección más redundante del homepage. Sus 4 items:
1. "Quiero ganar músculo" → ya lo resuelve Pathfinder
2. "Quiero tonificarme" → ya lo resuelve Pathfinder
3. "¿En cuánto tiempo?" → ya lo responde FAQ
4. "¿Es con coach?" → ya lo explican Plans + FAQ

**Decisión sugerida:** Fusionar Objectives con FAQ. Crear una FAQ expandida que incluya las preguntas de orientación de Objectives. Eliminar Objectives como sección independiente.

### Lifestyle vs Activity Reel vs Energy Strip

**Problema:** Las tres secciones muestran "energía visual" del gym.

- **Activity Reel:** Videos/imagenes con labels. Dinámico. Único.
- **Lifestyle:** 4 imágenes placeholder con labels. **Redundante con Activity Reel.**
- **Energy Strip:** 6 tiles de placeholder. **Redundante con Activity Reel.**

**Recomendación:** Activity Reel cumple el rol de energía visual. Lifestyle y Energy Strip son placeholders sin fotos reales. 

**Decisión sugerida:**
- Si hay fotos reales: Lifestyle y Energy Strip pueden convertirse en /galeria.
- Sin fotos reales: Eliminar ambas secciones. Activity Reel es suficiente.

---

## 7. Análisis de Flujo Mobile

El homepage tiene ~978 líneas de HTML. En mobile, el scroll es largo.

**Secciones que ocupan más espacio en mobile:**
1. Plans (201 líneas) — inevitable, es la sección de decisión
2. Activity Reel (100 líneas) — puede comprimirse
3. Experiencias (105 líneas) — ya comprimida, aceptable
4. Pathfinder (100 líneas) — interactivo, no se siente largo
5. Objectives (54 líneas) — **redundante, candidata a eliminación**
6. Energy Strip (41 líneas) — **redundante, candidata a eliminación**
7. Lifestyle (17 líneas) — **redundante, candidata a eliminación**

**Si se eliminan Objectives + Lifestyle + Energy Strip:**
- Se pierden ~112 líneas de HTML
- El homepage se siente más enfocado
- Se reduce scroll en mobile significativamente

---

## 8. Análisis de Ventas / Conversión

### ¿Qué tan rápido entiende el visitante la oferta?
**Bueno.** El hero dice "No vienes solo a entrenar. Vienes a construirte." + Positioning dice "TEMPLO es un estudio de entrenamiento para personas con una meta." En los primeros 10 segundos, el visitante sabe qué es TEMPLO.

### ¿Los CTAs aparecen en los momentos correctos?
**Mejorable.** Los CTAs de WhatsApp están en:
- Nav (siempre visible) ✅
- Después de cada experiencia ✅
- En cada plan ✅
- Al final ✅

**Falta:** No hay CTA de WhatsApp entre Pathfinder y Plans. El Pathfinder muestra un resultado pero no ofrece WhatsApp inmediato para consultarlo.

### ¿El pricing es fácil de encontrar?
**Sí.** Plans está en el nav como anchor link. Los precios están visibles.

### ¿Las páginas internas ayudan a la conversión o distraen?
**Ayudan.** /experiencias/ profundiza sin sobrecargar homepage. /coaches/ genera confianza. /metodo/ crea identidad de marca. Ninguna distrae.

### ¿Qué debería ser visible antes del pricing?
Orden actual: Hero → Positioning → Reel → Metrics → Experiencias → Pathfinder → Objectives → Método → Coaches → Lifestyle → Energy Strip → **Plans**

**Antes de Plans hay 10 secciones.** Es mucho. El visitante que quiere ver precios hace mucho scroll.

**Recomendación:** Si se eliminan Objectives, Lifestyle y Energy Strip, el orden queda:
Hero → Positioning → Reel → Metrics → Experiencias → Pathfinder → Método → Coaches → **Plans**

Eso es 8 secciones. Más razonable.

---

## 9. Análisis de Diseño Gráfico / Geometría

### Geometría
**Consistente.** Las cards usan proporciones similares en todas las páginas. Los pilares mantienen la misma estructura vertical. Los coaches cards tienen la misma grilla.

### Espaciado
**Bueno.** `--section-pad` se usa consistentemente. Los separadores de línea dorada entre secciones crean ritmo visual.

### Jerarquía visual
**Mejorable en algunos puntos:**
- Los section-labels (etiquetas doradas) están bien
- Los section-titles son consistentes
- Los section-subs a veces son demasiado largos

### Densidad de página
**Homepage:** Media-alta. Con 17 secciones, el ojo tiene mucho que procesar.
**Páginas internas:** Correctas. Cada una tiene 5-8 secciones.

### Tipografía
**Montserrat funciona.** Los pesos 300-900 se usan correctamente. La jerarquía tipográfica es clara.

### Iconos
**Consistentes.** Los SVGs de pilares, coaches y experiencias mantienen el mismo lenguaje visual: lineal, dorado, geométrico.

### Calidad de movimiento
**Buena.** Los intersection observers crean reveals sutiles. Los hover states son elegantes. No hay animaciones excesivas.

### Footer
**Consistente entre páginas.** Logo correcto, links correctos.

### Composición mobile
**Mejorable.** El hero se ve bien. Los pilares se apilan correctamente. Pero la cantidad de secciones hace que el scroll sea largo.

### ¿Se siente como un sistema de marca?
**Sí.** Negro/dorado, Montserrat, geometría limpia, SVGs simbólicos. Se siente como una marca coherente.

### ¿Alguna sección se siente sobre-diseñada o sub-diseñada?
- **Sobre-diseñada:** Energy Strip (6 tiles de placeholder con overlay — mucho código para poco contenido real)
- **Sub-diseñada:** Positioning (solo una frase — pero eso es parte de su fuerza)

---

## 10. Qué impide llegar a 10/10

1. **Fotografía real.** Los placeholders funcionan pero no venden. Las fotos reales de TEMPLO transformarán el sitio.
2. **Redundancia en homepage.** Objectives, Lifestyle y Energy Strip se solapan con otras secciones.
3. **Flujo mobile largo.** 17 secciones en mobile es mucho scroll.
4. **Sin galería.** El sitio necesita un lugar para mostrar el espacio real cuando haya fotos.
5. **CTAs intermedios.** Falta un WhatsApp CTA entre Pathfinder y Plans.
6. **Experiencias sin pricing cross-reference.** Las páginas de experiencia no muestran precios.

---

## 11. Próxima Etapa Recomendada

### NO crear /galeria todavía
Sin fotos reales, /galeria sería otra página de placeholders. No aporta valor.

### SÍ: Compresión del homepage (Phase 3A)

**Implementar:**
1. **Eliminar Objectives.** Fusionar sus preguntas únicas con FAQ. Las 4 preguntas de Objectives ya están cubiertas por Pathfinder, Plans y FAQ.
2. **Eliminar Lifestyle.** Activity Reel ya cumple el rol de energía visual. Lifestyle con placeholders es redundante.
3. **Eliminar Energy Strip.** Misma razón. Activity Reel es suficiente.
4. **Expandir FAQ.** Agregar las preguntas de Objectives que no están en FAQ actualmente.
5. **Agregar WhatsApp CTA intermedio.** Después de Pathfinder, antes de Plans.
6. **Comprimir Activity Reel.** Si es posible, reducir a 4-6 items en vez de 8+.

**Resultado esperado:**
- Homepage con ~10-11 secciones en vez de 17
- Mobile scroll reducido ~30%
- Sin pérdida de información importante
- Más enfocado en venta

### Después: Phase 3B
- Refinar copy de todas las páginas
- Agregar pricing cross-reference en /experiencias/
- Agregar links directos en /metodo/ a experiencias
- Mejorar FAQ con más preguntas

### Cuando haya fotos reales: Phase 4
- Crear /galeria
- Reemplazar todos los placeholders
- Agregar fotos de coaches
- Posiblemente restaurar Lifestyle como galería preview

---

## 12. Plan de Prioridades

### Inmediato (Phase 3A)
1. Eliminar Objectives del homepage → fusionar con FAQ
2. Eliminar Lifestyle del homepage
3. Eliminar Energy Strip del homepage
4. Expandir FAQ con preguntas de Objectives
5. Agregar WhatsApp CTA después de Pathfinder

### Siguiente (Phase 3B)
1. Refinar copy en todas las páginas
2. Agregar links de pricing en /experiencias/
3. Agregar links de experiencias en /metodo/
4. Comprimir Activity Reel si es posible

### Después (Phase 4)
1. Crear /galeria con fotos reales
2. Reemplazar todos los placeholders
3. Agregar fotos de coaches
4. Agregar Instagram links reales

### Esperar assets reales
1. /galeria — sin fotos no tiene sentido
2. Coach photos — sin fotos reales, los iniciales son correctos
3. Lifestyle/Energy — sin fotos, eran redundantes

---

## 13. Puntuaciones Finales

### Homepage
| Criterio | Puntuación |
|----------|------------|
| Identidad | 8/10 |
| Claridad | 7/10 |
| Conversión | 7/10 |
| Flujo mobile | 6/10 |
| Jerarquía de contenido | 7/10 |
| Ritmo visual | 7/10 |

### /experiencias/
| Criterio | Puntuación |
|----------|------------|
| Utilidad | 8/10 |
| Claridad | 9/10 |
| Polish visual | 8/10 |
| Soporte de conversión | 7/10 |

### /coaches/
| Criterio | Puntuación |
|----------|------------|
| Confianza | 8/10 |
| Jerarquía | 8/10 |
| Polish visual | 8/10 |
| Calidad mobile | 8/10 |

### /metodo/
| Criterio | Puntuación |
|----------|------------|
| Profundidad de marca | 9/10 |
| Fuerza simbólica | 8/10 |
| Legibilidad | 8/10 |
| Soporte de conversión | 7/10 |

### Sitio general
| Criterio | Puntuación |
|----------|------------|
| Arquitectura | 8/10 |
| Sensación premium | 8/10 |
| Flujo de ventas | 7/10 |
| Preparación | 7/10 |
| **Puntuación general** | **7.5/10** |

---

## Conclusión

El sitio tiene una base sólida. La arquitectura es correcta. Las páginas internas funcionan. Lo que impide llegar a 8-9/10 es la redundancia en homepage y la falta de fotos reales. La compresión del homepage (eliminar Objectives, Lifestyle, Energy Strip) es el paso más seguro y de mayor impacto inmediato.
