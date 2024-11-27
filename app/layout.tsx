import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HcAI Design Bootcamp 2024',
  description: 'University of Oxford HcAI Design Bootcamp 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
