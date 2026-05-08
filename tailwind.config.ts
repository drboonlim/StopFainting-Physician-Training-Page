import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oxford: {
          DEFAULT: "#002147",
          light: "#003366",
          dark: "#001530",
        },
        cambridge: {
          DEFAULT: "#00B2A9",
          light: "#33C4BC",
          dark: "#008C84",
          pale: "#E6F7F6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
