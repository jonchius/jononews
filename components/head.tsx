'use client'

import Link from "next/link"
import { site, text } from './text'
import { ChildrenProps } from './prop'
import { MenuFind } from "./menu-find"
import { MenuFull } from './menu-full'

export default function Head() {

  const HeaderFullWidthWrapper = ({children}: ChildrenProps) => {
    return (
      <header className={`head-wrap bg-black bg-gradient-to-b from-black to-gray-700 text-white w-full sticky fixed top-0 z-40 p-5`}>
        {children}
      </header>
    )
  }

  const HeaderProper = ({children}: ChildrenProps) => {
    return (
      <div className={`head-prop max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-5`}>
        {children}
      </div>
    )
  }

  const HeaderBrandingWrapper = ({children}: ChildrenProps) => {
    return (
      <div className={`head-name flex flex-col md:flex-row items-center gap-1 md:gap-5`}>
        {children}
      </div>
    )
  }

  const HeaderBrandingName = () => {
    return (
      <div className={`head-ding text-4xl`}>
        <Link href="/">
          <h1>
            <span className="head-icon mr-2" aria-hidden="true">{site["title emoji"]}</span> 
            <span className="head-name">{site["title"]}</span>
          </h1>
        </Link>
      </div>
    )
  }
  
  const HeaderBrandingTagline = () => {
    return (
      <div className="head-line hidden md:block text-md block">{site["tagline"]}</div>
    )
  }

  const HeaderNavigationWrapper = ({children}: ChildrenProps) => {
    return (
      <div className="head-navi flex flex-col md:flex-row items-center gap-5">
        {children}
      </div>
    )
  }

  return (
    <HeaderFullWidthWrapper>      
      
      <HeaderProper>
        
        <HeaderBrandingWrapper>

          <HeaderBrandingName />          
          <HeaderBrandingTagline />

        </HeaderBrandingWrapper>      
        
        <HeaderNavigationWrapper>        
        
          <MenuFind inputName="desktop-search-in-nav" placeholder={text['search with keybinding']} />          
          <MenuFull />
        
        </HeaderNavigationWrapper>
      
      </HeaderProper>

    </HeaderFullWidthWrapper>
  )
}