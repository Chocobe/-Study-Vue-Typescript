const spacing = Array.from(
  { length: 101 },
  (_, i) => `${i}px`
);

const colors = {
  "custom-gray-01": "#F1F1F1",
  "custom-gray-02": "#ADB5BD",
  "custom-gray-03": "#868E96",
  "custom-gray-04": "#6B7280",
  "custom-gray-05": "#495057",
  "custom-blue-01": "#22B8CF",
  "custom-orange-01": "#FF6B6B",
};

module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing,
    extend: {
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
