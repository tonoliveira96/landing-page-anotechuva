import { HiChartBar, HiPencilSquare, HiUserPlus } from "react-icons/hi2";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="mx-auto max-w-container-max-width px-gutter py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mb-16 text-center">
        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg">Como funciona</h2>
      </div>

      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div className="group flex-1 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
            <HiUserPlus className="text-[40px] text-primary" aria-hidden="true" />
          </div>
          <h3 className="mb-2 font-headline-md text-headline-md">1. Registre-se</h3>
          <p className="text-on-surface-variant">Crie sua conta em segundos apenas com seu e-mail ou telefone.</p>
        </div>

        <div className="group flex-1 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
            <HiPencilSquare className="text-[40px] text-primary" aria-hidden="true" />
          </div>
          <h3 className="mb-2 font-headline-md text-headline-md">2. Anote a chuva</h3>
          <p className="text-on-surface-variant">Depois de chover, basta olhar seu medidor e digitar o valor no sistema.</p>
        </div>

        <div className="group flex-1 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
            <HiChartBar className="text-[40px] text-primary" aria-hidden="true" />
          </div>
          <h3 className="mb-2 font-headline-md text-headline-md">3. Analise</h3>
          <p className="text-on-surface-variant">Acompanhe gráficos fáceis de entender sobre o volume de chuva na sua região.</p>
        </div>
      </div>
    </section>
  );
};
