const socials = [
  ["Facebook", "bg-blue-600"],
  ["VK", "bg-blue-500"],
  ["YouTube", "bg-red-600"],
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {socials.map(([name, color]) => (
        <a key={name} href="#" aria-label={name} className={`block h-3.5 w-3.5 rounded-full ${color}`} />
      ))}
    </div>
  );
}
