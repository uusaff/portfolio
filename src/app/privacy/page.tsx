import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 lg:pt-40">
      <div className="container-custom max-w-3xl">
        <h1 className="text-display-lg mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-body-lg text-muted-foreground leading-relaxed">
          <p>Last updated: July 2026</p>
          <h2 className="text-heading-lg text-foreground font-semibold mt-8">Information I Collect</h2>
          <p>When you use the contact form on this site, I receive your name, email address, and message. I only use this information to respond to your inquiry.</p>
          <h2 className="text-heading-lg text-foreground font-semibold mt-8">How I Use Information</h2>
          <p>Your information is used solely to communicate with you regarding your message. I do not sell, share, or distribute your personal data to third parties.</p>
          <h2 className="text-heading-lg text-foreground font-semibold mt-8">Cookies</h2>
          <p>This site may use essential cookies for theme preferences and basic functionality. No tracking or advertising cookies are used.</p>
          <h2 className="text-heading-lg text-foreground font-semibold mt-8">Contact</h2>
          <p>If you have any questions about this policy, you can reach me at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=uussaff@gmail.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">uussaff@gmail.com</a>.</p>
          <div className="pt-8">
            <Link href="/" className="text-primary hover:underline">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
