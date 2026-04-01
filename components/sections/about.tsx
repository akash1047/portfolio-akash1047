import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const stats = [
  { value: '~2 yrs', label: 'Professional Exp.' },
  { value: '100K+', label: 'Users Scaled To' },
  { value: '4', label: 'Open-source Projects' },
  { value: '8.3', label: 'CGPA (B.Tech CS)' },
]

export function About() {
  return (
    <SectionWrapper id="about" dim>
      <AnimateOnScroll>
        <SectionLabel>about.ts</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <AnimateOnScroll delay={100}>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {resume.bio}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
            I started my journey obsessing over how computers work at the lowest level — writing
            bare-metal code, building operating system kernels, and implementing compilers from
            scratch. That foundation shaped how I approach every problem: understand the system,
            then build on top of it.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Open to relocation:{' '}
            <span className="text-primary font-mono">
              {resume.relocationPreference.join(' · ')}
            </span>
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded border border-border/60 bg-card hover:border-primary/30 transition-colors"
              >
                <p className="font-mono text-2xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  )
}
