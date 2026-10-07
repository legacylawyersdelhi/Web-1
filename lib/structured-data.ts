import { app, contact, isPlaceholder, partners, practice, site } from "@/content/site";

/*
  schema.org structured data (JSON-LD) for search engines.
  Placeholder values ("[…]" or null) are left out, so nothing unconfirmed is published as fact.
  Testimonials are deliberately NOT marked up as reviews: Google ignores self-published reviews
  for businesses, and they can be read as solicitation under Bar Council rules.
*/

const real = (value: string | null | undefined) => (isPlaceholder(value) ? undefined : value ?? undefined);

/** Drops undefined values and empty arrays/objects so the output stays clean. */
function compact<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(compact).filter((v) => v !== undefined) as T;
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      const c = compact(v);
      const empty =
        c === undefined ||
        (Array.isArray(c) && c.length === 0) ||
        (c && typeof c === "object" && !Array.isArray(c) && Object.keys(c).filter((key) => key !== "@type").length === 0);
      if (!empty) out[k] = c;
    }
    return out as T;
  }
  return value;
}

export function buildStructuredData() {
  const orgId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const { address } = contact;

  const legalService = {
    "@type": "LegalService",
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    logo: `${site.url}/icon-512.png`,
    image: `${site.url}/opengraph-image.jpg`,
    telephone: real(contact.phone),
    email: real(contact.email),
    foundingDate: site.foundingYear ? String(site.foundingYear) : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: real(address.street),
      addressLocality: real(address.locality) ? `${address.locality}, ${address.city}` : address.city,
      addressRegion: address.region,
      postalCode: real(address.postalCode),
      addressCountry: address.country,
    },
    geo: contact.geo ? { "@type": "GeoCoordinates", ...contact.geo } : undefined,
    openingHours: contact.openingHours,
    hasMap: real(contact.mapEmbedUrl) ? contact.directionsUrl : undefined,
    areaServed: [
      { "@type": "City", name: "New Delhi" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: practice.areas.map((a) => a.title),
    member: partners.people
      .filter((p) => !isPlaceholder(p.name))
      .map((p) => ({
        "@type": "Person",
        name: p.name,
        jobTitle: p.role,
        image: p.photo ? `${site.url}${p.photo}` : undefined,
      })),
    sameAs: site.sameAs,
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    inLanguage: site.language,
    publisher: { "@id": orgId },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: site.title,
    description: site.description,
    inLanguage: site.language,
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    primaryImageOfPage: { "@type": "ImageObject", url: `${site.url}/opengraph-image.jpg` },
  };

  const graph: Record<string, unknown>[] = [legalService, website, webpage];

  // The app is only described once at least one store link is live.
  const storeLinks = [real(app.appStoreUrl), real(app.playStoreUrl)].filter(Boolean) as string[];
  if (storeLinks.length) {
    graph.push({
      "@type": "MobileApplication",
      name: app.name,
      operatingSystem: [app.appStoreUrl && "iOS", app.playStoreUrl && "Android"].filter(Boolean).join(", "),
      applicationCategory: "BusinessApplication",
      description: real(app.description),
      downloadUrl: storeLinks,
      publisher: { "@id": orgId },
    });
  }

  return compact({ "@context": "https://schema.org", "@graph": graph });
}

/** Serialises JSON-LD safely for a <script> tag (escapes "<" to prevent HTML injection). */
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
