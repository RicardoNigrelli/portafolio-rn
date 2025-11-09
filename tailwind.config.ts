import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0E27',      // Azul oscuro - headings, botones primarios
        secondary: '#00D9FF',    // Cyan - acciones, links, hover
        accent: '#FF6B6B',       // Rojo suave - highlights puntuales
        background: '#FFFFFF',   // Blanco puro - fondo
        text: {
          primary: '#1A1A1A',    // Casi negro - body text
          secondary: '#666666',  // Gris - descriptivos, subtítulos
          light: '#999999',      // Gris claro
        },
        border: '#E5E5E5',       // Gris muy claro
        shadow: 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'h1-mobile': ['40px', { lineHeight: '1.2' }],
        'h1-desktop': ['56px', { lineHeight: '1.2' }],
        'h2-mobile': ['32px', { lineHeight: '1.2' }],
        'h2-desktop': ['44px', { lineHeight: '1.2' }],
        'h3-mobile': ['24px', { lineHeight: '1.2' }],
        'h3-desktop': ['32px', { lineHeight: '1.2' }],
        'body-mobile': ['16px', { lineHeight: '1.6' }],
        'body-desktop': ['18px', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config;