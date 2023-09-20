module.exports = {
    content: [
      "./src/**/*.{html,ts,js}",
      "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class"
  }