import type { ExperienceItem } from '@/types/resume'
import { cn } from '@/lib/utils'

interface ExperienceItemProps {
  item: ExperienceItem
  isLast?: boolean
}

export function ExperienceCard({ item, isLast = false }: ExperienceItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,255,65,0.6)]" />
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      {/* Content */}
      <div className={cn('pb-12', isLast && 'pb-0')}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h3 className="font-semibold text-foreground">{item.title}</h3>
          <span className="text-primary font-mono text-sm">{item.company}</span>
          <span className="text-muted-foreground text-xs">{item.location}</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground mb-4">{item.period}</p>
        <ul className="space-y-2">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-foreground/75 leading-relaxed">
              <span className="text-primary/60 font-mono shrink-0 mt-0.5">▸</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
