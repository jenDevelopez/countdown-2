/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
          'fondo' : 'url(/public/fondo.webp)'
      },
     
    },
    
  plugins: [],
}
}
