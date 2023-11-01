/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Define preset fonts here
      fontFamily: {
        primaryfont: ["DM Sans"],
        secfont: ["Zen Old Mincho"],
        boldFont: ["Manrope"],
      },
    },
  },
  plugins: [],
};
