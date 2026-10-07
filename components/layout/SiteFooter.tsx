import { ReopenDisclaimerButton } from "@/components/disclaimer/ReopenDisclaimerButton";
import { footerNote, site } from "@/content/site";

const links = [
  { href: "#practice", label: "Practice Areas" },
  { href: "#partners", label: "Partners" },
  { href: "#app", label: "App" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-grey px-4 pt-6 pb-10 text-[12px] leading-[1.5] text-ink-2">
      <div className="mx-auto max-w-[1024px]">
        <p className="border-b border-line pb-4">{footerNote}</p>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 pt-4">
          <span>
            Copyright © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-footer-link">
                {link.label}
              </a>
            ))}
            <ReopenDisclaimerButton />
          </nav>
        </div>
      </div>
    </footer>
  );
}
