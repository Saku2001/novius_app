/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#641648", // you can name it anything like 'brand', 'main', etc.
        secondary: "#1F1F1F",
      },
      fontFamily: {
        tinos: ['Tinos', 'serif'],
      },
    },
  },
  plugins: [],
}