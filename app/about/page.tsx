/*
jononews by @jonchius
/app/(root)/about/page.tsx
explanation of the project
*/

import { MainDiv } from "../../components/main"
import { PageNavi, NaviName } from "../../components/navi"
import { text } from "../../components/text"
import Link from "next/link"

export default function About() {

  return (

    <>

      <PageNavi>
        <NaviName label={`${text['about']}`} />
      </PageNavi>

      <MainDiv className="mt-20 text-2xl">

        <p>
          <strong>Jononews</strong> : displays tech-adjacent news headlines via the <Link href="https://hn.algolia.com/api" target="_blank">Hacker News API</Link>
        </p>

        <ul>
          <li>Original : started with just a <strong>simple homepage list</strong> (like the <Link href="https://news.ycombinator.com/" target="_blank">Hacker News home page</Link>) then allowed:
            <ul>
              <li><strong>filtering by keyword</strong>: press command-K to filter by term!</li>
              <li><strong>filtering by year</strong>: e.g. <Link href="/year/2022">2022</Link> or <Link href="/year/2021">2021</Link> all the way back to <Link href="/year/2006">2006</Link></li>
              <li><strong>filtering by multiple variables</strong>: aka <Link href="/omni/">Omni</Link> search</li>
              <li><strong>dark mode toggle</strong>: (inside the menu)</li>
              <li><strong>full-screen menu</strong>: (press command-slash!)</li>
              <li><strong>URL-input compatibility</strong>: play around with the URLs in Omni to get a different filtering!</li>
            </ul>
          </li>
          <li>2025-10-23 : <strong><Link href="/conf">user configuration</Link></strong> and other features:
            <ul>
              <li><strong>filtering by quality score</strong> (with user input)</li>
              <li><strong>linking to comments page</strong> (read the comments of each submitted link!)</li>
            </ul>
          </li>
          <li>2025-10-24 : <strong><Link href="/conf">user configuration</Link></strong> feature:
            <ul>
              <li><strong>user customization of menu</strong> using cookies and term keywords</li>
            </ul>
          </li>
        </ul>

      </MainDiv>

    </>
  )

}