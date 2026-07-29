'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Download, GraduationCap, ChevronDown, CheckCircle, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from 'react-icons/fa'
import { experiences, education, author, socialLinks } from '@/data'
import { staggerContainer, fadeSlideUp, fadeIn, scaleIn, springSoft, easeOutSmooth } from '@/lib/animations'

export function AboutPageContent() {
  const prefersReducedMotion = useReducedMotion()
  const [expandedExp, setExpandedExp] = useState<string | null>(null)
  const motionSafe = !prefersReducedMotion

  return (
    <>
      <section className="section relative overflow-hidden pt-32 lg:pt-40" aria-labelledby="about-heading">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'var(--color-bg-mesh)' }} aria-hidden="true" />
        <div className="container-custom relative">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={motionSafe ? { opacity: 1, y: 0 } : {}}
            transition={springSoft}
          >
            <Badge variant="default" className="mb-4">
              About Me
            </Badge>
            <h1 id="about-heading" className="text-display-lg mb-6">
              Hi, I'm <span className="gradient-text">Yousaf</span>
            </h1>
            <p className="text-body-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Systems engineer who bridges hardware-level logic, custom interaction engines, and high-fidelity UI.
              BTW, I also do sales — so I communicate like a human and build for actual business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-muted/30" aria-labelledby="journey-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={springSoft}
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
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {experiences.map((exp) => (
                <motion.article key={exp.id} variants={fadeSlideUp} className="relative pl-12">
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

      <section className="section bg-muted/30" aria-labelledby="education-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={springSoft}
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
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {education.map((edu) => (
              <motion.article key={edu.id} variants={fadeSlideUp}>
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
                    </div>
                  </div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={springSoft}
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
              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-body-sm text-muted-foreground hover:text-primary transition-colors"
                    variants={fadeSlideUp}
                    whileHover={motionSafe ? { y: -2 } : {}}
                  >
                    <social.icon className="h-4 w-4" />
                    <span>{social.platform}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
