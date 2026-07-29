'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ChevronRight, ChevronDown, CheckCircle, Code, Database, Cloud, Globe, Terminal, Layers, Shield, Zap, Star, GraduationCap, Briefcase } from 'lucide-react'
import { experiences, skills, education } from '@/data'
import type { Skill, Education } from '@/types'
import { staggerContainer, fadeSlideUp, scaleIn, fadeIn, springSoft, easeOutSmooth, cardHover } from '@/lib/animations'

const categoryIcons = {
  language: Code,
  framework: Layers,
  library: Globe,
  tool: Terminal,
  database: Database,
  cloud: Cloud,
  devops: Shield,
  testing: CheckCircle,
  other: Star,
}

const categoryColors = {
  language: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  framework: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  library: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
  tool: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  database: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  cloud: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
  devops: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  testing: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  other: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
}

const skillCategories = [
  { key: 'language', label: 'Languages', icon: Code },
  { key: 'framework', label: 'Frameworks', icon: Layers },
  { key: 'library', label: 'Libraries', icon: Globe },
  { key: 'tool', label: 'Tools', icon: Terminal },
  { key: 'database', label: 'Databases', icon: Database },
  { key: 'cloud', label: 'Cloud', icon: Cloud },
  { key: 'devops', label: 'DevOps', icon: Shield },
  { key: 'testing', label: 'Testing', icon: CheckCircle },
]

export default function ExperiencePage() {
  const prefersReducedMotion = useReducedMotion()
  const motionSafe = !prefersReducedMotion
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'education'>('experience')
  const [expandedExp, setExpandedExp] = useState<string | null>(null)

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ]

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24" aria-labelledby="experience-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={motionSafe ? { opacity: 1, y: 0 } : {}}
            transition={springSoft}
          >
            <Badge variant="default" className="mb-4">
              Career Journey
            </Badge>
            <h1 id="experience-heading" className="text-display-lg mb-6">
              Experience & Skills
            </h1>
            <p className="text-body-xl text-muted-foreground">
              Computer Science student at UMT, Lahore building modern web applications
              with React, Firebase, and Tailwind CSS. Passionate about full-stack development.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.nav
              className="md:w-56 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={motionSafe ? { opacity: 1, x: 0 } : {}}
              transition={{ ...springSoft, delay: 0.1 }}
            >
              <div className="glass-card rounded-2xl p-2 sticky top-24">
                <div className="flex md:flex-col gap-1" role="tablist" aria-label="Experience sections">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls={`${tab.id}-panel`}
                      id={`${tab.id}-tab`}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-xl text-body-md font-medium transition-all duration-200 w-full text-left',
                        activeTab === tab.id
                          ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                      )}
                      whileHover={motionSafe ? { scale: 1.02 } : {}}
                      whileTap={motionSafe ? { scale: 0.98 } : {}}
                    >
                      <tab.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <span>{tab.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.nav>

            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, x: 20 }}
              animate={motionSafe ? { opacity: 1, x: 0 } : {}}
              transition={{ ...springSoft, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <div
                  key={activeTab}
                  id={`${activeTab}-panel`}
                  role="tabpanel"
                  aria-labelledby={`${activeTab}-tab`}
                  className="space-y-6"
                >
                  {activeTab === 'experience' && <ExperienceTimeline exps={experiences} expandedExp={expandedExp} setExpandedExp={setExpandedExp} />}
                  {activeTab === 'skills' && <SkillsSection skills={skills} />}
                  {activeTab === 'education' && <EducationSection education={education} />}
                </div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

function ExperienceTimeline({ exps, expandedExp, setExpandedExp }: { exps: typeof experiences; expandedExp: string | null; setExpandedExp: (id: string | null) => void }) {
  const prefersReducedMotion = useReducedMotion()
  const motionSafe = !prefersReducedMotion
  return (
    <div className="relative">
      <motion.div
        className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent"
        initial={{ scaleY: 0 }}
        animate={motionSafe ? { scaleY: 1 } : {}}
        style={{ transformOrigin: 'top' }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        aria-hidden="true"
      />
      {exps.map((exp, index) => (
        <motion.article
          key={exp.id}
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={index}
          className="relative pl-12 pb-12 last:pb-0"
        >
          <div className="absolute left-[1.125rem] top-1 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-background border-2 border-primary z-10" aria-hidden="true">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>

          <motion.div whileHover={motionSafe ? { y: -3 } : {}} transition={springSoft}>
          <Card className="h-full">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-heading-md font-semibold">{exp.role}</span>
                    {exp.current && (
                      <Badge variant="default" size="sm">Current</Badge>
                    )}
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-body-sm text-muted-foreground">
                    {exp.location} · {exp.type}
                  </p>
                </div>
                <div className="text-right whitespace-nowrap hidden sm:block">
                  <p className="text-body-sm font-medium">
                    {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    {' '}—{' '}
                    {exp.current ? 'Present' : new Date(exp.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <p className="text-body-md text-muted-foreground mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.slice(0, 8).map((tech) => (
                  <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                ))}
                {exp.technologies.length > 8 && (
                  <Badge variant="outline" size="sm">+{exp.technologies.length - 8} more</Badge>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                aria-expanded={expandedExp === exp.id}
              >
                {expandedExp === exp.id ? 'Hide Details' : 'Show Details'}
                <ChevronDown className={cn('h-4 w-4 ml-2 transition-transform', expandedExp === exp.id && 'rotate-180')} />
              </Button>

              <AnimatePresence>
                {expandedExp === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-4"
                  >
                    <Separator />
                    <h4 className="text-heading-sm font-semibold">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3 text-body-md text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
          </motion.div>
        </motion.article>
      ))}
    </div>
  )
}

function SkillsSection({ skills: skls }: { skills: Skill[] }) {
  const prefersReducedMotion = useReducedMotion()
  const motionSafe = !prefersReducedMotion
  return (
    <div className="space-y-10">
      {skillCategories.map((cat) => {
        const catSkills = skls.filter((s) => s.category === cat.key)
        if (catSkills.length === 0) return null

        return (
          <motion.div
            key={cat.key}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <cat.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="text-heading-md font-semibold">{cat.label}</h3>
              <span className="text-body-sm text-muted-foreground">({catSkills.length})</span>
            </div>
            <motion.div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {catSkills.map((skill) => (
                <motion.div key={skill.name} variants={scaleIn} whileHover={motionSafe ? { y: -4 } : {}}>
                  <Card className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-heading-sm font-semibold">{skill.name}</h4>
                      <Badge variant="outline" size="sm" className={categoryColors[skill.category]}>
                        {skill.yearsOfExperience}+ yrs
                      </Badge>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </div>
                    {skill.description && (
                      <p className="text-body-sm text-muted-foreground mt-2 line-clamp-2">{skill.description}</p>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

function EducationSection({ education: edu }: { education: Education[] }) {
  const prefersReducedMotion = useReducedMotion()
  const motionSafe = !prefersReducedMotion
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {edu.map((edu) => (
        <motion.article
          key={edu.id}
          variants={fadeSlideUp}
          whileHover={motionSafe ? { y: -3 } : {}}
        >
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-heading-md font-semibold">{edu.degree} in {edu.field}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-body-sm text-muted-foreground">
                  {new Date(edu.startDate).getFullYear()} — {edu.current ? 'Present' : new Date(edu.endDate || '').getFullYear()}
                </p>
              </div>
            </div>
          </Card>
        </motion.article>
      ))}
    </motion.div>
  )
}
