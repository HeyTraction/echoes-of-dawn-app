/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['\'EB Garamond\'', 'serif'],
        sans: ['\'Noto Sans JP\'', 'sans-serif']
      }
    }
  },
  plugins: []
};
