/*
  All site wording and firm details in one place.

  Anything in [square brackets] is a placeholder to replace before launch.
  Fields set to `null` (phone, email, store links, map, photos…) are not published yet:
  the page shows its placeholder and they are left out of the search-engine structured data
  until a real value is filled in.
*/

export type IconName =
  | "scales"
  | "shield"
  | "briefcase"
  | "family"
  | "home"
  | "chat"
  | "receipt"
  | "bank"
  | "person"
  | "message"
  | "document"
  | "clock";

export const site = {
  name: "APRP & Partners LLP",
  shortName: "APRP & Partners",
  legalName: "APRP & Partners LLP",
  descriptor: "Advocates & Legal Consultants",
  url: "https://www.legacylawyers.in",
  locale: "en_IN",
  language: "en-IN",
  /** Used for the page <title> and search results. */
  title: "APRP & Partners LLP — Advocates & Legal Consultants in New Delhi",
  /** ~155 characters: shown under the title in search results. */
  description:
    "APRP & Partners LLP, Advocates & Legal Consultants in New Delhi. Civil, criminal, corporate, family, property, arbitration, consumer and banking law.",
  keywords: [
    "APRP & Partners LLP",
    "law firm New Delhi",
    "advocates in Delhi",
    "legal consultants Delhi",
    "civil litigation lawyer Delhi",
    "criminal lawyer Delhi",
    "corporate lawyer Delhi",
    "family lawyer Delhi",
    "property lawyer Delhi",
    "arbitration lawyer Delhi",
    "Legacy Lawyers app",
  ],
  foundingYear: null as number | null,
  /** Social profiles (LinkedIn etc.) — added to structured data as `sameAs`. */
  sameAs: [] as string[],
};

export const disclaimerText =
  "The Bar Council of India does not permit advertisement or solicitation by advocates. By accessing this website (https://www.legacylawyers.in/), you acknowledge and confirm that you are seeking information relating to APRP & Partners LLP, Advocates and Legal Consultants (hereinafter referred to as “APRP & Partners LLP”), of your own accord and that there has been no form of solicitation, advertisement, or inducement by APRP & Partners LLP, or its members. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertising. No material/information provided on this website should be construed as legal advice. APRP & Partners LLP shall not be liable for the consequences of any action taken by relying on the material/information provided on this website.";

export const footerNote =
  "The content of this website is for informational purposes only and does not constitute legal advice or solicitation, in accordance with the rules of the Bar Council of India.";

export const navItems = [
  { id: "practice", label: "Practice Areas" },
  { id: "why", label: "Why Us" },
  { id: "cases", label: "Cases" },
  { id: "partners", label: "Partners" },
  { id: "testimonials", label: "Testimonials" },
  { id: "app", label: "App" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  heading:
    "APRP & Partners LLP — Advocates, Counsel, Solicitors. Trusted Legal Solutions for a Changing India.",
  alt: "APRP & Partners LLP — Advocates, Counsel, Solicitors. Trusted Legal Solutions for a Changing India. The Supreme Court of India at sunset, with law books and the scales of justice in the foreground.",
  desktop: { src: "/images/hero-desktop.webp", width: 1774, height: 887 },
  mobile: { src: "/images/hero-mobile.webp", width: 941, height: 1672 },
};

export const practice = {
  title: "Practice areas.",
  lede: "Focused advice across the matters our clients bring to us most.",
  // TODO: confirm these match the firm's actual practice areas.
  areas: [
    { icon: "scales", title: "Civil Litigation", description: "Suits, injunctions, recovery and appeals before civil courts and the High Court." },
    { icon: "shield", title: "Criminal Law", description: "Bail, trial defence, quashing petitions and white-collar matters." },
    { icon: "briefcase", title: "Corporate & Commercial", description: "Contracts, company law, compliance and commercial disputes." },
    { icon: "family", title: "Family & Matrimonial", description: "Divorce, maintenance, custody and domestic matters, handled with discretion." },
    { icon: "home", title: "Property & Real Estate", description: "Title, partition, tenancy, RERA and property documentation." },
    { icon: "chat", title: "Arbitration & ADR", description: "Arbitral proceedings, mediation and enforcement of awards." },
    { icon: "receipt", title: "Consumer Protection", description: "Complaints and appeals before consumer commissions." },
    { icon: "bank", title: "Banking & Recovery", description: "Cheque bounce, DRT, SARFAESI and loan recovery matters." },
  ] satisfies { icon: IconName; title: string; description: string }[],
};

export const why = {
  title: "Why APRP & Partners.",
  lede: "The way we work, from the first consultation to the final order.",
  points: [
    { icon: "person", title: "A partner on every matter", description: "One accountable partner leads your case from start to finish." },
    { icon: "message", title: "Plain-language advice", description: "We explain your options and risks without jargon." },
    { icon: "document", title: "Fees agreed upfront", description: "A clear engagement letter before any work begins." },
    { icon: "clock", title: "Updates you can track", description: "Hearing dates and next steps, shared as they happen." },
  ] satisfies { icon: IconName; title: string; description: string }[],
};

export const cases = {
  title: "Cases, resolved.",
  lede: "A track record built one matter at a time.",
  // TODO: replace the bracketed figures with confirmed numbers.
  stats: [
    { value: "[000]+", label: "Matters resolved" },
    { value: "[00]+", label: "Years of combined practice" },
    { value: "[00]", label: "Courts & forums appeared before" },
    { value: "[000]+", label: "Clients advised" },
  ],
  fineprint: "Figures to be confirmed by the firm. Past results do not guarantee a similar outcome.",
};

export type Partner = {
  name: string;
  role: string;
  focus: string;
  qualifications: string;
  /** Path under /public, e.g. "/images/partners/name.jpg". Square, at least 240×240. */
  photo: string | null;
};

export const partners = {
  title: "Meet the partners.",
  lede: "The advocates who will work on your matter.",
  // TODO: replace with each partner's details and photo.
  people: [
    { name: "[Partner Name]", role: "Founding Partner", focus: "[Practice focus]", qualifications: "[Qualifications]", photo: null },
    { name: "[Partner Name]", role: "Managing Partner", focus: "[Practice focus]", qualifications: "[Qualifications]", photo: null },
    { name: "[Partner Name]", role: "Partner", focus: "[Practice focus]", qualifications: "[Qualifications]", photo: null },
    { name: "[Partner Name]", role: "Partner", focus: "[Practice focus]", qualifications: "[Qualifications]", photo: null },
  ] satisfies Partner[],
};

export const testimonials = {
  title: "In our clients’ words.",
  // TODO: publish only with each client's written consent.
  quotes: [
    { quote: "[Client testimonial — one or two sentences, published with the client’s written consent.]", name: "[Client name]", city: "[City]" },
    { quote: "[Client testimonial — one or two sentences, published with the client’s written consent.]", name: "[Client name]", city: "[City]" },
    { quote: "[Client testimonial — one or two sentences, published with the client’s written consent.]", name: "[Client name]", city: "[City]" },
  ],
};

export const app = {
  name: "Legacy Lawyers",
  eyebrow: "Legacy Lawyers app",
  title: "Your legal matters. In your pocket.",
  // TODO: one line on what the app does.
  description: "[One line on what the Legacy Lawyers app does for its users.]",
  // TODO: e.g. "https://apps.apple.com/in/app/legacy-lawyers/id0000000000"
  appStoreUrl: null as string | null,
  /** Numeric App Store id (enables Safari's Smart App Banner on iPhone). */
  appStoreId: null as string | null,
  // TODO: e.g. "https://play.google.com/store/apps/details?id=com.example.legacylawyers"
  playStoreUrl: null as string | null,
  /** Android package name, e.g. "com.example.legacylawyers". */
  androidPackage: null as string | null,
  /** Path under /public for a real app screenshot (portrait, ~9:19.5). */
  screenshot: null as string | null,
};

export const contact = {
  title: "Get in touch.",
  lede: "Visit our chambers or call to arrange a consultation.",
  address: {
    // TODO: real street address and PIN.
    street: "[Building, street]",
    locality: "[Area]",
    city: "New Delhi",
    region: "Delhi",
    postalCode: "[PIN]",
    country: "IN",
  },
  /** E.164 number, e.g. "+911100000000". */
  phone: null as string | null,
  phoneDisplay: "+91 [00000 00000]",
  email: null as string | null,
  emailDisplay: "[email]@legacylawyers.in",
  hours: "[Mon–Sat, 00:00–00:00]",
  /** schema.org opening hours, e.g. ["Mo-Sa 10:00-19:00"]. */
  openingHours: [] as string[],
  // TODO: the firm's Google Maps place link and embed URL.
  directionsUrl: "https://maps.google.com/",
  mapEmbedUrl: null as string | null,
  /** Optional coordinates for structured data. */
  geo: null as { latitude: number; longitude: number } | null,
};

/** True for values that are still placeholders ("[…]") or not filled in. */
export function isPlaceholder(value: string | null | undefined): boolean {
  return !value || /\[[^\]]*\]/.test(value);
}
