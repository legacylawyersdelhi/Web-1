/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Props that mark an element for the scroll-in reveal; items in a grid row are staggered 70ms apart. */
export function reveal(index?: number) {
  const delay = index === undefined ? 0 : Math.min(index % 4, 3) * 70;
  return {
    "data-reveal": "",
    style: delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined,
  };
}
