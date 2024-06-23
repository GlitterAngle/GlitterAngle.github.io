/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#703543',
      },
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
            transform: 'translateY(-10px)', 
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

