import { resume } from '@/data/resume'
import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/components/shared/social-links'

function TerminalWindow() {
  return (
    <div className="rounded-lg border border-border/60 bg-card overflow-hidden shadow-[0_0_40px_rgba(0,255,65,0.07)]">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/30">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-primary/60" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          akash@terminal ~ %
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm space-y-3">
        <div>
          <span className="text-primary">$ </span>
          <span className="text-muted-foreground">cat profile.json</span>
        </div>
        <pre className="text-xs leading-relaxed text-foreground/70 pl-2 whitespace-pre">{`{
  "role":     "Founding SWE",
  "exp":      "~2 years",
  "users":    "100K+ scaled",
  "location": "Bengaluru 🇮🇳",
  "stack":    ["Rust","Go","TS"],
  "passion":  [
    "OS kernels",
    "Game engines",
    "Compilers"
  ]
}`}</pre>
        <div>
          <span className="text-primary">$ </span>
          <span className="text-muted-foreground">ls ./awards</span>
        </div>
        <div className="pl-2 text-primary/80 text-xs">
          🏆 &nbsp;1st-prize-compiler-competition.txt
        </div>
        <div>
          <span className="text-primary">$ </span>
          <span className="text-muted-foreground">git log --oneline -3</span>
        </div>
        <div className="pl-2 text-xs space-y-1 text-muted-foreground">
          <div><span className="text-primary/60">a3f91b2</span> feat: firefly-os memory manager</div>
          <div><span className="text-primary/60">7c2d840</span> feat: crepl ast generation</div>
          <div><span className="text-primary/60">e1a9f03</span> feat: pocket-shield mfa core</div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-primary">$ </span>
          <span className="animate-pulse text-primary">█</span>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="hero" className="min-h-svh flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <p className="font-mono text-xs text-muted-foreground mb-6 tracking-widest">
              <span className="text-primary">$ </span>whoami
            </p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-none">
              {resume.name}
            </h1>

            <p className="font-mono text-primary text-lg mb-6 flex items-center gap-1">
              <span className="text-muted-foreground">&gt;&nbsp;</span>
              {resume.title}
              <span className="animate-pulse">█</span>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md text-sm md:text-base">
              {resume.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild size="sm" className="font-mono hover:shadow-[0_0_16px_rgba(0,255,65,0.4)]">
                <a href="#projects">./view-projects</a>
              </Button>
              <Button asChild variant="outline" size="sm" className="font-mono">
                <a href="/AkashLohar.pdf" target="_blank" rel="noopener noreferrer">
                  ./download-resume
                </a>
              </Button>
            </div>

            <SocialLinks links={resume.socialLinks} />
          </div>

          {/* Right: Terminal */}
          <div className="hidden md:block">
            <TerminalWindow />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <a
            href="#about"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2"
          >
            <span>scroll</span>
            <span className="animate-bounce">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
