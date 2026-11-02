import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { hotspots, products } from "@/data/content";

export function Scheme() {
  return (
    <section>
      <Container>
        <Tabs defaultValue="scheme" className="grid gap-5 pb-12 pt-8 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionTitle className="mb-6 max-w-[340px]">Интерпан — комплексные решения для вашего бизнеса</SectionTitle>
            <TabsList>
              <TabsTrigger value="scheme">На схеме</TabsTrigger>
              <TabsTrigger value="list">Списком</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="scheme" className="relative aspect-[560/420]">
            {/* простая схема вместо изометрии из макета */}
            <svg viewBox="0 0 560 420" strokeWidth="1.2" className="h-full w-full fill-none stroke-neutral-800">
              <path d="M30 300 L240 400 L540 250 L330 150 Z" />
              <path d="M30 300 V200 L330 50 V150" />
              <path d="M330 50 L540 150 V250" />
            </svg>
            {hotspots.map(([x, y]) => (
              <Button
                key={`${x}-${y}`}
                size="icon"
                className="absolute -ml-3.5 -mt-3.5 text-lg"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                +
              </Button>
            ))}
          </TabsContent>
          <TabsContent value="list" className="grid content-start gap-3 text-xs">
            {products.map((product) => <p key={product}>{product}</p>)}
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
}
