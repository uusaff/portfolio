import type { Project, Technology, Experience, Skill, Education, Author, SocialLink, NavItem, ProjectCategory } from '@/types'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export type { ProjectCategory }

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/uusaff', icon: FaGithub, label: 'GitHub' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/uusaff', icon: FaLinkedin, label: 'LinkedIn' },
  { platform: 'Instagram', url: 'https://instagram.com/uusaff', icon: FaInstagram, label: 'Instagram' },
  { platform: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=uussaff@gmail.com', icon: FaEnvelope, label: 'Email' },
  { platform: 'Facebook', url: 'https://facebook.com', icon: FaFacebook, label: 'Facebook' },
]

export const author: Author = {
  name: 'Yousaf',
  role: 'Computer Science Student · Full-Stack Web Developer',
  avatar: '/images/avatar.jpg',
  bio: 'Computer Science student at UMT, Lahore. Full-stack web developer passionate about building efficient software with glassmorphism aesthetics, dark themes, and animation-rich UI powered by Framer Motion and Tailwind CSS.',
  twitter: 'https://twitter.com/uusaff',
  linkedin: 'https://linkedin.com/in/uusaff',
  github: 'https://github.com/uusaff',
  website: 'https://github.com/uusaff',
}

export const technologies: Technology[] = [
  { name: 'React', category: 'framework', proficiency: 90 },
  { name: 'Tailwind CSS', category: 'library', proficiency: 92 },
  { name: 'HTML5', category: 'language', proficiency: 95 },
  { name: 'CSS3', category: 'language', proficiency: 90 },
  { name: 'Framer Motion', category: 'library', proficiency: 85 },
  { name: 'Vite', category: 'tool', proficiency: 88 },
  { name: 'Node.js', category: 'framework', proficiency: 80 },
  { name: 'C++', category: 'language', proficiency: 75 },
  { name: 'Python', category: 'language', proficiency: 78 },
  { name: '.NET', category: 'framework', proficiency: 65 },
  { name: 'Firebase', category: 'cloud', proficiency: 82 },
  { name: 'Assembly', category: 'language', proficiency: 40 },
  { name: 'JavaScript', category: 'language', proficiency: 92 },
  { name: 'Git', category: 'tool', proficiency: 88 },
  { name: 'GitHub', category: 'tool', proficiency: 90 },
  { name: 'Vercel', category: 'tool', proficiency: 85 },
  { name: 'VS Code', category: 'tool', proficiency: 95 },
  { name: 'Data Structures & Algorithms', category: 'other', proficiency: 75 },
  { name: 'OOP', category: 'other', proficiency: 80 },
  { name: 'Firebase Auth', category: 'cloud', proficiency: 80 },
  { name: 'Serverless', category: 'cloud', proficiency: 75 },
  { name: 'MongoDB', category: 'database', proficiency: 70 },
]

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'University of Management & Technology (UMT)',
    role: 'Computer Science Student',
    location: 'Lahore, Pakistan',
    type: 'full-time',
    startDate: '2025-02',
    current: true,
    description: 'Pursuing a degree in Computer Science with a focus on full-stack web development, data structures & algorithms, and software engineering principles.',
    achievements: [
      'Building full-stack web applications using React, Node.js, Firebase, and Tailwind CSS',
      'Developing strong foundations in Data Structures & Algorithms and OOP principles',
      'Working on projects with glassmorphism aesthetics, dark themes, and Framer Motion animations',
      'Exploring AI-integrated applications and serverless architectures',
    ],
    technologies: ['React', 'Node.js', 'C++', 'Python', 'Firebase', 'Tailwind CSS', 'Git', 'VS Code'],
  },
  {
    id: 'exp-2',
    company: 'Self-Employed',
    role: 'Independent Developer',
    location: 'Lahore, Pakistan',
    type: 'freelance',
    startDate: '2024-01',
    current: true,
    description: 'Building full-stack and systems-level projects — from async hardware controllers to custom interaction engines. Focused on engineering depth and polished, high-fidelity UIs.',
    achievements: [
      'Built Nutrition Cal — AI-powered calorie tracker with Firebase auth and Anthropic SDK integration',
      'Created Exam Tracker — premium SaaS-style exam tracker with canvas-based animated backgrounds',
      'Developed UMT GPA/CGPA Calculator used by fellow students with glassmorphism redesign and PDF export',
      'Designed Bluetooth LED Control Engine v4.0 with 183 lighting effects across 12 categories',
    ],
    technologies: ['React', 'Firebase', 'Vite', 'Node.js', 'Python', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  },
]

export const skills: Skill[] = technologies.map((tech, index) => ({
  ...tech,
  proficiency: tech.proficiency || 80,
  yearsOfExperience: Math.round((tech.proficiency || 80) / 20),
  description: `Skilled in ${tech.name} with hands-on project experience`,
}))

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'University of Management & Technology (UMT)',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2025-02',
    current: true,
    location: 'Lahore, Pakistan',
  },
]

export const projects: Project[] = [
  {
    id: 'proj-2',
    title: 'Exam Tracker — Neural Edition',
    description: 'Premium SaaS-style exam tracker with a crimson/pink cyber palette and a canvas-based animated background. Rebuilt for performance with compositor-only animations, memoized components, and accessibility improvements.',
    shortDescription: 'Premium exam tracker with canvas animations and cyber aesthetic',
    image: '',
    images: [],
    tags: ['React', 'Canvas API', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    category: 'frontend',
    featured: true,
    githubUrl: 'https://github.com/uusaff/exams-tracker',
    liveUrl: 'https://usafs-tracker.vercel.app',
    startDate: '2024-05',
    current: true,
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Achieving consistent 60fps canvas animations while maintaining complex reactive state across 15+ animated components',
      'Building a cohesive crimson/pink design system without a UI library — all glassmorphism, typography, and palette tokens hand-defined',
    ],
    solutions: [
      'Used CSS transforms and opacity-only animations to leverage compositor threads',
      'Built a canvas-based animated background that adapts to the cyber theme',
    ],
    technologies: [
      { name: 'React', category: 'framework' },
      { name: 'Canvas API', category: 'library' },
      { name: 'Framer Motion', category: 'library' },
      { name: 'Tailwind CSS', category: 'library' },
      { name: 'Vite', category: 'tool' },
    ],
    metrics: [
      { label: 'Performance', value: '60fps', trend: 'up' },
      { label: 'Animations', value: '15+', trend: 'up' },
    ],
  },
  {
    id: 'proj-3',
    title: 'Habit Tracker',
    description: 'Full habit-tracking app with Firebase authentication. Features monthly views, dashboard statistics, and a tropical UI theme.',
    shortDescription: 'Habit tracker with Firebase auth and monthly dashboard views',
    image: '',
    images: [],
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Vite'],
    category: 'full-stack',
    featured: true,
    githubUrl: 'https://github.com/uusaff/Habit-Tracker',
    liveUrl: 'https://habit-tracker-nine-mu.vercel.app',
    startDate: '2026-02',
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Designing a real-time sync architecture between Firestore and local state without race conditions or stale data',
      'Building a custom calendar component with streak tracking that handles edge cases (timezones, month boundaries, missed days)',
    ],
    solutions: [
      'Built a custom calendar component with streak tracking and visual progress indicators',
      'Used Firebase onSnapshot for real-time habit data synchronization',
    ],
    technologies: [
      { name: 'React', category: 'framework' },
      { name: 'Firebase', category: 'cloud' },
      { name: 'Tailwind CSS', category: 'library' },
      { name: 'Vite', category: 'tool' },
    ],
    metrics: [
      { label: 'Features', value: '10+', trend: 'up' },
      { label: 'UI Theme', value: 'Tropical', trend: 'up' },
    ],
  },
  {
    id: 'proj-4',
    title: 'UMT GPA / CGPA Calculator',
    description: 'Fully responsive React app to calculate semester GPA and Cumulative CGPA. Features real-time grading logic with dynamic animated visual validation, glassmorphism redesign, and print-optimized PDF export.',
    shortDescription: 'GPA/CGPA calculator with animated validation and PDF export',
    image: '',
    images: [],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    featured: true,
    githubUrl: 'https://github.com/uusaff/umt-gpa-cgpa-calculator',
    liveUrl: 'https://umt-gpa-calculator.vercel.app',
    startDate: '2024-02',
    endDate: '2024-03',
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Implementing UMT-specific weighted grading logic with real-time validation across semesters — one incorrect formula would break every calculation',
      'Building a print-optimized PDF layout that preserves glassmorphism aesthetics while stripping interactive elements',
    ],
    solutions: [
      'Built a dynamic grading engine that validates inputs and calculates GPA/CGPA in real-time',
      'Designed a print-specific CSS layout for clean PDF exports',
    ],
    technologies: [
      { name: 'React', category: 'framework' },
      { name: 'Vite', category: 'tool' },
      { name: 'Tailwind CSS', category: 'library' },
      { name: 'Framer Motion', category: 'library' },
    ],
    metrics: [
      { label: 'Calculation Accuracy', value: '100%', trend: 'up' },
      { label: 'Export Formats', value: 'PDF', trend: 'up' },
    ],
  },
  {
    id: 'proj-5',
    title: 'Personal Portfolio',
    description: 'Built with Vite, React Router, and Framer Motion. Features a consistent custom "SignalPulse" SVG motif throughout the site with glassmorphism design and dark theme.',
    shortDescription: 'Personal portfolio with SignalPulse motif and glassmorphism design',
    image: '',
    images: [],
    tags: ['React', 'Vite', 'React Router', 'Framer Motion', 'Tailwind CSS'],
    category: 'frontend',
    featured: true,
    githubUrl: 'https://github.com/uusaff/portfolio',
    liveUrl: 'https://portfolio-uusaff.vercel.app',
    startDate: '2024-01',
    current: true,
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Designing a reusable SVG motif system (SignalPulse) that maintains visual consistency across 6+ pages without duplicating animation logic',
      'Architecting smooth page transitions with Framer Motion while preserving scroll position and avoiding layout shifts',
    ],
    solutions: [
      'Created reusable SVG components for the SignalPulse motif pattern',
      'Used AnimatePresence for seamless route transition animations',
    ],
    technologies: [
      { name: 'React', category: 'framework' },
      { name: 'Vite', category: 'tool' },
      { name: 'React Router', category: 'library' },
      { name: 'Framer Motion', category: 'library' },
      { name: 'Tailwind CSS', category: 'library' },
    ],
    metrics: [
      { label: 'Pages', value: '6', trend: 'up' },
      { label: 'Animations', value: '20+', trend: 'up' },
    ],
  },
  {
    id: 'proj-6',
    title: 'Bluetooth LED Control Engine',
    description: 'Python engine to control a MohuanLED Bluetooth strip. Grew from a basic controller script into a v4.0 engine with 183 named lighting effects across 12 categories, built on an asyncio non-blocking architecture.',
    shortDescription: 'Python Bluetooth LED engine with 183 lighting effects across 12 categories',
    image: '',
    images: [],
    tags: ['Python', 'Bluetooth', 'asyncio', 'Hardware'],
    category: 'other',
    featured: true,
    githubUrl: 'https://github.com/uusaff/bluetooth-led-controller',
    startDate: '2024-01',
    current: true,
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Reverse-engineering the MohuanLED Bluetooth protocol from raw packet captures — no documentation, no SDK, just binary data',
      'Building a non-blocking asyncio event loop that schedules 183 effect transitions without missed beats or latency spikes',
    ],
    solutions: [
      'Analyzed Bluetooth packets to understand the proprietary protocol',
      'Implemented asyncio-based event loop for smooth effect scheduling and transitions',
    ],
    technologies: [
      { name: 'Python', category: 'language' },
      { name: 'asyncio', category: 'library' },
      { name: 'Bluetooth', category: 'tool' },
    ],
    metrics: [
      { label: 'Lighting Effects', value: '183', trend: 'up' },
      { label: 'Effect Categories', value: '12', trend: 'up' },
      { label: 'Version', value: 'v4.0', trend: 'up' },
    ],
  },
  {
    id: 'proj-7',
    title: 'C++ Stack Tower Balance Game',
    description: 'Console game built in C++ using stack data structures. Built with a partner and successfully defended in an oral viva exam.',
    shortDescription: 'Console game built with C++ stack data structures',
    image: '',
    images: [],
    tags: ['C++', 'Data Structures', 'Console', 'Game'],
    category: 'other',
    featured: false,
    githubUrl: 'https://github.com/uusaff/stack-tower-balance-game',
    startDate: '2024-04',
    endDate: '2024-04',
    role: 'Co-Developer',
    teamSize: 2,
    challenges: [
      'Designing stack-based game mechanics where every push/pop operation directly affects tower stability and scoring state',
      'Coordinating with a partner under oral viva conditions — code had to be modular enough for pair debugging on the spot',
    ],
    solutions: [
      'Designed the game logic around stack push/pop operations for tower manipulation',
      'Created modular code structure for team collaboration and testing',
    ],
    technologies: [
      { name: 'C++', category: 'language' },
      { name: 'Data Structures', category: 'other' },
    ],
    metrics: [
      { label: 'Team Size', value: '2', trend: 'up' },
      { label: 'Viva Result', value: 'Passed', trend: 'up' },
    ],
  },
]


