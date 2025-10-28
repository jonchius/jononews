'use client'

/*
"skip to main content" button by @jonchius
/app/util/skip.tsx
simply add <Skip /> and the import to display a "skip to main content" button for accessibility
*/

import Link from "next/link"
import { text } from "../components/text"

export default function Skip() {

  return (
    <Link 
      href="#main-content"            
      className={`
        skip-link sr-only focus:not-sr-only 
        focus:absolute focus:top-2 focus:left-2 
        bg-white text-black z-50
      `}
    >
      <span className="px-5 text-xl">{text['skip to main content']}</span>
    </Link>
  )

}