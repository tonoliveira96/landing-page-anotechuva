import { HiShieldCheck } from "react-icons/hi2";

export const SecuritySection = () => {
  return (
    <section id="support" className="bg-surface-container-highest/30 py-16">
      <div className="mx-auto flex max-w-container-max-width flex-col items-center gap-8 px-gutter text-center md:flex-row md:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-on-primary-container">
          <HiShieldCheck className="text-[32px] text-primary" aria-hidden="true" />
        </div>

        <div>
          <h2 className="mb-1 font-headline-md text-headline-md">Seus dados seguros e privados</h2>
          <p className="text-on-surface-variant">
            Utilizamos tecnologia de ponta para garantir que suas informações estejam sempre protegidas.
          </p>
        </div>
      </div>
    </section>
  );
};
