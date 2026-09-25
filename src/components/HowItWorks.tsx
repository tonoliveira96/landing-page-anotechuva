import { HiChartBar, HiPencilSquare, HiUserPlus } from "react-icons/hi2";

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="mx-auto max-w-container-max-width px-gutter py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mb-16 text-center">
        <h2 className="font-section-title-mobile text-section-title-mobile md:font-section-title md:text-section-title">Como funciona</h2>
      </div>

      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div className="group flex-1 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
            <HiUserPlus className="text-[40px] text-primary" aria-hidden="true" />
          </div>
          <h3 className="mb-2 font-headline-md text-headline-md">
            <span className="font-mono text-primary">1.</span> Registre-se
          </h3>
          <p className="text-on-surface-variant">Crie sua conta em segundos com seu e-mail ou sua conta Google.</p>
        </div>

        <div className="group flex-1 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
            <HiPencilSquare className="text-[40px] text-primary" aria-hidden="true" />
          </div>
          <h3 className="mb-2 font-headline-md text-headline-md">
            <span className="font-mono text-primary">2.</span> Anote a chuva
          </h3>
          <p className="text-on-surface-variant">Depois de chover, olhe seu medidor e digite quantos milímetros caíram — pelo celular ou computador.</p>
        </div>

        <div className="group flex-1 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
            <HiChartBar className="text-[40px] text-primary" aria-hidden="true" />
          </div>
          <h3 className="mb-2 font-headline-md text-headline-md">
            <span className="font-mono text-primary">3.</span> Analise
          </h3>
          <p className="text-on-surface-variant">Acompanhe gráficos fáceis de entender sobre o volume de chuva na sua propriedade.</p>
        </div>
      </div>
    </section>
  );
};
