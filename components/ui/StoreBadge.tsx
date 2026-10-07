import { AppleLogo, PlayLogo } from "@/components/ui/icons";

const stores = {
  ios: { label: "App Store", kicker: "Download on the", Logo: AppleLogo },
  android: { label: "Google Play", kicker: "GET IT ON", Logo: PlayLogo },
};

/** Black store button. Before launch, swap for the official App Store / Google Play badges. */
export function StoreBadge({
  platform,
  appName,
  href,
}: {
  platform: keyof typeof stores;
  appName: string;
  href: string | null;
}) {
  const { label, kicker, Logo } = stores[platform];
  const external = Boolean(href);
  return (
    <a
      href={href ?? "#app"}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      aria-label={platform === "ios" ? `Download ${appName} on the App Store` : `Get ${appName} on Google Play`}
      className="inline-flex min-h-[52px] items-center gap-2.5 rounded-store bg-black pr-[22px] pl-[18px] text-left text-[19px] leading-[1.1] font-semibold text-white transition-[background-color,scale] duration-200 ease-apple hover:bg-store-hover hover:no-underline active:scale-[0.97]"
    >
      <Logo />
      <span className="flex flex-col">
        <small className="text-[11px] font-normal">{kicker}</small>
        {label}
      </span>
    </a>
  );
}
