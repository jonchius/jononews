import "../global.css"
import Head from "../components/head"
import Tail from '../components/tail'
import { ThemeProvider } from "../util/dark"

export const metadata = {
  title: 'jononews',
  description: 'curating a free and open news line',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href={`/favicon.png?v=${Date.now()}`} />
      </head>
      <body>
        <ThemeProvider attribute={`class`} defaultTheme={`light`} enableSystem>
          <Head />        
          {children}        
          <Tail />
        </ThemeProvider>
      </body>
    </html>
  )
}
