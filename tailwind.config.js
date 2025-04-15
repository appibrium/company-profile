/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'from-blue-500',
    'to-cyan-500',
    'from-purple-500',
    'to-pink-500',
    'from-orange-500',
    'to-red-500',
    'from-green-500',
    'to-emerald-500',
  ],
};