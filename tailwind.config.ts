import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Paleta deliberada (não mais o dicionário Material Theme Builder
      // inteiro) — só os papéis realmente usados no site. água = acento
      // primário (chuva/dado); ocre = acento secundário (atenção/pendência).
      colors: {
        background: "var(--background)", // céu encoberto
        foreground: "var(--foreground)", // tinta
        primary: "var(--primary)", // água
        "primary-container": "#8ed5ff", // água clara — fundo de botão preenchido
        "on-primary-container": "#003c57",
        "on-background": "#e4e7e8",
        "on-surface": "#e4e7e8",
        "on-surface-variant": "#b9c4cc",
        outline: "#87929a",
        "outline-variant": "#2a3033", // fio/hairline
        "surface-container": "#1a1e20",
        "surface-container-lowest": "#0b0f10",
        ocre: "#c9963a", // seco/atenção
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
        sans: ["var(--font-sans)", "sans-serif"],
        // Só pra número: preço, mm, %, data — o conteúdo que o produto
        // realmente mede. Ver PlansSection (preço) e HowItWorks (passos).
        mono: ["var(--font-mono)", "monospace"],
        "label-caps": ["var(--font-sans)", "sans-serif"],
        "body-md": ["var(--font-sans)", "sans-serif"],
        "display-lg-mobile": ["var(--font-sans)", "sans-serif"],
        "body-lg": ["var(--font-sans)", "sans-serif"],
        "display-lg": ["var(--font-sans)", "sans-serif"],
        "headline-md": ["var(--font-sans)", "sans-serif"],
        "section-title-mobile": ["var(--font-sans)", "sans-serif"],
        "section-title": ["var(--font-sans)", "sans-serif"],
        caption: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "label-caps": [
          "0.875rem",
          { lineHeight: "1.25rem", letterSpacing: "0.05em", fontWeight: "600" },
        ],
        "body-md": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "display-lg-mobile": [
          "2rem",
          { lineHeight: "2.5rem", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "display-lg": [
          "3rem",
          { lineHeight: "3.5rem", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-md": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        // Degrau entre headline-md (24px) e display-lg (48px) — títulos de
        // seção (<h2>), que não podem ter o mesmo peso visual do <h1> do Hero.
        "section-title-mobile": [
          "1.75rem",
          { lineHeight: "2.25rem", letterSpacing: "-0.005em", fontWeight: "700" },
        ],
        "section-title": [
          "2.25rem",
          { lineHeight: "2.75rem", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        // Legendas/fine print (badges, disclaimers) — antes usavam text-xs cru.
        caption: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.02em", fontWeight: "500" }],
      },
      keyframes: {},
      animation: {}
    },
  },
  plugins: [],
};
export default config;
