import { Container } from "@/components/container";
import { presentations } from "@/data/content";

export function Presentations() {
  return (
    <section className="bg-gradient-to-r from-ink from-50% to-primary to-50% text-white">
      <Container className="grid h-[110px] grid-cols-2 items-center">
        <h3 className="max-w-[300px] text-[19px]">Посмотрите презентации о наших продуктах</h3>
        <div className="flex gap-12 pl-8">
          {presentations.map((name) => (
            <a key={name} href="#" className="flex max-w-[110px] items-center gap-2.5 text-[11px]">
              <span className="rounded-sm bg-white px-1 py-2 text-[8px] font-bold text-primary">PPT</span>
              {name}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
