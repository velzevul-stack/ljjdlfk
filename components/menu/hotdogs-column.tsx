import { hotDogs, hotDishes } from '@/lib/menu-data'
import { Section, PriceBadge, Divider, FoodPhoto } from './parts'

function HotDogsSection() {
  return (
    <Section
      emblem="/emblems/hotdogs.png"
      title="Хот-доги"
      className="flex-1"
    >
      <div className="flex flex-1 flex-col">
        {hotDogs.map((h, i) => (
          <div key={h.name} className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-4">
              <FoodPhoto
                src={h.image}
                alt={h.name}
                className="h-[4.2rem] w-[5.6rem]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-xl font-black leading-tight text-menu-text">
                    {h.name}
                  </h3>
                  <PriceBadge>{h.price}</PriceBadge>
                </div>
                <p className="mt-1.5 text-sm leading-snug text-menu-muted">
                  {h.ingredients}
                </p>
              </div>
            </div>
            {i < hotDogs.length - 1 ? (
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
      <div className="grid grid-cols-2 gap-5">
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
              className="my-1.5 h-[4.6rem] w-full"
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

export function RightColumn() {
  return (
    <div className="flex h-full flex-col gap-3">
      <HotDogsSection />
      <HotDishesSection />
    </div>
  )
}
