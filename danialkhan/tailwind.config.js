/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'bg-primary': 'var(--bg-primary)',
      }
    },
  },
  plugins: [],
}