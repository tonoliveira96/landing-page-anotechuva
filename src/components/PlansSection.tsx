import Link from "next/link";
import { HiCheck, HiClock } from "react-icons/hi2";

const FREE_FEATURES = ["1 localização", "Registro manual de chuva"];

const PREMIUM_FEATURES = [
  "Localizações ilimitadas",
  "1 dispositivo automático (sensor)",
  "Histórico completo",
  "Gráficos",
];

const ENTERPRISE_FEATURES = [
  "Tudo do Premium",
  "Até 10 dispositivos",
  "Múltiplos usuários por organização",
  "Importação/exportação em massa",
];

export const PlansSection = () => {
  return (
    <section id="planos" className="mx-auto max-w-container-max-width px-gutter py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mb-16 text-center">
        <h2 className="font-section-title-mobile text-section-title-mobile md:font-section-title md:text-section-title">
          Comece grátis, cresça quando precisar
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        <div className="flex flex-col rounded-2xl border border-primary bg-surface-container p-8">
          <h3 className="mb-1 font-headline-md text-headline-md">Free</h3>
          <p className="mb-6 text-on-surface-variant">Para quem está começando a acompanhar a chuva.</p>

          <ul className="mb-8 flex flex-1 flex-col gap-3">
            {FREE_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-on-surface-variant">
                <HiCheck className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="https://app.anotechuva.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary-container px-6 py-3 text-center font-headline-md text-headline-md text-on-primary-container transition-transform hover:scale-105"
          >
            Criar conta grátis
            <span className="sr-only"> (abre em nova aba)</span>
          </Link>
        </div>

        <div className="flex flex-col rounded-2xl border border-primary bg-surface-container p-8">
          <h3 className="mb-1 font-headline-md text-headline-md">Premium</h3>
          <p className="mb-1 text-on-surface-variant">Para quem acompanha mais de um lugar, com mais frequência.</p>
          <p className="mb-6 font-section-title text-section-title text-primary">
            R$19,90<span className="font-body-md text-body-md text-on-surface-variant">/mês</span>
          </p>

          <ul className="mb-4 flex flex-1 flex-col gap-3">
            {PREMIUM_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-on-surface-variant">
                <HiCheck className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <p className="mb-1 font-caption text-caption text-on-surface-variant">
            ou R$191,04/ano à vista (20% de desconto)
          </p>
          <p className="mb-6 font-caption text-caption text-on-surface-variant">
            O dispositivo de medição (sensor) não está incluso — é adquirido separadamente.
          </p>

          <Link
            href="https://app.anotechuva.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary-container px-6 py-3 text-center font-headline-md text-headline-md text-on-primary-container transition-transform hover:scale-105"
          >
            Criar conta e assinar
            <span className="sr-only"> (abre em nova aba)</span>
          </Link>
        </div>

        <div className="flex flex-col rounded-2xl border border-outline-variant bg-surface-container p-8">
          <div className="mb-1 flex items-center gap-3">
            <h3 className="font-headline-md text-headline-md">Corporativo</h3>
            <span className="flex items-center gap-1 rounded-full border border-outline-variant px-3 py-1 font-caption text-caption text-on-surface-variant">
              <HiClock aria-hidden="true" />
              Em breve
            </span>
          </div>
          <p className="mb-6 text-on-surface-variant">
            Para cooperativas, consultorias agro e órgãos públicos monitorando várias propriedades.
          </p>

          <ul className="mb-8 flex flex-1 flex-col gap-3">
            {ENTERPRISE_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-on-surface-variant">
                <HiCheck className="mt-1 shrink-0 text-outline" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <p className="text-center text-on-surface-variant">Ainda em desenvolvimento.</p>
        </div>
      </div>
    </section>
  );
};
