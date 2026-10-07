import { cn, reveal } from "@/lib/cn";

type Tone = "white" | "grey" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white",
  grey: "bg-grey",
  dark: "bg-black text-on-dark",
};

/** Full-width band with the standard vertical rhythm and a 1080px content column. */
export function Section({
  id,
  tone = "white",
  className,
  containerClassName,
  children,
}: {
  id: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("px-4 py-[clamp(64px,9vw,120px)]", tones[tone], className)}
    >
      <div className={cn("mx-auto max-w-[1080px]", containerClassName)}>{children}</div>
    </section>
  );
}

/** Centred section title (h2) with an optional lede underneath. */
export function SectionHeader({
  id,
  title,
  lede,
  tone = "light",
}: {
  id: string;
  title: string;
  lede?: string;
  tone?: "light" | "dark";
}) {
  return (
    <>
      <h2 id={`${id}-title`} className="text-center text-section-title" {...reveal()}>
        {title}
      </h2>
      {lede && <Lede tone={tone}>{lede}</Lede>}
    </>
  );
}

export function Lede({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "mx-auto mt-3 max-w-[620px] text-center text-lede",
        tone === "dark" ? "text-on-dark-2" : "text-ink-2",
      )}
      {...reveal()}
    >
      {children}
    </p>
  );
}
