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
        primary: "var(--primary)"
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
