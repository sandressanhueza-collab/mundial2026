import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        condensed: ["var(--font-barlow)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C97A",
          lighter: "#F5DFA0",
        },
        bg: {
          DEFAULT: "#07070E",
          2: "#0D0D1A",
          3: "#111120",
          4: "#16162A",
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
        fadeUp: "fadeUp 0.5s ease both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
