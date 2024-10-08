/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2F3F93',
        secondaryBlue: "#ECEEF9",
        primaryLight: '#F8F4F1',
        secondaryLight: "#F9F9F9",
        tertiaryLight: "#DFDFDF",
        quaternaryLight: "#D7D7D7",
        primaryOrange: "#FF7900"
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
