import type { Metadata } from 'next'
import { Orbitron, Exo_2 } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
})

const exo = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo',
})

export const metadata: Metadata = {
  title: 'Anurag - The Code Architect',
  description: 'Interactive 3D Portfolio showcasing skills, projects, and achievements',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${orbitron.variable} ${exo.variable}`}>{children}</body>
    </html>
  )
}