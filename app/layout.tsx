import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Burn Rate Forecaster — Predict Your Runway',
  description: 'Connect bank accounts and forecast cash runway with hiring and growth scenarios. Built for early-stage startup founders managing cash flow.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1d788748-abfd-4940-8746-242b9e3d7a0c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
