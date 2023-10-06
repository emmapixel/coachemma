import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/sky.jpg')",
        'footer': "url('../public/images/flower.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config

