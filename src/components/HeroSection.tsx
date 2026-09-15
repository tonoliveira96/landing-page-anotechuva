import Image from "next/image";
import Link from "next/link";

import HeroPlaceholder from "../assets/banner01.png";

export const HeroSection = () => {
  return (
    <section className="mx-auto flex max-w-container-max-width flex-col items-center gap-12 px-gutter py-section-padding-mobile md:flex-row md:py-section-padding-desktop">
      <div className="flex-1 text-center md:text-left">
        <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile leading-tight md:font-display-lg md:text-display-lg">
          Transforme suas medições de chuva em um histórico completo
        </h1>

        <p className="mx-auto mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant md:mx-0">
          Continue usando seu pluviômetro ou copo medidor. O AnoteChuva organiza
          cada registro em gráficos diários, mensais e anuais para você
          acompanhar o que caiu na sua propriedade.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
          <Link
            href="https://app.anotechuva.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary-container px-10 py-4 font-headline-md text-headline-md text-on-primary-container shadow-[0px_4px_20px_rgba(56,189,248,0.3)] transition-transform hover:scale-105"
          >
            Criar conta grátis
          </Link>

          <a
            href="#como-funciona"
            className="rounded-xl border border-primary px-10 py-4 font-headline-md text-headline-md text-primary transition-colors hover:bg-primary/10"
          >
            Saber mais
          </a>
        </div>
      </div>

      <div className="w-full max-w-[400px] flex-1">
        <div className="group relative">
          <div className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-primary/30" />
          <Image
            src={HeroPlaceholder}
            alt="Ilustração de pessoa registrando chuva em um painel digital"
            className="relative z-10 h-auto w-full rounded-2xl object-cover drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};
