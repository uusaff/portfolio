'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Search, Filter, ExternalLink, ChevronDown, X, Star, Zap, Code2, Server, Smartphone, Database, Globe } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects, type ProjectCategory } from '@/data'

const categoryIcons: Record<ProjectCategory, React.ComponentType<{ className?: string }>> = {
  'full-stack': Code2,
  frontend: Globe,
  backend: Server,
  mobile: Smartphone,
  devops: Database,
  'ai-ml': Zap,
  'open-source': FaGithub,
  other: Star,
}

const categoryLabels: Record<ProjectCategory, string> = {
  'full-stack': 'Full Stack',
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  devops: 'DevOps',
  'ai-ml': 'AI/ML',
  'open-source': 'Open Source',
  other: 'Other',
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all')
  const [sortBy, setSortBy] = useState<'featured' | 'recent' | 'alphabetical'>('featured')

  const filteredProjects = useMemo(() => {
    let result = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    switch (sortBy) {
      case 'recent':
        result = [...result].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
        break
      case 'alphabetical':
        result = [...result].sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'featured':
      default:
        result = [...result].sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1))
        break
    }

    return result
  }, [searchQuery, selectedCategory, sortBy])

  const categories: (ProjectCategory | 'all')[] = ['all', 'full-stack', 'frontend', 'backend', 'mobile', 'devops', 'ai-ml', 'open-source', 'other']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24" aria-labelledby="projects-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="default" className="mb-4">
              Portfolio
            </Badge>
            <h1 id="projects-heading" className="text-display-lg mb-6">
              Featured Projects
            </h1>
            <p className="text-body-xl text-muted-foreground">
              A curated collection of projects spanning full-stack development, modern web apps,
              and developer tools built with cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <Input
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
                aria-label="Search projects"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as ProjectCategory | 'all')}
                  className="appearance-none pl-10 pr-10 py-2.5 rounded-xl border border-border bg-background text-body-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  aria-label="Filter by category"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : categoryLabels[cat]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'featured' | 'recent' | 'alphabetical')}
                  className="appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-border bg-background text-body-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  aria-label="Sort projects"
                >
                  <option value="featured">Featured First</option>
                  <option value="recent">Most Recent</option>
                  <option value="alphabetical">A-Z</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {searchQuery && (
            <motion.div
              className="mb-8 flex items-center gap-2 text-body-sm text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span>Showing {filteredProjects.length} of {projects.length} projects for &ldquo;{searchQuery}&rdquo;</span>
              <Button variant="ghost" size="sm" onClick={() => setSearchQuery('')} aria-label="Clear search">
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery + sortBy}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project) => (
                <motion.article key={project.id} variants={itemVariants} className="group">
                  <Card className="h-full overflow-hidden p-0">
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          {(() => {
                            const Icon = categoryIcons[project.category]
                            return <Icon className="h-12 w-12 mx-auto mb-4 text-primary/40 group-hover:text-primary/60 transition-colors" aria-hidden="true" />
                          })()}
                          <div className="text-heading-sm font-semibold text-primary/70">{categoryLabels[project.category]}</div>
                          {project.featured && (
                            <Badge variant="default" className="mt-2 ml-auto mr-auto w-fit">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 5).map((tag) => (
                          <Badge key={tag} variant="outline" size="sm">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 5 && (
                          <Badge variant="outline" size="sm">
                            +{project.tags.length - 5}
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-heading-md font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-body-md text-muted-foreground line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-body-sm text-muted-foreground">
                          <span>{project.startDate}</span>
                          {project.endDate && <span>– {project.endDate}</span>}
                          {project.current && <span className="text-primary">· Present</span>}
                        </div>
                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
                              aria-label="View on GitHub"
                            >
                              <FaGithub className="h-4 w-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
                              aria-label="Live Demo"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.article>
              ))}

              {filteredProjects.length === 0 && (
                <motion.div
                  className="text-center py-16 col-span-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Search className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
                  <h3 className="text-heading-lg mb-2">No projects found</h3>
                  <p className="text-body-md text-muted-foreground mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section bg-muted/30" aria-labelledby="case-studies-heading">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Deep Dives
            </Badge>
            <h2 id="case-studies-heading" className="text-display-md mb-4">
              Case Studies
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Detailed breakdowns of architecture decisions, challenges overcome, and lessons learned.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.caseStudyUrl).slice(0, 6).map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        {(() => {
                          const Icon = categoryIcons[project.category]
                          return <Icon className="h-5 w-5" />
                        })()}
                      </div>
                    <div>
                      <Badge variant="outline" size="sm" className="mb-2">
                        {categoryLabels[project.category]}
                      </Badge>
                      <h3 className="text-heading-md font-semibold">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-body-md text-muted-foreground mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={project.caseStudyUrl!}>
                      Read Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
