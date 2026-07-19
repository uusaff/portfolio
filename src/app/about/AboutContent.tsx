'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Download, Award, GraduationCap, Star, BookOpen, ExternalLink, CheckCircle, ChevronDown, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from 'react-icons/fa'
import { stats, experiences, education, certifications, achievements, coreValues, personalInterests, author, socialLinks } from '@/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function AboutPageContent() {
  const [expandedExp, setExpandedExp] = useState<string | null>(null)

  const categoryIcons = {
    language: BookOpen,
    framework: BookOpen,
    library: BookOpen,
    tool: BookOpen,
    database: BookOpen,
    cloud: BookOpen,
    devops: BookOpen,
    testing: BookOpen,
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
    { key: 'language', label: 'Languages', icon: BookOpen },
    { key: 'framework', label: 'Frameworks', icon: BookOpen },
    { key: 'library', label: 'Libraries', icon: BookOpen },
    { key: 'tool', label: 'Tools', icon: BookOpen },
    { key: 'database', label: 'Databases', icon: BookOpen },
    { key: 'cloud', label: 'Cloud', icon: BookOpen },
    { key: 'devops', label: 'DevOps', icon: BookOpen },
    { key: 'testing', label: 'Testing', icon: BookOpen },
    { key: 'other', label: 'Other', icon: Star },
  ]

  return (
    <>
      <section className="section relative overflow-hidden pt-32 lg:pt-40" aria-labelledby="about-heading">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'var(--color-bg-mesh)' }} aria-hidden="true" />
        <div className="container-custom relative">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="default" className="mb-4">
              About Me
            </Badge>
            <h1 id="about-heading" className="text-display-lg mb-6">
              Hi, I'm <span className="gradient-text">Yousaf</span>
            </h1>
            <p className="text-body-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Computer Science student at UMT, Lahore with a passion for full-stack web development.
              I build modern applications with React, Firebase, Tailwind CSS, and Framer Motion —
              focusing on clean aesthetics, dark themes, and animation-rich interfaces.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <div className="text-display-md font-bold gradient-text mb-2">
                  {stat.prefix || ''}{stat.value}{stat.suffix || ''}
                </div>
                <div className="text-body-md text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-muted/30" aria-labelledby="journey-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              Professional Journey
            </Badge>
            <h2 id="journey-heading" className="text-display-md mb-6">
              Where I've Been
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent" aria-hidden="true" />
            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {experiences.map((exp) => (
                <motion.article key={exp.id} variants={itemVariants} className="relative pl-12">
                  <div className="absolute left-[1.125rem] top-1 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-background border-2 border-primary z-10" aria-hidden="true">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>

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
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              Core Values
            </Badge>
            <h2 id="values-heading" className="text-display-md mb-6">
              Principles I Live By
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {coreValues.map((value) => (
              <motion.article key={value.title} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-heading-md font-semibold mb-2">{value.title}</h3>
                    <p className="text-body-md text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-muted/30" aria-labelledby="education-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              Education & Certifications
            </Badge>
            <h2 id="education-heading" className="text-display-md mb-6">
              Academic Background
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {education.map((edu) => (
              <motion.article key={edu.id} variants={itemVariants}>
                <Card className="h-full p-6">
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
                      {edu.honors && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {edu.honors.map((honor) => (
                            <Badge key={honor} variant="secondary" className="text-body-xs">
                              {honor}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
            {certifications.map((cert) => (
              <motion.article key={cert.id} variants={itemVariants}>
                <Card className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-heading-md font-semibold">{cert.name}</h3>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <p className="text-body-sm text-muted-foreground mt-1">
                        Earned {new Date(cert.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        {cert.expiryDate && ` · Expires ${new Date(cert.expiryDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}
                      </p>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-body-sm text-primary hover:underline mt-2 inline-block"
                        >
                          Verify Credential
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="achievements-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              Recognition
            </Badge>
            <h2 id="achievements-heading" className="text-display-md mb-6">
              Achievements & Awards
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {achievements.map((achievement) => (
              <motion.article key={achievement.id} variants={itemVariants}>
                <Card className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warning/10 text-warning shrink-0">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-heading-md font-semibold">{achievement.title}</h3>
                      <p className="text-body-md text-muted-foreground mt-1">{achievement.description}</p>
                      <p className="text-body-sm text-primary mt-2">{achievement.issuer} · {new Date(achievement.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-muted/30" aria-labelledby="interests-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              Personal
            </Badge>
            <h2 id="interests-heading" className="text-display-md mb-6">
              Beyond Code
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {personalInterests.map((interest) => (
              <motion.article key={interest.label} variants={itemVariants}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-heading-md font-semibold mb-1">{interest.label}</h3>
                    <p className="text-body-md text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="cta-heading">
        <div className="container-custom">
          <motion.div
            className="relative glass-card rounded-3xl p-10 md:p-16 text-center overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'var(--color-bg-mesh)' }} aria-hidden="true" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 id="cta-heading" className="text-display-md mb-6">
                Let's Connect
              </h2>
              <p className="text-body-xl text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting problems, or just
                chatting about technology. Feel free to reach out!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                    Download Resume
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-body-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                    <span>{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
