import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FriendlyTip } from "@/components/FriendlyTip";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PlansSection } from "@/components/PlansSection";

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AnoteChuva",
  url: "https://anotechuva.com",
  description:
    "Aplicação gratuita para registrar medições de chuva e acompanhar gráficos diários, mensais e anuais em qualquer dispositivo.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Gratuito",
      price: "0",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Premium",
      price: "19.90",
      priceCurrency: "BRL",
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-24">
        <HeroSection />
        <FriendlyTip />
        <HowItWorks />
        <PlansSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
