import Link from "next/link";
import { text } from "./text";

export const PageNavi = ({children}: any) => {
  return (
    <nav className="navi-wrap bg-gradient-to-b from-green-500 to-green-400 fixed w-full z-30 p-5 shadow-xl">
      <div className="navi-prop max-w-screen-xl mx-auto">
        <div className="navi-flex flex justify-between items-center gap-5">
          {children}
        </div>
      </div>
    </nav>
  )
}

export const NaviName = (
  {label, page} : { label: string, page: number}
) => {
  return (
    <h2 className="navi-name text-md md:text-3xl text-black font-bold uppercase">
      {label} 
      {page ? ` / ${text['page']} ${page} ` : ''}
    </h2>
  )
}

export const NaviPage = (
  {platform, slug, current, term, points = 0, pointsOp, after, before} : { 
    platform?: string, 
    slug?: string, 
    current?: number, 
    term?: string, 
    points?: number,
    pointsOp?: string
    after?: string,
    before?: string,
  }
) => {

  const newerPage = current ? Number(current) - 1 : 1
  const olderPage = Number(current) + 1 

  const getURL = (page) => {
    const f = platform ? `/${platform}` : ''
    const s = slug ? `/${slug}` : ''    
    const t = term ? `&term=${term}` : ''
    const p = points ? `&points=${points}` : ''
    const o = pointsOp ? `&pointsOp=${pointsOp}` : ''
    const a = after ? `&after=${after}` : ''
    const b = before ? `&before=${before}` : ''
    return `${f}${s}?page=${page}${t}${p}${o}${a}${b}`
  }

  return (
    <div className="navi-page flex gap-5">
      { newerPage > 0 && <Link href={getURL(newerPage)} className="dark:text-black">newer</Link>}
      { olderPage > 0 && <Link href={getURL(olderPage)} className="dark:text-black">older</Link>}      
    </div>
  )
}  