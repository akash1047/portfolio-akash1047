import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
  dim?: boolean
  title?: string
}

function WinTitleBar({ title }: { title: string }) {
  return (
    <div className="win-titlebar">
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
          <rect x="0" y="0" width="6" height="6" fill="#ff0000" />
          <rect x="8" y="0" width="6" height="6" fill="#00ff00" />
          <rect x="0" y="8" width="6" height="6" fill="#0000ff" />
          <rect x="8" y="8" width="6" height="6" fill="#ffff00" />
        </svg>
        <span className="text-[11px] font-bold">{title}</span>
      </div>
      <div className="flex items-center gap-0.5">
        <button className="win-titlebar-btn" aria-label="Minimize">&#x2212;</button>
        <button className="win-titlebar-btn" aria-label="Maximize">&#x25A1;</button>
        <button className="win-titlebar-btn font-bold" aria-label="Close">&#x2715;</button>
      </div>
    </div>
  )
}

export function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
  dim = false,
  title,
}: SectionWrapperProps) {
  const windowTitle = title ?? `${id.charAt(0).toUpperCase()}${id.slice(1)} - Portfolio`
  return (
    <section
      id={id}
      className={cn('py-8 px-4 md:px-8', className)}
    >
      <div className={cn('max-w-5xl mx-auto win-window', innerClassName)}>
        <WinTitleBar title={windowTitle} />
        <div className={cn('p-5 bg-[#d4d0c8]', dim && 'bg-[#c8c4bc]')}>
          {children}
        </div>
      </div>
    </section>
  )
}

interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 mb-2 px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase',
        className
      )}
      style={{
        background: '#000080',
        color: '#ffffff',
        fontSize: 10,
      }}
    >
      {children}
    </div>
  )
}
