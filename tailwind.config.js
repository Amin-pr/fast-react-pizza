/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robo: "Roboto Mono,monospace",
      },
      height: {
        screen: "100dvh",
      },
      width: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
