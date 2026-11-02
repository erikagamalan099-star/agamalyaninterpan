import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { contacts, nav } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="bg-muted pb-8 pt-11">
      <Container>
        <div className="grid gap-8 border-b pb-8 md:grid-cols-[1.6fr_0.7fr_0.7fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[230px] text-[9px] text-neutral-700">
              SEO текст для проживидения сайта в поисковиках содержащий ключевые слова, теги или другую информацию, которая
              может быть неинтересна пользователю, но поможет в поисковом продвижении сайта.
            </p>
          </div>
          <div className="grid content-start gap-2 text-[10px]">
            <h5 className="mb-2 text-xs">Меню</h5>
            {nav.map((item) => <a key={item} href="#">{item}</a>)}
          </div>
          <div className="grid content-start gap-2 text-[10px]">
            <h5 className="mb-2 text-xs">Связаться с нами</h5>
            <a href={`tel:${contacts.tel}`}><span className="text-primary">✆</span> {contacts.phone}</a>
            <a href={`mailto:${contacts.email}`}><span className="text-primary">✉</span> {contacts.email}</a>
            <small className="mt-4">Мы в социальных сетях:</small>
            <SocialLinks />
          </div>
        </div>
        <p className="mt-5 text-[8px] text-neutral-400">Создание сайта: Название студии. 2021 г.</p>
      </Container>
    </footer>
  );
}
