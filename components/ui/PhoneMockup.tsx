import Image from "next/image";
import { Icon } from "@/components/ui/icons";
import { reveal } from "@/lib/cn";

/** Phone frame (top half) showing the app's splash screen, or a real screenshot once provided. */
export function PhoneMockup({ appName, screenshot }: { appName: string; screenshot: string | null }) {
  return (
    <div
      className="mx-auto mt-[clamp(48px,6vw,72px)] h-[440px] w-[280px] rounded-t-[48px] bg-ink px-3 pt-3"
      {...reveal()}
    >
      <div className="relative flex h-full flex-col items-center overflow-hidden rounded-t-[38px] bg-white pt-3.5">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`${appName} app screenshot`}
            fill
            sizes="256px"
            className="object-cover object-top"
          />
        ) : (
          <>
            <div className="h-[26px] w-[92px] rounded-[20px] bg-black" aria-hidden="true" />
            <div className="mt-24 flex size-[84px] items-center justify-center rounded-[20px] bg-ink text-white">
              <Icon name="scales" size={44} />
            </div>
            <p className="mt-4 text-[22px] font-semibold">{appName}</p>
            <p className="mt-1.5 text-[12px] text-ink-2">[App screenshot]</p>
          </>
        )}
      </div>
    </div>
  );
}
