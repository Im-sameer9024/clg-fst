import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        racing: ["Racing Sans One", "serif"],
        "lost-south": ["var(--font-lost-in-south)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
