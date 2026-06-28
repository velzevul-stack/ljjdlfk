import Image from 'next/image'

export function BrandHeader() {
  return (
    <header className="flex items-center justify-between gap-6 border-b-2 border-menu-line pb-4">
      <div className="flex items-center gap-5">
        <div className="relative h-[4.5rem] w-[20rem] shrink-0">
          <Image
            src="/emblem.svg"
            alt="BISTRO ПЛЮС"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <span className="hidden h-12 w-px bg-menu-line sm:block" />
        <p className="font-heading text-lg font-bold tracking-wide text-menu-muted">
          вкусно. просто. рядом.
        </p>
      </div>
      <div className="text-right">
        <p className="font-heading text-2xl font-extrabold uppercase leading-none tracking-tight text-menu-dark">
          Меню
        </p>
        <p className="mt-1.5 font-heading text-sm font-bold uppercase tracking-[0.2em] text-menu-brown">
          Бургеры · Шаурма · Хот-доги
        </p>
      </div>
    </header>
  )
}
