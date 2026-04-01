import { resume } from '@/data/resume'
import { SectionWrapper, SectionLabel } from '@/components/layout/section-wrapper'
import { SocialLinks } from '@/components/shared/social-links'

export function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact - Send Message" dim>
      <SectionLabel>contact.txt</SectionLabel>

      <div className="max-w-lg">
        {/* Dialog-style message */}
        <div className="win-raised p-4 bg-[#d4d0c8] flex gap-4 items-start mb-4">
          {/* Info icon */}
          <div
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[18px]"
            style={{ background: '#000080' }}
            aria-hidden="true"
          >
            i
          </div>
          <div>
            <p className="font-bold text-[13px] mb-1 text-[#000000]">
              Let&apos;s build something together.
            </p>
            <p className="text-[11px] text-[#000000] leading-relaxed">
              Open to full-time roles, freelance projects, and interesting collaborations.
              If you have an idea or a problem worth solving — reach out.
            </p>
          </div>
        </div>

        {/* Email field */}
        <div className="win-groupbox mb-4" style={{ position: 'relative' }}>
          <span className="win-groupbox-label">Email Address</span>
          <div className="flex gap-2 items-center mt-2">
            <input
              type="email"
              className="win-input flex-1"
              value={resume.email}
              readOnly
              aria-label="Email address"
            />
            <a
              href={`mailto:${resume.email}`}
              className="win-btn win-btn-default text-[11px]"
            >
              Send Mail
            </a>
          </div>
        </div>

        {/* Social group box */}
        <div className="win-groupbox" style={{ position: 'relative' }}>
          <span className="win-groupbox-label">Find Me Online</span>
          <div className="mt-3">
            <SocialLinks
              links={resume.socialLinks.filter((l) => l.type !== 'phone')}
              size="md"
              className="gap-4"
            />
          </div>
        </div>

        {/* OK / Cancel buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <a href={`mailto:${resume.email}`} className="win-btn win-btn-default text-[11px]">
            OK
          </a>
          <button className="win-btn text-[11px]">Cancel</button>
        </div>
      </div>
    </SectionWrapper>
  )
}
