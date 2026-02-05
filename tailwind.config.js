/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pf-white-01": "#FFFFFF",
        "pf-white-01-20": "#FFFFFF33",
        "pf-black-01": "#000000",
        "pf-black-01-20": "#00000033",
        "pf-gray-01": "#777777",
        "pf-red-01": "#521B1B",
        "client-gray-01": "#B7B7B7",
        "client-blue-01": "#1E469B",
        "client-blue-02": "#1E469B",
        "client-green-01": "#C9F470",
        "client-red-01": "#FF0000",
      },
      fontFamily: {
        mono: ["DM Mono", "monospace"],
        sans: ["Oriya Sangam MN", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
