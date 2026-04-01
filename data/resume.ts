import type { ResumeData } from '@/types/resume'

export const resume: ResumeData = {
  name: 'Akash Lohar',
  shortHandle: 'akash1047',
  title: 'Founding Software Engineer',
  location: 'Bengaluru, Karnataka, India',
  email: 'akashlohar1047@gmail.com',
  phone: '+91 6297386391',
  bio: 'B.Tech CS graduate with ~2 years as a Founding Software Engineer. Specialized in full-stack engineering, DevOps, and systems programming — with a deep obsession for low-level systems, real-time rendering, and game engine development.',
  relocationPreference: ['Bengaluru', 'Kolkata', 'Hyderabad', 'Pune'],
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/akash1047', type: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akash-lohar-349681224', type: 'linkedin' },
    { name: 'Email', url: 'mailto:akashlohar1047@gmail.com', type: 'email' },
    { name: 'Phone', url: 'tel:+916297386391', type: 'phone' },
  ],
  skillGroups: [
    {
      category: 'Languages',
      skills: ['Rust', 'C++', 'C', 'Go', 'Zig', 'TypeScript', 'Python', 'Kotlin', 'Java', 'Assembly'],
    },
    {
      category: 'Frameworks',
      skills: ['Next.js', 'React', 'Node.js', 'Spring Boot', 'Flask', 'Tailwind CSS'],
    },
    {
      category: 'Tools & Cloud',
      skills: ['GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Nginx'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'TigerGraph'],
    },
  ],
  experience: [
    {
      title: 'Founding Software Engineer',
      company: 'Lelo.Rent',
      location: 'Bengaluru',
      period: 'Aug 2024 – Dec 2025',
      bullets: [
        'Engineered core microservices architecture on GCP Cloud Run using Node.js, Express, and Next.js.',
        'Scaled platform infrastructure from 0 → 100K users by optimizing infrastructure and backend logic.',
        'Designed CI/CD pipelines via GitHub Actions and Google Cloud Build for automated deployments.',
        'Implemented comprehensive Jest and Cypress test suites, significantly improving system reliability.',
        'Directed engineering sprints, mentored junior developers, and integrated payment & analytics services.',
      ],
    },
  ],
  projects: [
    {
      name: 'Firefly OS',
      description: 'A bare-metal OS kernel written in Rust featuring custom memory management and a built-in testing framework — running on real hardware with no OS underneath.',
      tags: ['Rust', 'Systems', 'bare-metal', 'OS Kernel'],
      github: 'https://github.com/akash1047',
    },
    {
      name: 'C Interpreter (CREPL)',
      description: 'A Rust-based interpreter for C — includes a full lexer, parser, and AST generator. Won 1st prize at an inter-college competition.',
      tags: ['Rust', 'Compilers', 'AST', 'Interpreter'],
      prize: '1st Prize — Inter-college Competition',
      github: 'https://github.com/akash1047',
    },
    {
      name: 'Pocket Shield',
      description: 'Secure MFA authenticator built with Go and Kotlin, using cryptographic key matching for zero-trust multi-factor authentication.',
      tags: ['Go', 'Kotlin', 'MFA', 'Cryptography', 'Security'],
      github: 'https://github.com/akash1047',
    },
    {
      name: 'Rescue Bharat',
      description: 'Real-time disaster alert and inventory management system for rescue agencies — helping coordinate relief operations during emergencies.',
      tags: ['Real-time', 'Disaster Management', 'Systems'],
      github: 'https://github.com/akash1047',
    },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Techno International Batanagar',
      year: '2025',
      gpa: '8.3 / 10',
    },
  ],
}
