import Image from 'next/image'
import { Plus, Heart } from 'lucide-react'
import { combos } from '@/lib/menu-data'

function ComboImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-12 w-14 shrink-0">
      <Image src={src || '/placeholder.svg'} alt={alt} fill className="object-contain" />
    </div>
  )
}

export function ComboBar() {
  return (
    <div className="flex h-full items-stretch gap-4 rounded-2xl bg-menu-dark px-5 py-3 text-menu-oncream">
      {/* Left label */}
      <div className="flex w-40 shrink-0 flex-col justify-center">
        <span className="font-heading text-3xl font-black leading-none tracking-tight text-menu-accent">
          КОМБО
        </span>
        <span className="mt-1.5 text-[0.68rem] leading-snug text-menu-oncream/70">
          Сэкономь на заказе — выбирай готовое комбо!
        </span>
      </div>

      {/* Combo cards */}
      <div className="grid flex-1 grid-cols-4 gap-3">
        {combos.map((c) => (
          <div
            key={c.name}
            className="flex flex-col justify-between rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10"
          >
            <div className="flex items-center justify-center gap-1">
              <ComboImage src={c.images[0]} alt="" />
              <Plus className="size-4 shrink-0 text-menu-accent" strokeWidth={3} aria-hidden />
              <ComboImage src={c.images[1]} alt="" />
            </div>
            <div className="mt-1">
              <h3 className="font-heading text-[0.82rem] font-extrabold leading-tight">
                {c.name}
              </h3>
              <p className="text-[0.6rem] leading-snug text-menu-oncream/60">
                {c.items}
              </p>
              <div className="mt-1 flex items-end justify-between gap-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[0.62rem] text-menu-oncream/45 line-through">
                    {c.oldPrice}
                  </span>
                  <span className="font-heading text-lg font-black leading-none text-menu-accent">
                    {c.newPrice}
                    <span className="ml-0.5 text-[0.55rem] font-bold text-menu-oncream/70">
                      BYN
                    </span>
                  </span>
                </div>
                <span className="rounded bg-menu-accent/15 px-1.5 py-0.5 text-[0.55rem] font-bold text-menu-accent">
                  {c.save}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thank-you block */}
      <div className="flex w-44 shrink-0 flex-col items-center justify-center rounded-xl bg-menu-brown px-3 text-center">
        <Heart className="size-5 text-menu-accent" fill="currentColor" aria-hidden />
        <p className="mt-1 font-script text-2xl font-bold leading-tight text-menu-oncream">
          Спасибо, что вы с нами!
        </p>
      </div>
    </div>
  )
}
