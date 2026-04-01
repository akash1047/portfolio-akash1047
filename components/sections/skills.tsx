import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'
import { SkillBadge } from '@/components/cards/skill-badge'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <AnimateOnScroll>
        <SectionLabel>skills.ts</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>
      </AnimateOnScroll>

      <div className="grid sm:grid-cols-2 gap-8">
        {resume.skillGroups.map((group, i) => (
          <AnimateOnScroll key={group.category} delay={i * 80}>
            <div className="p-6 rounded border border-border/60 bg-card hover:border-primary/20 transition-colors">
              <p className="font-mono text-xs text-primary/70 mb-4 tracking-widest uppercase">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
