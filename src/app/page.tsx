'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowRight, Star, MousePointer2 } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { stats, projects, author, testimonials, technologies, socialLinks } from '@/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const floatVariants = {
  initial: { y: 0 },
  animate: { y: [-20, 20, -20], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const } },
  animate2: { y: [-20, 20, -20], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const, delay: 2 } },
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const topTechnologies = technologies.slice(0, 12)

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0" style={{ background: 'var(--color-bg-mesh)' }} aria-hidden="true" />

        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          style={{ background: 'hsl(var(--color-primary))' }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          variants={floatVariants}
          initial="initial"
          animate="animate2"
          style={{ background: 'hsl(var(--color-accent))' }}
          aria-hidden="true"
        />

        <div className="container-custom relative z-10 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              className="text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-body-sm font-medium mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Hi, I'm{' '}
                <span className="gradient-text">Yousaf</span>
              </motion.h1>

            <motion.p
              className="text-display-sm text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Computer Science Student & Full-Stack Developer
            </motion.p>

            <motion.p
              className="text-body-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Building modern web applications with React, Firebase, and Tailwind CSS.
              Passionate about clean UI, dark themes, and animation-rich interfaces.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { href: author.github, icon: FaGithub, label: 'GitHub' },
                { href: author.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
                { href: author.twitter, icon: FaTwitter, label: 'Twitter' },
                { href: 'https://instagram.com/uusaff', icon: FaInstagram, label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-xl border border-border',
                    'text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-accent/5',
                    'transition-all duration-200'
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img
              src="/1000232738.png"
              alt="Yousaf"
              className="max-w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          aria-hidden="true"
        >
          <span className="text-body-xs uppercase tracking-widest">Scroll</span>
          <MousePointer2 className="h-5 w-5 animate-bounce" />
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="stats-heading">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <div className="text-display-lg font-bold gradient-text mb-1">
                  {stat.value}
                  {stat.suffix && <span className="text-heading-md">{stat.suffix}</span>}
                </div>
                <div className="text-body-md text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-heading">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="default" className="mb-4">
              Featured Work
            </Badge>
            <h2 id="featured-heading" className="text-display-md mb-4">
              Selected Projects
            </h2>
            <p className="text-body-lg text-muted-foreground">
              A curated selection of projects showcasing my work across full-stack development,
              developer tools, and modern web applications.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -4 }}
              >
                <Card className="h-full overflow-hidden p-0">
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="text-5xl font-bold gradient-text mb-2">{'0'}{index + 1}</div>
                        <div className="text-body-sm text-muted-foreground">{project.category}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="outline" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-heading-md font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body-md text-muted-foreground line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3 text-body-sm text-muted-foreground">
                        {project.metrics?.slice(0, 2).map((metric, i) => (
                          <span key={i}>{metric.label}: <strong>{metric.value}</strong></span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.caseStudyUrl || project.githubUrl || '#'}>
                          Details <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View All Projects <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section bg-muted/30" aria-labelledby="tech-heading">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Tech Stack
            </Badge>
            <h2 id="tech-heading" className="text-display-md mb-4">
              Technologies & Tools
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Proficient across the full stack with experience in modern web technologies,
              cloud services, and developer tooling.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {topTechnologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full text-center p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-3">
                    <span className="text-xl font-bold gradient-text">{tech.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-heading-sm font-semibold mb-1">{tech.name}</h4>
                  <Badge variant="outline" size="sm">{tech.category}</Badge>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="ghost" size="lg" asChild>
              <Link href="/experience">View All Technologies <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 id="testimonials-heading" className="text-display-md mb-4">
              Trusted by Peers
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Feedback from colleagues and mentors I've had the privilege to work with.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {testimonials.map((testimonial) => (
              <motion.article key={testimonial.author} variants={itemVariants}>
                <Card className="h-full p-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-body-md text-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.author}</p>
                      <p className="text-body-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
