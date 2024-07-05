import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aprian Firlanda Imani',
  description: 'This is My Portfolio as Full Stack Web Developer'
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