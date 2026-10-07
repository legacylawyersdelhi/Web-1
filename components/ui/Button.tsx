import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outlineLight" | "ghost";

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-pill border px-6 text-[17px] " +
  "transition-[background-color,color,border-color,scale] duration-200 ease-apple hover:no-underline active:scale-[0.97]";

// Each variant sets its own border colour (a shared default would compete with it).
const variants: Record<Variant, string> = {
  primary: "border-transparent bg-blue text-white hover:bg-blue-hover",
  outline: "border-blue bg-transparent text-blue hover:bg-blue hover:text-white",
  outlineLight: "border-white/70 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink",
  ghost: "border-line bg-white text-ink hover:bg-grey",
};

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

/** A link styled as a pill button. */
export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<"a"> & { variant?: Variant }) {
  return <a className={buttonClass(variant, className)} {...props} />;
}

/** A <button> styled as a pill button. */
export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: React.ComponentProps<"button"> & { variant?: Variant }) {
  // Buttons keep the browser's normal letter-spacing (as in the original design), unlike links.
  return <button type={type} className={buttonClass(variant, cn("tracking-normal", className))} {...props} />;
}
