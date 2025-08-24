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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-kaushan: ${kaushanScript.style.fontFamily};
}
        `}</style>
      </head>
      <body className={`${kaushanScript.variable}`}>{children}</body>
    </html>
  )
}
