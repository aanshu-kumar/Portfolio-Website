/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'Light-orange':'#E7D4B5',
      'light-gray':'#4c4c44',
      'black':"#000000"
    },
    backgroundImage:{
      profile1:"url('/src/assets/profile1.png')",
      project1:"url('/src/assets/project1.png')",
      profile2:"url('/src/assets/profile2.png')"
    }
  },
  plugins: [],
}