import { BurgersColumn } from './menu/burgers-column'
import { MiddleColumn } from './menu/middle-column'
import { HotDogsColumn } from './menu/hotdogs-column'
import { ComboBar } from './menu/combo-bar'

export function MenuBoard() {
  return (
    <div className="menu-board flex h-full w-full flex-col gap-4 bg-menu-cream p-7 text-menu-text">
      <div className="grid min-h-0 flex-1 grid-cols-[360px_600px_1fr] gap-5">
        <section className="min-h-0">
          <BurgersColumn />
        </section>

        <section className="min-h-0 border-x border-menu-line px-5">
          <MiddleColumn />
        </section>

        <section className="min-h-0">
          <HotDogsColumn />
        </section>
      </div>

      <div className="h-[180px] shrink-0">
        <ComboBar />
      </div>
    </div>
  )
}
