/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainBg: '#E6E6FA',
      white: '#ffffff',
      btnGreen: '#008080',
      green: '#A4D4AE',
      deliveryBg: '#34B14E4F',
      span: '#19742C',
      black: '#000000',
      footer: '#9D9D9D',
    },

    fontFamily: {
        muellerhoff: ['"Herr Von Muellerhoff"', 'cursive'],
      },
  },
  plugins: [],
}