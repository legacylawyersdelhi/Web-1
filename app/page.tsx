import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AppPromo } from "@/components/sections/AppPromo";
import { Cases } from "@/components/sections/Cases";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <PracticeAreas />
        <WhyUs />
        <Cases />
        <Partners />
        <Testimonials />
        <AppPromo />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
