'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

// Print target 16358 × 14186 px (≈ 1.153 : 1). Same ratio at screen scale.
const BASE_W = 1560
const BASE_H = 1353

export function FitBoard({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const compute = () => {
      const s = Math.min(window.innerWidth / BASE_W, window.innerHeight / BASE_H)
      setScale(s)
    }
    const onResize = () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div className="fit-wrapper fixed inset-0 grid place-items-center overflow-hidden bg-menu-cream">
      <div
        className="fit-scale"
        style={{
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  )
}
