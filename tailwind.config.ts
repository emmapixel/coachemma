import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'clam-shell': '#cdaca7',
        'clam-shell-lighter': '#e3cfc9',
        'swiss-coffee': '#f9f8f7',
      },
      fontFamily: {
        'cutive': ['Cutive', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

