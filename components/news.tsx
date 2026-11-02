import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import { news, type NewsItem } from "@/data/content";

function NewsCard({ item, big = false }: { item: NewsItem; big?: boolean }) {
  return (
    <article className={`border ${big ? "md:row-span-2" : ""}`}>
      {/* вместо фото из макета */}
      <div className={big ? "h-[290px] bg-gradient-to-b from-sky-300 via-sky-600 to-stone-500" : "h-[110px] bg-gradient-to-br from-slate-300 to-amber-100"} />
      <div className="px-5 py-3.5 text-[10px]">
        <h4>{item.title}</h4>
        {item.text && <p className="mt-1.5 max-w-[260px] text-[9px] text-neutral-600">{item.text}</p>}
        <time className={`mt-3.5 block text-[8px] text-neutral-400 ${big ? "text-right" : ""}`}>{item.date}</time>
      </div>
    </article>
  );
}

export function News() {
  const [main, ...rest] = news;

  return (
    <section>
      <Container className="pb-12">
        <SectionTitle className="mb-6">Новости компании</SectionTitle>
        <div className="grid gap-3.5 md:grid-cols-[2.08fr_1fr_1fr]">
          <NewsCard item={main} big />
          {rest.map((item) => <NewsCard key={item.title} item={item} />)}
        </div>
      </Container>
    </section>
  );
}
