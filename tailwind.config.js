/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        reailge: ["var(--font-reailge)"],
      },
      fontSize: {
        custom: "5vw",
      },
      colors: {
        creme: "#FFFCF5",
        pink: "#FFE4E4",
        crimson: "#6C1A1A",
      },
    },
  },
  plugins: [],
};
