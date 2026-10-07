import { Icon } from "@/components/ui/icons";
import { site } from "@/content/site";
import { DesktopNavLinks } from "./DesktopNavLinks";
import { MobileMenu } from "./MobileMenu";

/** Sticky, translucent global nav. Turns solid while the mobile menu is open. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-nav backdrop-blur-[20px] backdrop-saturate-[180%] transition-[background-color] duration-400 ease-apple has-[[data-menu-open=true]]:bg-nav-solid">
      <nav aria-label="Primary" className="mx-auto flex h-nav max-w-[1024px] items-center justify-between gap-4 px-4">
        <a
          href="#top"
          className="flex items-center gap-2 text-nav-brand whitespace-nowrap text-on-dark hover:no-underline"
        >
          <Icon name="scales" size={18} />
          {site.name}
        </a>
        <DesktopNavLinks />
        <MobileMenu />
      </nav>
    </header>
  );
}
