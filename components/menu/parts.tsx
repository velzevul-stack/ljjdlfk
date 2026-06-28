import type { ReactNode } from 'react'
import Image from 'next/image'
import { Utensils } from 'lucide-react'
import { cn } from '@/lib/utils'

/** The small rounded emblem badge that sits beside every section title. */
export function Emblem({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  return (
    <span
      className={cn(
        'grid size-12 shrink-0 place-items-center rounded-xl border-2 border-menu-line bg-menu-panel p-1.5',
        className,
      )}
    >
      <Image
        src={src || '/placeholder.svg'}
        alt=""
        width={44}
        height={44}
        className="size-full object-contain"
        aria-hidden
      />
    </span>
  )
}

/**
 * A bordered, rounded-rectangle section block. Every category is outlined with
 * soft corners and titled with an emblem + bold heading in the top-left —
 * matching the reference board (no solid-black title bars).
 */
export function Section({
  emblem,
  title,
  right,
  children,
  className,
  bodyClassName,
}: {
  emblem: string
  title: string
  right?: ReactNode
  children: ReactNode
  className?: string
  bodyClassName?: string
}) {
  return (
    <section
      className={cn(
        'flex flex-col rounded-[1.4rem] border-2 border-menu-line bg-menu-panel/35 px-5 pb-4 pt-3',
        className,
      )}
    >
      <header className="mb-3 flex items-center gap-3">
        <Emblem src={emblem} />
        <h2 className="font-heading text-[1.6rem] font-black uppercase leading-none tracking-tight text-menu-dark">
          {title}
        </h2>
        {right ? <div className="ml-auto">{right}</div> : null}
      </header>
      <div className={cn('flex min-h-0 flex-1 flex-col', bodyClassName)}>
        {children}
      </div>
    </section>
  )
}

/** Prominent brown price pill with a small BYN suffix. */
export function PriceBadge({
  children,
  size = 'md',
  className,
}: {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-baseline gap-1 rounded-xl bg-menu-brown font-heading font-black leading-none text-menu-oncream shadow-sm ring-1 ring-black/5',
        size === 'sm' && 'px-2.5 py-1.5',
        size === 'md' && 'px-3 py-2',
        size === 'lg' && 'px-3.5 py-2.5',
        className,
      )}
    >
      <span
        className={cn(
          size === 'sm' && 'text-lg',
          size === 'md' && 'text-2xl',
          size === 'lg' && 'text-3xl',
        )}
      >
        {children}
      </span>
      <span className="text-[0.6rem] font-bold opacity-80">BYN</span>
    </span>
  )
}

/** A single S/M/L size chip with its price stacked beneath the size letter. */
export function SizePrice({ label, price }: { label: string; price: string }) {
  return (
    <span className="inline-flex flex-col items-center gap-1 rounded-xl border-2 border-menu-line bg-menu-cream px-3 py-1.5">
      <span className="grid size-6 place-items-center rounded-full bg-menu-dark font-heading text-xs font-black text-menu-oncream">
        {label}
      </span>
      <span className="font-heading text-xl font-black leading-none text-menu-brown">
        {price}
        <span className="ml-0.5 text-[0.55rem] font-bold text-menu-muted">
          BYN
        </span>
      </span>
    </span>
  )
}

/** Header row of S / M / L size dots used above sized sections. */
export function SizeDots({ labels = ['S', 'M', 'L'] }: { labels?: string[] }) {
  return (
    <div className="flex items-center gap-2.5">
      {labels.map((l) => (
        <span
          key={l}
          className="grid size-9 place-items-center rounded-full border-2 border-menu-brown font-heading text-sm font-black text-menu-brown"
        >
          {l}
        </span>
      ))}
    </div>
  )
}

export function HitBadge() {
  return (
    <span className="inline-block rounded-md bg-menu-accent px-2 py-0.5 font-heading text-xs font-black uppercase tracking-wider text-menu-accent-ink shadow-sm">
      Хит
    </span>
  )
}

export function Divider() {
  return <div className="h-px w-full bg-menu-line" />
}

/**
 * Photo placeholder. Real product photography can be dropped into /public/food
 * later; until then this renders a tidy framed slot instead of a broken image.
 */
export function FoodPhoto({
  alt,
  className,
}: {
  src?: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'grid shrink-0 place-items-center overflow-hidden rounded-2xl border-2 border-dashed border-menu-line bg-menu-cream',
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <Utensils className="size-6 text-menu-line" strokeWidth={2} aria-hidden />
    </div>
  )
}
