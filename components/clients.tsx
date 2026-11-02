import { Container } from "@/components/container";
import { SectionArrows } from "@/components/section-arrows";
import { SectionTitle } from "@/components/section-title";
import { clients } from "@/data/content";

export function Clients() {
  return (
    <section>
      <Container className="pb-14">
        <div className="flex items-center justify-between">
          <SectionTitle>Нам доверяют</SectionTitle>
          <SectionArrows />
        </div>
        <div className="mt-6 grid grid-cols-2 border sm:grid-cols-5">
          {clients.map(([name, color]) => (
            <div key={name} style={{ color }} className="grid h-[100px] place-items-center border-r text-xl font-extrabold">
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
