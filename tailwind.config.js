module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "awesome-image":
          "url('https://media.graphassets.com/ChKWCsyNSc2cPlUqvZ0b')",

      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
