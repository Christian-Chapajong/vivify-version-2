const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./views/*.html"],
  theme: {
    extend: {
        // 'sans': ['"Sofia Pro', defaultTheme.fontFamily.sans],
        // 'display': ['"Sofia Pro"'],
        // 'body': ['"Sofia Pro"']
      }
    },
  plugins: [],
}
