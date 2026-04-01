'use client'

import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '@/lib/constants'

export function Header() {
  const [time, setTime] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* ── Windows 2000 Taskbar ── */}
      <header
        className="fixed bottom-0 left-0 right-0 z-50 win-taskbar"
        style={{ borderTop: '2px solid #ffffff' }}
        role="banner"
      >
        {/* Start button */}
        <button
          className="win-start-btn flex items-center gap-1.5 shrink-0"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          {/* Windows flag icon (4 squares) */}
          <span className="grid grid-cols-2 gap-px w-3.5 h-3.5 shrink-0" aria-hidden="true">
            <span className="bg-red-600 block" />
            <span className="bg-green-600 block" />
            <span className="bg-blue-700 block" />
            <span className="bg-yellow-500 block" />
          </span>
          <span className="font-bold text-[11px]">Start</span>
        </button>

        {/* Separator */}
        <div className="h-5 w-px" style={{ borderLeft: '1px solid #808080', borderRight: '1px solid #ffffff' }} />

        {/* Quick launch nav items as taskbar buttons */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 flex-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="win-btn text-[11px] min-w-0 px-3 py-0.5 h-[22px] leading-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* System tray */}
        <div
          className="ml-auto flex items-center gap-1 pl-2"
          style={{
            borderTop: '1px solid #808080',
            borderLeft: '1px solid #808080',
            borderRight: '1px solid #ffffff',
            borderBottom: '1px solid #ffffff',
            padding: '2px 6px',
          }}
        >
          {/* Network icon */}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="1" y="10" width="4" height="4" fill="#000080" />
            <rect x="6" y="7" width="4" height="7" fill="#000080" />
            <rect x="11" y="4" width="4" height="10" fill="#000080" />
          </svg>
          <span className="text-[11px] font-sans" aria-live="polite">{time}</span>
        </div>
      </header>

      {/* ── Start Menu (mobile) ── */}
      {menuOpen && (
        <div
          className="fixed bottom-[30px] left-0 z-50 win-window"
          style={{ width: 200, minHeight: 120 }}
          role="dialog"
          aria-label="Start menu"
        >
          {/* Blue side bar */}
          <div className="flex h-full">
            <div
              className="w-7 flex items-end justify-center pb-3"
              style={{
                background: 'linear-gradient(to top, #000080, #1084d0)',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              <span
                className="text-white font-bold tracking-widest"
                style={{ fontSize: 10, letterSpacing: 3 }}
              >
                akash1047
              </span>
            </div>
            <nav className="flex-1 py-1" aria-label="Start menu navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="win-menu-item flex items-center gap-2 text-[11px] py-1.5 px-3 hover:bg-primary hover:text-white block"
                >
                  {item.label}
                </a>
              ))}
              <div style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff', margin: '4px 0' }} />
              <a
                href="/AkashLohar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="win-menu-item flex items-center gap-2 text-[11px] py-1.5 px-3 hover:bg-primary hover:text-white block"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
            </nav>
          </div>
        </div>
      )}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
