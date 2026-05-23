"use client";

import { useEffect } from "react";

export const RainBackground = () => {
  useEffect(() => {
    const container = document.getElementById("rain-container");

    if (!container) {
      return;
    }

    const dropCount = 30;

    for (let i = 0; i < dropCount; i += 1) {
      const drop = document.createElement("div");
      drop.className = "rain-drop";

      drop.style.left = `${Math.random() * window.innerWidth}px`;
      drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
      drop.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(drop);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div id="rain-container" className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
};
