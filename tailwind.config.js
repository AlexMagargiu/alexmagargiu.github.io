/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-bg" : "var(--bg-nav)",
        "medium-bg" : "var(--bg-medium)",
        "none-bg" : "var(--bg-none)",
        "dark-bg" : "var(--bg-dark)",
        "hover-bg" : "var(--bg-hover)",
        "hover-bg-50": "var(--bg-hover-50)",
        "primary-text" : "var(--primary-text)",
        "hover-text" : "var(--hover-text)",
        "secondary-text" : "var(--secondary-text)",
        "sun-fill" : "var(--sun-fill)",
        "moon-fill" : "var(--moon-fill)",
        "footer-text" : "var(--footer-text)",
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

