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
    url: 'https://yourwebsite.com', // Replace with your actual domain
    siteName: 'paul2dev',
    images: [
      {
        url: 'https://yourwebsite.com/image.jpg', // Replace with an actual image URL
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
    images: ['https://yourwebsite.com/image.jpg'], // Replace with an actual image URL
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
      <head>
        {/* Add this to integrate metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="w-full overflow-x-hidden">
          <Header />
          <main className="min-h-screen w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
        {/* Google Analytics Integration */}
        <GoogleAnalytics gaId="G-3WQFFFHG73" />
      </body>
    </html>
  )
}
