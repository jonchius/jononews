import { Fragment } from "react"
import { PageNavi, NaviName, NaviPage } from "../components/navi"
import { MainDiv, MainList } from "../components/main"
import { getData } from "../util/data"
import { text } from "../components/text"
import Note from "../components/note"
import Item from "../components/item"

interface MainProps {
  searchParams: {
    page?: number,
    points?: number,
  }
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Main({searchParams}: MainProps) {

  const { page = 1, points } = await searchParams
  const data = await getData('', page - 1, points)
  const { hits: list } = data

  return (
    <>

      <PageNavi>
        <NaviName label={text['home']} page={page} />
        <NaviPage term={``} current={page} points={points} />
      </PageNavi>

      <MainDiv className="my-16">

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