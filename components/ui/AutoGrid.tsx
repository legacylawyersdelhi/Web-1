import { cn } from "@/lib/cn";

/* Responsive grids that fit as many columns as the minimum width allows (one column on phones).
   Listed in full so Tailwind can see every class. */
const columns = {
  200: "grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))]",
  220: "grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))]",
  230: "grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))]",
  240: "grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))]",
  280: "grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]",
  300: "grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]",
} as const;

export function AutoGrid({
  min,
  as: Tag = "div",
  gap = "gap-5",
  top = "mt-[clamp(40px,5vw,64px)]",
  children,
}: {
  min: keyof typeof columns;
  as?: "div" | "dl";
  /** Gap utilities; default 20px. */
  gap?: string;
  /** Space above the grid. */
  top?: string;
  children: React.ReactNode;
}) {
  return <Tag className={cn("grid", columns[min], gap, top)}>{children}</Tag>;
}
