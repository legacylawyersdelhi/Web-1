import { getImageProps } from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { hero } from "@/content/site";

/*
  Full-bleed artwork that swaps by screen size: portrait on phones (≤767px), landscape on tablets and up.
  The firm name and tagline are part of the artwork, so the <h1> is visually hidden but read by
  screen readers and search engines, and the alt text carries the same words.
*/
export function Hero() {
  const common = { alt: hero.alt, sizes: "(min-width: 1920px) 1920px, 100vw" };
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({ ...common, ...hero.mobile });
  const { props: desktop } = getImageProps({
    ...common,
    ...hero.desktop,
    loading: "eager",
    fetchPriority: "high",
  });

  return (
    <section aria-labelledby="hero-title" className="bg-hero">
      <h1 id="hero-title" className="sr-only">
        {hero.heading}
      </h1>
      <picture className="mx-auto block max-w-[1920px]">
        <source
          media="(max-width: 767px)"
          srcSet={mobileSrcSet}
          width={hero.mobile.width}
          height={hero.mobile.height}
        />
        <img {...desktop} alt={hero.alt} className="block h-auto w-full animate-hero-in" />
      </picture>
      <div className="flex flex-wrap justify-center gap-x-3.5 gap-y-3 px-4 pt-7 pb-9">
        <ButtonLink href="#contact">Get in touch</ButtonLink>
        <ButtonLink href="#practice" variant="outlineLight">
          Practice areas
        </ButtonLink>
      </div>
    </section>
  );
}
