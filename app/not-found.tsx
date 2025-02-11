import { MainDiv } from "../components/main"
import Link from "next/link"
import { text } from "../components/text"

export default async function NotFound() {
  return (
    <MainDiv className="my-16">
      <h2 className="text-7xl ">
        <span className="mr-2" aria-hidden="true">🚫🔎</span> 
        404
      </h2>
      <p className="text-2xl mt-5">
        <span aria-hidden="true">&larr; </span>
        <Link href="/">{text['back to home page']}</Link>
      </p>
    </MainDiv>
  )
}