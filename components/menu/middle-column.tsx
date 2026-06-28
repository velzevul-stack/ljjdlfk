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
            <div className="flex items-center gap-4">
              <FoodPhoto
                src={s.image}
                alt={s.name}
                className="h-[4.8rem] w-[6rem]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading text-xl font-black leading-tight text-menu-text">
                    {s.name}
                  </h3>
                  {s.hit ? <HitBadge /> : null}
                  {s.name === 'Острая' ? (
                    <Flame
                      className="size-5 text-red-600"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  ) : null}
                </div>
                <p className="mt-1.5 text-sm leading-snug text-menu-muted">
                  {s.ingredients}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <SizePrice price={s.s} />
                <SizePrice price={s.m} />
                <SizePrice price={s.l} />
              </div>
            </div>
            {i < shawarmas.length - 1 ? (
              <div className="py-2">
                <Divider />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  )
}

function HotDishesSection() {
  return (
    <Section emblem="/emblems/hot-dishes.png" title="Горячие блюда">
      <div className="grid grid-cols-2 gap-6">
        {hotDishes.map((d) => (
          <div key={d.name} className="flex flex-col">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-heading text-lg font-black leading-tight text-menu-text">
                {d.name}
              </h3>
              <PriceBadge size="sm">{d.price}</PriceBadge>
            </div>
            <FoodPhoto
              src={d.image}
              alt={d.name}
              className="my-2 h-[5rem] w-full"
            />
            <p className="text-sm leading-snug text-menu-muted">
              {d.ingredients}
            </p>
            <p className="mt-1.5 font-heading text-xs font-bold uppercase tracking-wide text-menu-brown">
              {d.weight}
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
            <div className="flex items-center gap-4">
              <FoodPhoto
                src={s.image}
                alt={s.name}
                className="h-[3.6rem] w-[4.6rem]"
              />
              <h3 className="flex-1 font-heading text-lg font-black text-menu-text">
                {s.name}
              </h3>
              <div className="grid w-[21rem] grid-cols-3 text-center font-heading text-base font-black text-menu-brown-ink">
                {s.sizes.map((size, idx) => (
                  <span
                    key={idx}
                    className={size === '—' ? 'text-menu-line' : ''}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            {i < snacks.length - 1 ? (
              <div className="py-2">
                <Divider />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  )
}

export function MiddleColumn() {
  return (
    <div className="flex h-full flex-col gap-3">
      <ShawarmaSection />
      <HotDishesSection />
      <SnacksSection />
    </div>
  )
}
