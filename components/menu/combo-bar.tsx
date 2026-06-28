import Image from 'next/image'
import { Heart } from 'lucide-react'
import { combos } from '@/lib/menu-data'
import { cn } from '@/lib/utils'

export function ComboBar() {
  return (
    <div className="flex h-full flex-col gap-4 rounded-3xl bg-menu-dark px-6 py-5 text-menu-oncream">
      {/* Header row */}
      <div className="flex items-center gap-4">
        <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
          <Image
            src="/emblems/combo.png"
            alt=""
            width={56}
            height={56}
            className="size-full object-contain"
            aria-hidden
          />
        </span>
        <div>
          <h2 className="font-heading text-4xl font-black leading-none tracking-tight text-menu-accent">
            КОМБО
          </h2>
          <p className="mt-1.5 text-sm leading-snug text-menu-oncream/70">
            Сэкономь на заказе — выбирай готовое комбо!
          </p>
        </div>
        <div className="ml-auto flex items-center gap-3 rounded-2xl bg-menu-brown px-5 py-3">
          <Heart
            className="size-6 shrink-0 text-menu-accent"
            fill="currentColor"
            aria-hidden
          />
          <p className="font-script text-2xl font-bold leading-tight text-menu-oncream">
            Спасибо,
            <br />
            что вы с нами!
          </p>
        </div>
      </div>

      {/* Combo cards */}
      <div className="grid flex-1 grid-cols-5 gap-3">
        {combos.map((c) => (
          <div
            key={c.name}
            className={cn(
              'flex flex-col rounded-xl px-3.5 py-2.5 ring-1',
              c.featured
                ? 'bg-menu-accent/10 ring-menu-accent/50'
                : 'bg-white/5 ring-white/10',
            )}
          >
            <h3 className="font-heading text-sm font-black leading-tight text-menu-oncream">
              {c.name}
            </h3>
            <p className="mt-1 flex-1 text-[0.66rem] leading-snug text-menu-oncream/55">
              {c.items}
            </p>
            <div className="mt-2 flex items-end justify-between gap-1.5">
              <span className="font-heading text-xl font-black leading-none text-menu-accent">
                {c.price}
                <span className="ml-0.5 text-[0.55rem] font-bold text-menu-oncream/70">
                  BYN
                </span>
              </span>
              <span className="rounded-md bg-menu-accent/15 px-1.5 py-0.5 text-[0.56rem] font-bold leading-none text-menu-accent">
                {c.save}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
