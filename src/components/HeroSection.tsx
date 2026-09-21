import Image from "next/image";
import Link from "next/link";

import HeroBanner from "../assets/banner02.png";

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
            className="rounded-xl bg-primary-container px-10 py-4 font-headline-md text-headline-md text-on-primary-container transition-colors hover:bg-primary"
          >
            Criar conta grátis
            <span className="sr-only"> (abre em nova aba)</span>
          </Link>

          <a
            href="#como-funciona"
            className="rounded-xl border border-primary px-10 py-4 font-headline-md text-headline-md text-primary transition-colors hover:bg-primary/10"
          >
            Saber mais
          </a>
        </div>
      </div>

      <div className="w-full max-w-[440px] md:max-w-[560px] md:flex-none">
        <div className="relative">
          <div className="absolute -inset-3 rounded-lg border border-outline-variant" aria-hidden="true" />
          <Image
            src={HeroBanner}
            alt="Painel do AnoteChuva mostrando gráficos de chuva por dia, por mês e comparativo anual"
            className="relative rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};
