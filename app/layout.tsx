import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FitCommit - See your commitment',
  description: 'AI body fat percent from 3 photos. Your After Photo updates as you do.',
  keywords: 'body fat, AI, fitness, health, body composition, FitCommit, commitment',
  authors: [{ name: 'FitCommit Team' }],
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6F3DFF' },
    { media: '(prefers-color-scheme: dark)', color: '#7A5CFF' }
  ],
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 