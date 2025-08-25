import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '¡Con música en vivo!',
  description: 'Life is better with live music!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
