import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#121212',
          card: '#1E1E1E',
          lighter: '#2A2A2A',
        },
        primary: {
          DEFAULT: '#B91C1C', // Accent red
          hover: '#A30000',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#9CA3AF', // Gray 400
          light: '#D1D5DB', // Gray 300
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config
