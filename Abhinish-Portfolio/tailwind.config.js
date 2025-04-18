/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'slideUp': 'slideUp 0.5s ease-out forwards',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  utilities: {
    '.animation-delay-2000': {
      'animation-delay': '2s',
    },
    '.animation-delay-4000': {
      'animation-delay': '4s',
    },
    '.animation-delay-200': {
      'animation-delay': '200ms',
    },
    '.animation-delay-400': {
      'animation-delay': '400ms',
    },
    '.animation-delay-600': {
      'animation-delay': '600ms',
    },
  },
  darkMode: 'class',
  plugins: [],
}


