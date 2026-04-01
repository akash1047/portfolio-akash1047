import type { Metadata } from 'next'
import { Tahoma } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import './globals.css'
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'

const tahoma = Tahoma({
  variable: '--font-tahoma',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const courierPrime = Courier_Prime({
  variable: '--font-courier',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Akash Lohar',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${tahoma.variable} ${courierPrime.variable} h-full`}
    >
      {/* Inline script runs before paint — prevents flash of wrong theme */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ fontFamily: "Tahoma, 'MS Sans Serif', Arial, sans-serif", fontSize: '11px' }}
      >
        {children}
      </body>
    </html>
  )
}
