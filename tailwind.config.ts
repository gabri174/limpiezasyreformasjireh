import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal moderna y minimalista
        primary: '#404f68',      // Azul grisáceo principal - confianza y profesionalismo
        secondary: '#777777',    // Gris medio - neutral y elegante
        dark: '#4a4a4a',         // Gris oscuro - seriedad y confianza
        darker: '#333333',       // Gris muy oscuro - contrastes fuertes
        
        // Colores semánticos basados en la paleta
        background: '#ffffff',   // Blanco fresco - limpieza y minimalismo
        foreground: '#333333',   // Texto principal
        muted: '#777777',        // Texto secundario
        accent: '#404f68',       // Elementos destacados
        border: '#e5e5e5',       // Bordes sutiles
        
        // Variaciones para diseño moderno
        'primary-light': '#5a6b88',
        'primary-lighter': '#7a8ba8',
        'secondary-light': '#999999',
        'secondary-dark': '#555555',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
