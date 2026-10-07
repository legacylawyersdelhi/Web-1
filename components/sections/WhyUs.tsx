import { AutoGrid } from "@/components/ui/AutoGrid";
import { Icon } from "@/components/ui/icons";
import { Section, SectionHeader } from "@/components/ui/Section";
import { why } from "@/content/site";
import { reveal } from "@/lib/cn";

export function WhyUs() {
  return (
    <Section id="why">
      <SectionHeader id="why" title={why.title} lede={why.lede} />
      <AutoGrid min={220} gap="gap-x-8 gap-y-10">
        {why.points.map((point, i) => (
          <div key={point.title} className="flex flex-col items-center gap-2.5 text-center" {...reveal(i)}>
            <span className="flex size-14 items-center justify-center rounded-full bg-grey">
              <Icon name={point.icon} size={26} />
            </span>
            <h3 className="mt-2 text-[21px] font-semibold">{point.title}</h3>
            <p className="text-[15px] text-ink-2">{point.description}</p>
          </div>
        ))}
      </AutoGrid>
    </Section>
  );
}
