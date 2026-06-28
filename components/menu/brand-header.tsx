import Image from 'next/image'

export function BrandHeader() {
  return (
    <header className="flex items-end justify-between gap-6">
      <div className="flex items-center gap-5">
        <h1 className="font-heading text-5xl font-black uppercase leading-[0.85] tracking-tight text-menu-dark">
          Bistro
          <br />
          <span className="text-menu-brown">Burger</span>
        </h1>
        <div className="relative h-20 w-24 shrink-0">
          <Image
            src="/emblems/brand-burger.png"
            alt="Эмблема Bistro Burger"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="text-right">
        <p className="font-heading text-2xl font-black uppercase leading-none tracking-tight text-menu-dark">
          Меню
        </p>
        <p className="mt-2 font-heading text-sm font-bold uppercase tracking-[0.22em] text-menu-brown">
          вкусно · просто · рядом
        </p>
      </div>
    </header>
  )
}
