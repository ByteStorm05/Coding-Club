/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {
  //     animation: {
  //       marquee: 'marquee 25s linear infinite',
  //     },
  //     keyframes: {
  //       marquee: {
  //         '0%': { transform: 'translateX(0%)' },
  //         '100%': { transform: 'translateX(-100%)' },
  //       },
  //     },
  //   },
  // },
  theme : {
    extend : {}
  },
  plugins: [require("tailwindcss-animate")],
}

