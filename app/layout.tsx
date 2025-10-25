/*
jononews by @jonchius
/app/(root)/layout.tsx
general layout page
*/

import "../global.css"
import Head from "../components/head"
import Tail from '../components/tail'
import { Theme } from "../util/theme"
import { Metadata } from "next"
import { site } from "../components/text"

export async function generateMetadata({ params }: {
  params: { term?: string, year?: string},  
}): Promise<Metadata> {
  
  let title = site["title"]

  return {
    title,
    description: site["tagline"],
    openGraph: {
      title,
      description: site["tagline"],
      type: 'website',
      siteName: site["title"],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const setInitialTheme = `
    (function() {
      try {
        const theme = localStorage.getItem('theme')
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.style.colorScheme = theme
        if (theme === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
      } catch (e) {}
    })()`

  return (
    <html lang="en" data-arp="" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href={`/favicon.png?v=${Date.now()}`} />
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body>
        <Theme />
        <Head />
        {children}
        <Tail />
      </body>
    </html>
  )
}
