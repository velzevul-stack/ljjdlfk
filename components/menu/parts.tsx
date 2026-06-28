import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/** Illustrated emblem beside section titles. */
export function Emblem({
  src,
  className,
  invert = false,
  orange = false,
}: {
  src: string
  className?: string
  invert?: boolean
  orange?: boolean
}) {
  return (
    <span
      className={cn('relative block size-10 shrink-0', className)}
      aria-hidden
    >
      <Image
        src={src || '/placeholder.svg'}
        alt=""
        fill
        sizes="48px"
        className={cn(
          'object-contain',
          invert && '[filter:brightness(0)_invert(1)]',
          orange &&
            '[filter:brightness(0)_saturate(100%)_invert(45%)_sepia(80%)_saturate(600%)_hue-rotate(10deg)_brightness(95%)]',
        )}
      />
    </span>
  )
}

/**
 * Category block — two variants:
 *
 * "bar"   → БУРГЕРЫ: espresso-brown rounded title pill sits ABOVE a bordered
 *            rounded panel; the panel border visually emerges from the bottom
 *            edge of the pill (pill overlaps the top of the border).
 *
 * "panel" → all other sections: thin-bordered ivory card, inline icon + heading.
 */
export function Section({
  emblem,
  title,
  right,
  children,
  className,
  bodyClassName,
  variant = 'panel',
}: {
  emblem: string
  title: string
  right?: ReactNode
  children: ReactNode
  className?: string
  bodyClassName?: string
  variant?: 'panel' | 'bar'
}) {
  if (variant === 'bar') {
    return (
      <section className={cn('flex flex-col', className)}>
        {/* Title pill — overlaps top of the border frame below */}
        <header className="relative z-10 -mb-px flex items-center">
          <div className="inline-flex items-center gap-2.5 rounded-2xl bg-menu-title-bar px-4 py-2">
            <Emblem src={emblem} className="size-6" orange />
            <h2 className="font-heading text-[1.45rem] font-black uppercase leading-none tracking-tight text-menu-oncream">
              {title}
            </h2>
          </div>
        </header>
        {/* Panel — border "starts" from under the pill */}
        <div
          className={cn(
            'flex min-h-0 flex-1 flex-col rounded-b-[1.4rem] rounded-tl-none rounded-tr-[1.4rem] border-2 border-menu-line bg-menu-panel px-4 pt-3 pb-2',
            bodyClassName,
          )}
        >
          {children}
        </div>
      </section>
    )
  }

  return (
    <section
      className={cn(
        'flex flex-col rounded-[1.4rem] border-2 border-menu-line bg-menu-panel',
        className,
      )}
    >
      <header className="flex items-center gap-2.5 border-b border-menu-divider px-4 py-2.5">
        <Emblem src={emblem} className="size-7" />
        <h2 className="font-heading text-[1.45rem] font-black uppercase leading-none tracking-tight text-menu-brown">
          {title}
        </h2>
        {right ? <div className="ml-auto">{right}</div> : null}
      </header>
      <div className={cn('flex min-h-0 flex-1 flex-col px-4 py-3', bodyClassName)}>
        {children}
      </div>
    </section>
  )
}

/**
 * Three price formats matching the reference:
 *
 * PriceBadge   → pill chip (burgers, hot dishes) — tan fill, number + BYN
 * SizePrice    → smaller square chip (shawarma S/M/L row)
 * PriceText    → plain bold text (hot dogs) — no chip
 */
export function PriceBadge({
  children,
  size = 'md',
  className,
}: {
  children: ReactNode
  size?: 'sm' | 'md'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-baseline gap-0.5 rounded-xl bg-menu-chip font-heading font-black leading-none text-menu-text',
        size === 'sm' && 'px-2.5 py-1.5 text-lg',
        size === 'md' && 'px-3 py-2 text-[1.35rem]',
        className,
      )}
    >
      {children}
      <span className="text-[0.52rem] font-bold opacity-60">BYN</span>
    </span>
  )
}

export function SizePrice({ price }: { price: string }) {
  return (
    <span className="inline-flex w-[3.2rem] items-baseline justify-center gap-0.5 rounded-lg bg-menu-chip px-1.5 py-1.5 font-heading font-black leading-none text-menu-text">
      <span className="text-base">{price}</span>
      <span className="text-[0.48rem] font-bold opacity-60">BYN</span>
    </span>
  )
}

export function PriceText({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-baseline gap-0.5 font-heading font-black leading-none text-menu-brown">
      <span className="text-[1.3rem]">{children}</span>
      <span className="text-[0.52rem] font-bold opacity-70">BYN</span>
    </span>
  )
}

/** S / M / L outlined circles. */
export function SizeDots({ labels = ['S', 'M', 'L'] }: { labels?: string[] }) {
  return (
    <div className="flex items-center gap-2">
      {labels.map((l) => (
        <span
          key={l}
          className="grid size-7 place-items-center rounded-full border-2 border-menu-brown font-heading text-xs font-black text-menu-brown"
        >
          {l}
        </span>
      ))}
    </div>
  )
}

/**
 * ХИТ starburst badge — SVG sunburst with yellow fill, matching the reference.
 */
export function HitBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn('inline-flex items-center', className)}
      aria-label="Хит"
    >
      <svg
        width="42"
        height="22"
        viewBox="0 0 42 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Starburst/badge background */}
        <path
          d="M4 11 L6 4 L11 6 L12 1 L17 5 L19 0 L21 5 L23 0 L25 5 L30 1 L31 6 L36 4 L38 11 L36 18 L31 16 L30 21 L25 17 L23 22 L21 17 L19 22 L17 17 L12 21 L11 16 L6 18 Z"
          fill="#f5bf1a"
        />
        <text
          x="21"
          y="14.5"
          textAnchor="middle"
          fontFamily="Montserrat, Arial, sans-serif"
          fontWeight="900"
          fontSize="9"
          fill="#1e1000"
          letterSpacing="0.5"
        >
          ХИТ
        </text>
      </svg>
    </span>
  )
}

/** Thin divider line between items. */
export function Divider({ className }: { className?: string }) {
  return <div className={cn('h-px w-full bg-menu-divider', className)} />
}

/** Food photograph — object-contain cut-out on the cream background. */
export function FoodPhoto({
  src,
  alt,
  className,
}: {
  src?: string
  alt: string
  className?: string
}) {
  return (
    <div className={cn('relative shrink-0', className)}>
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        fill
        sizes="240px"
        className="object-contain"
      />
    </div>
  )
}
