'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import { ThemeToggle } from '@/components/shared/theme-toggle'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border/60'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm font-bold hover:text-primary transition-colors"
        >
          <span className="text-primary/60 select-none">$ </span>
          akash1047
          <span className="animate-pulse text-primary">_</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop: theme toggle */}
        <ThemeToggle className="hidden md:block" />

        {/* Mobile: theme + menu */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '[close]' : '[menu]'}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-64 border-b border-border/60' : 'max-h-0'
        )}
      >
        <div className="bg-background/95 backdrop-blur-md">
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary/50">&gt; </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
