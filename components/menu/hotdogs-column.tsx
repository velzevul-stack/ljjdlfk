import { hotDogs } from '@/lib/menu-data'
import { Section, PriceText, Divider, FoodPhoto } from './parts'
import { HotDishesSection } from './middle-column'

function HotDogsSection() {
  return (
    <Section emblem="/emblems/hotdogs.png" title="Хот-доги" className="flex-1">
      <div className="flex flex-1 flex-col">
        {hotDogs.map((h, i) => (
          <div key={h.name} className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-3">
              <FoodPhoto
                src={h.image}
                alt={h.name}
                className="h-[5rem] w-[6.4rem]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-[1rem] font-black leading-tight text-menu-text">
                    {h.name}
                  </h3>
                  <PriceText>{h.price}</PriceText>
                </div>
                <p className="mt-1 text-[0.73rem] leading-snug text-menu-muted">
                  {h.ingredients}
                </p>
              </div>
            </div>
            {i < hotDogs.length - 1 && (
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

export function RightColumn() {
  return (
    <div className="flex h-full flex-col gap-3">
      <HotDogsSection />
      <HotDishesSection />
    </div>
  )
}
