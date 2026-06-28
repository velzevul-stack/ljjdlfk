import Image from 'next/image'
import { comboBar } from '@/lib/menu-data'

export function ComboBar() {
  return (
    <div className="flex h-[9.5rem] shrink-0 items-stretch gap-5 rounded-[1.5rem] bg-menu-dark px-7 py-4 text-menu-oncream">
      {/* Label */}
      <div className="flex shrink-0 items-center pr-2">
        <span className="font-heading text-[2.6rem] font-black uppercase leading-none tracking-tight text-menu-accent">
          Комбо
        </span>
      </div>

      {/* Combos */}
      <div className="flex flex-1 items-center justify-between gap-3">
        {comboBar.map((c) => (
          <div key={c.label} className="flex items-center gap-2.5">
            <div className="relative size-[5.2rem] shrink-0">
              <Image
                src={c.image || '/placeholder.svg'}
                alt={c.label}
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="max-w-[6.5rem] font-heading text-sm font-bold leading-tight text-menu-oncream">
                {c.label}
              </span>
              <span className="mt-1 font-heading text-2xl font-black leading-none text-menu-accent">
                {c.price}
                <span className="ml-1 text-[0.6rem] font-bold opacity-80">
                  BYN
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Thank-you box */}
      <div className="flex w-[15rem] shrink-0 items-center justify-center rounded-2xl bg-menu-brown px-5 text-center">
        <p className="font-script text-[1.9rem] leading-tight text-menu-oncream">
          Спасибо, что вы с нами!
        </p>
      </div>
    </div>
  )
}
