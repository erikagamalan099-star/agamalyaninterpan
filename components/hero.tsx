"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { SectionArrows } from "@/components/section-arrows";
import { promos, slides } from "@/data/content";

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const go = (step: number) => setIndex((index + step + slides.length) % slides.length);

  return (
    <section>
      <Container className="grid gap-5 pt-2.5 lg:h-[450px] lg:grid-cols-[3fr_1fr]">
        <div className="relative flex min-h-[320px] flex-col justify-center bg-gradient-to-r from-neutral-300 via-neutral-100 to-slate-300 px-10">
          <h2 className="max-w-[260px] text-[34px] font-medium leading-tight">{slide.title}</h2>
          <p className="mt-5 max-w-[290px] text-xs">{slide.text}</p>
          <div className="absolute bottom-9 right-14">
            <SectionArrows onPrev={() => go(-1)} onNext={() => go(1)} />
          </div>
        </div>
        <div className="grid gap-5">
          {promos.map((promo) => (
            <a
              key={promo.tag}
              href="#"
              className={`relative flex min-h-[200px] flex-col justify-end gap-1.5 overflow-hidden p-5 text-white ${promo.dark ? "bg-[#2b3239]" : "bg-primary"}`}
            >
              <span className="absolute -right-10 -top-8 h-[200px] w-[200px] rounded-full bg-white/10" />
              <span className="absolute right-6 top-3 text-8xl">{promo.icon}</span>
              <em className="self-start rounded-full bg-white/25 px-1.5 py-0.5 text-[8px] not-italic uppercase">{promo.tag}</em>
              <span className="relative">{promo.title}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
