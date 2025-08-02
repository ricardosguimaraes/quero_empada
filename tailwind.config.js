/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#5d3c0f',
        'brand-yellow': '#ffb800',
        'brand-red': '#b80900',
        'brand-off-white': '#fff7ed',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'blueberry': ['Blueberry', 'cursive'],
      },
    },
  },
  plugins: [],
} 