"use client";

import { useEffect, useRef, useState } from "react";
import { buttonClass } from "@/components/ui/Button";
import { navItems } from "@/content/site";
import { cn } from "@/lib/cn";

/*
  Phone/tablet menu (below 834px): a full-screen panel that slides down over the page from under the bar.
  Closed, it is clipped to zero height, invisible and inert; open, it reveals top-down and the links fade in
  one after another. The page behind can't scroll while it's open (see globals.css).
*/
const panelClosed =
  "invisible opacity-0 [clip-path:inset(0_0_100%_0)] " +
  "[transition:clip-path_0.4s_var(--ease-apple),opacity_0.4s_var(--ease-apple),visibility_0s_linear_0.4s]";
const panelOpen =
  "visible opacity-100 [clip-path:inset(0_0_0_0)] " +
  "[transition:clip-path_0.5s_var(--ease-apple-out),opacity_0.2s_var(--ease-apple),visibility_0s]";

const itemClosed =
  "-translate-y-3 opacity-0 [transition:opacity_0.2s_var(--ease-apple),translate_0.2s_var(--ease-apple)]";
const itemOpen =
  "translate-y-0 opacity-100 [transition:opacity_0.4s_var(--ease-apple),translate_0.5s_var(--ease-apple-out)]";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape closes the menu and returns focus to the button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Widening the window to desktop size closes it.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 834px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const stagger = (i: number) => (open ? { transitionDelay: `${120 + i * 40}ms` } : undefined);
  // Choosing a section closes the menu; the page then glides to that section.
  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="-mr-3 hidden size-11 cursor-pointer items-center justify-center text-nav-text max-nav:inline-flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 9h16"
            className={cn(
              "origin-[12px_12px] transition-[translate,rotate] duration-400 ease-apple",
              open && "translate-y-[3px] rotate-45",
            )}
          />
          <path
            d="M4 15h16"
            className={cn(
              "origin-[12px_12px] transition-[translate,rotate] duration-400 ease-apple",
              open && "-translate-y-[3px] -rotate-45",
            )}
          />
        </svg>
      </button>

      <div
        id="mobile-menu"
        data-menu-open={open}
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-nav h-[calc(100dvh-48px)] overflow-y-auto overscroll-contain bg-nav-solid px-10 pt-3 pb-12 nav:hidden",
          "menu:px-[max(40px,calc((100%-560px)/2))] menu:pt-6",
          open ? panelOpen : panelClosed,
        )}
      >
        <ul>
          {navItems.map(({ id, label }, i) => (
            <li key={id} className={open ? itemOpen : itemClosed} style={stagger(i)}>
              <a
                href={`#${id}`}
                onClick={close}
                className="block border-b border-white/[0.08] py-2.5 text-menu-link text-nav-text [transition:color_0.2s_var(--ease-apple),padding-left_0.4s_var(--ease-apple)] hover:pl-1.5 hover:text-white hover:no-underline focus-visible:pl-1.5 focus-visible:text-white menu:text-menu-link-lg"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className={cn("mt-8 max-w-[360px]", open ? itemOpen : itemClosed)} style={stagger(navItems.length)}>
          <a href="#contact" onClick={close} className={buttonClass("primary", "w-full")}>
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}
