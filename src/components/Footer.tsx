import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#", label: "Termos de Uso" },
  { href: "/privacy", label: "Privacidade" },
  { href: "#", label: "Contato" },
  { href: "#", label: "Sobre Nós" },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest py-12">
      <div className="mx-auto flex max-w-container-max-width flex-col items-center justify-between gap-base px-gutter md:flex-row">
        <div className="text-center md:text-left">
          <div className="mb-2 font-headline-md text-headline-md text-primary">AnoteChuva</div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {`© ${new Date().getFullYear()} AnoteChuva. Todos os direitos reservados.`}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};