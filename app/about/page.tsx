/*
jononews by @jonchius
/app/(root)/about/page.tsx
explanation of the project
*/

import { MainDiv } from "../../components/main"
import Link from "next/link"

export default function About() {

  return (
    <MainDiv>

      <h2 className="text-5xl my-5">About</h2>
      <p>
        displays tech-adjacent news headlines from the <Link href="https://hn.algolia.com/api" target="_blank">Hacker News API</Link>
      </p>

      <h3 className="text-3xl my-5">Features</h3>
      <ul>
        <li>Started with just a <strong>simple homepage list</strong> like the <Link href="https://news.ycombinator.com/" target="_blank">Hacker News home page</Link>, then:
          <ul>
            <li><strong>Filter by keyword</strong>: press command-K to filter by term!</li>
            <li><strong>Filter by year</strong>: e.g. <Link href="/year/2022">2022</Link> or <Link href="/year/2021">2021</Link> all the way back to <Link href="/year/2006">2006</Link></li>
            <li><strong>Filter by multiple variables</strong>: aka <Link href="/omni/">Omni</Link> search</li>
            <li><strong>Dark mode toggle</strong>: (inside the menu)</li>
            <li><strong>Full-screen menu</strong>: (press command-slash!)</li>
            <li><strong>URL-input compatibility</strong>: play around with the URLs in Omni to get a different filtering!</li>
            <li><em>added 2025-10-23</em> <strong>User-generated configuration</strong> (filter by a custom quality score)</li>
            <li><em>added 2025-10-23</em> <strong>Show comments from Hacker News</strong> (read the comments of each submitted link!)</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-3xl my-5">Pipeline</h3>
      <ul>
        <li>hoping to add some <strong>more features</strong> with time permitting:</li>
        <ul>
          <li><strong>User-generated navigation</strong> (choose one or more keywords to personalize the menu)</li>          
        </ul>
      </ul>

    </MainDiv>
  )

}