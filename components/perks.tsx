import { Container } from "@/components/container";
import { FeatureIcon } from "@/components/feature-icon";
import { perks } from "@/data/content";

export function Perks() {
  return (
    <section>
      <Container className="grid gap-5 py-9 text-[10px] sm:grid-cols-2 lg:grid-cols-4">
        {perks.map(([title, text]) => (
          <div key={title} className="flex items-start gap-3">
            <FeatureIcon />
            <p><b className="mb-1 block">{title}</b>{text}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
