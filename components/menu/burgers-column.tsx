import Image from 'next/image'
import { Beef } from 'lucide-react'
import { burgers } from '@/lib/menu-data'
import { SectionTitle, PriceBadge, HitBadge, Divider, FoodPhoto } from './parts'

function BrandHeader() {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <h1 className="font-heading text-5xl font-black leading-[0.9] tracking-tight text-menu-text">
          BISTRO
          <br />
          <span className="text-menu-brown">PLUS</span>
        </h1>
        <p className="mt-2 font-heading text-sm font-semibold tracking-wide text-menu-muted">
          вкусно. просто. рядом.
        </p>
      </div>
      <div className="relative h-20 w-28 shrink-0">
        <Image
          src="/emblem.svg"
          alt="Эмблема BISTRO PLUS"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}

export function BurgersColumn() {
  return (
    <div className="flex h-full flex-col gap-4">
      <BrandHeader />

      <SectionTitle icon={Beef}>Бургеры</SectionTitle>

      <div className="flex flex-1 flex-col">
        {burgers.map((b, i) => (
          <div key={b.name} className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-3">
              <FoodPhoto
                src={b.image}
                alt={b.name}
                className="h-[5.4rem] w-[6.4rem]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className="font-heading text-lg font-extrabold leading-tight text-menu-text">
                      {b.name}
                    </h3>
                    {b.hit ? <HitBadge /> : null}
                  </div>
                  <PriceBadge>{b.price}</PriceBadge>
                </div>
                <p className="mt-1 text-[0.72rem] leading-snug text-menu-muted">
                  {b.ingredients}
                </p>
                <p className="mt-1 font-heading text-[0.7rem] font-bold text-menu-brown">
                  {b.weight}
                </p>
              </div>
            </div>
            {i < burgers.length - 1 ? (
              <div className="pt-2">
                <Divider />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
