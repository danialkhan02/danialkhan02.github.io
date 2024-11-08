/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          mono: ['JetBrains Mono', 'monospace'],
        },
        colors: {
          'text-primary': '#FFFFFF',
          'text-secondary': '#9CA3AF',
          'bg-primary': '#000000',
        }
      },
    },
    plugins: [],
  }