import { FitBoard } from '@/components/fit-board'
import { MenuBoard } from '@/components/menu-board'

export default function Page() {
  return (
    <main className="h-dvh w-dvw overflow-hidden bg-menu-cream">
      <FitBoard>
        <MenuBoard />
      </FitBoard>
    </main>
  )
}
