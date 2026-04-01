import { resume } from '@/data/resume'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="win-statusbar" style={{ paddingBottom: '36px' }}>
      <div className="win-statusbar-panel flex-1">
        {resume.name} &copy; {year}
      </div>
      <div className="win-statusbar-panel">
        Built with Next.js
      </div>
      <div className="win-statusbar-panel">
        Bengaluru, India
      </div>
    </footer>
  )
}
