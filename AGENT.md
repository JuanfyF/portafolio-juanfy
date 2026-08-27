# AGENT.md — Portafolio Juan Fernando Flores Culqui

Este documento define el contexto del proyecto y las reglas obligatorias que cualquier
asistente de IA (Claude Code, Copilot, Cursor, etc.) debe seguir al trabajar en este
repositorio.

---

## 1. Descripción del proyecto

Portafolio profesional de Ingeniero de Software Full Stack, construido como sitio
estático de una sola página (SPA de scroll con anclas). Objetivo: marca personal y
networking. Estética: oscura, tipo terminal/dev.

## 2. Arquitectura

Este proyecto sigue una arquitectura de **sitio estático desplegado como SPA (estilo
JAMstack)**, con un backend desacoplado mínimo. No es un monolito ni microservicios.

```
┌───────────────────────┐          ┌──────────────────────────┐
│   Frontend (SPA)       │   HTTP   │   Backend (API mínima)     │
│   React + Vite          │ ───────▶ │   Node.js + Express          │
│   Desplegado en Vercel  │          │   Solo endpoint /contact     │
└───────────────────────┘          └──────────────────────────┘
```

### Frontend — Component-Based Architecture
- La UI se descompone en componentes reutilizables e independientes (`Hero`,
  `ProjectCard`, `Navbar`, etc.), estándar de React.
- **Organización por responsabilidad** (versión simplificada de Atomic Design, sin
  llevarlo al extremo formal de átomos/moléculas/organismos):
  - `layout/` — estructura global (Navbar, Footer)
  - `sections/` — bloques completos de página (Hero, About, Projects, Experience,
    Contact)
  - `ui/` — piezas atómicas reutilizables (Badge, Button, ProjectCard)

### Separación de datos y presentación
- El contenido (proyectos, experiencia, skills) vive en `src/data/` como estructuras
  planas (arrays/objetos), completamente desacoplado de los componentes que lo
  renderizan.
- Ventaja clave: si en el futuro se migra el contenido a una API o un headless CMS,
  solo cambia la fuente de datos — los componentes no se tocan.

### Backend — API REST de un solo propósito
- No aplica una arquitectura en capas (controller/service/repository) porque no la
  necesita: es un único endpoint que recibe el formulario de contacto, lo valida y
  sanitiza (Regla 4 — OWASP), aplica rate limiting, y lo procesa (envío de email o
  almacenamiento simple).
- No hay base de datos, no hay autenticación, no hay estado complejo del lado del
  servidor — la arquitectura es intencionalmente simple, proporcional al problema que
  resuelve.

## 3. Stack técnico

| Capa | Tecnología |
|---|---|
| Frontend | React 18 + Vite |
| Estilos | Tailwind CSS |
| Routing | React Router (si aplica; el sitio es principalmente de una sola página) |
| Backend (opcional) | Node.js + Express — solo para el endpoint de contacto |
| Control de versiones | Git / GitHub |
| Deploy | Vercel |

## 4. Estructura del proyecto

```
portafolio-juanfy/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── ProjectCard.jsx
│   │       ├── Badge.jsx
│   │       └── Button.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── experience.js
│   │   └── skills.js
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── server/
│   ├── index.js
│   └── routes/
│       └── contact.js
├── tests/
│   ├── components/
│   └── server/
├── .env.example
├── .gitignore
├── AGENT.md
├── README.md
├── tailwind.config.js
├── vite.config.js
├── package.json
└── index.html
```

**Convención de datos:** el contenido (proyectos, experiencia, skills) vive en
`src/data/` como arrays/objetos planos, separado de los componentes. Agregar o editar
contenido no debe requerir tocar JSX.

## 5. Secciones de la página (orden fijo)

1. Navbar (sticky, transparente en hero, sólido al hacer scroll, indicador de sección activa)
2. Hero
3. Sobre mí
4. Proyectos (HashVault destacado primero, luego SIED, SMTFI, SGRH, PWA-GDI)
5. Experiencia
6. Contacto
7. Footer

---

## 6. Reglas obligatorias para agentes de IA

Estas reglas son de cumplimiento estricto. Ningún agente debe saltárselas aunque el
resultado parezca más eficiente a corto plazo.

### Regla 1 — No instalar dependencias sin autorización previa
Antes de ejecutar `npm install`, `npm add`, `yarn add`, o cualquier comando que agregue
una nueva dependencia al `package.json`, el agente debe:
- Detenerse y preguntar explícitamente al usuario, indicando el nombre del paquete y
  para qué se necesita.
- Esperar confirmación antes de proceder.
- Nunca instalar dependencias transitivas de forma "silenciosa" para resolver un error
  sin señalarlo primero.

### Regla 2 — Corrección puntual de errores de compilación
Cuando ocurra un error de build o compilación:
- El agente debe corregir **únicamente** el problema puntual que causó el error.
- Está prohibido reescribir, refactorizar, o "mejorar" código no relacionado con el
  error mientras se soluciona.
- Si el agente identifica una mejora adicional fuera del alcance del error, debe
  reportarla como sugerencia separada, no aplicarla directamente.

### Regla 3 — Pruebas unitarias al finalizar cada fase
Al completar cada fase de desarrollo (ej. "sección Hero terminada", "endpoint de
contacto terminado"), el agente debe:
- Crear pruebas unitarias que cubran la funcionalidad implementada en esa fase.
- Las pruebas se ubican en `tests/`, reflejando la estructura de `src/`.
- No se considera una fase "cerrada" hasta que sus pruebas correspondientes existen y
  pasan.

### Regla 4 — Seguridad basada en OWASP Top 10
Todo el desarrollo debe considerar el estándar OWASP Top 10, en particular:
- Validación y sanitización de cualquier input de usuario (ej. formulario de contacto).
- Nunca exponer credenciales, API keys, o secretos en el código fuente o el repositorio
  — usar variables de entorno (`.env`, excluido vía `.gitignore`).
- Rate limiting en el endpoint de contacto para mitigar spam/abuso.
- Cabeceras de seguridad HTTP apropiadas en el servidor Express (ej. helmet.js) — sujeto
  a la Regla 1 antes de instalar el paquete.
- Evitar renderizado inseguro de contenido dinámico que pueda derivar en XSS.

### Regla 5 — Buenas prácticas de desarrollo y clean code
Todo código generado o modificado debe seguir principios de clean code:
- Nombres descriptivos y con significado para variables, funciones y componentes
  (evitar abreviaciones ambiguas o nombres genéricos como `data2`, `temp`, `handleClick1`).
- Funciones y componentes con una única responsabilidad (Single Responsibility
  Principle) — si un componente crece demasiado, dividirlo en subcomponentes.
- Evitar duplicación de código (DRY) — extraer lógica repetida a hooks, utilidades o
  componentes reutilizables en `src/data/` o carpetas apropiadas.
- Comentarios solo cuando el código no es autoexplicativo por sí mismo; preferir código
  claro sobre comentarios que expliquen código confuso.
- Mantener consistencia de formato (indentación, comillas, punto y coma) en todo el
  proyecto — configurar y respetar ESLint/Prettier, sujeto a la Regla 1 antes de
  instalar dichas dependencias.
- Componentes pequeños y composables en vez de archivos monolíticos.
- Evitar lógica de negocio mezclada con lógica de presentación en los componentes JSX.

---

### Regla 6 — Performance y Core Web Vitals
- Toda imagen debe usar formato optimizado (WebP cuando sea posible) y lazy loading
  (`loading="lazy"`) salvo la del Hero (above the fold).
- Antes de cada deploy a producción, correr Lighthouse y apuntar a un puntaje >90 en
  Performance, Accessibility, Best Practices y SEO.
- Evitar imports innecesarios de librerías completas cuando solo se usa una función
  (tree-shaking consciente).

### Regla 7 — Accesibilidad (a11y)
- Verificar contraste de color suficiente entre texto y fondo, especialmente en el tema
  oscuro (mínimo WCAG AA).
- Toda imagen debe tener atributo `alt` descriptivo.
- La navegación debe ser completamente operable por teclado (tab, enter, focus visible).
- Usar etiquetas semánticas HTML (`<nav>`, `<main>`, `<section>`, `<footer>`) en vez de
  `<div>` genéricos donde corresponda.

---

## 7. Diseño responsive

### Breakpoints (convención Tailwind, mobile-first)
| Rango | Etiqueta | Prefijo Tailwind |
|---|---|---|
| 320px – 640px | Mobile | (base, sin prefijo) |
| 641px – 1024px | Tablet | `md:` |
| 1025px+ | Desktop | `lg:` |

Todo componente se construye mobile-first: estilos base para mobile, y se sobrescriben
con `md:` / `lg:` para pantallas más grandes.

### Comportamiento esperado por sección
- **Navbar:** en mobile (`< md`), los links se colapsan detrás de un ícono de menú
  hamburguesa; al presionarlo, despliega un menú a pantalla completa o dropdown con los
  mismos links y anclas. En tablet/desktop (`md:` en adelante), los links se muestran
  en línea como en el wireframe original.
- **Hero:** centrado en todos los tamaños; los dos CTAs pasan de estar en fila
  (desktop) a apilados verticalmente en mobile si no caben en una línea.
- **Sobre mí:** las 2 columnas (bio + badges) se apilan verticalmente en mobile,
  bio primero.
- **Proyectos:** la card destacada de HashVault mantiene ancho completo en todos los
  tamaños; el grid 2x2 de los demás proyectos pasa a una sola columna en mobile.
- **Experiencia:** el timeline se mantiene vertical en todos los tamaños; se reduce el
  padding/espaciado en mobile.
- **Contacto y Footer:** los íconos/links pasan de fila horizontal a poder envolver
  (`flex-wrap`) en pantallas angostas sin romper el layout.

### Regla 8 — Mobile-first obligatorio
- Todo componente nuevo debe implementarse pensando primero en mobile y expandirse
  hacia tablet/desktop, no al revés.
- Probar manualmente en al menos 3 anchos de referencia antes de cerrar una fase: 375px
  (mobile), 768px (tablet), 1440px (desktop) — ya cubierto por el checklist de la
  sección 8 (Definition of Done).

## 8. Definición de "hecho" (Definition of Done) por fase

Una fase no se considera terminada hasta cumplir todo lo siguiente:
- [ ] Funcionalidad implementada según lo descrito en este documento.
- [ ] Pruebas unitarias creadas y en verde (Regla 3).
- [ ] Revisado en responsive (mobile, tablet, desktop) manualmente.
- [ ] Sin errores ni warnings en consola.
- [ ] Cumple Reglas 6 y 7 (performance y accesibilidad) en lo que aplique a esa fase.
- [ ] Código revisado contra Regla 5 (clean code) antes de hacer commit.

## 9. Notas adicionales

- El código de este portafolio es en sí mismo una pieza del portafolio: debe reflejar
  buenas prácticas del stack declarado en el CV (Java/Spring Boot no aplica aquí — este
  repo es específicamente React/Node).
- Commits deben ser incrementales y descriptivos, no un único commit masivo al finalizar.
