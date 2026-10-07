/** Inline <head> script, runs before first paint: enables the scroll reveal only when JavaScript and motion are available. */
export const revealReadyScript =
  "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window)document.documentElement.classList.add('reveal-ready')}catch(e){}";
