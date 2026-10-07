"use client";

import { useEffect } from "react";

/*
  Eases [data-reveal] elements up into place as they enter the screen.
  The hidden starting state only applies under html.reveal-ready (set by an inline script in <head>
  when motion is allowed), so nothing is hidden without JavaScript or with reduced motion.
*/
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("reveal-ready")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.dataset.reveal = "visible";
          // Once revealed, drop the marker so hover effects run without the reveal transition.
          const done = (ev: TransitionEvent) => {
            if (ev.target !== el || ev.propertyName !== "transform") return;
            el.removeEventListener("transitionend", done);
            el.removeAttribute("data-reveal");
          };
          el.addEventListener("transitionend", done);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
