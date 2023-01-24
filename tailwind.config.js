/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //light theme - BG is pure white
        "light-theme": "hsl(230, 22%, 74%)",
        "Very Pale Blue": "hsl(225, 100%, 98%)",
        "light-card": "hsl(227, 47%, 96%)",
        "light-text-1": "hsl(228, 12%, 44%)",
        "light-text-2": "hsl(230, 17%, 14%)",
        //dark theme
        "dark-primary": "hsl(230, 17%, 14%)",
        "dark-secondary": "hsl(232, 19%, 15%)",
        "dark-card": "hsl(228, 28%, 20%)",
        "dark-text": "hsl(228, 34%, 66%)",
        //common
        "lime-green": "color: hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "theme-btn-start": "hsl(210, 78%, 56%)",
        "theme-btn-end": "hsl(146, 68%, 55%)",
        "instagram-start": "hsl(37, 97%, 70%)",
        "instagram-end": "hsl(329, 70%, 58%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youTube: "hsl(348, 97%, 39%)",
        attribution: "hsl(228, 45%, 44%)",
      },
    }
  },
  plugins: [],
};
