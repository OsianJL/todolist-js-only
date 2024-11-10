/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "todo-Blue": "hsl(220, 98%, 61%)",
       "todo-Background": "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
       "todo-Very-Light-Gray": "hsl(0, 0%, 98%)",
       "todo-Very-Light-Grayish-Blue": "hsl(236, 33%, 92%)",
       "todo-Light-Grayish-Blue": "hsl(233, 11%, 84%)",
       "todo-Dark-Grayish-Blue": "hsl(236, 9%, 61%)",
       "todo-Very-Dark-Grayish-Blue": "hsl(235, 19%, 35%)",
       "todo-Very-Dark-Blue": "hsl(235, 21%, 11%)",
       "todo-Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
       "todo-Light-Grayish-Blue": "hsl(234, 39%, 85%)",
       "todo-Light-Grayish-Blue (hover)": "hsl(236, 33%, 92%)",
       "todo-Dark-Grayish-Blue": "hsl(234, 11%, 52%)",
       "todo-Very-Dark-Grayish-Blue": "hsl(233, 14%, 35%)",
       "todo-Very-Dark-Grayish-Blue": "hsl(237, 14%, 26%)",
      },
      fontFamily: {
        josefin : ["Josefin Sans", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}