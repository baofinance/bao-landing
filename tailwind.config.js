const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        baoWhite: '#faf2e3',
        baoBlack: '#1e2022',
        baoPink: '#e21a53',
      },
      fontFamily: {
        bakbak: ['Bakbak One', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        flicker1: 'flicker1 8s infinite',
        flicker2: 'flicker2 8s infinite',
        'wave-1': 'wave-1 15s infinite ease-in-out',
        'wave-2': 'wave-2 10s infinite ease-in-out',
        'logo-pulse': 'logoPulse 4s ease-in-out infinite',
      },
      keyframes: {
        flicker1: {
          '0%, 100%': { opacity: '0' },
          '10%, 12%': { opacity: '0.4', clipPath: 'inset(20% 35% 45% 35%)' },
          '14%, 16%': { opacity: '0' },
          '50%, 52%': { opacity: '0.4', clipPath: 'inset(60% 10% 10% 70%)' },
          '54%, 56%': { opacity: '0' },
          '70%, 72%': { opacity: '0.4', clipPath: 'inset(10% 60% 60% 10%)' },
          '74%, 76%': { opacity: '0' },
        },
        flicker2: {
          '0%, 100%': { opacity: '0' },
          '20%, 22%': { opacity: '0.4', clipPath: 'inset(40% 15% 40% 55%)' },
          '24%, 26%': { opacity: '0' },
          '60%, 62%': { opacity: '0.4', clipPath: 'inset(5% 75% 80% 5%)' },
          '64%, 66%': { opacity: '0' },
          '80%, 82%': { opacity: '0.4', clipPath: 'inset(70% 5% 5% 65%)' },
          '84%, 86%': { opacity: '0' },
        },
        'wave-1': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'wave-2': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25%)' },
          '100%': { transform: 'translateX(0)' },
        },
        logoPulse: {
          '0%, 100%': { opacity: '0.05' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
}
