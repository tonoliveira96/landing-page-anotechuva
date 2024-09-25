import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AnoteChuva",
  description: "Aplicação gratuita para registro pessoal diário de chuvas.",
  keywords: ["Anotechuva", "histórico de chuvas online", "Aplicativo de monitoramento de chuvas", "resgitrar chuvas"],
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
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}
