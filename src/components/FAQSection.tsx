import Link from "next/link";
import type { ReactNode } from "react";
import { HiChevronDown } from "react-icons/hi2";

type FAQItem = {
  question: string;
  answer: string;
  content?: ReactNode;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "É grátis mesmo?",
    answer:
      "Sim. O plano Free inclui 1 localização, registro manual de chuva e gráficos básicos, sem prazo para acabar. O Premium é para quem acompanha vários locais ou quer o histórico completo e gráficos comparativos.",
  },
  {
    question: "Preciso instalar algum aplicativo?",
    answer:
      "Não. O AnoteChuva funciona direto no navegador do celular ou do computador, sem instalar nada. É preciso estar conectado à internet para salvar os registros.",
  },
  {
    question: "Como medir a chuva com um copo?",
    answer:
      "Use um recipiente de paredes retas (cilíndrico) e deixe-o em um lugar aberto, longe de telhados e árvores. Depois da chuva, meça com uma régua a altura da água em milímetros: essa altura é a chuva em mm, o valor que você anota no app.",
  },
  {
    question: "O que é o sensor automático?",
    answer:
      "É um medidor que envia a chuva para o AnoteChuva sozinho, sem você precisar anotar. Ele ainda está em desenvolvimento e, quando lançar, será adquirido separadamente.",
  },
  {
    question: "Meus dados ficam públicos?",
    answer: "Não. Seus registros de chuva são privados e só você tem acesso a eles.",
    content: (
      <>
        Não. Seus registros de chuva são privados e só você tem acesso a eles. Saiba mais na nossa{" "}
        <Link href="/privacidade" className="text-primary underline underline-offset-4 hover:opacity-80">
          Política de Privacidade
        </Link>
        .
      </>
    ),
  },
  {
    question: "Como pago e cancelo o Premium?",
    answer:
      "O pagamento é feito dentro do app, com cartão ou Pix. Você pode cancelar a assinatura quando quiser.",
  },
  {
    question: "Como falo com vocês?",
    answer: "Envie um e-mail para contato@anotechuva.com.",
    content: (
      <>
        Envie um e-mail para{" "}
        <a href="mailto:contato@anotechuva.com" className="text-primary underline underline-offset-4 hover:opacity-80">
          contato@anotechuva.com
        </a>
        .
      </>
    ),
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const FAQSection = () => {
  return (
    <section id="perguntas" className="mx-auto max-w-container-max-width px-gutter py-section-padding-mobile md:py-section-padding-desktop">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mb-16 text-center">
        <h2 className="font-section-title-mobile text-section-title-mobile md:font-section-title md:text-section-title">
          Perguntas frequentes
        </h2>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-outline-variant rounded-lg border border-outline-variant">
        {FAQ_ITEMS.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-headline-md text-headline-md transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
              {item.question}
              <HiChevronDown className="shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="px-6 pb-6 text-on-surface-variant">{item.content ?? item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};
