import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rohit Sharma | Full Stack Developer',
  description: 'Portfolio of Rohit Sharma - Web Developer, App Developer, and Cybersecurity Enthusiast',
  keywords: 'web developer, app developer, portfolio, react, next.js, cybersecurity',
  authors: [{ name: 'Rohit Sharma' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-play bg-dark text-primary">
        {children}
      </body>
    </html>
  )
}