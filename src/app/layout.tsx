import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ranju Hasan Khan - Full-Stack Developer & Peace Advocate',
  description: 'Advanced portfolio website of Ranju Hasan Khan - Full-Stack Developer, International Speaker, and Passionate Advocate for World Peace',
  keywords: ['Portfolio', 'Developer', 'React', 'Next.js', 'Full-Stack'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
