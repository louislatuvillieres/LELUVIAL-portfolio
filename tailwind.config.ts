import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      vt323: ["var(--font-vt323)"],
      schoolbell: ["var(--font-schoolbell)"],
      plex: ["var(--font-plex)"],
      erode: ["var(--font-erode)"],
      londrina: ["var(--font-londrina)"],
      pangolin: ["var(--font-pangolin)"],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
