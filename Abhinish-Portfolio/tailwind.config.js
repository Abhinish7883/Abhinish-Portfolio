/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      backfaceVisibility: ['hover', 'focus'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
  darkMode: 'class',
}


