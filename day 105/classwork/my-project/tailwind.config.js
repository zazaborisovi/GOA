/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container:{
      center: true,
      padding: "16px",
      screens:{
        "2xl":"1200px"
      }
    },
    extend: {},
  },
  plugins: [],
}