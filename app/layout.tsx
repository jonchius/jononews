'use client'
import "../global.css"
import Head from "../components/head"
import Tail from '../components/tail'
import { Theme } from "./theme"

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
