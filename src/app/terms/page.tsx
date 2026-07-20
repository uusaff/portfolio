import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 lg:pt-40">
      <div className="container-custom max-w-3xl">
        <h1 className="text-display-lg mb-8">Terms of Service</h1>
        <div className="space-y-6 text-body-lg text-muted-foreground leading-relaxed">
          <p>Last updated: July 2026</p>
          <h2 className="text-heading-lg text-foreground font-semibold mt-8">Use of Content</h2>
          <p>All content on this website, including project descriptions, code samples, and design elements, is my own work unless otherwise noted. You may view and reference it for personal or educational purposes.</p>
          <h2 className="text-heading-lg text-foreground font-semibold mt-8">Intellectual Property</h2>
          <p>The code for projects linked on this site is open source under the respective repository licenses. The design and layout of this portfolio website are my intellectual property.</p>
          <h2 className="text-heading-lg text-foreground font-semibold mt-8">External Links</h2>
          <p>This site contains links to external websites (GitHub, LinkedIn, etc.). I am not responsible for the content or privacy practices of those sites.</p>
          <h2 className="text-heading-lg text-foreground font-semibold mt-8">Contact</h2>
          <p>For any questions regarding these terms, please email me at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=uussaff@gmail.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">uussaff@gmail.com</a>.</p>
          <div className="pt-8">
            <Link href="/" className="text-primary hover:underline">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
