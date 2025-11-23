import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PetSmart Rewards',
  description: 'Follow these steps to see how the $100 PetSmart gift card promotion works',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/pet-favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/pet-favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/pet-favicon.png',
        type: 'image',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
