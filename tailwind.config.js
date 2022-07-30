/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    backgroundColor:theme=>({
      ...theme('colors'),
      'yellow':'#FA9D3B'
    })
  },
  plugins: [],
}
