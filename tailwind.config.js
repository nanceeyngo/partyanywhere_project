/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Inter: ["Inter", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        'first_image': "url('..\assets\bg_image.jpeg')",
      },
      gridTemplateColumns: {
        in: 'repeat(2, minmax(340px, 1fr))',
      }
    },
  },
  plugins: [],
}

