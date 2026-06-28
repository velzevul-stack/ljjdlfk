import Image from 'next/image'

export function BrandHeader() {
  return (
    <header className="flex items-end gap-7 px-2 pt-1">
      <div className="shrink-0">
        <h1 className="font-heading font-black uppercase leading-[0.86] tracking-tight text-menu-dark">
          <span className="block text-[3.4rem]">Bistro</span>
          <span className="block text-[3.4rem]">Плюс</span>
        </h1>
        <p className="mt-2 text-lg font-medium lowercase tracking-wide text-menu-brown-ink">
          вкусно. просто. рядом.
        </p>
      </div>

      <div className="relative mb-1 h-24 w-32 shrink-0">
        <Image
          src="/emblems/brand-burger.png"
          alt=""
          fill
          className="object-contain object-left"
          aria-hidden
          priority
        />
      </div>
    </header>
  )
}
