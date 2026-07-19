export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  images: string[]
  tags: string[]
  category: ProjectCategory
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  caseStudyUrl?: string
  startDate: string
  endDate?: string
  current?: boolean
  role: string
  teamSize?: number
  challenges: string[]
  solutions: string[]
  technologies: Technology[]
  metrics?: ProjectMetric[]
  testimonial?: Testimonial
}

export type ProjectCategory =
  | 'full-stack'
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'devops'
  | 'ai-ml'
  | 'open-source'
  | 'other'

export interface Technology {
  name: string
  category: TechCategory
  icon?: string
  proficiency?: number
}

export type TechCategory =
  | 'language'
  | 'framework'
  | 'library'
  | 'tool'
  | 'database'
  | 'cloud'
  | 'devops'
  | 'testing'
  | 'other'

export interface ProjectMetric {
  label: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'neutral'
}

export interface Testimonial {
  content: string
  author: string
  role: string
  company: string
  avatar?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  location: string
  type: ExperienceType
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
  color?: string
}

export type ExperienceType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance'

export interface Skill {
  name: string
  category: TechCategory
  proficiency: number
  yearsOfExperience: number
  icon?: string
  description?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  logo?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  issuer?: string
  icon?: string
  link?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  current: boolean
  gpa?: string
  honors?: string[]
  logo?: string
  location?: string
}

export interface Author {
  name: string
  role: string
  avatar: string
  bio: string
  twitter?: string
  linkedin?: string
  github?: string
  website?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
}

export interface Stat {
  label: string
  value: string | number
  suffix?: string
  prefix?: string
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon?: string
}

export interface FAQ {
  question: string
  answer: string
  category?: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  company?: string
}

export interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
}

export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
}

export interface ViewportConfig {
  once?: boolean
  margin?: string
  amount?: number | string
}

export type Theme = 'light' | 'dark' | 'system'

export interface UserPreferences {
  theme: Theme
  reducedMotion: boolean
  highContrast: boolean
}

export interface CursorPosition {
  x: number
  y: number
}

export interface ScrollPosition {
  x: number
  y: number
  progress: number
}