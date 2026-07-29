'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowRight, MousePointer2, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { projects, author, socialLinks } from '@/data'
import {
  staggerContainer,
  fadeSlideUp,
  fadeIn,
  springSoft,
  cardHover,
} from '@/lib/animations'

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion()
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  const motionSafe = !prefersReducedMotion

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0" style={{ background: 'var(--color-bg-mesh)' }} aria-hidden="true" />

        {motionSafe && (
          <>
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-2xl opacity-15 animate-float"
              style={{ background: 'hsl(var(--color-primary))' }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-2xl opacity-15 animate-float-delayed"
              style={{ background: 'hsl(var(--color-accent))' }}
              aria-hidden="true"
            />
          </>
        )}

        <div className="container-custom relative z-10 py-20">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-body-sm font-medium mb-8"
                variants={fadeSlideUp}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Open to Internship & Entry-Level Opportunities
              </motion.div>

              <motion.h1
                id="hero-heading"
                className="text-display-xl font-bold tracking-tight text-foreground mb-6"
                variants={fadeSlideUp}
              >
                Hi, I'm{' '}
                <span className="gradient-text">Yousaf</span>
              </motion.h1>

              <motion.p
                className="text-display-sm text-muted-foreground mb-8 max-w-2xl mx-auto"
                variants={fadeSlideUp}
              >
                I build digital products that feel as precise as they perform.
              </motion.p>

              <motion.p
                className="text-body-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                variants={fadeSlideUp}
              >
                From system-level Bluetooth automation to custom drag-and-drop engines.
                I engineer high-fidelity interfaces built to convert.
              </motion.p>

              <motion.div className="flex flex-wrap items-center justify-center gap-4 mb-12" variants={fadeSlideUp}>
                <Button size="lg" asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-4"
                variants={fadeSlideUp}
              >
                {[
                  { href: author.github, icon: FaGithub, label: 'GitHub' },
                  { href: author.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
                  { href: author.twitter, icon: FaTwitter, label: 'Twitter' },
                  { href: 'https://instagram.com/uusaff', icon: FaInstagram, label: 'Instagram' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-xl border border-border',
                      'text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-accent/5',
                      'transition-colors duration-200'
                    )}
                    aria-label={social.label}
                    whileHover={motionSafe ? { scale: 1.1, y: -2 } : {}}
                    whileTap={motionSafe ? { scale: 0.95 } : {}}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 1.2 }}
          aria-hidden="true"
        >
          <span className="text-body-xs uppercase tracking-widest">Scroll</span>
          <MousePointer2 className="h-5 w-5 animate-bounce" />
        </motion.div>
      </section>

      <section className="section" aria-labelledby="featured-heading">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={springSoft}
          >
            <Badge variant="default" className="mb-4">
              Top Projects
            </Badge>
            <h2 id="featured-heading" className="text-display-md mb-4">
              Engineering Work
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Custom engines, hardware control, and systems-level logic — not just CRUD apps.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {featuredProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeSlideUp}
                whileHover={motionSafe ? cardHover : {}}
                className="group"
              >
                <Card className="h-full p-6 flex flex-col">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-heading-md font-semibold mb-3">{project.title}</h3>
                  <div className="flex-1 space-y-3">
                    <div>
                      <p className="text-body-xs font-semibold text-primary uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-body-md text-muted-foreground">{project.challenges[0]}</p>
                    </div>
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.metrics.slice(0, 3).map((metric) => (
                          <span key={metric.label} className="text-body-sm text-muted-foreground">
                            {metric.label}: <strong className="text-foreground">{metric.value}</strong>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          View Code
                          <FaGithub className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="default" size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          Live Demo
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <Button variant="ghost" size="sm" className="flex-1" asChild>
                        <Link href={project.githubUrl || '#'}>Details</Link>
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects" className="inline-flex items-center gap-2">View All Projects <ArrowRight className="h-5 w-5" /></Link>
            </Button>
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
              <h2 id="cta-heading" className="text-display-md mb-6">Let's Connect</h2>
              <p className="text-body-xl text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting problems, or just
                chatting about technology. Feel free to reach out!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    Download Resume
                    <ArrowRight className="h-5 w-5" />
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
