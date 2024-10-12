/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        br: "400px", // Your custom breakpoint 1
      },
    },
  },
  plugins: [],
};
