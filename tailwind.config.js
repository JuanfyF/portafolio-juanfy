/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background and Surfaces
        'background': '#111318',
        'surface': '#111318',
        'surface-dim': '#111318',
        'surface-bright': '#37393e',
        'surface-container-lowest': '#0c0e12',
        'surface-container-low': '#1a1c20',
        'surface-container': '#1e2024',
        'surface-container-high': '#282a2e',
        'surface-container-highest': '#333539',
        'surface-charcoal': '#12141D',
        'surface-elevated': '#1E202B',
        'surface-variant': '#333539',

        // Text
        'on-surface': '#e2e2e8',
        'on-surface-variant': '#bac9cc',
        'inverse-surface': '#e2e2e8',
        'inverse-on-surface': '#2f3035',

        // Primary (Cyan)
        'primary': '#c3f5ff',
        'on-primary': '#00363d',
        'primary-container': '#00e5ff',
        'on-primary-container': '#00626e',
        'inverse-primary': '#006875',
        'surface-tint': '#00daf3',
        'primary-fixed': '#9cf0ff',
        'primary-fixed-dim': '#00daf3',
        'on-primary-fixed': '#001f24',
        'on-primary-fixed-variant': '#004f58',

        // Secondary (Purple)
        'secondary': '#ecb2ff',
        'on-secondary': '#520071',
        'secondary-container': '#cf5cff',
        'on-secondary-container': '#480063',
        'secondary-fixed': '#f8d8ff',
        'secondary-fixed-dim': '#ecb2ff',
        'on-secondary-fixed': '#320047',
        'on-secondary-fixed-variant': '#74009f',

        // Tertiary
        'tertiary': '#ffeac0',
        'on-tertiary': '#3e2e00',
        'tertiary-container': '#fec931',
        'on-tertiary-container': '#6f5500',
        'tertiary-fixed': '#ffdf96',
        'tertiary-fixed-dim': '#f3bf26',
        'on-tertiary-fixed': '#251a00',
        'on-tertiary-fixed-variant': '#594400',

        // Error
        'error': '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',

        // Borders and Others
        'outline': '#849396',
        'outline-variant': '#3b494c',
        'border-muted': '#2D333B',
        'terminal-green': '#50FA7B',
        'code-gray': '#94A3B8',
      },
      fontFamily: {
        'display': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
      spacing: {
        'unit': '8px',
        'gutter': '24px',
        'terminal-padding': '2rem',
        'section-gap': '120px',
      },
      maxWidth: {
        'container': '1200px',
      },
      backdropBlur: {
        'glass': '12px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 229, 255, 0.15)',
        'glow-lg': '0 0 40px rgba(0, 229, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
