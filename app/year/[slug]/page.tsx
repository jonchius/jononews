/*
jononews by @jonchius
/app/(root)/year/page.tsx
search results by year of publication
*/

import { Fragment } from "react"
import { PageNavi, NaviName, NaviPage } from "../../../components/navi"
import { MainDiv, MainList } from "../../../components/main"
import Item from "../../../components/item"
import { text } from "../../../components/text"
import { getData, getSomeYear, getThisYear, getNextYear } from "../../../util/data"
import Note from "../../../components/note"

interface MainProps {
  params: {
    slug: string
  },
  searchParams: {
    page?: number,
    points?: number
  }
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Main({params, searchParams}: MainProps) {

  const { slug } = await params
  const { page = 1, points = 0 } = await searchParams
  const { yearStart, yearEnd } = getSomeYear(slug)
  const after = yearStart ?? getThisYear()
  const before = yearEnd ?? getNextYear()

  const data = await getData('', page - 1, points, '>=', after, before)
  const { hits: list } = data

  return (
    <>

      <PageNavi>
        <NaviName label={slug} page={page} />
        <NaviPage platform="year" slug={slug} current={page} points={points} />
      </PageNavi>

      <MainDiv className="mt-16">

        <Note />

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