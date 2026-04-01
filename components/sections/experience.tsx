import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'

export function Experience() {
  return (
    <SectionWrapper id="experience" title="Work Experience - Event Viewer" dim>
      <SectionLabel>experience.txt</SectionLabel>
      <h2 className="text-[14px] font-bold mb-4 text-[#000000]">Work Experience</h2>

      {/* Table-like layout mimicking Windows Event Viewer */}
      <div className="win-sunken bg-white overflow-x-auto mb-6">
        <table className="w-full text-[11px] border-collapse">
          <thead>
            <tr style={{ background: '#d4d0c8' }}>
              <th className="win-raised text-left px-2 py-1 font-bold text-[11px] whitespace-nowrap">Type</th>
              <th className="win-raised text-left px-2 py-1 font-bold text-[11px] whitespace-nowrap">Company</th>
              <th className="win-raised text-left px-2 py-1 font-bold text-[11px] whitespace-nowrap">Role</th>
              <th className="win-raised text-left px-2 py-1 font-bold text-[11px] whitespace-nowrap">Period</th>
              <th className="win-raised text-left px-2 py-1 font-bold text-[11px] whitespace-nowrap">Location</th>
            </tr>
          </thead>
          <tbody>
            {resume.experience.map((item, i) => (
              <tr
                key={`${item.company}-${i}`}
                className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0f0f0]'}
              >
                <td className="px-2 py-1 border border-[#d4d0c8]">
                  <svg viewBox="0 0 12 12" width="12" height="12" className="inline mr-1" aria-hidden="true">
                    <circle cx="6" cy="6" r="5" fill="#000080" />
                    <path d="M6 3v4M6 8v1" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Info
                </td>
                <td className="px-2 py-1 border border-[#d4d0c8] font-bold text-[#000080]">{item.company}</td>
                <td className="px-2 py-1 border border-[#d4d0c8]">{item.title}</td>
                <td className="px-2 py-1 border border-[#d4d0c8] whitespace-nowrap">{item.period}</td>
                <td className="px-2 py-1 border border-[#d4d0c8]">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail panel for most recent job */}
      {resume.experience[0] && (
        <div className="win-groupbox" style={{ position: 'relative' }}>
          <span className="win-groupbox-label">
            Details &mdash; {resume.experience[0].company}
          </span>
          <ul className="space-y-1 mt-2">
            {resume.experience[0].bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-[11px] text-[#000000] leading-relaxed">
                <span className="text-[#000080] shrink-0" aria-hidden="true">&#x25BA;</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Education */}
      <div className="mt-6 pt-4" style={{ borderTop: '1px solid #808080' }}>
        <SectionLabel>education.txt</SectionLabel>
        <h2 className="text-[13px] font-bold mb-3 text-[#000000]">Education</h2>
        {resume.education.map((edu) => (
          <div
            key={edu.institution}
            className="win-raised p-3 bg-[#d4d0c8] flex flex-wrap items-baseline gap-x-3 gap-y-1"
          >
            <span className="font-bold text-[11px]">{edu.degree}</span>
            <span className="text-[#000080] text-[11px]">{edu.institution}</span>
            <span className="text-[#606060] text-[11px]">{edu.year}</span>
            <span className="text-[#606060] text-[11px]">CGPA: {edu.gpa}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
