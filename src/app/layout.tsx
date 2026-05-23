import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anotechuva.com"),
  title: {
    default: "AnoteChuva",
    template: "%s | AnoteChuva",
  },
  description: "Aplicação gratuita para registrar medições de chuva e acompanhar gráficos diários, mensais e anuais em qualquer dispositivo.",
  keywords: [
    "AnoteChuva",
    "histórico de chuvas online",
    "aplicativo de monitoramento de chuvas",
    "registrar chuvas",
    "pluviômetro",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://anotechuva.com",
    title: "AnoteChuva",
    description:
      "Registre suas chuvas de forma simples e gratuita e acompanhe tendências com gráficos claros.",
    siteName: "AnoteChuva",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AnoteChuva - Registro diário de chuvas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnoteChuva",
    description:
      "Registre suas chuvas de forma simples e gratuita e acompanhe tendências com gráficos claros.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://anotechuva.com",
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
      <body className={`${hankenGrotesk.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-F2C877LSW2" />
      </body>
    </html>
  );
}
