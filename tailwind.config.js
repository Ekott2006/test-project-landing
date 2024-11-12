/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue-500": "#3FAAE0",
        "light-blue": "#1484BC",
      },
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
        25: "6.25rem",
        31: "7.75rem",
        33: "8.25rem",
      },
    },
  },
  plugins: [],
}