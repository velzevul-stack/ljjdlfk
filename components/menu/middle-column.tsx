import { Soup, UtensilsCrossed, Drumstick, Flame } from 'lucide-react'
import { shawarmas, hotDishes, snacks } from '@/lib/menu-data'
import {
  SectionTitle,
  PriceBadge,
  HitBadge,
  SizeDot,
  Divider,
  FoodPhoto,
} from './parts'

function ShawarmaSection() {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle
        icon={UtensilsCrossed}
        right={
          <div className="flex items-center gap-2">
            <SizeDot label="M" />
            <SizeDot label="L" />
          </div>
        }
      >
        Шаурма
      </SectionTitle>

      <div className="flex flex-col gap-2.5">
        {shawarmas.map((s, i) => (
          <div key={s.name}>
            <div className="flex items-center gap-3">
              <FoodPhoto
                src={s.image}
                alt={s.name}
                className="h-[4.6rem] w-[6rem]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <h3 className="font-heading text-lg font-extrabold leading-tight text-menu-text">
                    {s.name}
                  </h3>
                  {s.hit ? <HitBadge /> : null}
                  {s.name === 'Острая' ? (
                    <Flame
                      className="size-4 text-menu-brown"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  ) : null}
                </div>
                <p className="mt-1 text-[0.72rem] leading-snug text-menu-muted">
                  {s.ingredients}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <PriceBadge>{s.m}</PriceBadge>
                <PriceBadge>{s.l}</PriceBadge>
              </div>
            </div>
            {i < shawarmas.length - 1 ? (
              <div className="pt-2.5">
                <Divider />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function HotDishesSection() {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle icon={Soup}>Горячие блюда</SectionTitle>
      <div className="grid grid-cols-2 gap-4">
        {hotDishes.map((d) => (
          <div key={d.name} className="flex flex-col">
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <h3 className="font-heading text-base font-extrabold leading-tight text-menu-text">
                  {d.name}
                </h3>
              </div>
              <PriceBadge>{d.price}</PriceBadge>
            </div>
            <FoodPhoto
              src={d.image}
              alt={d.name}
              className="my-1.5 h-[5.2rem] w-full"
            />
            <p className="text-[0.7rem] leading-snug text-menu-muted">
              {d.ingredients}
            </p>
            <p className="mt-1 font-heading text-[0.7rem] font-bold text-menu-brown">
              {d.weight}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SnacksSection() {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle
        icon={Drumstick}
        right={
          <div className="flex items-center gap-7 pr-1 font-heading text-[0.62rem] font-bold uppercase tracking-wider text-menu-muted">
            <span>Малый</span>
            <span>Средний</span>
            <span>Большой</span>
          </div>
        }
      >
        Закуски
      </SectionTitle>

      <div className="flex flex-col">
        {snacks.map((s, i) => (
          <div key={s.name}>
            <div className="flex items-center gap-3">
              <FoodPhoto
                src={s.image}
                alt={s.name}
                className="h-[3.2rem] w-[4rem]"
              />
              <h3 className="flex-1 font-heading text-base font-extrabold text-menu-text">
                {s.name}
              </h3>
              <div className="grid w-[19rem] grid-cols-3 text-center font-heading text-sm font-extrabold text-menu-brown">
                {s.sizes.map((size, idx) => (
                  <span key={idx}>{size}</span>
                ))}
              </div>
            </div>
            {i < snacks.length - 1 ? (
              <div className="py-1.5">
                <Divider />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export function MiddleColumn() {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <ShawarmaSection />
      <HotDishesSection />
      <SnacksSection />
    </div>
  )
}
