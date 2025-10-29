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
        sr-only focus:not-sr-only 
        focus:absolute focus:top-2 focus:left-2 
        focus:bg-white focus:text-black focus:z-[1000] 
      `}
    >
      <span className="p-5">{text['skip to main content']}</span>
    </Link>
  )

}