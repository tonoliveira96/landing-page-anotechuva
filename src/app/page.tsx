import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FriendlyTip } from "@/components/FriendlyTip";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { RainBackground } from "@/components/RainBackground";
import { SecuritySection } from "@/components/SecuritySection";

export default function Home() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <RainBackground />
      <Navbar />

      <main className="relative z-10 pt-24">
        <HeroSection />
        <FriendlyTip />
        <HowItWorks />
        <SecuritySection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
