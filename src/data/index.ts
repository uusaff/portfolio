import type { Project, Technology, Experience, Skill, Certification, Achievement, Education, Author, SocialLink, NavItem, Stat, FAQ, Testimonial, ProjectCategory } from '@/types'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'
import { Star, BookOpen, Award, GraduationCap, Cpu, Code, Terminal, Database, Globe, Zap } from 'lucide-react'

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
  { platform: 'Email', url: 'mailto:uussaff@gmail.com', icon: FaEnvelope, label: 'Email' },
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

export const stats: Stat[] = [
  { label: 'Projects Built', value: 7, suffix: '+', icon: 'folder-code' },
  { label: 'Technologies Used', value: 18, suffix: '+', icon: 'cpu' },
  { label: 'Open Source Repos', value: 15, suffix: '+', icon: 'github' },
  { label: 'GitHub Stars', value: 5, suffix: '+', icon: 'star' },
  { label: 'Courses Completed', value: 12, suffix: '+', icon: 'book' },
  { label: 'Coding Languages', value: 6, suffix: '+', icon: 'terminal' },
]

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
    company: 'Self-Employed / Freelance',
    role: 'Full-Stack Web Developer',
    location: 'Lahore, Pakistan',
    type: 'freelance',
    startDate: '2024-01',
    current: true,
    description: 'Developing full-stack web applications with modern tech stacks. Specializing in React-based SPAs with Firebase backends, glassmorphism UI design, and animation-rich user experiences.',
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

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'React Frontend Development',
    issuer: 'Self-Taught / Project-Based',
    date: '2024-01',
    credentialUrl: 'https://github.com/uusaff/portfolio',
  },
  {
    id: 'cert-2',
    name: 'Firebase Web Development',
    issuer: 'Self-Taught / Project-Based',
    date: '2024-03',
    credentialUrl: 'https://github.com/uusaff/nutrition-cal',
  },
]

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'AI-Powered App Integration',
    description: 'Integrated Anthropic SDK into Nutrition Cal for AI-based calorie estimation from food descriptions',
    date: '2024-06',
    issuer: 'Personal Project',
    icon: 'zap',
    link: 'https://github.com/uusaff/nutrition-cal',
  },
  {
    id: 'ach-2',
    title: 'Open Source Contributions',
    description: 'Maintained 7+ open source repositories on GitHub covering web apps, hardware control, and algorithms',
    date: '2024-01',
    issuer: 'GitHub',
    icon: 'github',
    link: 'https://github.com/uusaff',
  },
  {
    id: 'ach-3',
    title: 'Bluetooth LED Control Engine v4.0',
    description: 'Built a Python engine with 183 named lighting effects across 12 categories on asyncio architecture',
    date: '2024-05',
    issuer: 'Personal Project',
    icon: 'cpu',
    link: 'https://github.com/uusaff/bluetooth-led-controller',
  },
  {
    id: 'ach-4',
    title: 'C++ Stack Tower Balance Game',
    description: 'Designed and implemented a console game using stack data structures, successfully defended in oral viva',
    date: '2024-04',
    issuer: 'UMT Lahore',
    icon: 'code',
    link: 'https://github.com/uusaff/stack-tower-balance-game',
  },
  {
    id: 'ach-5',
    title: 'UMT GPA Calculator',
    description: 'Built a fully responsive GPA/CGPA calculator with glassmorphism design, animated validation, and PDF export',
    date: '2024-02',
    issuer: 'Personal Project',
    icon: 'graduation-cap',
    link: 'https://github.com/uusaff/umt-gpa-calculator',
  },
  {
    id: 'ach-6',
    title: 'Hardware-Software Integration',
    description: 'Developed a Bluetooth LED control system bridging Python software with MohuanLED hardware strips',
    date: '2024-04',
    issuer: 'Personal Project',
    icon: 'cpu',
    link: 'https://github.com/uusaff/bluetooth-led-controller',
  },
]

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
    id: 'proj-1',
    title: 'Nutrition Cal — AI-Powered Calorie Tracker',
    description: 'React app with Firebase backend for authentication and data storage. Features AI-powered calorie estimation using the Anthropic SDK via a Vercel-compatible serverless API route.',
    shortDescription: 'AI-powered calorie tracker with Firebase auth and Anthropic SDK integration',
    image: '/images/projects/nutrition-cal.jpg',
    images: ['/images/projects/nutrition-cal-1.jpg'],
    tags: ['React', 'Firebase', 'Anthropic SDK', 'Vercel', 'Serverless', 'Tailwind CSS'],
    category: 'full-stack',
    featured: true,
    githubUrl: 'https://github.com/uusaff/nutrition-cal',
    liveUrl: 'https://nutrition-cal.vercel.app',
    startDate: '2024-03',
    current: true,
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Integrating AI API for accurate calorie estimation from natural language food descriptions',
      'Building a responsive auth flow with Firebase while maintaining a seamless UX',
      'Deploying serverless API routes on Vercel for AI requests',
    ],
    solutions: [
      'Used Anthropic SDK with structured prompts for consistent calorie estimation',
      'Implemented Firebase Authentication with email/password and Google OAuth',
      'Created Vercel serverless functions for secure API key management',
    ],
    technologies: [
      { name: 'React', category: 'framework' },
      { name: 'Firebase', category: 'cloud' },
      { name: 'Anthropic SDK', category: 'library' },
      { name: 'Vercel', category: 'tool' },
      { name: 'Tailwind CSS', category: 'library' },
      { name: 'Node.js', category: 'framework' },
    ],
    metrics: [
      { label: 'AI Accuracy', value: '85%+', trend: 'up' },
      { label: 'Tech Stack', value: '5 tools', trend: 'up' },
    ],
  },
  {
    id: 'proj-2',
    title: 'Exam Tracker — Neural Edition',
    description: 'Premium SaaS-style exam tracker with a crimson/pink cyber palette and a canvas-based animated background. Rebuilt for performance with compositor-only animations, memoized components, and accessibility improvements.',
    shortDescription: 'Premium exam tracker with canvas animations and cyber aesthetic',
    image: '/images/projects/exam-tracker.jpg',
    images: ['/images/projects/exam-tracker-1.jpg'],
    tags: ['React', 'Canvas API', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    category: 'frontend',
    featured: true,
    githubUrl: 'https://github.com/uusaff/exam-tracker',
    startDate: '2024-05',
    current: true,
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Implementing compositor-only animations for smooth 60fps performance',
      'Designing a cohesive crimson/pink cyber palette with glassmorphism elements',
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
    image: '/images/projects/habit-tracker.jpg',
    images: ['/images/projects/habit-tracker-1.jpg'],
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Vite'],
    category: 'full-stack',
    featured: true,
    githubUrl: 'https://github.com/uusaff/habit-tracker',
    liveUrl: 'https://https://habit-tracker-nine-mu.vercel.app',
    startDate: '2026-02',
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Designing an intuitive habit tracking interface with monthly calendar views',
      'Implementing real-time data sync with Firebase Firestore',
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
    image: '/images/projects/gpa-calculator.jpg',
    images: ['/images/projects/gpa-calculator-1.jpg'],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    featured: true,
    githubUrl: 'https://github.com/uusaff/umt-gpa-calculator',
    liveUrl: 'https://umt-gpa-calculator.vercel.app',
    startDate: '2024-02',
    endDate: '2024-03',
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Implementing UMT-specific grading logic with real-time validation',
      'Creating a print-optimized PDF export with glassmorphism aesthetics',
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
    image: '/images/projects/portfolio.jpg',
    images: ['/images/projects/portfolio-1.jpg'],
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
      'Designing a cohesive visual motif (SignalPulse) that appears consistently across all pages',
      'Implementing smooth page transitions with Framer Motion',
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
    image: '/images/projects/led-controller.jpg',
    images: ['/images/projects/led-controller-1.jpg'],
    tags: ['Python', 'Bluetooth', 'asyncio', 'Hardware'],
    category: 'other',
    featured: true,
    githubUrl: 'https://github.com/uusaff/bluetooth-led-controller',
    startDate: '2024-01',
    current: true,
    role: 'Solo Developer',
    teamSize: 1,
    challenges: [
      'Reverse-engineering the MohuanLED Bluetooth protocol without documentation',
      'Building a non-blocking asyncio architecture for real-time effect transitions',
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
    image: '/images/projects/stack-tower.jpg',
    images: ['/images/projects/stack-tower-1.jpg'],
    tags: ['C++', 'Data Structures', 'Console', 'Game'],
    category: 'other',
    featured: false,
    githubUrl: 'https://github.com/uusaff/stack-tower-balance-game',
    startDate: '2024-04',
    endDate: '2024-04',
    role: 'Co-Developer',
    teamSize: 2,
    challenges: [
      'Implementing game mechanics using stack data structures for tower balance',
      'Working collaboratively with a partner under viva exam conditions',
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

export const testimonials: Testimonial[] = [
  {
    content: 'Yousaf\'s projects demonstrate a strong grasp of modern web technologies and a keen eye for design. His work on the UMT GPA Calculator shows he can build practical, user-facing tools that solve real problems.',
    author: 'Faculty Member',
    role: 'Computer Science Department',
    company: 'UMT Lahore',
  },
  {
    content: 'The Bluetooth LED Control Engine is a remarkable piece of work — taking a hardware project from basic control to a v4.0 engine with 183 effects shows dedication and systematic thinking.',
    author: 'Technical Reviewer',
    role: 'Open Source Community',
    company: 'GitHub',
  },
]

export const faqs: FAQ[] = [
  {
    question: 'What is your current focus as a developer?',
    answer: 'I\'m currently focused on full-stack web development with React, Node.js, Firebase, and Tailwind CSS. I\'m also deep-diving into Data Structures & Algorithms and exploring AI-integrated web applications.',
    category: 'Technical',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'I work primarily with React, Tailwind CSS, Framer Motion, Firebase, Node.js, and Vite on the frontend, with C++, Python, and .NET for backend and systems programming. I deploy on Vercel and use Git for version control.',
    category: 'Technical',
  },
  {
    question: 'Are you looking for internship or job opportunities?',
    answer: 'Yes! I\'m actively looking for software engineering internships and entry-level opportunities where I can apply my full-stack development skills and continue learning from experienced engineers.',
    category: 'Career',
  },
  {
    question: 'What kind of projects do you enjoy building?',
    answer: 'I enjoy building projects with a focus on aesthetics — glassmorphism, dark themes, and rich animations with Framer Motion. I also love hardware-software integration projects like my Bluetooth LED controller.',
    category: 'Projects',
  },
  {
    question: 'Do you collaborate on open source projects?',
    answer: 'Absolutely. I maintain 7+ repositories on GitHub and am always open to collaboration. Feel free to open issues or PRs on any of my projects.',
    category: 'Open Source',
  },
  {
    question: 'How can someone reach out to you?',
    answer: 'The best way is through email at uussaff@gmail.com or connecting on LinkedIn at linkedin.com/in/uusaff. I\'m always happy to chat about tech, projects, or potential collaborations.',
    category: 'Contact',
  },
]

export const coreValues = [
  {
    title: 'Full-Stack Craftsmanship',
    description: 'I believe in building complete, polished solutions from frontend to backend. Every project should be visually stunning, functionally robust, and maintainable.',
    icon: Code,
  },
  {
    title: 'Aesthetic Excellence',
    description: 'Glassmorphism, dark themes, smooth animations — the visual experience matters as much as the code. I strive to make every interface feel premium and intentional.',
    icon: Star,
  },
  {
    title: 'Continuous Learning',
    description: 'Technology evolves fast. I dedicate time to explore new tools, frameworks, and paradigms — from AI integration to hardware control — staying curious across domains.',
    icon: BookOpen,
  },
  {
    title: 'Practical Problem Solving',
    description: 'I build tools that solve real problems — GPA calculators for students, calorie trackers for health-conscious users, LED controllers for hobbyists. Code should serve people.',
    icon: Zap,
  },
  {
    title: 'Open Source & Collaboration',
    description: 'Sharing knowledge and code makes the community stronger. I maintain my projects publicly on GitHub and welcome contributions, feedback, and collaboration.',
    icon: Globe,
  },
  {
    title: 'Hardware-Software Integration',
    description: 'The line between digital and physical fascinates me. From Bluetooth LED controllers to systems programming, I enjoy working across the full stack of technology.',
    icon: Cpu,
  },
]

export const personalInterests = [
  { label: 'Web Development', description: 'Building full-stack apps with React, Firebase, and Tailwind CSS' },
  { label: 'Hardware Projects', description: 'Bluetooth LED controllers, IoT devices, and hardware-software integration' },
  { label: 'AI & Machine Learning', description: 'Exploring AI API integration and intelligent application features' },
  { label: 'Data Structures & Algorithms', description: 'Deep-diving into DSA for stronger problem-solving foundations' },
  { label: 'Open Source', description: 'Maintaining 7+ repositories on GitHub' },
  { label: 'UI/UX Design', description: 'Glassmorphism, dark themes, and animation-rich interfaces' },
]
