const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        1536: '1536px',
      },
      width: {
        1436: '1436px',
      },
      screens: {
        xs: '400px',
      },
      colors: {
        price: '#fe434a',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
