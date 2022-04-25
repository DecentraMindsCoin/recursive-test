module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "awesome-image":
          "url('https://media.graphassets.com/LyKfHX0qTbWiLWVTHAjt')",
        "awesome-image-2":
          "url('https://media.graphassets.com/ebuYeLSxRBeQNRUZzQ5A')",
        "awesome-image-3":
          "url('https://media.graphassets.com/spy0H023S62OaDIOts7q')",
        "image-1":
          "url('https://media.graphassets.com/spy0H023S62OaDIOts7q')",
        "image-2":
          "url('https://media.graphassets.com/FudPH1JSpOIpHGjjydN2')",
        "image-3":
          "url('https://media.graphassets.com/6SdpbK2MTzmpmtIQWtW7')",
        "image-4":
          "url('https://media.graphassets.com/2HlzQXNuSSWXum71jrtj')",

      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
