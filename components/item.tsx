/*
jononews by @jonchius
/components/item.tsx
news item template
*/

'use client'

import Link from "next/link"
import { text } from "./text"

export interface ItemProps {
  item: {
    objectID: string,
    created_at: string,
    author: string,
    points: number,
    url: string,
    title: string,
    num_comments: number, 
  }
}

export default function Item({item}: ItemProps) {

  const { created_at, points, url, title, objectID, num_comments } = item

  const getURLHost = (url: string) => {
    return (url) ? new URL(url).host.toString() : ''
  }

  return (
    <article className="item mt-5">

      <h3 className="item-link text-3xl">
        <Link href={url} target="_blank">{title}</Link>
      </h3>

      <aside className="item-meta text-gray-700 dark:text-gray-200 text-sm flex flex-wrap gap-1">
        <span className="item-date font-bold">{created_at.substring(0,10)} </span>
        <span className="item-time">@ {`${created_at.substring(11,16)} UTC`} </span>
        <span className="item-pops">({points} {text['points']} | <Link className="text-green-600" href={`https://news.ycombinator.com/item?id=${objectID}`} target="_blank">{num_comments} {text['comments']}</Link>) </span>
        <span className="item-host text-gray-400 mx-2">via {getURLHost(url)}</span>
      </aside>

    </article>
  )
}