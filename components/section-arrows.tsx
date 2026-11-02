import { Button } from "@/components/ui/button";

export function SectionArrows({ onPrev, onNext }: { onPrev?: () => void; onNext?: () => void }) {
  return (
    <div className="flex gap-2.5">
      <Button size="icon" onClick={onPrev} aria-label="Назад">←</Button>
      <Button size="icon" onClick={onNext} aria-label="Вперёд">→</Button>
    </div>
  );
}
