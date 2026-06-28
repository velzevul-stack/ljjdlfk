import Image from 'next/image'

export function BrandHeader() {
  return (
    <header className="px-1 pt-1">
      <div className="relative h-[5.4rem] w-full">
        <Image
          src="/brand/bistro-burger-wordmark.svg"
          alt="Bistro Burger"
          fill
          priority
          className="object-contain object-left"
        />
      </div>
      <p className="mt-2 pl-1 text-base font-medium lowercase tracking-wide text-menu-brown-ink">
        вкусно. просто. рядом.
      </p>
    </header>
  )
}
