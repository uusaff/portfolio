'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle, XCircle, Loader2, Send, Globe, ArrowRight, ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { author, socialLinks, faqs } from '@/data'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<typeof formData>>({})

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('submitting')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', company: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'uussaff@gmail.com',
      href: 'mailto:uussaff@gmail.com',
      description: 'Best way to reach me',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 316 4456790',
      href: 'tel:+923164456790',
      description: 'Available via WhatsApp',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: 'https://maps.google.com/?q=Lahore',
      description: 'Based in Lahore',
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Open to opportunities',
      href: '/contact',
      description: 'Internship/Entry-Level roles',
    },
  ]

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24" aria-labelledby="contact-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="default" className="mb-4">
              Get in Touch
            </Badge>
            <h1 id="contact-heading" className="text-display-lg mb-6">
              Let's Work Together
            </h1>
            <p className="text-body-xl text-muted-foreground">
              I'm open to internship and entry-level opportunities at innovative companies.
              Whether you have a project in mind, want to collaborate, or just want to say hi — I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full p-6">
                <h2 className="text-heading-lg font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-body-sm font-medium text-muted-foreground">{item.label}</p>
                        <a
                          href={item.href}
                          className="text-body-md font-medium text-foreground hover:text-primary transition-colors block truncate"
                        >
                          {item.value}
                        </a>
                        <p className="text-body-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <h3 className="text-heading-md font-semibold mb-4">Connect Elsewhere</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-body-sm font-medium',
                        'text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200'
                      )}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                      <span>{social.platform}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 md:p-8">
                <h2 className="text-heading-lg font-semibold mb-6">Send a Message</h2>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/20 text-success"
                  >
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-body-sm">I'll get back to you within 24-48 hours.</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive"
                  >
                    <XCircle className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Something went wrong</p>
                      <p className="text-body-sm">Please try again or email me directly.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Yousaf"
                        error={!!errors.name}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        disabled={status === 'submitting'}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-body-sm text-destructive" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        error={!!errors.email}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        disabled={status === 'submitting'}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-body-sm text-destructive" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name (optional)"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, job opportunity, collaboration..."
                      error={!!errors.subject}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      disabled={status === 'submitting'}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1.5 text-body-sm text-destructive" role="alert">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, role, or idea..."
                      rows={5}
                      error={!!errors.message}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      disabled={status === 'submitting'}
                    />
                    {errors.message ? (
                      <p id="message-error" className="mt-1.5 text-body-sm text-destructive" role="alert">
                        {errors.message}
                      </p>
                    ) : (
                      <p id="message-hint" className="mt-1.5 text-body-xs text-muted-foreground">
                        Minimum 20 characters. Be specific about what you're looking for.
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30" aria-labelledby="faq-heading">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                FAQ
              </Badge>
              <h2 id="faq-heading" className="text-display-md">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.article
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none rounded-2xl glass-card transition-all duration-200 hover:shadow-[0_1px_2px_hsl(var(--color-foreground)/0.04),0_8px_24px_hsl(var(--color-foreground)/0.08)] hover:border-border/80">
                      <h3 className="text-heading-md font-semibold pr-8">{faq.question}</h3>
                      <ChevronDown className={cn(
                        'h-5 w-5 text-muted-foreground transition-transform duration-200 shrink-0',
                        'group-open:rotate-180'
                      )} aria-hidden="true" />
                    </summary>
                    <div className="px-6 pb-6 text-body-md text-muted-foreground border-t border-border rounded-b-2xl bg-background/50">
                      {faq.answer}
                    </div>
                  </details>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="schedule-heading">
        <div className="container-custom">
          <motion.div
            className="relative glass-card rounded-3xl p-10 md:p-16 text-center overflow-hidden max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'var(--color-bg-mesh)' }} aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-6">
                <Calendar className="h-6 w-6" />
              </div>
              <h2 id="schedule-heading" className="text-display-md mb-4">
                Schedule a Call
              </h2>
              <p className="text-body-xl text-muted-foreground mb-8">
                Prefer a direct conversation? I'd be happy to chat over email or connect on LinkedIn.
                Let's talk about your project, an opportunity, or tech in general.
              </p>
              <Button size="lg" asChild variant="outline">
                <a href="mailto:uussaff@gmail.com">
                  Send an Email <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-body-sm text-muted-foreground mt-4">
                Or email me directly at <a href="mailto:uussaff@gmail.com" className="text-primary hover:underline">uussaff@gmail.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
