/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "title-colors":"#61dafb",
        "star-colors":"#ffe810",
        "like-colors":"#2ecc71",
        "unLike-colors":"#e74c3c",
        "button":"#f47425"
      }
    },
  },
  plugins: [],
}

