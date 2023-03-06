/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        twitter: 'rgb(29, 155, 240)',
        'twitter-hover': 'rgba(29, 155, 240, 0.1)',
      },
    },
  },
  plugins: [],
};
