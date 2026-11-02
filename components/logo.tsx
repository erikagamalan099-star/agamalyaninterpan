export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-10 w-10 rounded-full bg-ink" />
      <div>
        <strong className="block text-[22px] font-extrabold leading-none">
          <i className="text-primary">ИНТЕР</i>ПАН
        </strong>
        <small className="mt-0.5 block w-24 text-[6px] leading-tight">завод по производству огнестойких панелей</small>
      </div>
    </div>
  );
}
