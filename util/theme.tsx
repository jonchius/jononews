/*
theme toggle by @jonchius
/util/theme.tsx
theme (light mode / dark mode / etc.) toggler
*/

'use client'

import { useState, useEffect } from "react"
import { text } from "../components/text"

export function Theme() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light"
    document.documentElement.className = theme
    document.documentElement.style.colorScheme = theme   
  }, [])

  return null
}

export function ThemeToggle() {

  const [toggle, setToggle] = useState(localStorage.getItem("theme"))

  const toggleTheme = () => {
    const html = document.documentElement
    const newTheme = html.classList.contains('dark') ? 'light' : 'dark'
    setToggle(newTheme)
    html.className = newTheme
    html.style.colorScheme = newTheme
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div>
      <button onClick={toggleTheme}>      
        <span aria-hidden="true" className="mr-2">{toggle === 'dark' ? '🌞' : '🌙'}</span>
        {toggle === 'dark' ? text['switch to light mode'] : text['switch to dark mode']}
      </button>
    </div>
  )
}