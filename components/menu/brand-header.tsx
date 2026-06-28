import Image from 'next/image'

export function BrandHeader() {
  return (
    <header className="flex flex-col items-start gap-1.5 px-1 pb-1 pt-1">
      <div className="relative h-[5.6rem] w-full">
        <Image
          src="/brand/bistro-burger-wordmark.svg"
          alt="Bistro Burger"
          fill
          priority
          className="object-contain object-left-top"
        />
      </div>
      <p className="pl-0.5 font-heading text-[0.95rem] font-semibold lowercase italic tracking-widest text-menu-brown-ink">
        вкусно. просто. рядом.
      </p>
    </header>
  )
}
