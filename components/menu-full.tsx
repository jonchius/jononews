/*
jononews by @jonchius
/components/menu-full.tsx
full screen menu component
*/

'use client'

import { useState, useEffect } from 'react'
import FocusTrap from 'focus-trap-react'
import { MenuFind } from './menu-find'
import { useHotkeys } from 'react-hotkeys-hook'
import { ChildrenProps } from './prop'
import { site, text } from './text'
import Link from 'next/link'
import { ThemeToggle } from '../util/theme'
import { getCookie } from '../app/conf/cook'

interface MenuFindWrapperProps {
  children: React.ReactNode | React.ReactNode[],
  className: string
}

export function MenuFull() {

  const [ showMenu, setShowMenu ] = useState(false)
  const [ menuOpenedAlready, setMenuOpenedAlready ] = useState(false)
  const [ topics, setTopics ] = useState([])

  useHotkeys('ctrl+k, meta+k', () => document.getElementById('desktop-search-in-nav')?.focus())
  useHotkeys('ctrl+/, meta+/', () => document.getElementById('open-menu')?.click())
  useHotkeys('escape', () => closeMenu())

  /* def menu ui */
  const openMenu = () => {
    setShowMenu(true)
    setMenuOpenedAlready(true)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  useEffect(() => {

    // focus on menu open
    if (menuOpenedAlready) document.getElementById('open-menu')?.focus()   

    // refresh custom term links
    const topicCookies = getCookie('jn-topics')
    if (topicCookies) {
      setTopics(topicCookies.split(',').map(item => item.trim()))      
    } 

  }, [showMenu, menuOpenedAlready])

  const MenuButton = () => {
    return (
      <div>
        <button className={`text-sm uppercase`} onClick={openMenu} id="open-menu">
          <span className={`mr-1 text-2xl`} aria-hidden={true}>≡</span>
          <span className={`mx-1 text-2xl`}>{text['menu']}</span>
          <span className={`ml-1 text-gray-400 hidden sm:inline`}>(⌘/)</span>
        </button>
      </div>
    )
  }

  const MenuDialog = ({children}: ChildrenProps) => {
    return (
      <dialog
        aria-label={text['menu']}
        className={`menu-dialog
          bg-gradient-to-b from-zinc-100 to-zinc-200
          dark:from-black dark:to-gray-800
          flex z-50 overflow-y-auto
          w-full h-screen fixed top-0 left-0 p-10
      `}>
        {children}
      </dialog>
    )
  }

  const MenuWrapper = ({children}: ChildrenProps) => {
    return (
      <div className={`menu-wrapper w-full lg:max-w-4xl mx-auto`}>
        {children}
      </div>
    )
  }

  const MenuHead = ({children}: ChildrenProps) => {
    return (
      <div className={`menu-head
        flex flex-col sm:flex-row sm:justify-between items-center
      `}>
        {children}
      </div>
    )
  }

  const MenuHeading = () => {
    return (
      <h1 className={`menu-heading`}>
        <span className={`text-3xl font-bold mr-2 uppercase`}>{site['title']}</span>
        <span className={`text-xl font-light`}>{text['menu']}</span>
      </h1>
    )
  }

  const MenuTagline = () => {
    return (
      <div
        className={`menu-tagline
          block sm:hidden my-2
        `}
      >
        <span>{site['tagline']}</span>
      </div>
    )
  }

  const MenuOptions = ({children} : ChildrenProps) => {
    return (
      <div
        className={`menu-options
          flex flex-col sm:flex-row md:justify-right items-center gap-5 
        `}
      >
        {children}
      </div>
    )
  }

  const MenuCloseOption = () => {
    return (
      <div
        className={`menu-close mt-5 sm:mt-0`}
      >
        <button onClick={closeMenu}>
          <span
            aria-hidden="true"
            className={`mr-2`}>❌</span>
          <span>{text['close menu']}</span>
        </button>
      </div>
    )
  }

  const MenuContent = () => {
    return (
      <ul className="menu-list list-none mx-auto py-5 text-3xl" onClick={closeMenu}>
        <li><Link href="/about">{text["about"]}</Link></li>
        <li><Link href="/conf">{text["configuration"]}</Link></li>
        <li><Link href="/omni">{text["omnisearch"]}</Link></li>          
      </ul>
    )
  }

  const MenuYearContent = () => {
    const years = []
    // 2007 is the first decent year of hacker news articles
    for (let year = new Date().getFullYear(); year > 2006; year--) {
      years.push({ year, points: (year-2006) * 100 })
    }
    return (
      <>
        <h2 className="text-4xl">{text["year in review"]}</h2>
        <ul className="menu-list list-none mx-auto py-5 text-3xl flex flex-wrap" onClick={closeMenu}>
          {years.map(({year, points}) => (
            <li key={`menu-bestofyear-${year}`} className="mr-5">
              <Link className="text-blue-600" href={`/year/${year}?points=${points}`}>{year}</Link>
            </li>
          ))}
        </ul>        
      </>
    )
  }

  const MenuCustom = () => {
    return (
      <>
        <h2 className="text-4xl">{text["your terms"]}</h2>
        <ul className="menu-list list-none mx-auto py-5" onClick={closeMenu}>
          { topics && (
            <>                        
              {topics.map((topic: string) => (
                <li key={`menu-customlink-${topic}`} className="text-3xl">
                  <Link href={`/term/${topic.trim()}`}>
                    {topic.trim()}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </>
    )
  }

  const MenuFindWrapper = ({children, className}: MenuFindWrapperProps) => {
    return (
      <div
        className={`menu-find-wrapper
          ${className}
        `}
      >
        {children}
      </div>
    )
  }
  /* end menu ui */

  return (
    <>
      <MenuButton />
      { showMenu && (
        <FocusTrap>
          <div>
            <MenuDialog>
              <MenuWrapper>
                <MenuHead>
                  <MenuHeading />
                  <MenuTagline />
                  <MenuOptions>
                    <MenuCloseOption />
                    <ThemeToggle />
                  </MenuOptions>
                </MenuHead>
                <MenuFindWrapper className={`block lg:hidden`}>
                  <MenuFind
                    inputName={`mobile-search-in-menu`}
                    placeholder={text['search with keybinding']}
                    className="md:hidden mt-5"
                  />
                </MenuFindWrapper>
                <MenuContent />                
                { topics.length > 0 && <MenuCustom />}
                <MenuYearContent />
              </MenuWrapper>
            </MenuDialog>
          </div>
        </FocusTrap>
      )}
    </>
  )
}