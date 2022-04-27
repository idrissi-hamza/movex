module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right top, rgba(20, 20,20 ,1) 0%, rgba(20, 20, 20,1) 10%,rgba(20, 20, 20,0) 80%, transparent),linear-gradient(to right, rgba(20, 20, 20,.6) 30%,transparent),linear-gradient(to top, rgba(20,20, 20,.8) 0%, rgba(20, 20, 20,.2) 3%, transparent), url('/bg.jpg')",
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 40%,rgba(20,20,20,.58) 55%,#141414 80%,#141414 100%);",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
};
