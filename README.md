# AnoteChuva®️

[![Netlify Status](https://api.netlify.com/api/v1/badges/65df1200-2eaa-49a3-83a8-7c3bb5bb0607/deploy-status)](https://app.netlify.com/sites/landingpageanotechuva/deploys)
![Next.js](https://img.shields.io/badge/next%20js-16.2.6-000000?style=flat-square&logo=nextdotjs&logoColor=white)
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

- **[Next.js 16](https://nextjs.org/)** — framework React com App Router
- **[React 19](https://react.dev/)** — biblioteca de UI
- **[Tailwind CSS 3](https://tailwindcss.com/)** — estilização utilitária
- **[TypeScript 5](https://www.typescriptlang.org/)** — tipagem estática
- **[@next/third-parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)** — integração com Google Analytics

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
│   ├── layout.tsx                      # Layout raiz com fonte e Google Analytics
│   ├── page.tsx                        # Página principal
│   ├── globals.css                     # Estilos globais e variáveis CSS
│   ├── privacy/page.tsx                # Política de privacidade
│   └── data-deletion-instruction/      # Instruções de exclusão de dados
│       └── page.tsx
├── assets/                             # Imagens estáticas
└── components/
    ├── Card.tsx                        # Card de feature
    ├── Footer.tsx                      # Rodapé
    └── RainCloud.tsx                   # Animação de nuvem com chuva
```

## Deploy

O projeto é hospedado na **[Netlify](https://netlify.com)** com deploy contínuo a partir da branch principal.
