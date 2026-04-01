import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 1h4v4M11 1 5.5 6.5M4 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects - Windows Explorer">
      <SectionLabel>projects.txt</SectionLabel>
      <h2 className="text-[14px] font-bold mb-4 text-[#000000]">Projects</h2>

      {/* Explorer-style icon grid */}
      <div className="win-sunken bg-white p-3 min-h-[200px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {resume.projects.map((project) => (
            <div
              key={project.name}
              className="win-raised p-3 bg-[#d4d0c8] hover:bg-[#e8e4d8] cursor-default group"
            >
              {/* Project icon + name */}
              <div className="flex items-start gap-2 mb-2">
                <div
                  className="w-8 h-8 shrink-0 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #000080 0%, #1084d0 100%)',
                    border: '1px solid #404040',
                  }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="white">
                    <rect x="2" y="2" width="5" height="5" />
                    <rect x="9" y="2" width="5" height="5" />
                    <rect x="2" y="9" width="5" height="5" />
                    <rect x="9" y="9" width="5" height="5" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[11px] text-[#000000] leading-tight">
                    {project.name}
                  </p>
                  {project.prize && (
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: '#cc7700' }}
                    >
                      [1st Prize]
                    </span>
                  )}
                </div>
              </div>

              <p className="text-[11px] text-[#606060] leading-relaxed mb-2 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="win-sunken text-[10px] px-1.5 py-0 bg-white text-[#606060]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="win-btn text-[10px] min-w-0 px-2 py-0.5 h-auto flex items-center gap-1"
                    aria-label={`${project.name} GitHub`}
                  >
                    <GithubIcon />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="win-btn text-[10px] min-w-0 px-2 py-0.5 h-auto flex items-center gap-1"
                    aria-label={`${project.name} live site`}
                  >
                    <ExternalLinkIcon />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explorer status bar */}
      <div className="win-statusbar text-[11px] mt-0">
        <div className="win-statusbar-panel">
          {resume.projects.length} object(s)
        </div>
      </div>
    </SectionWrapper>
  )
}
