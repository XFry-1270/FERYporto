/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container:{
      center:true,
      padding:'20px',
    },
    extend: {
      colors: {
        primary:"#52D3D8",
        dark: "#3D3B40",
        secondary:'#94a3b8',
      },
      screens:{
        '2xl':'1320px',
      }
    }, 
  },
  plugins: [],
}

