"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

export const CTAButton = () => {
  return (
    <Link
      href="https://app.anotechuva.com/register"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sendGAEvent("event", "click_create_free_account")}
      className="rounded-2xl bg-primary-container px-12 py-5 font-headline-md text-headline-md text-on-primary-container transition-colors hover:bg-primary"
    >
      Criar conta grátis
      <span className="sr-only"> (abre em nova aba)</span>
    </Link>
  );
};
