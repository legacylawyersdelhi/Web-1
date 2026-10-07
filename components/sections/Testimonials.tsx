import { AutoGrid } from "@/components/ui/AutoGrid";
import { QuoteIcon } from "@/components/ui/icons";
import { Section, SectionHeader } from "@/components/ui/Section";
import { testimonials } from "@/content/site";
import { reveal } from "@/lib/cn";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader id="testimonials" title={testimonials.title} />
      <AutoGrid min={280}>
        {testimonials.quotes.map((item, i) => (
          <figure key={i} className="flex flex-col gap-5 rounded-card bg-grey px-8 py-9" {...reveal(i)}>
            <QuoteIcon className="text-blue" />
            <blockquote className="text-quote">{item.quote}</blockquote>
            <figcaption className="mt-auto text-[14px] text-ink-2">
              {item.name} · {item.city}
            </figcaption>
          </figure>
        ))}
      </AutoGrid>
    </Section>
  );
}
