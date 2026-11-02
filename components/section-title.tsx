export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-2xl font-normal tracking-wide ${className}`}>{children}</h2>;
}
