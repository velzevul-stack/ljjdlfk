import { Flame } from 'lucide-react'
import { shawarmas, snacks, hotDishes } from '@/lib/menu-data'
import {
  Section,
  PriceBadge,
  HitBadge,
  SizePrice,
  SizeDots,
  Divider,
  FoodPhoto,
} from './parts'

function ShawarmaSection() {
  return (
    <Section
      emblem="/emblems/shawarma.png"
      title="Шаурма"
      right={<SizeDots />}
      className="flex-1"
    >
      <div className="flex flex-1 flex-col">
        {shawarmas.map((s, i) => (
          <div key={s.name} className="flex flex-1 flex-col justify-center">
            <div className="flex items-stretch gap-3">
              {/* Large photo flush-left */}
              <FoodPhoto
                src={s.image}
                alt={s.name}
                className="h-[8rem] w-[9.2rem] self-center"
              />
              {/* Text + prices stacked below name */}
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <div className="flex flex-wrap items-center gap-1.5">
                  <h3 className="font-heading text-[1.1rem] font-black leading-tight text-menu-text">
                    {s.name}
                  </h3>
                  {s.hit && <HitBadge />}
                  {s.name === 'Острая' && (
                    <Flame className="size-4 text-red-600" strokeWidth={2.5} aria-hidden />
                  )}
                </div>
                <p className="mt-1 text-[0.75rem] leading-snug text-menu-muted">
                  {s.ingredients}
                </p>
                {/* S/M/L price chips below description */}
                <div className="mt-2 flex items-center gap-2">
                  <SizePrice price={s.s} />
                  <SizePrice price={s.m} />
                  <SizePrice price={s.l} />
                </div>
              </div>
            </div>
            {i < shawarmas.length - 1 && (
              <div className="py-2">
                <Divider />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export function HotDishesSection({ className }: { className?: string }) {
  return (
    <Section
      emblem="/emblems/hot-dishes.png"
      title="Горячие блюда"
      className={className}
    >
      <div className="grid grid-cols-2 gap-x-5 gap-y-2">
        {hotDishes.map((d) => (
          <div key={d.name} className="flex flex-col">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-heading text-[1rem] font-black leading-tight text-menu-text">
                {d.name}
              </h3>
              <PriceBadge size="sm">{d.price}</PriceBadge>
            </div>
            <FoodPhoto
              src={d.image}
              alt={d.name}
              className="my-1.5 h-[5rem] w-full"
            />
            <p className="text-[0.73rem] leading-snug text-menu-muted">
              {d.ingredients}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function SnacksSection() {
  return (
    <Section emblem="/emblems/snacks.png" title="Закуски" right={<SizeDots />}>
      <div className="flex flex-col">
        {snacks.map((s, i) => (
          <div key={s.name}>
            <div className="flex items-center gap-3">
              <FoodPhoto
                src={s.image}
                alt={s.name}
                className="h-[4rem] w-[5rem]"
              />
              <h3 className="flex-1 font-heading text-[1rem] font-black text-menu-text">
                {s.name}
              </h3>
              <div className="flex gap-2">
                {s.sizes.map((sz, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      'w-[3.2rem] text-center font-heading text-[0.9rem] font-black text-menu-brown',
                      sz === '—' && 'opacity-30',
                    )}
                  >
                    {sz}
                  </span>
                ))}
              </div>
            </div>
            {i < snacks.length - 1 && (
              <div className="py-1.5">
                <Divider />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export function MiddleColumn() {
  return (
    <div className="flex h-full flex-col gap-3">
      <ShawarmaSection />
      <SnacksSection />
    </div>
  )
}
