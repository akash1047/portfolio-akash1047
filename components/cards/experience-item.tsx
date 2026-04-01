import type { ExperienceItem } from '@/types/resume'

interface ExperienceItemProps {
  item: ExperienceItem
  isLast?: boolean
}

export function ExperienceCard({ item, isLast = false }: ExperienceItemProps) {
  return (
    <div className={`win-raised p-3 bg-[#d4d0c8] mb-3 ${isLast ? '' : ''}`}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <h3 className="font-bold text-[11px] text-[#000000]">{item.title}</h3>
        <span
          className="text-[11px] font-bold"
          style={{ color: '#000080' }}
        >
          {item.company}
        </span>
        <span className="text-[10px] text-[#606060]">{item.location}</span>
      </div>
      <p className="text-[10px] text-[#606060] mb-2 font-mono">{item.period}</p>
      <ul className="space-y-1">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-[11px] text-[#000000] leading-relaxed">
            <span className="shrink-0" style={{ color: '#000080' }} aria-hidden="true">&#x25BA;</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}
