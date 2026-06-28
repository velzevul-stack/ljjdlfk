import Image from 'next/image'

export function BrandHeader() {
  return (
    <header className="flex items-start justify-between gap-4 px-1">
      <div className="shrink-0">
        <h1 className="font-heading font-black uppercase leading-[0.82] tracking-tight text-menu-dark">
          <span className="block text-[3.9rem]">Bistro</span>
          <span className="block text-[3.9rem]">Плюс</span>
        </h1>
        <p className="mt-2.5 text-base font-medium lowercase tracking-wide text-menu-brown-ink">
          вкусно. просто. рядом.
        </p>
      </div>

      <div className="relative mt-1 h-[5.5rem] w-[7rem] shrink-0">
        <Image
          src="/emblems/brand-burger.png"
          alt=""
          fill
          className="object-contain object-top"
          aria-hidden
          priority
        />
      </div>
    </header>
  )
}
