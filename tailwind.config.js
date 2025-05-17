/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DBBFD1", // you can name it anything like 'brand', 'main', etc.
        secondary: "#641648",
        third: "#371A2C",
      },
      fontFamily: {
        tinos: ['Tinos', 'serif'],
        lugrasimo: ['Lugrasimo', 'cursive'],
      },
       backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}