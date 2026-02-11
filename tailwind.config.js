/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#162f6a',
        'navy-light': '#195c9f',
        'navy-dark': '#0e338a',
        'accent': '#dd2f03',
        'accent-orange': '#f17d0f',
        'grey-text': '#595656',
        'grey-light': '#b7c2df',
        'blue-header': '#185BA1',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.308em',
        'h3': '1.6em',
        'h4': '1.385em',
      },
      borderRadius: {
        'lg': '6px',
      },
    },
  },
  plugins: [],
}
