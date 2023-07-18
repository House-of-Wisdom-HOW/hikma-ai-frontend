/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gray: '#FAFAFA',
        brown: '#E1B15D',
        black: '#000000',
        grey: '#ada5a5'
      },
      boxShadow: {
        sml: '0px 4px 4px #00000040',
        bown: '2px 3px 4px #e1b15d90'
      },
      spacing: {
        85: '85%',
        650: '650px',
        600: '600px'
      },
      screens: {
        sm: '600px',
        avg: '900px'
      }
    },
  },
  plugins: [],
};
