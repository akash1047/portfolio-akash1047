import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
  dim?: boolean
}

export function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
  dim = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-24 md:py-32', dim && 'bg-card/40', className)}
    >
      <div className={cn('max-w-5xl mx-auto px-6', innerClassName)}>{children}</div>
    </section>
  )
}

interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p className={cn('font-mono text-xs text-muted-foreground mb-3 tracking-widest', className)}>
      <span className="text-primary/60">// </span>
      {children}
    </p>
  )
}
