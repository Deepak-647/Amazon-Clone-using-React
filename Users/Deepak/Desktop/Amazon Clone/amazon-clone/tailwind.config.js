/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        amazonclone:{
          background: "#EAEDED",
          DEFAULT:"#131921",
          light_blue:"#232F31",
          yellow:"#FEBD69"
        }
      }
    },
  },
  plugins: [],
}

