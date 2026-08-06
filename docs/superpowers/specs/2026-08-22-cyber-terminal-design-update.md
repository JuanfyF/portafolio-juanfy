# Cyber-Terminal Design Update

**Fecha:** 2026-08-22
**Estado:** Aprobado
**Enfoque:** Actualización por Capas

---

## Objetivo

Actualizar el frontend del portafolio para que sea 100% fiel al diseño definido en `DESIGN.md`, implementando la estética "Cyber-Terminal Portfolio" con colores, tipografía, componentes y efectos específicos.

---

## Restricciones

- Mantener responsive (desktop, tablet, mobile)
- Conservar animaciones actuales (scroll reveal, typing effect)
- Cambios incrementales (por capas)

---

## Paleta de Colores

### Background y Surfaces

| Variable | Valor | Uso |
|----------|-------|-----|
| `background` | `#111318` | Fondo base |
| `surface` | `#111318` | Superficie principal |
| `surface-dim` | `#111318` | Superficie oscurecida |
| `surface-bright` | `#37393e` | Superficie iluminada |
| `surface-container-lowest` | `#0c0e12` | Contenedor más bajo |
| `surface-container-low` | `#1a1c20` | Contenedor bajo |
| `surface-container` | `#1e2024` | Contenedor base |
| `surface-container-high` | `#282a2e` | Contenedor alto |
| `surface-container-highest` | `#333539` | Contenedor más alto |
| `surface-charcoal` | `#12141D` | Terminal windows |
| `surface-elevated` | `#1E202B` | Navbar, modals |
| `surface-variant` | `#333539` | Variante de superficie |

### Texto

| Variable | Valor | Uso |
|----------|-------|-----|
| `on-surface` | `#e2e2e8` | Texto principal |
| `on-surface-variant` | `#bac9cc` | Texto secundario |
| `inverse-surface` | `#e2e2e8` | Texto inverso |
| `inverse-on-surface` | `#2f3035` | Fondo inverso |

### Primary (Cyan)

| Variable | Valor | Uso |
|----------|-------|-----|
| `primary` | `#c3f5ff` | Texto primario |
| `on-primary` | `#00363d` | Texto sobre primario |
| `primary-container` | `#00e5ff` | Contenedor primario |
| `on-primary-container` | `#00626e` | Texto sobre contenedor primario |
| `inverse-primary` | `#006875` | Primario inverso |
| `surface-tint` | `#00daf3` | Accent cyan |
| `primary-fixed` | `#9cf0ff` | Primario fijo |
| `primary-fixed-dim` | `#00daf3` | Primario fijo dim |
| `on-primary-fixed` | `#001f24` | Texto sobre primario fijo |
| `on-primary-fixed-variant` | `#004f58` | Variante de texto sobre primario fijo |

### Secondary (Purple)

| Variable | Valor | Uso |
|----------|-------|-----|
| `secondary` | `#ecb2ff` | Texto secundario |
| `on-secondary` | `#520071` | Texto sobre secundario |
| `secondary-container` | `#cf5cff` | Contenedor secundario |
| `on-secondary-container` | `#480063` | Texto sobre contenedor secundario |
| `secondary-fixed` | `#f8d8ff` | Secundario fijo |
| `secondary-fixed-dim` | `#ecb2ff` | Secundario fijo dim |
| `on-secondary-fixed` | `#320047` | Texto sobre secundario fijo |
| `on-secondary-fixed-variant` | `#74009f` | Variante de texto sobre secundario fijo |

### Tertiary

| Variable | Valor | Uso |
|----------|-------|-----|
| `tertiary` | `#ffeac0` | Texto terciario |
| `on-tertiary` | `#3e2e00` | Texto sobre terciario |
| `tertiary-container` | `#fec931` | Contenedor terciario |
| `on-tertiary-container` | `#6f5500` | Texto sobre contenedor terciario |
| `tertiary-fixed` | `#ffdf96` | Terciario fijo |
| `tertiary-fixed-dim` | `#f3bf26` | Terciario fijo dim |
| `on-tertiary-fixed` | `#251a00` | Texto sobre terciario fijo |
| `on-tertiary-fixed-variant` | `#594400` | Variante de texto sobre terciario fijo |

### Error

| Variable | Valor | Uso |
|----------|-------|-----|
| `error` | `#ffb4ab` | Texto de error |
| `on-error` | `#690005` | Texto sobre error |
| `error-container` | `#93000a` | Contenedor de error |
| `on-error-container` | `#ffdad6` | Texto sobre contenedor de error |

### Borders y Otros

| Variable | Valor | Uso |
|----------|-------|-----|
| `outline` | `#849396` | Bordes suaves |
| `outline-variant` | `#3b494c` | Bordes fuertes |
| `border-muted` | `#2D333B` | Bordes de contenedores |
| `neon-cyan-glow` | `rgba(0, 229, 255, 0.15)` | Efectos glow |
| `terminal-green` | `#50FA7B` | Éxito, status |
| `code-gray` | `#94A3B8` | Código |

---

## Tipografía

### Familias

| Familia | Uso |
|---------|-----|
| **Plus Jakarta Sans** | Headlines, hero |
| **Inter** | Body text |
| **JetBrains Mono** | Código, terminal, labels |

### Estilos

| Estilo | Familia | Tamaño | Peso | Line Height | Letter Spacing |
|--------|---------|--------|------|-------------|----------------|
| `display-xl` | Plus Jakarta Sans | 72px | 800 | 80px | -0.02em |
| `headline-lg` | Plus Jakarta Sans | 40px | 700 | 48px | -0.01em |
| `headline-lg-mobile` | Plus Jakarta Sans | 32px | 700 | 40px | - |
| `terminal-title` | JetBrains Mono | 18px | 500 | 24px | - |
| `body-md` | Inter | 16px | 400 | 28px | - |
| `code-sm` | JetBrains Mono | 14px | 400 | 22px | - |
| `label-caps` | JetBrains Mono | 12px | 700 | 16px | 0.1em |

---

## Layout y Spacing

- **Grid**: 12 columnas en desktop, fluido en mobile
- **Grid overlay**: 32px cuadrícula, 5% opacidad
- **Container max**: 1200px
- **Gutter**: 24px
- **Terminal padding**: 2rem
- **Section gap**: 120px
- **Mobile breakpoint**: 768px (margins 16px)

---

## Border Radius

| Elemento | Radius |
|----------|--------|
| `sm` | 0.125rem (2px) |
| `DEFAULT` | 0.25rem (4px) |
| `md` | 0.375rem (6px) |
| `lg` | 0.5rem (8px) |
| `xl` | 0.75rem (12px) |
| `full` | 9999px |

---

## Componentes

### Terminal Window

- **Top bar**: `surface-elevated` con 3 dots (rojo, amarillo, verde)
- **Body**: `surface-charcoal`
- **Border**: 1px `border-muted`
- **Radius**: 0.25rem (4px)
- **Padding**: 2rem interno

### Buttons

| Tipo | Estilo | Hover |
|------|--------|-------|
| **Primary** | Cyan sólido (`#00daf3`), texto negro | Glow `neon-cyan-glow` |
| **Secondary** | Transparente, borde `border-muted`, texto cyan | Background `neon-cyan-glow` |

### Status Badges

- Pills con dot de color
- Background: 10% opacity del color de status
- Texto: `label-caps`
- Radius: `full`

### Code Snippets

- Dentro de Terminal Window
- Fuente: `code-sm`
- Syntax highlighting con primary y secondary
- Botón "Copy" en top-right (hover)

### Input Fields

- Background: `background`
- Border: 1px `border-muted`
- Focus: border cyan + inner glow
- Cursor: bloque sólido cyan

### Project Cards

- Terminal window simplificado
- Thumbnail (si aplica)
- Tags con `code-sm` font

---

## Efectos

### Grid Overlay

- Patrón 32px cuadrícula
- Opacidad: 5%
- Aplicado al background

### Glow Effects

| Elemento | Efecto |
|----------|--------|
| Primary buttons | `neon-cyan-glow` en hover (blur: 20px) |
| Status indicators | Glow sutil |
| Active states | Border cyan + glow |

### Glassmorphism

| Elemento | Estilo |
|----------|--------|
| Navbar | backdrop-blur 12px, semi-transparent dark |
| Tooltips | backdrop-blur 12px, surface-elevated |

### Elevación (Tonal Layers)

```
Layer 0: background (#111318)
    ↓
Layer 1: surface-charcoal (#12141D) ← Terminal windows
    ↓
Layer 2: surface-elevated (#1E202B) ← Navbar, modals
```

---

## Secuencia de Implementación

1. **Colores y tipografía** - Actualizar CSS variables, Tailwind config, Google Fonts
2. **Componentes base** - Terminal Window, Buttons, Badges
3. **Navbar y Footer** - Glassmorphism, layout
4. **Secciones principales** - Hero, About, Projects, Experience, Contact
5. **Efectos** - Glow, grid overlay, elevación

---

## Archivos a Modificar

| Archivo | Cambios |
|---------|---------|
| `index.html` | Agregar Plus Jakarta Sans |
| `tailwind.config.js` | Actualizar colores |
| `src/styles/index.css` | Variables CSS, efectos |
| `src/components/ui/Button.jsx` | Nuevos estilos |
| `src/components/ui/Badge.jsx` | Nuevos estilos |
| `src/components/ui/ProjectCard.jsx` | Terminal window |
| `src/components/layout/Navbar.jsx` | Glassmorphism |
| `src/components/layout/Footer.jsx` | Actualizar estilos |
| `src/components/sections/Hero.jsx` | Grid overlay, glow |
| `src/components/sections/About.jsx` | Terminal windows |
| `src/components/sections/Projects.jsx` | Cards |
| `src/components/sections/Experience.jsx` | Terminal windows |
| `src/components/sections/Contact.jsx` | Botones |
