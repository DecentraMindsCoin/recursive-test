module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "awesome-image":
          "url('https://media.graphassets.com/1PoPuCpmTUyK5m7GqJAt')",
        "awesome-image-2":
          "url('https://media.graphassets.com/ebuYeLSxRBeQNRUZzQ5A')",
        "awesome-image-3":
          "url('https://media.graphassets.com/TL86ArbnTYmsb8MIXR5t')",

      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
