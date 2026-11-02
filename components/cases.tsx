import { Container } from "@/components/container";
import { SectionArrows } from "@/components/section-arrows";
import { SectionTitle } from "@/components/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { clients, products } from "@/data/content";

export function Cases() {
  return (
    <section>
      <Container className="py-14">
        <div className="flex items-center justify-between">
          <SectionTitle>Кейсы Интерпан</SectionTitle>
          <SectionArrows />
        </div>
        <Tabs defaultValue="products" className="mt-4 grid gap-5 md:grid-cols-2">
          <div>
            <TabsList className="mb-5">
              <TabsTrigger value="products">Продукция</TabsTrigger>
              <TabsTrigger value="clients">Клиенты</TabsTrigger>
            </TabsList>
            <TabsContent value="products" className="grid gap-3 text-xs">
              {products.map((product) => <p key={product}>{product}</p>)}
            </TabsContent>
            <TabsContent value="clients" className="grid gap-3 text-xs">
              {clients.map(([name]) => <p key={name}>{name}</p>)}
            </TabsContent>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[0, 1, 2, 3].map((i) => <div key={i} className="img-ph" />)}
          </div>
        </Tabs>
      </Container>
    </section>
  );
}
