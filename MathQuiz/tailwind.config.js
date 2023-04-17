// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", 
  "./components/HomeScreeen.{js,jsx,ts,tsx}",
  "./components/About.{js,jsx,ts,tsx}",
  "./components/Score.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}