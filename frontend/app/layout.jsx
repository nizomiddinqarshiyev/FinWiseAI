import './globals.css'

export const metadata = {
  title: 'FinWise AI - O\'zbekistonning Birinchi AI Moliyaviy Maslahatchisi',
  description: 'Sun\'iy intellekt yordamida moliyaviy salomatligingizni tahlil qiling, eng yaxshi kredit takliflarini toping va firibgarlikdan himoyalaning',
  keywords: 'fintech, AI, moliyaviy maslahat, kredit, O\'zbekiston, bank',
  authors: [{ name: 'FinWise AI Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}