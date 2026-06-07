import { HiLightBulb } from "react-icons/hi2";

export const FriendlyTip = () => {
  return (
    <section className="mx-auto max-w-container-max-width px-gutter pt-16">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-green-500/30 bg-green-900/20 p-6 text-center sm:flex-row sm:text-left">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/20">
          <HiLightBulb className="text-[32px] text-green-400" aria-hidden="true" />
        </div>

        <p className="font-body-lg text-body-lg text-green-100/90">
          <span className="font-bold text-green-400">Dica amigável:</span> Você não precisa de equipamentos caros. Um simples
          copo medidor no seu quintal já é um ótimo começo para participar.
        </p>
      </div>
    </section>
  );
};
