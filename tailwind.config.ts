import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import animatePlugin from "tailwindcss-animate";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import aspectRatioPlugin from "@tailwindcss/aspect-ratio";
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'dark-background': '#040D12',
        'muted-green': '#183D3D',
        'soft-green': '#5C8374',
        'light-green': '#93B1A6',
        'electric-blue': '#00C3FF',
        'alert-red': '#FF3366',
        'white': '#FFFFFF',
        'light-gray': '#E9ECEF',
        'highlight': '#FFD700',
        'success-green': '#4CAF50',
        'cyber-primary': '#00FFD4',
        'cyber-secondary': '#FF00A8',
        'cyber-accent': '#0077FF',
        // Add neon colors
        'neon-blue': '#00FFFF',
        'neon-green': '#39FF14',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        'mobile-base': ['14px', { lineHeight: '1.4' }],
        'mobile-lg': ['16px', { lineHeight: '1.5' }],
      },
      spacing: {
        'mobile': '0.5rem',
        'tablet': '1rem',
        'desktop': '2rem',
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "mobile-fade": "fade-in 0.2s ease-in-out",
      },
      borderRadius: {
        'mobile': '0.5rem',
        'desktop': '1rem',
      },
    },
  },
  plugins: [
    animatePlugin,
    formsPlugin,
    typographyPlugin,
    aspectRatioPlugin,
    require('tailwind-scrollbar-hide'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.mobile-only': {
          '@media (max-width: 639px)': {
            display: 'block',
          },
          '@media (min-width: 640px)': {
            display: 'none',
          },
        },
        '. desktop-only': {
          '@media (max-width: 639px)': {
            display: 'none',
          },
          '@media (min-width: 640px)': {
            display: 'block',
          },
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }),
  ],
} satisfies Config;

export default config;