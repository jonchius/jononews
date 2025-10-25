/*
jononews by @jonchius
/app/(root)/term/page.tsx
search results by user input keyword or "term"
*/

import { Fragment } from "react"
import { PageNavi, NaviName, NaviPage } from "../../../components/navi"
import { MainDiv, MainList } from "../../../components/main"
import Note from "../../../components/note"
import Item from "../../../components/item"
import { text } from "../../../components/text"
import { getData } from "../../../util/data"
import { cookies } from "next/headers"
import MenuPage from "../../../components/menu-page"

interface MainProps {
  params: {
    slug: string
  },
  searchParams: {
    page?: number,
    points?: any
  }
}

export async function getPointsCookie() {
  const cookieStore = cookies()
  const points = (await cookieStore).get('jn-points')?.value || 0
  return points
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Main({params, searchParams}: MainProps) {

  const { slug = '' } = await params
  let { page = 1, points } = await searchParams
  if (!points) points = await getPointsCookie()
  const data = await getData(slug, page - 1, points)
  const { hits: list } = data

  return (
    <>

      <PageNavi>
        <NaviName label={slug} page={page} />
        <NaviPage platform="term" slug={slug} current={page} points={points} />
      </PageNavi>

      <MainDiv className="mt-16">

        <Note />
        <MenuPage />

        { list.length > 0 &&

          <MainList>
            {list.map((item: any) =>
              <Fragment key={item.objectID}>
                {item.url && <Item item={item} /> }
              </Fragment>
            )}
          </MainList>

        }

        {list.length === 0 && (

          <p>{text["no items"]}</p>

        )}

      </MainDiv>

    </>
  )

}