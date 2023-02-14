/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
    },
    fontFamily: {
      sans: ["Lexend Deca", "san-serif"],
      serif: ["Big Shoulders Display" , "cursive"]
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "bright-orange": "hsl(31, 77%, 52%)",
      "dark-cyan": "hsl(184, 100%, 22%)",
      "very-dark-cyan": "hsl(179, 100%, 13%)",
      white: "hsla(0, 0%, 100%, 0.75)",
      "very-light-gray": "hsl(0, 0%, 95%)"
    }
  },
  plugins: [],
}