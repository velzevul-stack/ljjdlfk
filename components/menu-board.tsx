import { BrandHeader } from './menu/brand-header'
import { BurgersColumn } from './menu/burgers-column'
import { MiddleColumn } from './menu/middle-column'
import { RightColumn } from './menu/hotdogs-column'
import { ComboBar } from './menu/combo-bar'

export function MenuBoard() {
  return (
    <div className="menu-board flex h-full w-full flex-col gap-5 bg-menu-cream p-7 text-menu-text">
      <div className="grid min-h-0 flex-1 grid-cols-[1fr_1.16fr_1fr] gap-5">
        {/* Left column: brand fits in above БУРГЕРЫ, pushing the menu down */}
        <div className="flex min-h-0 flex-col gap-5">
          <BrandHeader />
          <BurgersColumn />
        </div>

        <MiddleColumn />
        <RightColumn />
      </div>

      <ComboBar />
    </div>
  )
}
