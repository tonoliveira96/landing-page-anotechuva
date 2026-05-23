import Banner01 from "../assets/banner01.png";
import Banner02 from "../assets/banner02.png";
import Banner03 from "../assets/banner03.png";
import { Card } from "./Card";

export const FeaturesSection = () => {
  return (
    <section id="features" className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mx-auto max-w-container-max-width px-gutter">
        <div className="mb-16 text-center">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">Funcionalidades</span>
          <h2 className="mt-4 font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg">
            Tudo o que você precisa
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Acesse de qualquer lugar"
            description="Seus dados estão sempre com você, basta ter internet. No celular, tablet ou computador."
            imagePath={Banner01}
            imageDescription="Ilustração de conexão entre dispositivos"
          />

          <Card
            title="Gráficos fáceis de entender"
            description="Veja quanto choveu por dia, mês ou ano em gráficos claros e objetivos. Visualize tendências com um clique."
            imagePath={Banner02}
            imageDescription="Ilustração de leitura de gráficos de chuva"
          />

          <Card
            title="Importação simples"
            description="Já tem dados antigos? Suba sua planilha e organizamos tudo para você automaticamente."
            imagePath={Banner03}
            imageDescription="Ilustração de importação de dados"
          />
        </div>
      </div>
    </section>
  );
};
