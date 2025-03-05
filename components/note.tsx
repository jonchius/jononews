import Link from "next/link"
export default function Note() {
  return (
    <aside className="border-2 border-gray-300 p-5 my-5">⚠️ Note: the following articles appear via the <Link href="https://news.ycombinator.com/" target="_blank">ycombinator.com</Link> API - none are fully endorsed by me!</aside>
  )
}