import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'TB Enterprise Group | Executive Chauffeur Service NYC',
  description: 'NYC’s most trusted executive chauffeur service. Punctuality is the Ultimate Luxury.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans bg-background text-primary">
        <Header />
        {children}
      </body>
    </html>
  )
}
