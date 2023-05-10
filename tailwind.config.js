/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'orange': '#fe9307',
    extend: {},
  },
  plugins: [require("daisyui")],
 
}

