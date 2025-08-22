import type { Metadata, Viewport } from 'next'
import { Epilogue } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fitcommit.ai'),
  title: {
    default: 'FitCommit - See your commitment',
    template: '%s | FitCommit'
  },
  description: 'AI body fat percent from 3 photos. Your After Photo updates as you do.',
  keywords: ['body fat', 'AI', 'fitness', 'health', 'body composition', 'FitCommit', 'commitment'],
  authors: [{ name: 'FitCommit Team' }],
  alternates: {
    canonical: '/' 
  },
  openGraph: {
    type: 'website',
    url: 'https://fitcommit.ai/',
    title: 'FitCommit - See your commitment',
    description: 'AI body fat percent from 3 photos. Your After Photo updates as you do.',
    siteName: 'FitCommit',
    images: [
      {
        url: '/images/HeroSectionImage.webp',
        width: 1200,
        height: 630,
        alt: 'FitCommit app interface'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FitCommit - See your commitment',
    description: 'AI body fat percent from 3 photos. Your After Photo updates as you do.',
    images: ['/images/HeroSectionImage.webp'],
    creator: '@fitcommit',
    site: '@fitcommit'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6F3DFF' },
    { media: '(prefers-color-scheme: dark)', color: '#7A5CFF' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${epilogue.variable} font-epilogue antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 