'use client'

import Link from "next/link"

export interface ItemProps {
  item: {
    objectID: string, 
    created_at: string,
    author: string,
    points: number,  
    url: string,
    title: string
  }
}

export default function Item({item}: ItemProps) {

  const { created_at, points, url, title } = item

  const getURLHost = (url: string) => {
    return (url) ? new URL(url).host.toString() : ''
  }

  return (
    <article className="item mt-5">

      <aside className="item-meta text-gray-700 dark:text-gray-200 text-sm">
        <span className="item-date font-bold mr-1">{created_at.substring(0,10)}</span>
        <span className="item-time mx-1">{`${created_at.substring(11,16)}`}</span>
        <span className="item-skor mx-1">({points} pts)</span>
        <span className="item-host ml-1 text-gray-400">via {getURLHost(url)}</span>                    
      </aside>

      <h3 className="item-link text-3xl">
        <Link href={url} target="_blank">{title}</Link>
      </h3>            
      
    </article>    
  )
}