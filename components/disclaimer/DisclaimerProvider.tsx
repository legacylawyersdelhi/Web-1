"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";

/*
  The Bar Council disclaimer is shown on every visit, before anything else.
  It is open in the server-rendered HTML too, so it appears with no flash of the page first.
*/
type State = "open" | "closing" | "closed";

type DisclaimerContextValue = {
  state: State;
  /** True once the page is interactive (the dialog only blocks the page after that, so it still reads without JavaScript). */
  ready: boolean;
  /** The visitor pressed Decline: show the "please accept" warning. */
  declined: boolean;
  accept: () => void;
  decline: () => void;
  show: () => void;
};

const DisclaimerContext = createContext<DisclaimerContextValue | null>(null);

const CLOSE_MS = 400;

const noopSubscribe = () => () => {};

export function DisclaimerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<State>("open");
  const [declined, setDeclined] = useState(false);
  // false while server-rendering and hydrating, true once running in the browser.
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const accept = useCallback(() => {
    setState("closing");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.clearTimeout(timer.current);
    // Let the fade-out play, then remove the dialog.
    timer.current = window.setTimeout(() => setState("closed"), reduce ? 0 : CLOSE_MS);
  }, []);

  const decline = useCallback(() => setDeclined(true), []);

  const show = useCallback(() => {
    window.clearTimeout(timer.current);
    setDeclined(false);
    setState("open");
  }, []);

  const value = useMemo(
    () => ({ state, ready, declined, accept, decline, show }),
    [state, ready, declined, accept, decline, show],
  );
  return <DisclaimerContext.Provider value={value}>{children}</DisclaimerContext.Provider>;
}

export function useDisclaimer() {
  const ctx = useContext(DisclaimerContext);
  if (!ctx) throw new Error("useDisclaimer must be used inside <DisclaimerProvider>");
  return ctx;
}

/** Wraps the whole page; blocks clicks and focus behind the disclaimer while it is open. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const { state, ready } = useDisclaimer();
  const blocked = ready && state === "open";
  return (
    <div id="site" inert={blocked} aria-hidden={blocked || undefined}>
      {children}
    </div>
  );
}
