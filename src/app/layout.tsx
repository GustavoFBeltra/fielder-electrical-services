import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/ui/LoadingScreen'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Fielder Electrical Services | St. Louis Electricians Since 1987',
  description: 'Fielder Electrical Services has been meeting the electrical needs of residential, commercial, and industrial clients in the St. Louis area since 1987. Family owned, licensed, and trusted.',
  keywords: 'electrician, St. Louis, electrical services, residential electrician, commercial electrician, industrial electrician, EV charging, knob and tube, electrical panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
