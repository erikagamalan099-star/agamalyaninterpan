import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { contacts, nav } from "@/data/content";

export function SiteHeader() {
  return (
    <header>
      <Container>
        <div className="hidden h-[42px] items-center gap-7 border-b pl-[37%] text-[11px] md:flex">
          <a href={`tel:${contacts.tel}`}><span className="text-primary">✆</span> {contacts.phone}</a>
          <a href="#contacts" className="uppercase text-primary">Оставить заявку</a>
          <SocialLinks className="ml-auto" />
        </div>
        <div className="flex h-[84px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-9 text-[11px] uppercase md:flex">
            {nav.map((item) => <a key={item} href="#">{item}</a>)}
            <span className="-mr-3.5 h-[18px] w-px bg-neutral-400" />
            <svg width="14" height="14" viewBox="0 0 14 14" className="fill-none stroke-current">
              <circle cx="6" cy="6" r="4.5" />
              <path d="M9.5 9.5L13 13" />
            </svg>
          </nav>
        </div>
      </Container>
    </header>
  );
}
