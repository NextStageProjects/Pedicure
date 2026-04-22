/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF0',
        'surface-pink': '#FCE4EC',
        primary: '#1A1A1A',
        secondary: '#4A4A4A',
        accent: '#4A148C',
        'accent-hover': '#380b6b',
        'border-light': '#EBEBEB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}