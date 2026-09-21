import { CTAButton } from "./CTAButton";

export const FinalCTA = () => {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mx-auto max-w-container-max-width rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-12 px-gutter text-center">
        <h2 className="mb-8 font-section-title-mobile text-section-title-mobile md:font-section-title md:text-section-title">
          Pronto para começar?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Comece a registrar hoje e construa, dia após dia, um histórico completo de chuva para sua propriedade.
        </p>

        <CTAButton />
      </div>
    </section>
  );
};
