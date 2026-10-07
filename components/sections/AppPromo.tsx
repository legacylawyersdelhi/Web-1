import { Icon } from "@/components/ui/icons";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Lede, Section } from "@/components/ui/Section";
import { StoreBadge } from "@/components/ui/StoreBadge";
import { app } from "@/content/site";
import { reveal } from "@/lib/cn";

export function AppPromo() {
  return (
    <Section id="app" tone="grey" className="overflow-hidden pb-0" containerClassName="text-center">
      <div
        className="mx-auto mb-4 flex size-[72px] items-center justify-center rounded-card bg-ink text-white"
        {...reveal()}
      >
        <Icon name="scales" size={38} />
      </div>
      <p className="text-eyebrow text-ink-2" {...reveal()}>
        {app.eyebrow}
      </p>
      <h2 id="app-title" className="mx-auto mt-1.5 max-w-[820px] text-app-title" {...reveal()}>
        {app.title}
      </h2>
      <Lede>{app.description}</Lede>
      <div className="mt-7 flex flex-wrap justify-center gap-x-3.5 gap-y-3" {...reveal()}>
        <StoreBadge platform="ios" appName={app.name} href={app.appStoreUrl} />
        <StoreBadge platform="android" appName={app.name} href={app.playStoreUrl} />
      </div>
      <PhoneMockup appName={app.name} screenshot={app.screenshot} />
    </Section>
  );
}
