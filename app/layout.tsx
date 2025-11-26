import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from "next/script"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PetSmart Rewards',
  description: 'Follow these steps to claim your $100 PetSmart gift card',
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />

        {/* Statcounter embed */}
        <Script
          id="statcounter-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var sc_project=13180275; 
              var sc_invisible=1; 
              var sc_security="6261fdb7"; 
            `
          }}
        />

        <Script
          id="statcounter-lib"
          strategy="afterInteractive"
          src="https://www.statcounter.com/counter/counter.js"
          async
        />

        <noscript>
          <div className="statcounter">
            <a 
              title="Web Analytics"
              href="https://statcounter.com/"
              target="_blank"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13180275/0/6261fdb7/1/"
                alt="Web Analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>

      </body>
    </html>
  )
}
