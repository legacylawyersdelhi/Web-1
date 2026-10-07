import { AutoGrid } from "@/components/ui/AutoGrid";
import { Section, SectionHeader } from "@/components/ui/Section";
import { contact, site } from "@/content/site";
import { reveal } from "@/lib/cn";

/* The label is 15px here: the original stylesheet's `.card p` rule outranked `.label`, and that's what was approved. */
const label = "text-[15px] font-semibold tracking-[0.04em] text-ink-2 uppercase";
const value = "mt-1.5 inline-block text-contact";

export function Contact() {
  const { address } = contact;
  return (
    <Section id="contact">
      <SectionHeader id="contact" title={contact.title} lede={contact.lede} />
      <AutoGrid min={300}>
        <address className="flex flex-col gap-7 rounded-card bg-grey px-8 py-9 not-italic" {...reveal(0)}>
          <div>
            <p className={label}>Address</p>
            <p className={`${value} text-ink`}>
              {site.name}
              <br />
              {address.street}
              <br />
              {address.locality}, {address.city} – {address.postalCode}
            </p>
            <a className="mt-2 inline-block text-[17px]" href={contact.directionsUrl} target="_blank" rel="noopener">
              Get directions ›
            </a>
          </div>
          <div>
            <p className={label}>Phone</p>
            <a className={value} href={contact.phone ? `tel:${contact.phone}` : "#contact"}>
              {contact.phoneDisplay}
            </a>
          </div>
          <div>
            <p className={label}>Email</p>
            <a className={value} href={contact.email ? `mailto:${contact.email}` : "#contact"}>
              {contact.emailDisplay}
            </a>
          </div>
          <div>
            <p className={label}>Hours</p>
            <p className={`${value} text-ink`}>{contact.hours}</p>
          </div>
        </address>

        <div
          className="flex min-h-[360px] items-center justify-center overflow-hidden rounded-card bg-grey p-4 text-center text-[14px] text-ink-2"
          {...reveal(1)}
        >
          {contact.mapEmbedUrl ? (
            <iframe
              src={contact.mapEmbedUrl}
              title={`Map showing the office of ${site.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="-m-4 block h-[calc(100%+32px)] min-h-[360px] w-[calc(100%+32px)] border-0"
            />
          ) : (
            "[Map]"
          )}
        </div>
      </AutoGrid>
    </Section>
  );
}
