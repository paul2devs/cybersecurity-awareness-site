import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'paul2dev - Cybersecurity Awareness',
  description: 'Learn about cybersecurity threats and how to protect yourself online.',
  keywords: ['cybersecurity', 'awareness', 'online safety', 'internet security'],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'paul2dev - Cybersecurity Awareness',
    description: 'Learn about cybersecurity threats and how to protect yourself online.',
    url: 'https://paul2dev.com',
    siteName: 'paul2dev',
    images: [
      {
        url: 'https://paul2dev.com/og-image.jpg',
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
    images: ['https://paul2dev.com/twitter-image.jpg'],
    creator: '@techwhizkids',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="w-full overflow-x-hidden">
          <Header />
          <main className="min-h-screen w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-3WQFFFHG73" />
      </body>
    </html>
  )
}