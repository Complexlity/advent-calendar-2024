/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /^col-span-/,
      variants: ['sm', 'md', 'lg'],
    },
    {
      pattern: /^row-span-/,
      variants: ['sm', 'md', 'lg'],
    },
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    // colors: {
    //   transparent: 'transparent',
    //   red: '#B9464B',
    //   green: '#3C5B56',
    //   yellow: '#F3EBAC',
    //   white: '#ffffff',
    //   black: '#000000',
    //   darkyellow: '#ACA571',
    //   darkred: '#792E31',
    // }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
