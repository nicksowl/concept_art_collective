/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'andale': ['Andale Mono', 'monospace'],
      },
      sacle: {
        '-1': '-1',
      },
      width: {
        '416': '416px',
        '432': '432px',
      },
    },
  },
  plugins: [],
}
