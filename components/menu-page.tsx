/*
jononews by @jonchius
/components/menu-page.tsx
menu of custom topics on page
*/

'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { getCookie } from "../app/conf/cook"
import { text } from "./text"

export default function MenuPage() {

  const [ topics, setTopics ] = useState([])

  useEffect(() => {
    
    // refresh custom term links
    const topicCookies = getCookie('jn-topics')
    
    if (topicCookies) {
      setTopics(topicCookies.split(',').map(item => item.trim()))      
    } 

  }, [])

  return (

    <ul className="menu-page flex list-none items-center mx-auto gap-2 text-xl border border-gray-600 border-1 p-5">
      <li>{text["your terms"]}</li>      
      <li><Link href="/conf" className="border border-gray-600 bg-black text-green-300 hover:text-white p-2">{topics.length > 0 ? text["update yours"] : text["add yours"]}</Link></li>
      {topics.map((topic: string) => (
        <li key={`menu-customlink-${topic}`}>
          <span aria-hidden="true">[ </span>
          <Link href={`/term/${topic.trim()}`}>
            {topic.trim()} 
          </Link>
          <span aria-hidden="true"> ]</span>
        </li>
      ))}
    
    </ul>

  )

  
}