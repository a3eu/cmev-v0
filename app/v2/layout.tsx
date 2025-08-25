import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Kaushan_Script } from 'next/font/google'
import './globals.css'

const kaushanScript = Kaushan_Script({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kaushan'
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={kaushanScript.variable}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
      {children}
    </div>
  )
}
