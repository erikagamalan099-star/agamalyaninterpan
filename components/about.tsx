import { Container } from "@/components/container";
import { FeatureIcon } from "@/components/feature-icon";
import { SectionTitle } from "@/components/section-title";
import { aboutItems } from "@/data/content";

export function About() {
  return (
    <section className="bg-muted py-12">
      <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div className="max-w-[290px] space-y-3.5 text-[11px]">
          <SectionTitle className="mb-5">О компании</SectionTitle>
          <p>
            Завод по производству огнестойких декоративных стеновых панелей «Интерпан» начал свою деятельность в 2003 году.
            Более десяти лет компания не стояла на месте: она развивалась, разрабатывала новые решения в области декора,
            предоставляя своим клиентам услуги высокого класса.
          </p>
          <p>
            Благодаря продуктивной и успешной работе на рынке огнестойких декоративных стеновых панелей компания сумела
            занять одну из лидирующих позиций.
          </p>
        </div>
        <div className="grid grid-cols-2 border-l border-t lg:grid-cols-4">
          {aboutItems.map((item) => (
            <div key={item} className="flex min-h-[140px] flex-col gap-5 border-b border-r p-5 text-[10px]">
              <FeatureIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
