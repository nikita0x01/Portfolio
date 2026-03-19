/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        card: '#0b1120',
        accent: '#64ffda',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.85)',
      },
    },
  },
  plugins: [],
}
