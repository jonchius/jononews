/*
jononews by @jonchius
/components/item.tsx
news item template
*/

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

  const { created_at, points, url, title, objectID } = item

  const getURLHost = (url: string) => {
    return (url) ? new URL(url).host.toString() : ''
  }

  return (
    <article className="item mt-5">

      <h3 className="item-link text-3xl">
        <Link href={url} target="_blank">{title}</Link>
      </h3>

      <aside className="item-meta text-gray-700 dark:text-gray-200 text-sm flex gap-2">
        <span className="item-date font-bold mr-1">{created_at.substring(0,10)} </span>
        <span className="item-time">at {`${created_at.substring(11,16)} UTC`} </span>
        <span className="item-skor">({points} pts) </span>
        <span className="item-host text-gray-400">via {getURLHost(url)}</span>
        <span className="item-comm"><Link className="text-green-600" href={`https://news.ycombinator.com/item?id=${objectID}`} target="_blank">comments</Link></span>
      </aside>

    </article>
  )
}