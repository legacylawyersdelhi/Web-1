import { AutoGrid } from "@/components/ui/AutoGrid";
import { Icon } from "@/components/ui/icons";
import { Section, SectionHeader } from "@/components/ui/Section";
import { practice } from "@/content/site";
import { reveal } from "@/lib/cn";

export function PracticeAreas() {
  return (
    <Section id="practice" tone="grey">
      <SectionHeader id="practice" title={practice.title} lede={practice.lede} />
      <AutoGrid min={240}>
        {practice.areas.map((area, i) => (
          <article
            key={area.title}
            className="flex flex-col gap-2.5 rounded-card bg-white px-7 py-8 transition-[translate,box-shadow] duration-400 ease-apple hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            {...reveal(i)}
          >
            <Icon name={area.icon} size={32} className="text-blue" />
            <h3 className="mt-1.5 text-card-title">{area.title}</h3>
            <p className="text-[15px] text-ink-2">{area.description}</p>
          </article>
        ))}
      </AutoGrid>
    </Section>
  );
}
