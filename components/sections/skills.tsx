import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'

export function Skills() {
  return (
    <SectionWrapper id="skills" title="Technical Skills - System Properties">
      <SectionLabel>skills.txt</SectionLabel>
      <h2 className="text-[14px] font-bold mb-4 text-[#000000]">Technical Skills</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {resume.skillGroups.map((group) => (
          <div key={group.category} className="win-groupbox" style={{ position: 'relative' }}>
            <span className="win-groupbox-label">{group.category}</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="win-raised text-[11px] px-2 py-0.5 bg-[#d4d0c8] text-[#000000] cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
