/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // 'purple': "#9333ea",
      'blackpurple': '#6b21a8',
      'white': "#f8fafc",
    },
    fontFamily: {
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    plugins: [],
  }
});
