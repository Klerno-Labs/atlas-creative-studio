import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",
        secondary: "#0F0F0F",
        surface: "#FFFFFF",
        text: "#F2F2F2",
        muted: "#8C8C8C",
        accent: "#D4AF37",
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
        accent: ["Space Mono", "monospace"],
      },
      spacing: {
        "spacing-unit": "8px",
        "spacing-section": "12vh",
        "spacing-card": "2rem",
      },
      borderRadius: {
        none: "0px",
      },
      boxShadow: {
        card: "0 0 20px rgba(212, 175, 55, 0.1)",
      },
      transitionTimingFunction: {
        fast: "0.2s ease-in-out",
        slow: "0.5s cubic-bezier",
      },
    },
  },
  plugins: [],
};

export default config;