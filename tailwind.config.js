// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',      // dark blue
        secondary: '#F59E0B',    // amber
        softGray: '#F3F4F6',     // light gray
        brandGreen: {
          100: '#d1fae5',
          500: '#10b981',
          900: '#064e3b',
        },
      },
    },
  },
  plugins: [],
}
