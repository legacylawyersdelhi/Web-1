import Image from "next/image";
import { AutoGrid } from "@/components/ui/AutoGrid";
import { Icon } from "@/components/ui/icons";
import { Section, SectionHeader } from "@/components/ui/Section";
import { partners } from "@/content/site";
import { reveal } from "@/lib/cn";

export function Partners() {
  return (
    <Section id="partners" tone="grey">
      <SectionHeader id="partners" title={partners.title} lede={partners.lede} />
      <AutoGrid min={230}>
        {partners.people.map((person, i) => (
          <article
            key={i}
            className="flex flex-col items-center gap-1 rounded-card bg-white px-6 pt-9 pb-8 text-center"
            {...reveal(i)}
          >
            {person.photo ? (
              <Image
                src={person.photo}
                alt={`${person.name}, ${person.role}, APRP & Partners LLP`}
                width={240}
                height={240}
                sizes="120px"
                className="mb-3.5 size-[120px] rounded-full object-cover"
              />
            ) : (
              <div className="mb-3.5 flex size-[120px] items-center justify-center rounded-full bg-fill text-ink-3">
                <Icon name="person" size={48} />
              </div>
            )}
            <h3 className="text-card-title">{person.name}</h3>
            <p className="text-[15px] text-ink">{person.role}</p>
            <p className="mt-1 text-[14px] text-ink-2">
              {person.focus} · {person.qualifications}
            </p>
          </article>
        ))}
      </AutoGrid>
    </Section>
  );
}
