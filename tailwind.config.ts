import type { Config } from "tailwindcss";

const config: Config = {
  // Tell Tailwind to rely on the `.dark` class on the <html> tag for dark mode
  darkMode: ["class"], 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your globals.css already handles these vars, 
        // but they can be mapped here if your build requires it.
      },
    },
  },
  plugins: [],
};
export default config;