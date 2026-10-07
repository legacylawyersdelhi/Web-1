"use client";

import { useDisclaimer } from "./DisclaimerProvider";

export function ReopenDisclaimerButton() {
  const { show } = useDisclaimer();
  return (
    <button type="button" onClick={show} className="cursor-pointer tracking-normal text-footer-link hover:underline">
      Disclaimer
    </button>
  );
}
