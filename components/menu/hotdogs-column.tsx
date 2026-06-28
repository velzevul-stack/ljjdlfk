import { hotDogs } from '@/lib/menu-data'
import { Section, PriceText, Divider, FoodPhoto } from './parts'

export function RightColumn() {
  return (
    <Section emblem="/emblems/hotdogs.png" title="Хот-доги" className="h-full">
      <div className="flex flex-1 flex-col">
        {hotDogs.map((h, i) => (
          <div key={h.name} className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-4">
              <FoodPhoto
                src={h.image}
                alt={h.name}
                className="h-[4.6rem] w-[6rem]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-xl font-black leading-tight text-menu-text">
                    {h.name}
                  </h3>
                  <PriceText>{h.price}</PriceText>
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
