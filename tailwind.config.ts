import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-white": 'var(--light-white)',
        "dark-blue": "var(--dark-blue)",
        'red-dark': 'var(--red-dark)',
        'red-bright': 'var(--red-bright)',
        'dark-white': 'var(--dark-white)',
      },
      fontFamily:{
        hm: ["var(--font-HM)", ...fontFamily.sans],
        nooks: ["var(--font-NooksScriptRegular)", "serif"],
        nooksbold: ["var(--font-NooksScriptBold)", ...fontFamily.sans],
        adonis: ["var(--font-AdonisRegular)", "sans-serif"],
        gentlemens: ["var(--font-Gentlemens)", "cursive"],
      }
    },
  darkMode: 'class',
  },
  plugins: [],
} satisfies Config;
