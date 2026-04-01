import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'
import { ExperienceCard } from '@/components/cards/experience-item'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

export function Experience() {
  return (
    <SectionWrapper id="experience" dim>
      <AnimateOnScroll>
        <SectionLabel>experience.ts</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Work Experience</h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <div className="max-w-2xl">
          {resume.experience.map((item, i) => (
            <ExperienceCard
              key={`${item.company}-${i}`}
              item={item}
              isLast={i === resume.experience.length - 1}
            />
          ))}
        </div>
      </AnimateOnScroll>

      {/* Education */}
      <AnimateOnScroll delay={200} className="mt-16 pt-12 border-t border-border/40">
        <SectionLabel>education.ts</SectionLabel>
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        {resume.education.map((edu) => (
          <div key={edu.institution} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-semibold text-foreground">{edu.degree}</h3>
            <span className="text-primary font-mono text-sm">{edu.institution}</span>
            <span className="text-muted-foreground text-xs font-mono">{edu.year}</span>
            <span className="text-muted-foreground text-xs">CGPA: {edu.gpa}</span>
          </div>
        ))}
      </AnimateOnScroll>
    </SectionWrapper>
  )
}
