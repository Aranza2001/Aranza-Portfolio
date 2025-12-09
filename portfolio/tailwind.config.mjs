/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // IMPORTANTE: Modo oscuro por clase
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores para modo CLARO (púrpura profesional)
        light: {
          primary: '#7C3AED',     // Púrpura principal
          secondary: '#8B5CF6',   // Púrpura secundario
          accent: '#A78BFA',      // Púrpura suave
          background: '#FFFFFF',  // Fondo blanco
          card: '#F8FAFC',        // Fondo tarjetas
          text: '#1F2937',        // Texto oscuro
          muted: '#6B7280'        // Texto secundario
        },
        // Colores para modo OSCURO (azul eléctrico)
        dark: {
          primary: '#3B82F6',     // Azul principal
          secondary: '#60A5FA',   // Azul secundario
          accent: '#93C5FD',      // Azul suave
          background: '#0F172A',  // Fondo azul oscuro
          card: '#1E293B',        // Fondo tarjetas oscuro
          text: '#F1F5F9',        // Texto claro
          muted: '#94A3B8'        // Texto secundario oscuro
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}