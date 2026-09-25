import { HiLightBulb } from "react-icons/hi2";

export const FriendlyTip = () => {
  return (
    <section className="mx-auto max-w-container-max-width px-gutter pt-16">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-ocre/30 bg-ocre/10 p-6 text-center sm:flex-row sm:text-left">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocre/20">
          <HiLightBulb className="text-[32px] text-ocre" aria-hidden="true" />
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant">
          <span className="font-bold text-ocre">Dica amigável:</span> Você não precisa de equipamentos caros. Um simples
          copo de paredes retas no seu quintal já é um ótimo começo.{" "}
          <a href="#perguntas" className="font-medium text-primary underline underline-offset-4 hover:opacity-80">
            Veja como medir
          </a>
        </p>
      </div>
    </section>
  );
};
