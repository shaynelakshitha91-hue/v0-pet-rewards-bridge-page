import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from "next/script"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Treat Your Pet - $100 Reward Guide',
  description: 'Complete the program steps to claim your $100 PetSmart gift card reward.',
  generator: 'v0.app',
  icons: {
    icon: '/pet-favicon.png', // Make sure you have this icon in public folder
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

        {/* --- STATCOUNTER CONFIGURATION (LAZY LOAD) --- */}
        <Script id="statcounter-config" strategy="afterInteractive">
          {`
            var sc_project=13180275; 
            var sc_invisible=1; 
            var sc_security="6261fdb7"; 
          `}
        </Script>

        <Script id="statcounter-lazy-loader" strategy="afterInteractive">
          {`
            var statCounterLoaded = false;
            function loadStatCounter() {
                if (!statCounterLoaded) {
                    var script = document.createElement('script');
                    script.src = "https://www.statcounter.com/counter/counter.js";
                    script.async = true;
                    document.body.appendChild(script);
                    statCounterLoaded = true;
                    
                    // Remove listeners once loaded
                    ['mousemove', 'touchstart', 'scroll', 'keydown'].forEach(function(e) {
                        window.removeEventListener(e, loadStatCounter);
                    });
                }
            }
            // Listen for user interaction
            ['mousemove', 'touchstart', 'scroll', 'keydown'].forEach(function(e) {
                window.addEventListener(e, loadStatCounter);
            });
          `}
        </Script>
        {/* Note: <noscript> tag removed to avoid bot tracking issues */}
        
      </body>
    </html>
  )
}
