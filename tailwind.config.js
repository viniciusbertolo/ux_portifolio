/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        // Aqui estamos dizendo que a família de fontes 'sans' agora é a 'Inter'
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}