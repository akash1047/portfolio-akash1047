import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'

const stats = [
  { value: '~2 yrs', label: 'Professional Exp.' },
  { value: '100K+', label: 'Users Scaled To' },
  { value: '4', label: 'Open-source Projects' },
  { value: '8.3', label: 'CGPA (B.Tech CS)' },
]

export function About() {
  return (
    <SectionWrapper id="about" title="About Me - Profile Properties" dim>
      <SectionLabel>about.txt</SectionLabel>
      <h2 className="text-[14px] font-bold mb-4 text-[#000000]">About Me</h2>

      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div>
          <div className="win-sunken p-3 bg-white text-[11px] leading-relaxed text-[#000000] mb-3">
            <p>{resume.bio}</p>
          </div>
          <div className="win-sunken p-3 bg-white text-[11px] leading-relaxed text-[#000000] mb-3">
            <p>
              Started obsessing over how computers work at the lowest level — writing bare-metal
              code, building operating system kernels, and implementing compilers from scratch.
            </p>
          </div>
          <p className="text-[11px] text-[#606060]">
            Open to relocation:{' '}
            <span className="text-[#000080] font-bold">
              {resume.relocationPreference.join(' \u00B7 ')}
            </span>
          </p>
        </div>

        {/* Stats as a Win2K group box grid */}
        <div className="win-groupbox" style={{ position: 'relative' }}>
          <span className="win-groupbox-label">System Info</span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {stats.map((stat) => (
              <div key={stat.label} className="win-raised p-2 bg-[#d4d0c8] text-center">
                <p className="text-[14px] font-bold text-[#000080]">{stat.value}</p>
                <p className="text-[10px] text-[#606060]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
