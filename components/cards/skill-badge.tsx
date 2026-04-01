import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  skill: string
  className?: string
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        'win-raised inline-flex items-center px-2 py-0.5 text-[11px] bg-[#d4d0c8] text-[#000000] cursor-default hover:bg-[#e8e4d8]',
        className
      )}
    >
      {skill}
    </span>
  )
}
