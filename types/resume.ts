export interface SocialLink {
  name: string
  url: string
  type: 'github' | 'linkedin' | 'email' | 'phone'
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  live?: string
  prize?: string
}

export interface Education {
  degree: string
  institution: string
  year: string
  gpa: string
}

export interface ResumeData {
  name: string
  shortHandle: string
  title: string
  location: string
  email: string
  phone: string
  bio: string
  relocationPreference: string[]
  socialLinks: SocialLink[]
  skillGroups: SkillGroup[]
  experience: ExperienceItem[]
  projects: Project[]
  education: Education[]
}
