module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "baby-image": "url('/src/assets/bgPic.png')" 
      },
    },
  },
  plugins: [],
}