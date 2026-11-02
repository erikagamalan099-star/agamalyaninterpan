import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Perks } from "@/components/perks";
import { Scheme } from "@/components/scheme";
import { About } from "@/components/about";
import { Presentations } from "@/components/presentations";
import { Cases } from "@/components/cases";
import { News } from "@/components/news";
import { Clients } from "@/components/clients";
import { ContactBand } from "@/components/contact-band";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Perks />
        <Scheme />
        <About />
        <Presentations />
        <Cases />
        <News />
        <Clients />
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
