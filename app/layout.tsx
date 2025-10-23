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

  return (
    <html lang="en" data-arp="">
      <head>
        <link rel="shortcut icon" href={`/favicon.png?v=${Date.now()}`} />        
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
