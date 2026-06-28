import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/** The illustrated emblem that sits inline beside every section title. */
export function Emblem({
  src,
  className,
  invert = false,
}: {
  src: string
  className?: string
  invert?: boolean
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
        )}
      />
    </span>
  )
}

/**
 * A category block. Two title treatments, matching the reference board:
 *  - variant="bar": a solid dark-brown rounded title pill with a white icon and
 *    white heading, sitting on the open cream background — used by БУРГЕРЫ.
 *  - variant="panel" (default): a soft rounded panel with a visible border and
 *    an inline emblem + dark heading — everything else.
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
        <header className="mb-3 flex items-center">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-menu-dark px-5 py-2.5">
            <Emblem src={emblem} className="size-7" invert />
            <h2 className="font-heading text-[1.55rem] font-black uppercase leading-none tracking-tight text-menu-oncream">
              {title}
            </h2>
          </div>
          {right ? <div className="ml-auto">{right}</div> : null}
        </header>
        <div className={cn('flex min-h-0 flex-1 flex-col', bodyClassName)}>
          {children}
        </div>
      </section>
    )
  }

  return (
    <section
      className={cn(
        'flex flex-col rounded-[1.5rem] border-2 border-menu-line bg-menu-panel/60 px-5 pb-4 pt-3.5',
        className,
      )}
    >
      <header className="mb-2.5 flex items-center gap-3">
        <Emblem src={emblem} />
        <h2 className="font-heading text-[1.55rem] font-black uppercase leading-none tracking-tight text-menu-dark">
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

/** Soft tan price chip with a small BYN suffix — used for boxed prices. */
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
        'inline-flex items-baseline gap-1 rounded-xl bg-menu-chip font-heading font-black leading-none text-menu-dark',
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
      <span className="text-[0.58rem] font-bold opacity-70">BYN</span>
    </span>
  )
}

/** Plain text price (number + small BYN) — used for hot dogs, no chip. */
export function PriceText({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-baseline gap-1 font-heading font-black leading-none text-menu-brown-ink">
      <span className="text-2xl">{children}</span>
      <span className="text-[0.58rem] font-bold opacity-70">BYN</span>
    </span>
  )
}

/** A single price chip beneath the S/M/L header, no letter inside. */
export function SizePrice({ price }: { price: string }) {
  return (
    <span className="inline-flex w-[3.4rem] items-baseline justify-center gap-0.5 rounded-xl bg-menu-chip px-2 py-2 font-heading font-black leading-none text-menu-dark">
      <span className="text-lg">{price}</span>
      <span className="text-[0.5rem] font-bold opacity-70">BYN</span>
    </span>
  )
}

/** Header row of S / M / L outlined circles used above sized sections. */
export function SizeDots({ labels = ['S', 'M', 'L'] }: { labels?: string[] }) {
  return (
    <div className="flex items-center gap-2.5">
      {labels.map((l) => (
        <span
          key={l}
          className="grid size-8 place-items-center rounded-full border-[2.5px] border-menu-dark font-heading text-sm font-black text-menu-dark"
        >
          {l}
        </span>
      ))}
    </div>
  )
}

/** Flat yellow "ХИТ" badge — a rounded rectangle exactly like the reference. */
export function HitBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-menu-accent px-2 py-1 font-heading text-[0.72rem] font-black uppercase leading-none tracking-wide text-menu-accent-ink',
        className,
      )}
    >
      Хит
    </span>
  )
}

/** Thin divider line between list items. */
export function Divider() {
  return <div className="h-px w-full bg-menu-divider" />
}

/**
 * Real product photo. It sits directly on the cream background (no frame) with
 * object-contain so the cut-out shape reads cleanly, like the reference menu.
 */
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
