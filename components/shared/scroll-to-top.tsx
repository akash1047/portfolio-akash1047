'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-8 right-8 z-50 w-10 h-10 rounded border border-primary/40 bg-card',
        'font-mono text-primary text-xs flex items-center justify-center',
        'hover:bg-primary hover:text-primary-foreground transition-all duration-200',
        'hover:shadow-[0_0_16px_rgba(0,255,65,0.3)]',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
        'transition-all duration-300'
      )}
    >
      ↑
    </button>
  )
}
