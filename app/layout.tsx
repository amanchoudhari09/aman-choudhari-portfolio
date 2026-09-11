import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aman Choudhari | Software Engineer — Backend & AI',
  description:
    'Portfolio of Aman Choudhari, a Software Engineer focused on high-performance backend systems, distributed data processing, Generative AI, LLM applications, and AI agent orchestration.',
  generator: 'Aman Choudhari',
  keywords: [
    'Software Engineer', 'Backend Engineer', 'AI Engineer', 'Python', 'FastAPI', 'Node.js',
    'Distributed Systems', 'Generative AI', 'LLMs', 'RAG', 'AI Agents', 'MCP', 'SAP Labs',
  ],
  openGraph: {
    title: 'Aman Choudhari | Software Engineer — Backend & AI',
    description:
      'Software Engineer building high-performance backend systems and intelligent AI applications. Currently at SAP Labs India.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Choudhari | Software Engineer — Backend & AI',
    description: 'Backend Engineering · Applied AI',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0c0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
