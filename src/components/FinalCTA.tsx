import { CTAButton } from "./CTAButton";

export const FinalCTA = () => {
  return (
    <section id="plans" className="py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mx-auto max-w-container-max-width rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-12 px-gutter text-center">
        <h2 className="mb-8 font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg">
          Pronto para começar?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Junte-se a milhares de usuários que já monitoram suas plantações e propriedades com precisão.
        </p>

        <CTAButton />
      </div>
    </section>
  );
};
