'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    document.documentElement.classList.add('theme-transitioning')
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    setDark(isDark)
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 400)
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light desktop' : 'Switch to dark desktop'}
      className={cn('win-btn text-[11px] min-w-0 px-2 py-0.5', className)}
    >
      {dark ? 'Teal Desktop' : 'Navy Desktop'}
    </button>
  )
}
