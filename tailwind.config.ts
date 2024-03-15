import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "mont": ["Montserrat"]
    },
    screens: {
      "WXGA-1": "1280px",
      "HD-1": "1280px",
      "SXGA": "1280px",
      "WXGA-2": "1366px",
      "IOS": "1440px",
      "HD-2": "1600px",
      "FHD": "1920px"
    }
  },
  plugins: [require('daisyui')],
};
export default config;
