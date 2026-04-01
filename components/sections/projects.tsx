import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'
import { ProjectCard } from '@/components/cards/project-card'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <AnimateOnScroll>
        <SectionLabel>projects.ts</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
      </AnimateOnScroll>

      <div className="grid sm:grid-cols-2 gap-5">
        {resume.projects.map((project, i) => (
          <AnimateOnScroll key={project.name} delay={i * 80}>
            <ProjectCard project={project} className="h-full" />
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
