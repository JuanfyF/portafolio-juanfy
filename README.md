# Portafolio Juan Fernando Flores Culqui

Portafolio profesional de Ingeniero de Software Full Stack, construido como sitio estático de una sola página (SPA de scroll con anclas).

## Stack técnico

- **Frontend:** React 18 + Vite
- **Estilos:** Tailwind CSS
- **Testing:** Vitest + React Testing Library
- **Deploy:** Vercel

## Estructura del proyecto

```
portafolio-juanfy/
├── public/
│   └── favicon.svg
├── src/
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
│   │       ├── Button.jsx
│   │       ├── Badge.jsx
│   │       └── ProjectCard.jsx
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
├── tests/
│   └── components/
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── index.html
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Testing

```bash
npm test
```

## Reglas del proyecto

Este proyecto sigue las reglas definidas en `AGENT.md`:

1. No instalar dependencias sin autorización previa
2. Corrección puntual de errores de compilación
3. Pruebas unitarias al finalizar cada fase
4. Seguridad OWASP Top 10
5. Buenas prácticas de desarrollo y clean code
6. Performance y Core Web Vitals
7. Accesibilidad (a11y)
8. Mobile-first obligatorio

## Autor

**Juan Fernando Flores Culqui**
- GitHub: [@juanfyf](https://github.com/juanfyf)
- LinkedIn: [juanfyf](https://linkedin.com/in/juanfyf)
- Email: juanfy.business@gmail.com