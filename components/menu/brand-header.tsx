import Image from 'next/image'

export function BrandHeader() {
  return (
    <header className="flex items-center justify-between gap-6 rounded-[1.5rem] border border-menu-line bg-menu-panel/55 px-8 py-4">
      <div className="flex items-center gap-6">
        <div className="relative h-20 w-64 shrink-0">
          <Image
            src="/brand/logo.svg"
            alt="Bistro Плюс"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <div className="relative h-20 w-24 shrink-0">
          <Image
            src="/emblems/brand-burger.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
      </div>

      <div className="text-right">
        <p className="font-heading text-3xl font-black uppercase leading-none tracking-tight text-menu-dark">
          Меню
        </p>
        <p className="mt-2 font-heading text-sm font-bold uppercase tracking-[0.22em] text-menu-brown-ink">
          вкусно · просто · рядом
        </p>
      </div>
    </header>
  )
}
