/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.scss',
  ],
  variants: {
    extend: {
      textColor: ['active'],
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
