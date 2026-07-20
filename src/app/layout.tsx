import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { InteractiveGradient } from '@/components/shared/interactive-gradient'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://github.com/uusaff'),
  title: {
    default: 'Yousaf — Computer Science Student & Full-Stack Developer',
    template: '%s | Yousaf',
  },
  description:
    'Computer Science student at UMT, Lahore. Full-stack web developer building modern applications with React, Firebase, and Tailwind CSS. Passionate about glassmorphism UI, AI integration, and hardware-software projects.',
  keywords: [
    'Yousaf',
    'Portfolio',
    'Web Developer',
    'React',
    'Full Stack',
    'Computer Science',
    'UMT',
    'Lahore',
    'Firebase',
    'Tailwind CSS',
    'Framer Motion',
    'JavaScript',
    'Python',
  ],
  authors: [{ name: 'Yousaf', url: 'https://github.com/uusaff' }],
  creator: 'Yousaf',
  publisher: 'Yousaf',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/uusaff',
    siteName: 'Yousaf — Portfolio',
    title: 'Yousaf — Computer Science Student & Full-Stack Developer',
    description:
      'Computer Science student at UMT, Lahore. Full-stack web developer building modern applications with React, Firebase, and Tailwind CSS.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yousaf — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yousaf — Computer Science Student & Full-Stack Developer',
    description:
      'Computer Science student at UMT, Lahore. Full-stack web developer building modern applications with React, Firebase, and Tailwind CSS.',
    images: ['/og-image.png'],
    creator: '@uusaff',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var root = document.documentElement;
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  root.classList.remove('light', 'dark');
                  root.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <InteractiveGradient />
          <Navbar />
          <main id="main-content" className="pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}