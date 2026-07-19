import type { Metadata } from 'next'
import { AboutPageContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn about Yousaf — Computer Science student at UMT Lahore and full-stack web developer. Background, projects, skills, and core values.',
  openGraph: {
    title: 'About Yousaf — Computer Science Student & Full-Stack Developer',
    description:
      'Learn about Yousaf — Computer Science student at UMT Lahore and full-stack web developer.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutPageContent />
    </>
  )
}