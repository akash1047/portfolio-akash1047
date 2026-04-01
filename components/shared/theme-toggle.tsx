'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    // Briefly enable broad transitions for smooth theme switch
    document.documentElement.classList.add('theme-transitioning')
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    setDark(isDark)
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 400)
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'font-mono text-xs text-muted-foreground hover:text-primary transition-colors',
        className
      )}
    >
      {dark ? '[light]' : '[dark]'}
    </button>
  )
}
