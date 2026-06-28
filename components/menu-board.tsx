import { BrandHeader } from './menu/brand-header'
import { BurgersColumn } from './menu/burgers-column'
import { MiddleColumn } from './menu/middle-column'
import { RightColumn } from './menu/hotdogs-column'
import { ComboBar } from './menu/combo-bar'

export function MenuBoard() {
  return (
    <div className="menu-board flex h-full w-full flex-col gap-5 bg-menu-cream p-8 text-menu-text">
      <BrandHeader />

      <div className="grid min-h-0 flex-1 grid-cols-[1fr_1.18fr_1fr] gap-5">
        <BurgersColumn />
        <MiddleColumn />
        <RightColumn />
      </div>

      <div className="h-[300px] shrink-0">
        <ComboBar />
      </div>
    </div>
  )
}
