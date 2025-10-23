import { Fragment } from "react"
import { PageNavi, NaviName, NaviPage } from "../../components/navi"
import { MainDiv, MainList } from "../../components/main"
import Item from "../../components/item"
import { text } from "../../components/text"
import { getData, getNextYear, getUnixDate } from "../../util/data"
import { OmniForm } from "./form"
import Note from "../../components/note"

interface OmniProps {
  searchParams: {    
    term?: string,
    page?: number,
    points?: number,
    pointsOp?: '>=' | '<=' | '==',
    after: string,
    before: string,
  }
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'


export default async function Omni({searchParams}: OmniProps) {

  const { 
    term = '', 
    page = 1, 
    points = 0, 
    pointsOp = '>=', 
    after = '', 
    before = ''
  } = await searchParams  

  const afterUnix = getUnixDate(after) || 0
  const beforeUnix = getUnixDate(before) || getNextYear()
  const data = await getData(term, page - 1, points, pointsOp, afterUnix, beforeUnix)
  const { hits: list } = data    
  
  return (
    <>

      <PageNavi>
        <NaviName label={`${term === '' ? 'OMNI' : term} ${pointsOp} ${points} ${text['points']}`} page={page} />
        <NaviPage platform="omni" term={``} current={page} points={points} pointsOp={pointsOp} after={after} before={before} />
      </PageNavi>    
    
      <MainDiv className="mt-16"> 

        <Note />

        { (after !== '' || before !== '') && 
          <div className="text-xl">
            <h3 className="flex gap-5">
              {after && <> {text['after']}: <strong>{after}</strong> </>} 
              {before && <> {text['before']}: <strong>{before}</strong> </>} 
            </h3>
          </div>
        } 

        <h3 className="text-5xl"></h3>

        <OmniForm 
          currentTerm={term} 
          currentPoints={points} 
          currentAfter={after} 
          currentBefore={before} 
        />
        
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
