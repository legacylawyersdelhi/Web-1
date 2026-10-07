"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/site";
import { cn } from "@/lib/cn";

/** The in-bar links (834px and wider). Highlights the link for the section in the middle of the screen. */
export function DesktopNavLinks() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of navItems) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex items-center gap-[30px] text-nav-link max-lg:gap-5 max-nav:hidden">
      {navItems.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            aria-current={active === id ? "true" : undefined}
            className={cn(
              "text-nav-text transition-[opacity,color] duration-200 ease-apple hover:text-white hover:no-underline hover:opacity-100",
              active === id ? "text-white opacity-100" : "opacity-[0.88]",
            )}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
