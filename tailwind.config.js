/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#12121a',
        'bg-accent': '#1a1a2e',
        'surface-1': '#16161f',
        'surface-2': '#1e1e2a',
        'text-primary': '#e4e4e7',
        'text-secondary': '#a1a1aa',
        'text-muted': '#71717a',
        'text-accent': '#22d3ee',
        'border': '#27272a',
        'border-strong': '#3f3f46',
        'border-accent': '#22d3ee',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'radius': '8px',
      },
    },
  },
  plugins: [],
}