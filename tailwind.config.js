/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green":"#89c440",
        "pink":"#ed1479",
        "blue":"#53a3da",
        "yellow":"#f9cc12"
      }
    },
  },
  plugins: [],
}

