'use client'

/*

dark-mode standalone package

$ npm install next-themes

on layout.tsx: 

  import { ThemeProvider } from (whatever folder this file is in)

and then also on layout.tsx:

  <ThemeProvider attribute={`class`} defaultTheme={`light`} enableSystem>
  {children}
  </ThemeProvider>

then finally:

  - import { useTheme } from 'next-themes'
  - const { theme, setTheme } = useTheme()
  - const handleTheme = (event: React.FormEvent<HTMLButtonElement>): void => {
      event.preventDefault()
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
*/

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}