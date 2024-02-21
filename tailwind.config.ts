import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'clam-shell': '#cdaca7',
      },
    },
  },
  plugins: [],
} satisfies Config

