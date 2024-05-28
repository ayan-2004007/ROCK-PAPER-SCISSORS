/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}