"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const NAV_LINKS = [
  { href: "#", label: "Início" },
  { href: "#features", label: "Recursos" },
  { href: "#plans", label: "Planos" },
  { href: "#support", label: "Suporte" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-container-max-width items-center justify-between px-gutter py-4">
        <Link href="/" className="text-[24px] font-bold tracking-tighter text-primary md:text-display-lg" aria-label="Ir para o início">
          AnoteChuva
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="https://app.anotechuva.com"
            onClick={() => sendGAEvent("event", "click_access")}
            className="rounded-lg bg-primary-container px-6 py-2 font-label-caps text-label-caps text-on-primary-container transition-opacity hover:opacity-80"
          >
            Acessar
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-outline-variant text-primary md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiXMark size={26} /> : <HiBars3 size={26} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-72 flex-col gap-6 bg-surface-container p-6 shadow-2xl transition-transform md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Menu móvel"
      >
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">Menu</span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant text-primary"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
          >
            <HiXMark size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-outline-variant px-4 py-3 font-label-caps text-label-caps text-on-surface transition-colors hover:border-primary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Link
          href="https://app.anotechuva.com"
          onClick={() => {
            sendGAEvent("event", "click_access");
            setIsOpen(false);
          }}
          className="mt-auto rounded-lg bg-primary-container px-6 py-3 text-center font-label-caps text-label-caps text-on-primary-container"
        >
          Acessar
        </Link>
      </aside>
    </header>
  );
};
