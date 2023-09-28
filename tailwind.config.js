/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray" : "#F4F4F2",
        "medium-gray" : "#E8E8E8",
        "gray" : "#BBBFCA",
        "gray-navy" : "#495464",
        "navy" : "#0E2954",
        "navy-blue" : "#279EFF",
        "navy-blue-soft": "#35A29F",
        "light-dark-gray": "#393E46",
        "dark-gray": "#121212",
        "bluish-white": "#D8DEEC",
        "orange": "#D65A31",
        "gold": "#FFD700",
        "muted-blue": "#5B8AB3",
        "muted-gray": "#A9A9A9"
      },
    },
    fontFamily: {
      jetbrains: ["JetBrains Mono", "sans-serif"]
    },
    animation: {
      "middle": "all ease-in-out .2s"
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

