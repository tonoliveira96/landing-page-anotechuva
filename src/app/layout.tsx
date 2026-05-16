import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnoteChuva",
  description: "Aplicação gratuita para registro pessoal diário de chuvas.",
  keywords: ["Anotechuva", "histórico de chuvas online", "Aplicativo de monitoramento de chuvas", "registrar chuvas"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <GoogleAnalytics gaId="G-F2C877LSW2" />
      </body>
    </html>
  );
}
