/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores para modo CLARO (Le metí más lila porque se veía muy blanco)
        light: {
          primary: '#370987ff',     // Púrpura principal
          secondary: '#784be1ff',   // Púrpura secundario 
          accent: '#A78BFA',      // Púrpura suave 
          background: '#FAF5FF',  // Fondo lila muy suave
          card: '#FFFFFF',        // Fondo tarjetas blanco puro
          text: '#1F2937',        // Texto oscuro 
          muted: '#6B7280',       // Texto secundario 
          surface: '#F3E8FF'      // Superficie lila suave
        },
        // Colores para modo OSCURO (Está lindo así, no hay que cambiarlo)
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
        'slide-up': 'slideUp 0.3s ease-out',
        'gradient-shift': 'gradientShift 3s ease infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundImage: {
        'gradient-lila': 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 25%, #DDD6FE 50%, #E9D5FF 75%, #F3E8FF 100%)',
        'gradient-hero': 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 50%, #E9D5FF 100%)'
      }
    }
  },
  plugins: []
}