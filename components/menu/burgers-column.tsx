import { Scale } from 'lucide-react'
import { burgers } from '@/lib/menu-data'
import { Section, PriceBadge, HitBadge, Divider, FoodPhoto } from './parts'

export function BurgersColumn() {
  return (
    <Section
      emblem="/emblems/burgers.png"
      title="Бургеры"
      variant="bar"
      className="min-h-0 flex-1"
    >
      <div className="flex flex-1 flex-col">
        {burgers.map((b, i) => (
          <div key={b.name} className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-4">
              <FoodPhoto
                src={b.image}
                alt={b.name}
                className="h-[6.6rem] w-[7.6rem]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-xl font-black leading-tight text-menu-text">
                      {b.name}
                    </h3>
                    {b.hit ? <HitBadge /> : null}
                  </div>
                  <PriceBadge>{b.price}</PriceBadge>
                </div>
                <p className="mt-1.5 text-sm leading-snug text-menu-muted">
                  {b.ingredients}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wide text-menu-brown">
                  <Scale className="size-3.5" strokeWidth={2.5} aria-hidden />
                  {b.weight}
                </p>
              </div>
            </div>
            {i < burgers.length - 1 ? (
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
