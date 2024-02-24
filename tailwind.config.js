/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'opacity': 'opacity',
        'transform': 'transform',
      },
      keyframes: {
        'lift-up': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)', /* Adjust this value for more or less lift */
          },
          '100%': {
            transform: 'translateY(0)',
          }
        }
      },
      animation: {
        'lift-up': 'lift-up 1s ease-in-out',
      }
    },
  },
  plugins: [],
}

