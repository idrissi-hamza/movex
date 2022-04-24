module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right top, rgba(25, 25,25 ,1) 0%, rgba(25, 25, 25,1) 10%,rgba(25, 25, 25,0) 90%, transparent),linear-gradient(to right, rgba(25, 25, 25,.8) 40%,transparent),linear-gradient(to top, rgba(0, 0, 0,.9) 0%, rgba(25, 25, 25,.6) 5%, transparent), url('/bg.jpg')",
      },
    },
  },
  plugins: [],
}
