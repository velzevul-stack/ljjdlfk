import { Sandwich } from 'lucide-react'
import { hotDogs } from '@/lib/menu-data'
import { SectionTitle, PriceBadge, Divider, FoodPhoto } from './parts'

export function HotDogsColumn() {
  return (
    <div className="flex h-full flex-col gap-4">
      <SectionTitle icon={Sandwich}>Хот-доги</SectionTitle>

      <div className="flex flex-1 flex-col">
        {hotDogs.map((h, i) => (
          <div key={h.name} className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-3">
              <FoodPhoto
                src={h.image}
                alt={h.name}
                className="h-[4.4rem] w-[6rem]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-extrabold leading-tight text-menu-text">
                    {h.name}
                  </h3>
                  <PriceBadge>{h.price}</PriceBadge>
                </div>
                <p className="mt-1 text-[0.72rem] leading-snug text-menu-muted">
                  {h.ingredients}
                </p>
              </div>
            </div>
            {i < hotDogs.length - 1 ? (
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
