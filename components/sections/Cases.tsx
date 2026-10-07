import { AutoGrid } from "@/components/ui/AutoGrid";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cases } from "@/content/site";
import { reveal } from "@/lib/cn";

export function Cases() {
  return (
    <Section id="cases" tone="dark" containerClassName="text-center">
      <SectionHeader id="cases" title={cases.title} lede={cases.lede} tone="dark" />
      {/* Label first in the markup (read first by screen readers), shown under the number. */}
      <AutoGrid as="dl" min={200} gap="gap-x-6 gap-y-10" top="mt-[clamp(40px,5vw,72px)]">
        {cases.stats.map((stat, i) => (
          <div key={stat.label} className="flex flex-col-reverse" {...reveal(i)}>
            <dt className="mt-2.5 text-[17px] text-on-dark-2">{stat.label}</dt>
            <dd className="text-stat">{stat.value}</dd>
          </div>
        ))}
      </AutoGrid>
      <p className="mx-auto mt-[clamp(40px,5vw,64px)] max-w-[640px] text-[12px] text-ink-3" {...reveal()}>
        {cases.fineprint}
      </p>
    </Section>
  );
}
