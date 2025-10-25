import Link from "next/link"
import { text } from "./text"

export default function Tail () {
  return (
    <footer className="p-5 py-16 bg-gradient-to-b from-gray-800 to-gray-900 w-full bottom-0">
      <div className="w-screen-xl max-w-screen-xl mx-auto text-white text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
        <div className="tail-1">
          <p className="mb-2"> ⚠️ articles appear via the <Link href="https://news.ycombinator.com/" target="_blank">ycombinator.com</Link> API - none are fully endorsed by me!</p>
          <p> this is a <Link href="https://jonchius.com" target="_blank">@jonchius</Link> <span aria-hidden="true">🐼🧑🏻‍💻</span> project </p>          
        </div>
        <div className="tail-2 flex gap-5 text-center">
          
          <Link href="/about">{text['about']}</Link>
          <Link href="/omni">{text['search']}</Link>
          <Link href="/conf">{text['configuration']}</Link>
        </div>
      </div>
    </footer>
  )
}