"use client";

import type { FormEvent } from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactBand() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    alert("Спасибо! Мы свяжемся с вами");
  }

  return (
    <section id="contacts" className="bg-ink text-white">
      <Container className="flex flex-col items-center justify-between gap-10 py-10 lg:h-[230px] lg:flex-row lg:py-0">
        <div>
          <h3 className="mb-6 max-w-[350px] text-xl font-normal text-primary">
            У вас есть проект для нас или необходима консультация?
          </h3>
          <p className="max-w-[260px] text-xs">Наш специалист свяжется с вами и ответит на все вопросы.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid w-full gap-x-[60px] gap-y-8 sm:grid-cols-2 lg:w-[620px]">
          <Input name="name" placeholder="Ваше имя" required />
          <Input name="phone" type="tel" placeholder="Телефон" required />
          <Button type="submit" className="justify-self-center sm:col-start-2">Отправить</Button>
        </form>
      </Container>
    </section>
  );
}
