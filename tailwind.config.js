/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f8fe',
          100: '#e1f0fd',
          200: '#bee0fb',
          300: '#86c6f7',
          400: '#46a7f1',
          500: '#1d8be3',
          600: '#116ec2',
          700: '#0f589d',
          800: '#114b82',
          900: '#133f6c',
          950: '#0d2847',
        },
      }
    },
  },
  plugins: [],
}
