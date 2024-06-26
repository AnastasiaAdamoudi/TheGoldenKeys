/** @type {import('tailwindcss').Config} */
export const content = ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      title: ['EB Garamond'],
      body: ['Roboto'],
      links: ['Arial'],
      fallbacks: {
        title: ['Roboto', 'Arial', 'sans-serif'],
        body: ['Roboto', 'Arial', 'sans-serif'],
        links: ['Roboto', 'Arial', 'sans-serif']
      }
    },
    colors: {
      light: "#F1F2F1",
      dark: "#0A0A0A",
      darkish: "#191919",
      reddish: "#FF3333",
      darkGold: "#B08D57",
      brightGold: "#c38d04",
      midGold: "#e8ac3e",
      lightGold: "#E9D686",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      title: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      button: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    screens: {
      'xs': '390px',
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
  },
};
export const plugins = [];

