import type { Metadata } from 'next'

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
    url: 'https://yourwebsite.com', // Your website URL
    siteName: 'paul2dev',
    images: [
      {
        url: 'https://yourwebsite.com/image.jpg', // URL to an image for social sharing
        width: 1200,
        height: 630,
        alt: 'Cybersecurity Awareness Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // Type of Twitter card
    title: 'paul2dev - Cybersecurity Awareness',
    description: 'Learn about cybersecurity threats and how to protect yourself online.',
    images: ['https://yourwebsite.com/image.jpg'], // URL to an image for Twitter sharing
    creator: '@techwhizkids', // Your Twitter handle
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
  return children
}