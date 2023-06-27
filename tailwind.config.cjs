/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        'blue': {
          1: '#60a4fa',
          2: '#6ecbe0',
          3: '#d4eff6'
        },
      },
      flex: {
        2: '0 0 280px'
      }
    },
  },
  plugins: [],
}
