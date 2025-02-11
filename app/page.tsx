import { Fragment } from "react"
import { PageNavi, NaviName, NaviPage } from "../components/navi"
import { MainDiv, MainList } from "../components/main"
import Item from "../components/item"
import { text } from "../components/text"
import { getData } from "../util/data"

interface MainProps {
  searchParams: {    
    page?: number,
    points?: number,
  }
}

export const dynamic = 'force-dynamic';

export default async function Main({searchParams}: MainProps) {
 
  const { page = 1, points } = searchParams
  const data = await getData('', page - 1, points)
  const { hits: list } = data

  return (
    <>

      <PageNavi>
        <NaviName label={text['home']} page={page} />
        <NaviPage term={``} current={page} points={points} />
      </PageNavi>    
    
      <MainDiv className="my-16">  
        
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