import { Metadata } from 'next'

export const generateMetadata = (): Metadata => ({
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
        url: 'https://paul2dev.com/image.jpg',
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
    images: ['https://paul2dev.com/image.jpg'],
    creator: '@techwhizkids',
  },
  robots: {
    index: true,
    follow: true,
  },
})