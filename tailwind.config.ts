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
        primary: "#FF3366",
        secondary: "#F4F4F5",
        accent: "#FF3366",
        surface: "#121212",
        "surface-hover": "#1A1A1A",
        "bg-gradient": "radial-gradient(circle at 50% 0%, #1a1a1a 0%, #050505 70%)",
        glow: "rgba(255, 51, 102, 0.15)",
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "32px",
        lg: "64px",
        xl: "128px",
        xxl: "200px",
      },
      borderRadius: {
        sm: "4px",
        md: "12px",
        lg: "24px",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.5)",
        glow: "0 0 20px rgba(255, 51, 102, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;