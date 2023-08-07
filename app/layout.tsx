import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mukul Singh | Personal Portfolio',
  description: 'Full Stack Developer with 1 year experience',
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
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:36 bg-bg-sm sm:bg-bg-lg bg-no-repeat bg-contain bg-blend-color`}>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
