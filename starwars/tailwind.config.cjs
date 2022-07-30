/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
      },
    },
    extend: {
      fontFamily: [],
      colors: {
        yellow: '#edec51',
        'yellow-1': '#edec51',
        'black-1': '#343434',
        grey: '#282727',
      },
    },
  },
  plugins: [],
};
