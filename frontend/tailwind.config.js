// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path matches your file structure
    "./public/index.html",         // Include this if you have an index.html file
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
