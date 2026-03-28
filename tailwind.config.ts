import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'coke-red': '#F40009',
        'coke-deep-red': '#C8001A',
        'coke-off-white': '#FAFAF8',
        'coke-black': '#0A0A0A',
        'coke-gold': '#C9A84C',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'coke-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'rise-bubble': {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-10vh) scale(1)', opacity: '0' },
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-chevron': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'count-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'rise-bubble': 'rise-bubble var(--duration, 8s) var(--delay, 0s) infinite ease-in',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'bounce-chevron': 'bounce-chevron 2s infinite',
        'count-pulse': 'count-pulse 1s ease-in-out',
      },
    },
  },
  plugins: [],
}

export default config
