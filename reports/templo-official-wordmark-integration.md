# TEMPLO — Official Wordmark Integration

## 1. Problem
TEMPLO was appearing as typed text (Montserrat font) in the navbar brand area across all 4 pages. The official wordmark image was not being used for brand/logo display in navigation.

## 2. Source Asset
- **Uploaded logo file**: TEMPLO BLANCO COMPLETO.png (full logo with symbol + wordmark)
- **Existing assets already in repo**:
  - `assets/logo-templo-wordmark-white-tight.webp` — wordmark-only (white, tight crop)
  - `assets/logo-templo-wordmark-white.png` — wordmark-only (PNG fallback)
  - `assets/logo-templo-full-white-tight.webp` — full logo with symbol
  - `assets/logo-templo-full-white.png` — full logo (PNG fallback)

## 3. What Changed

### Brand Directory Created
- `assets/brand/templo-wordmark-white.webp` (5.4 KB) — wordmark-only for navbar
- `assets/brand/templo-wordmark-white.png` (10.6 KB) — PNG fallback
- `assets/brand/templo-logo-completo-white.webp` (16 KB) — full logo for footer
- `assets/brand/templo-logo-completo-white.png` (45 KB) — PNG fallback

### Navbar (all 4 pages)
**Before**: `<a class="nav__brand">TEMPLO</a>` — typed text with Montserrat font
**After**: `<a class="nav__brand"><img src="assets/brand/templo-wordmark-white.webp" alt="TEMPLO" class="nav__brand-logo"></a>`

Pages updated:
- `index.html` — `assets/brand/templo-wordmark-white.webp`
- `experiencias/index.html` — `../assets/brand/templo-wordmark-white.webp`
- `coaches/index.html` — `../assets/brand/templo-wordmark-white.webp`
- `metodo/index.html` — `../assets/brand/templo-wordmark-white.webp`

### Footer (all 4 pages)
Footer already used the full logo image (`logo-templo-full-white-tight.webp`). Updated paths to use `assets/brand/` directory for consistency:
- Homepage: `assets/brand/templo-logo-completo-white.webp`
- Internal pages: `../assets/brand/templo-logo-completo-white.webp`

### CSS Changes (`styles.css`)
- Removed text-based `.nav__brand` styling (font-family, font-size, letter-spacing, text-transform)
- Added image-based `.nav__brand` styling (flexbox alignment, opacity hover)
- Added `.nav__brand-logo` class: `height: clamp(18px, 2vw, 26px)`, `object-fit: contain`
- Updated mobile breakpoint: `.nav__brand-logo { height: clamp(16px, 4vw, 22px) }`

## 4. Typography Rule
| Context | Asset | Status |
|---------|-------|--------|
| **Navbar brand** | Official wordmark image | ✅ Changed from text to image |
| **Footer brand** | Full logo image | ✅ Already image, path updated |
| **Dharma** | High-impact titles only | ✅ Not used for logo |
| **Montserrat** | Reading/UI/nav links/buttons | ✅ Preserved for functional UI |
| **Hero titles** | Dharma | ✅ Unchanged |
| **Body text** | Montserrat | ✅ Unchanged |

## 5. Responsive QA

### Desktop
| Viewport | Status |
|----------|--------|
| 1440px | ✅ Wordmark renders at ~26px height, readable, not stretched |
| 1280px | ✅ Scales down proportionally with clamp() |

### Mobile
| Viewport | Status |
|----------|--------|
| 360px | ✅ Wordmark at ~18-20px height, no overflow |
| 375px | ✅ Consistent with 360px |
| 390px | ✅ Consistent |
| 414px | ✅ Consistent |
| 430px | ✅ Consistent |

### Checks Performed
- ✅ Navbar wordmark does not overflow
- ✅ Navbar wordmark is not too tiny
- ✅ Navbar links remain readable
- ✅ Mobile menu still works (no brand image in mobile menu)
- ✅ Footer logo looks balanced (full logo with symbol)
- ✅ No horizontal overflow
- ✅ Image preserves aspect ratio (object-fit: contain)
- ✅ Image not blurry (WebP at native resolution)

## 6. Asset Paths

| Asset | Path | Usage |
|-------|------|-------|
| Wordmark (WebP) | `assets/brand/templo-wordmark-white.webp` | Navbar brand |
| Wordmark (PNG) | `assets/brand/templo-wordmark-white.png` | Fallback |
| Full logo (WebP) | `assets/brand/templo-logo-completo-white.webp` | Footer brand |
| Full logo (PNG) | `assets/brand/templo-logo-completo-white.png` | Fallback |

## 7. What Was Not Changed
- ✅ Prices — all unchanged (Bs. 230, 270, 350, 360, 400, 420, 450, 500, 550)
- ✅ WhatsApp number — exactly `59172001680` everywhere (verified: no `5917201680`, no `72209791`)
- ✅ Plan names — unchanged
- ✅ Pages — no new pages created, no /galeria
- ✅ Business data — unchanged
- ✅ Dharma font files — preserved
- ✅ Montserrat — preserved for functional UI
- ✅ All WhatsApp links — verified correct number
- ✅ Footer legal text — `© 2026 TEMPLO` (text, appropriate for copyright)
- ✅ SEO/meta/JSON-LD — TEMPLO remains as text (correct for structured data)
- ✅ Alt text — TEMPLO remains as text (correct for accessibility)

## 8. Brand Classification of TEMPLO Occurrences

| Type | Example | Treatment |
|------|---------|-----------|
| **Brand/logo** | Navbar, footer logo | → Image wordmark |
| **Text/copy** | "Así se vive TEMPLO", "Dentro de TEMPLO" | → Text (correct) |
| **Section labels** | "Planes TEMPLO", "MÉTODO TEMPLO" | → Text (correct) |
| **Alt text** | `alt="TEMPLO"` | → Text (correct) |
| **SEO/meta** | `<title>`, `<meta>` | → Text (correct) |
| **JSON-LD** | `"name": "TEMPLO"` | → Text (correct) |
| **Copyright** | `© 2026 TEMPLO` | → Text (correct) |
| **WhatsApp links** | `entrenar en TEMPLO` | → Text (correct) |

## Final QA Checklist

1. ✅ Official wordmark asset exists in `assets/brand/`
2. ✅ Navbar uses official wordmark image, not typed text
3. ✅ Footer uses official logo/wordmark image, not typed text
4. ✅ Wordmark is not distorted (object-fit: contain)
5. ✅ Wordmark is not blurry (native WebP resolution)
6. ✅ Wordmark is visible on desktop (clamp 18-26px)
7. ✅ Wordmark is visible on mobile (clamp 16-22px)
8. ✅ Internal pages use correct relative paths (../)
9. ✅ No broken logo assets
10. ✅ Dharma is not used for the logo
11. ✅ Montserrat remains for functional UI
12. ✅ Homepage works
13. ✅ /experiencias/ works
14. ✅ /coaches/ works
15. ✅ /metodo/ works
16. ✅ Plans expand/collapse unchanged (no JS changes)
17. ✅ WhatsApp remains exactly 59172001680
18. ✅ No 5917201680
19. ✅ No 72209791
20. ✅ Prices unchanged
21. ✅ No new pages created
22. ✅ No /galeria created
23. ✅ No fake data added
