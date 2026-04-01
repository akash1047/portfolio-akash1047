import { resume } from '@/data/resume'
import { SocialLinks } from '@/components/shared/social-links'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary/60">// </span>
          &copy; {year} {resume.name}. Built with Next.js + Rust enthusiasm.
        </p>
        <SocialLinks links={resume.socialLinks.filter((l) => l.type !== 'phone')} size="sm" />
      </div>
    </footer>
  )
}
