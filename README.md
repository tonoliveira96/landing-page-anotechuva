# AnoteChuva®️

[![Netlify Status](https://api.netlify.com/api/v1/badges/65df1200-2eaa-49a3-83a8-7c3bb5bb0607/deploy-status)](https://app.netlify.com/sites/landingpageanotechuva/deploys)
![Next.js](https://img.shields.io/badge/next%20js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/tailwind-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)

Landing page da aplicação **AnoteChuva®️** — ferramenta gratuita para registro diário de precipitação de chuvas usando pluviômetro, com histórico unificado e acessível de qualquer dispositivo.

🌐 **[www.anotechuva.com](https://www.anotechuva.com)**

---

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Página principal com apresentação da aplicação |
| `/privacy` | Política de privacidade |
| `/data-deletion-instruction` | Instruções de exclusão de dados (Facebook) |

## Tecnologias

- **[Next.js 15](https://nextjs.org/)** — framework React com App Router
- **[React 19](https://react.dev/)** — biblioteca de UI
- **[Tailwind CSS 3](https://tailwindcss.com/)** — estilização utilitária
- **[TypeScript 5](https://www.typescriptlang.org/)** — tipagem estática
- **[react-icons](https://react-icons.github.io/react-icons/)** — biblioteca de ícones para UI
- **[@next/third-parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)** — integração com Google Analytics

## Destaques da landing

- Rebranding completo com tokens visuais no Tailwind (cores, tipografia e espaçamento)
- Navegação responsiva com menu mobile (hamburger + drawer)
- Seções modulares em componentes reutilizáveis (Hero, Features, How it Works, CTA)
- SEO técnico com metadata avançada (Open Graph, Twitter Card e canonical)
- Geração de `sitemap.xml` e `robots.txt` via Metadata API do Next.js

## Pré-requisitos

- **Node.js >= 20.9.0** (recomendado: v22 LTS via [nvm](https://github.com/nvm-sh/nvm))
- npm >= 9

## Instalação e execução local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm start` | Inicia o servidor de produção |
| `npm run lint` | Executa o ESLint no diretório `src/` |

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx                      # Layout raiz (fonte, SEO e Google Analytics)
│   ├── page.tsx                        # Landing page principal
│   ├── globals.css                     # Estilos globais e utilitários visuais
│   ├── privacy/page.tsx                # Política de privacidade
│   ├── data-deletion-instruction/      # Instruções de exclusão de dados
│       └── page.tsx
│   ├── robots.ts                       # Regras de rastreamento
│   └── sitemap.ts                      # Mapa do site
├── assets/                             # Imagens estáticas da landing
└── components/
    ├── Navbar.tsx                      # Cabeçalho com navegação responsiva
    ├── HeroSection.tsx                 # Seção principal
    ├── FeaturesSection.tsx             # Grid de funcionalidades
    ├── Card.tsx                        # Card reutilizável de feature
    ├── FriendlyTip.tsx                 # Bloco de dica amigável
    ├── HowItWorks.tsx                  # Seção de passos de uso
    ├── SecuritySection.tsx             # Bloco de segurança
    ├── FinalCTA.tsx                    # CTA final
    ├── CTAButton.tsx                   # Botão com evento GA
    ├── RainBackground.tsx              # Animação de chuva no background
    └── Footer.tsx                      # Rodapé
```

## Deploy

O projeto é hospedado na **[Netlify](https://netlify.com)** com deploy contínuo a partir da branch principal.
