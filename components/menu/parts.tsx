import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * A bordered, rounded-rectangle section block — matches the reference board,
 * where every category is outlined and the title sits in the top-left with a
 * small icon badge.
 */
export function Section({
  icon: Icon,
  title,
  right,
  children,
  className,
}: {
  icon: LucideIcon
  title: string
  right?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'flex flex-col rounded-[1.4rem] border-2 border-menu-line bg-menu-cream/40 px-5 pb-4 pt-3.5',
        className,
      )}
    >
      <header className="mb-3 flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-menu-dark text-menu-oncream">
          <Icon className="size-5" strokeWidth={2.25} aria-hidden />
        </span>
        <h2 className="font-heading text-[1.6rem] font-extrabold uppercase leading-none tracking-tight text-menu-dark">
          {title}
        </h2>
        {right ? <div className="ml-auto">{right}</div> : null}
      </header>
      {children}
    </section>
  )
}

/**
 * A standalone category header row: an icon badge, the title, and an optional
 * right-aligned slot (size labels, column headers, etc.).
 */
export function SectionTitle({
  icon: Icon,
  right,
  children,
  className,
}: {
  icon: LucideIcon
  right?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <header className={cn('flex items-center gap-3', className)}>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-menu-dark text-menu-oncream">
        <Icon className="size-5" strokeWidth={2.25} aria-hidden />
      </span>
      <h2 className="font-heading text-[1.6rem] font-extrabold uppercase leading-none tracking-tight text-menu-text">
        {children}
      </h2>
      {right ? <div className="ml-auto">{right}</div> : null}
    </header>
  )
}

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
        'inline-flex items-baseline gap-1 rounded-lg bg-menu-brown font-heading font-extrabold leading-none text-menu-oncream shadow-sm',
        size === 'sm' && 'px-2 py-1',
        size === 'md' && 'px-2.5 py-1.5',
        size === 'lg' && 'px-3 py-2',
        className,
      )}
    >
      <span
        className={cn(
          size === 'sm' && 'text-base',
          size === 'md' && 'text-xl',
          size === 'lg' && 'text-2xl',
        )}
      >
        {children}
      </span>
      <span className="text-[0.6rem] font-bold opacity-80">BYN</span>
    </span>
  )
}

/** Small size badge with its price stacked (e.g. "M" over "10 BYN"). */
export function SizePrice({ label, price }: { label: string; price: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border-2 border-menu-line bg-menu-cream px-2.5 py-1">
      <span className="grid size-6 place-items-center rounded-full bg-menu-dark font-heading text-xs font-extrabold text-menu-oncream">
        {label}
      </span>
      <span className="font-heading text-lg font-extrabold leading-none text-menu-brown">
        {price}
        <span className="ml-0.5 text-[0.58rem] font-bold text-menu-muted">
          BYN
        </span>
      </span>
    </span>
  )
}

export function HitBadge() {
  return (
    <span className="inline-block rounded-md bg-menu-accent px-1.5 py-0.5 font-heading text-[0.62rem] font-extrabold uppercase tracking-wider text-menu-accent-ink">
      Хит
    </span>
  )
}

export function SizeDot({ label }: { label: string }) {
  return (
    <span className="grid size-7 place-items-center rounded-full border-2 border-menu-brown font-heading text-xs font-extrabold text-menu-brown">
      {label}
    </span>
  )
}

export function Divider() {
  return <div className="h-px w-full bg-menu-line" />
}

export function FoodPhoto({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={cn('relative shrink-0', className)}>
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        fill
        sizes="320px"
        className="object-contain"
      />
    </div>
  )
}
