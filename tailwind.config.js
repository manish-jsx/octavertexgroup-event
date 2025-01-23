const {heroui} = require('@heroui/theme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: 'rgb(16, 25, 40)',
      plugins: [require('@tailwindcss/forms'), heroui()],
    },
  },
  },
  plugins: [require('@tailwindcss/forms'),heroui()],
}
