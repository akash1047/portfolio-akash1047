import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'
import { SocialLinks } from '@/components/shared/social-links'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

export function Contact() {
  return (
    <SectionWrapper id="contact" dim>
      <AnimateOnScroll>
        <SectionLabel>contact.ts</SectionLabel>
      </AnimateOnScroll>

      <AnimateOnScroll delay={80} className="max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Let&apos;s build something{' '}
          <span className="text-primary">together.</span>
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Open to full-time roles, freelance projects, and interesting collaborations. If you have
          an idea or a problem worth solving — reach out.
        </p>

        <a
          href={`mailto:${resume.email}`}
          className="inline-flex items-center gap-3 font-mono text-lg text-primary hover:underline underline-offset-4 mb-10 group"
        >
          <span>{resume.email}</span>
          <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
        </a>

        <div>
          <p className="font-mono text-xs text-muted-foreground mb-4 tracking-widest">// find me online</p>
          <SocialLinks links={resume.socialLinks.filter(l => l.type !== 'phone')} size="md" />
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  )
}
