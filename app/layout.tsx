import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mukul Singh | Personal Portfolio',
  description: 'Full Stack Developer with 2 year experience',
  manifest: 'site.webmanifest',
  openGraph: { images: [{ url: "mukul.jpeg" }] }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} text-gray-950 relative`}>
        {children}
      </body>
    </html>
  )
}
