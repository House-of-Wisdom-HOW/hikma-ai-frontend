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
        black: '#000000'
      },
      boxShadow: {
        sml: '0px 4px 4px #00000040',
      }
    },
  },
  plugins: [],
};
