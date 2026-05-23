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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "tertiary-fixed": "#d8e3fb",
        "surface-dim": "#101415",
        "on-primary-container": "#004965",
        surface: "#101415",
        "on-surface": "#e0e3e5",
        "outline-variant": "#3e484f",
        "secondary-container": "#00a2e6",
        "surface-container-highest": "#323537",
        "on-surface-variant": "#bdc8d1",
        "on-background": "#e0e3e5",
        "error-container": "#93000a",
        tertiary: "#c2cde5",
        "on-secondary": "#00344d",
        outline: "#87929a",
        "primary-fixed-dim": "#7bd0ff",
        secondary: "#89ceff",
        "tertiary-container": "#a7b2c9",
        "on-tertiary-fixed": "#111c2d",
        "inverse-surface": "#e0e3e5",
        "on-tertiary-container": "#394458",
        error: "#ffb4ab",
        "inverse-on-surface": "#2d3133",
        "surface-tint": "#7bd0ff",
        "on-secondary-fixed-variant": "#004c6e",
        "on-secondary-container": "#00344e",
        "surface-container-lowest": "#0b0f10",
        "on-tertiary": "#263143",
        "primary-container": "#38bdf8",
        "on-error": "#690005",
        "on-primary-fixed-variant": "#004c69",
        "secondary-fixed-dim": "#89ceff",
        "on-error-container": "#ffdad6",
        "tertiary-fixed-dim": "#bcc7de",
        "primary-fixed": "#c4e7ff",
        "surface-container-high": "#272a2c",
        "on-tertiary-fixed-variant": "#3c475a",
        "surface-bright": "#363a3b",
        "surface-container": "#1d2022",
        "surface-container-low": "#191c1e",
        "inverse-primary": "#00668a",
        "on-primary": "#00354a",
        "secondary-fixed": "#c9e6ff",
        "surface-variant": "#323537"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        gutter: "24px",
        "section-padding-desktop": "80px",
        "container-max-width": "1200px",
        "section-padding-mobile": "40px",
        base: "8px",
      },
      fontFamily: {
        "label-caps": ["var(--font-hanken-grotesk)", "sans-serif"],
        "body-md": ["var(--font-hanken-grotesk)", "sans-serif"],
        "display-lg-mobile": ["var(--font-hanken-grotesk)", "sans-serif"],
        "body-lg": ["var(--font-hanken-grotesk)", "sans-serif"],
        "display-lg": ["var(--font-hanken-grotesk)", "sans-serif"],
        "headline-md": ["var(--font-hanken-grotesk)", "sans-serif"],
      },
      fontSize: {
        "label-caps": [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" },
        ],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-lg-mobile": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-lg": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
      },
      keyframes: {
        rainfall: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '70%': { transform: 'translateY(105px) scale(1)' },
          '100%': { transform: 'translateY(105px) scale(0)' },
        },
        leftToRigth:{
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        rightToLeft:{
          '0%': { transform: 'translateX(100vw) scaleX(-1)' },
          '100%': { transform: 'translateX(-100%) scaleX(-1)' },
        }
      },
      animation: {
        rainfall: 'rainfall 0.8s linear infinite',
        leftToRigth: 'leftToRigth 20s linear infinite',
        rightToLeft: 'rightToLeft 20s linear infinite'
      }
    },
  },
  plugins: [],
};
export default config;
