"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { disclaimerText, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useDisclaimer } from "./DisclaimerProvider";

export function DisclaimerDialog() {
  const { state, ready, declined, accept, decline } = useDisclaimer();
  const agreeRef = useRef<HTMLButtonElement>(null);
  const declineRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<Element | null>(null);

  // On open: remember where focus was, then focus "I Agree".
  useEffect(() => {
    if (!ready || state !== "open") return;
    lastFocus.current = document.activeElement;
    agreeRef.current?.focus({ preventScroll: true });
  }, [ready, state]);

  if (state === "closed") return null;

  const onAgree = () => {
    accept();
    const prev = lastFocus.current;
    if (prev instanceof HTMLElement && prev !== document.body) prev.focus({ preventScroll: true });
  };

  const onDecline = () => {
    decline();
    agreeRef.current?.focus();
  };

  // Keep keyboard focus inside the dialog; Escape does not dismiss it.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const first = agreeRef.current;
    const last = declineRef.current;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  };

  const closing = state === "closing";

  return (
    <div
      id="disclaimer"
      data-disclaimer={state}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-text"
      onKeyDown={onKeyDown}
      className={cn(
        "fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/42 px-4 pt-[clamp(24px,10vh,96px)] pb-6 backdrop-blur-[8px]",
        "animate-fade-in transition-opacity duration-400 ease-apple",
        closing && "opacity-0",
      )}
    >
      <div
        className={cn(
          "w-full max-w-[640px] rounded-card bg-white p-[clamp(28px,4vw,44px)] shadow-[0_24px_60px_rgba(0,0,0,0.22)] animate-rise-in",
          closing && "translate-y-3 scale-[0.98] opacity-0 transition-[opacity,translate,scale] duration-400 ease-apple",
        )}
      >
        <p className="text-label text-ink-2 uppercase">{site.name}</p>
        <h2 id="disclaimer-title" className="mt-1.5 text-disclaimer-title">
          Disclaimer
        </h2>
        {declined && (
          <p role="alert" className="mt-4 text-[14px] text-danger">
            You need to accept the disclaimer to continue to this website.
          </p>
        )}
        <p id="disclaimer-text" className="mt-4 text-[15px] leading-[1.6]">
          {disclaimerText}
        </p>
        <div className="mt-7 flex flex-wrap gap-x-3.5 gap-y-3">
          <Button ref={agreeRef} onClick={onAgree} className="max-xs:flex-[1_1_100%]">
            I Agree
          </Button>
          <Button ref={declineRef} variant="ghost" onClick={onDecline} className="max-xs:flex-[1_1_100%]">
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
