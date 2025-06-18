/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 VERY IMPORTANT
  ],
  // Ensure utilities are enabled (default in v4)
  corePlugins: {
    margin: true,
    padding: true,
  },
  theme: {
    extend: {
      // Your custom colors, fonts, spacing, etc.
    },
  },
  plugins: [],
};
