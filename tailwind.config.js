import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/frontend/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules//@rhino-project/ui-heroui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: '#18191a',
            foreground: '#e4e6eb',
            default: {
              50: '#4e4f50',
              100: '#3e4042',
              200: '#3a3b3c',
              300: '#3a3b3c',
              400: '#3a3b3c',
              500: '#242526',
              600: '#242526',
              700: '#242526',
              800: '#18191a',
              900: '#18191a',
              DEFAULT: '#242526',
              foreground: '#e4e6eb'
            },
            primary: {
              50: '#e7f3ff',
              100: '#cfe7ff',
              200: '#9fcfff',
              300: '#6fb7ff',
              400: '#3f9fff',
              500: '#1877f2',
              600: '#1466d9',
              700: '#1055bf',
              800: '#0c44a6',
              900: '#08338c',
              DEFAULT: '#1877f2',
              foreground: '#ffffff'
            },
            secondary: {
              50: '#4e4f50',
              100: '#3e4042',
              200: '#3a3b3c',
              300: '#3a3b3c',
              400: '#3a3b3c',
              500: '#242526',
              600: '#242526',
              700: '#242526',
              800: '#18191a',
              900: '#18191a',
              DEFAULT: '#3a3b3c',
              foreground: '#e4e6eb'
            },
            success: {
              DEFAULT: '#42b72a',
              foreground: '#ffffff'
            },
            warning: {
              DEFAULT: '#f39c12',
              foreground: '#ffffff'
            },
            danger: {
              DEFAULT: '#e74c3c',
              foreground: '#ffffff'
            },
            content1: '#242526',
            content2: '#3a3b3c',
            content3: '#3e4042',
            content4: '#4e4f50',
            divider: '#3e4042',
            focus: '#1877f2',
            overlay: 'rgba(0, 0, 0, 0.7)'
          }
        }
      }
    })
  ]
};
