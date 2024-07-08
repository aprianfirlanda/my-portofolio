import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aprian Firlanda Imani',
  description:
    'This is My Portfolio as Full Stack Web Developer. ' +
    'I have over 4 years of experience as a web developer, creating ' +
    'robust and scalable web applications. Skilled in both front-end ' +
    'and back-end development, I ensure seamless functionality. ' +
    'Proficient in various languages and frameworks, I thrive in ' +
    'collaborative environments. Spring Boot | Angular | Next.js ' +
    '| React.js | PostgreSQL | Docker | Node.js | Redis'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
