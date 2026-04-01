import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  skill: string
  className?: string
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded font-mono text-xs',
        'border border-primary/20 bg-primary/5 text-foreground/80',
        'hover:border-primary/50 hover:bg-primary/10 hover:text-primary',
        'transition-all duration-200 cursor-default',
        className
      )}
    >
      {skill}
    </span>
  )
}
