import { resume } from '@/data/resume'
import { SocialLinks } from '@/components/shared/social-links'

function WinTitleBar({
  title,
  icon,
}: {
  title: string
  icon?: React.ReactNode
}) {
  return (
    <div className="win-titlebar">
      <div className="flex items-center gap-1.5 min-w-0">
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="truncate text-[11px] font-bold">{title}</span>
      </div>
      <div className="flex items-center gap-0.5 shrink-0 ml-2">
        <button className="win-titlebar-btn" aria-label="Minimize">&#x2212;</button>
        <button className="win-titlebar-btn" aria-label="Maximize">&#x25A1;</button>
        <button className="win-titlebar-btn font-bold" aria-label="Close" style={{ background: '#d4d0c8' }}>&#x2715;</button>
      </div>
    </div>
  )
}

function DesktopIcon({
  label,
  href,
  children,
}: {
  label: string
  href: string
  children: React.ReactNode
}) {
  return (
    <a href={href} className="win-desktop-icon focus:outline-none group" tabIndex={0}>
      <div className="w-10 h-10 flex items-center justify-center" aria-hidden="true">
        {children}
      </div>
      <span className="win-icon-label">{label}</span>
    </a>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex flex-col items-start justify-start pt-6 pb-10 px-4 md:px-10"
      style={{ paddingBottom: '40px' }}
    >
      {/* Desktop icons — left column */}
      <div className="fixed left-4 top-6 flex flex-col gap-4 z-10">
        <DesktopIcon label="My Projects" href="#projects">
          <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <rect x="2" y="6" width="28" height="22" fill="#d4d0c8" stroke="#808080" strokeWidth="1" />
            <rect x="2" y="6" width="28" height="6" fill="#000080" />
            <rect x="4" y="8" width="8" height="4" fill="#d4d0c8" rx="0" />
            <rect x="4" y="14" width="24" height="2" fill="#808080" />
            <rect x="4" y="18" width="16" height="2" fill="#808080" />
            <rect x="4" y="22" width="20" height="2" fill="#808080" />
          </svg>
        </DesktopIcon>

        <DesktopIcon label="Resume.pdf" href="/AkashLohar.pdf">
          <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <rect x="4" y="2" width="18" height="26" fill="#ffffff" stroke="#808080" strokeWidth="1" />
            <path d="M16 2 L22 8 L16 8 Z" fill="#d4d0c8" stroke="#808080" strokeWidth="1" />
            <rect x="7" y="12" width="12" height="1.5" fill="#cc0000" />
            <rect x="7" y="15" width="10" height="1.5" fill="#808080" />
            <rect x="7" y="18" width="11" height="1.5" fill="#808080" />
            <rect x="7" y="21" width="9" height="1.5" fill="#808080" />
          </svg>
        </DesktopIcon>

        <DesktopIcon label="GitHub" href={resume.socialLinks.find((l) => l.type === 'github')?.url ?? '#'}>
          <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <rect x="0" y="0" width="32" height="32" rx="0" fill="#000000" />
            <path d="M16 3C9.37 3 4 8.37 4 15c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 16 8.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C24.56 24.8 28 20.3 28 15c0-6.63-5.37-12-12-12z" fill="#ffffff" />
          </svg>
        </DesktopIcon>

        <DesktopIcon label="Contact" href="#contact">
          <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <rect x="2" y="6" width="28" height="20" fill="#ffffff" stroke="#808080" strokeWidth="1" />
            <path d="M2 6 L16 18 L30 6" stroke="#000080" strokeWidth="1.5" fill="none" />
          </svg>
        </DesktopIcon>
      </div>

      {/* Main profile window — centered */}
      <div className="mx-auto w-full max-w-2xl mt-6 ml-20 md:ml-24 win-window">
        <WinTitleBar
          title="Akash Lohar - Portfolio"
          icon={
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <rect x="0" y="0" width="7" height="7" fill="#ff0000" />
              <rect x="9" y="0" width="7" height="7" fill="#00ff00" />
              <rect x="0" y="9" width="7" height="7" fill="#0000ff" />
              <rect x="9" y="9" width="7" height="7" fill="#ffff00" />
            </svg>
          }
        />

        {/* Menu bar */}
        <div className="win-menubar">
          <span className="win-menu-item"><u>F</u>ile</span>
          <span className="win-menu-item"><u>E</u>dit</span>
          <span className="win-menu-item"><u>V</u>iew</span>
          <span className="win-menu-item"><u>H</u>elp</span>
        </div>

        {/* Window body */}
        <div className="p-4 bg-[#d4d0c8]">
          {/* Two-panel layout like Windows Explorer */}
          <div className="flex gap-3">
            {/* Left: icon panel */}
            <div
              className="win-sunken hidden md:flex flex-col items-center gap-3 p-3"
              style={{ width: 110, background: '#ffffff', flexShrink: 0 }}
            >
              {/* Big user icon */}
              <div
                className="w-16 h-16 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #000080 0%, #1084d0 100%)',
                  border: '2px solid #404040',
                }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
                  <circle cx="20" cy="14" r="8" fill="#ffffff" />
                  <path d="M4 38c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="#ffffff" />
                </svg>
              </div>
              <span className="text-[10px] text-center font-bold leading-tight text-[#000000]">
                akash1047
              </span>
              <div style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff', width: '100%' }} />
              <span className="text-[10px] text-[#000080] text-center leading-tight">
                Founding SWE
              </span>
              <span className="text-[10px] text-center text-[#606060] leading-tight">
                Bengaluru, IN
              </span>
            </div>

            {/* Right: content panel */}
            <div className="flex-1 win-sunken p-3" style={{ background: '#ffffff', minHeight: 220 }}>
              {/* Tabs */}
              <div className="win-tabs mb-3" role="tablist">
                <div className="win-tab win-tab-active" role="tab" aria-selected="true">Profile</div>
                <div className="win-tab" role="tab" aria-selected="false">Stack</div>
                <div className="win-tab" role="tab" aria-selected="false">Links</div>
              </div>

              <div className="text-[11px] leading-relaxed text-[#000000] space-y-2">
                <p>
                  <strong>{resume.name}</strong> &mdash; {resume.title}
                </p>
                <p className="text-[#606060]">{resume.bio}</p>

                <div className="win-groupbox mt-3" style={{ position: 'relative', marginTop: 12 }}>
                  <span className="win-groupbox-label">Quick Stats</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] mt-1">
                    <span className="text-[#606060]">Experience:</span>
                    <span className="font-bold">~2 years</span>
                    <span className="text-[#606060]">Users Scaled:</span>
                    <span className="font-bold">100K+</span>
                    <span className="text-[#606060]">Open Source:</span>
                    <span className="font-bold">4 projects</span>
                    <span className="text-[#606060]">CGPA:</span>
                    <span className="font-bold">8.3 / 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toolbar buttons */}
          <div className="flex flex-wrap gap-2 mt-3 pt-3" style={{ borderTop: '1px solid #808080' }}>
            <a href="#projects" className="win-btn win-btn-default text-[11px]">
              View Projects
            </a>
            <a
              href="/AkashLohar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="win-btn text-[11px]"
            >
              Download Resume
            </a>
            <a href="#contact" className="win-btn text-[11px]">
              Contact Me
            </a>
          </div>
        </div>

        {/* Status bar */}
        <div className="win-statusbar text-[11px]">
          <div className="win-statusbar-panel flex-1">
            Founding SWE &bull; Rust &bull; Go &bull; TypeScript
          </div>
          <div className="win-statusbar-panel">
            Ready
          </div>
        </div>
      </div>

      {/* Notepad window — offset for depth */}
      <div
        className="hidden lg:block win-window absolute"
        style={{ top: '16rem', right: '4rem', width: 280, zIndex: 5 }}
        aria-label="Awards notepad"
      >
        <WinTitleBar
          title="awards.txt - Notepad"
          icon={
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <rect x="1" y="1" width="14" height="14" fill="#ffffff" stroke="#808080" />
              <rect x="3" y="4" width="10" height="1" fill="#000000" />
              <rect x="3" y="7" width="8" height="1" fill="#000000" />
              <rect x="3" y="10" width="9" height="1" fill="#000000" />
            </svg>
          }
        />
        <div className="p-3 font-mono text-[11px] bg-white" style={{ minHeight: 100 }}>
          <p className="text-[#000080] font-bold mb-2">== AWARDS.TXT ==</p>
          <p>1st Prize - Compiler Competition</p>
          <p className="mt-1 text-[#606060]">National-level hackathon winner</p>
          <p className="mt-1 text-[#606060]">Firefly OS — kernel project</p>
          <p className="mt-3 text-[#808080]">&#x25AE; _</p>
        </div>
      </div>

      {/* Social links as a dialog box */}
      <div
        className="hidden lg:block win-window absolute"
        style={{ top: '6rem', right: '4rem', width: 220, zIndex: 4 }}
        aria-label="Social links"
      >
        <WinTitleBar title="Connect" />
        <div className="p-3 bg-[#d4d0c8]">
          <p className="text-[11px] mb-2">Find me online:</p>
          <SocialLinks
            links={resume.socialLinks.filter((l) => l.type !== 'phone')}
            size="md"
            className="flex-wrap gap-3"
          />
        </div>
      </div>
    </section>
  )
}
