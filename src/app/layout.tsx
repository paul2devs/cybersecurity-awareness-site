import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'paul2dev - Cybersecurity Awareness',
    template: '%s | paul2dev Cybersecurity'
  },
  description: 'Learn about cybersecurity threats and how to protect yourself online.',
  keywords: ['cybersecurity', 'awareness', 'online safety', 'internet security'],
  metadataBase: new URL('https://paul2dev.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'paul2dev - Cybersecurity Awareness',
    description: 'Learn about cybersecurity threats and how to protect yourself online.',
    url: 'https://paul2dev.com',
    siteName: 'paul2dev',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cybersecurity Awareness Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'paul2dev - Cybersecurity Awareness',
    description: 'Learn about cybersecurity threats and how to protect yourself online.',
    images: ['/twitter-image.jpg'],
    creator: '@techwhizkids',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Optional
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} scroll-smooth antialiased`}
    >
      <body 
        className="
          min-h-screen 
          bg-gradient-to-br 
          from-[#0A192F] 
          via-[#112240] 
          to-[#0A192F] 
          text-white 
          overflow-x-hidden
          selection:bg-electric-blue 
          selection:text-white
        "
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-3WQFFFHG73" />
      </body>
    </html>
  )
}