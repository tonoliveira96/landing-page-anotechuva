"use client";

import { useEffect, useRef } from "react";

export const RainBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const dropCount = 30;

    for (let i = 0; i < dropCount; i += 1) {
      const drop = document.createElement("div");
      drop.className = "rain-drop";

      drop.style.left = `${Math.random() * 100}%`;
      drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
      drop.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(drop);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
      aria-hidden="true"
    />
  );
};
