/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        MPlus1: ["M PLUS 1", "sans-serif"],
      },
      screens: {
        'sm': '300px', 
        'md': '1200px',
        
      },
      backgroundImage: {
        'my_bg_image': "url('/images/march32.png')",
      }
    },
  },
  plugins: [],
}
