"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

export const CTAButton = () => {
  return (
    <Link
      href="https://app.anotechuva.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sendGAEvent("event", "click_create_free_account")}
      className="rounded-2xl bg-primary-container px-12 py-5 font-headline-md text-headline-md text-on-primary-container shadow-[0px_8px_30px_rgba(56,189,248,0.4)] transition-all hover:scale-105"
    >
      Criar conta gratuita
    </Link>
  );
};
