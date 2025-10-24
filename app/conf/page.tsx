/*
jononews by @jonchius
/app/(root)/conf/page.tsx
configuration for users
- set points threshold to filter news items by upvotes
*/

'use client'

import React, { useState, useEffect } from 'react'
import { MainDiv } from '../../components/main'
import { text } from '../../components/text'
import { PageNavi, NaviName } from '../../components/navi'
import { setCookie, getCookie } from './cook'

export default function Main() {

  useEffect(() => {
    setPointsThreshold(Number(getCookie("jn-points")) || 0)    
    setTopics(getCookie("jn-topics") || '')
  }, [])

  const [pointsThreshold, setPointsThreshold] = useState(0)
  const [topics, setTopics] = useState('')
  const [topicsSaved, setTopicsSaved] = useState(false)

  const handlePointInputChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    event.preventDefault()
    setPointsThreshold(Number(event.target.value))    
    setCookie("jn-points", event.target.value, 36500)
  }  

  const handleUserTopics = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()        
    setTopics(String(event.target.value))
    setTopicsSaved(false)
  }

  const handleSubmitUserTopics = (event: React.MouseEvent): void => {
    event.preventDefault()
    setCookie("jn-topics", topics, 36500)
    setTopicsSaved(true)
  }
  
  return (

    <>

      <PageNavi>
        <NaviName label={`${text['configuration']}`} />
      </PageNavi>
  
      <MainDiv className="mt-20">

        <p>{text["configuration intro"]}</p>

        <div className="border border-gray-200 mt-5 p-5 flex flex-col gap-2">

          <label htmlFor="menulist" className="text-xl">
            <strong>{text["menu topics"]}</strong>            
          </label>
          
          <div className="flex flex-row">
            <input type="text" className="border text-xl p-2 w-[100%]" name="menulist" onChange={handleUserTopics} value={topics} />
            <input 
              type="submit" 
              className={`${topicsSaved ? 'bg-green-500' : 'bg-red-500'} hover:bg-black hover:white text-white p-2 px-5 hover:cursor-pointer`} 
              value={topicsSaved ? text['saved'] : text['save']} 
              onClick={handleSubmitUserTopics} 
            />
          </div>

          <p><em>{text["menu topics description"]}</em></p>

        </div>

        <div className="border border-gray-200 mt-5 p-5 flex flex-col gap-2">
         
          <label htmlFor="points" className="text-xl">
            <strong>{text["points threshold"]}</strong>
          </label>
          
          <select name="points" className="border text-xl p-2" value={pointsThreshold} onChange={handlePointInputChange}>
            <option value="0">0+ (show everything!)</option>
            <option value="10">10+</option>
            <option value="20">20+</option>
            <option value="30">30+</option>
            <option value="40">40+</option>
            <option value="50">50+</option>
            <option value="60">60+</option>
            <option value="70">70+</option>
            <option value="80">80+</option>
            <option value="90">90+</option>
            <option value="100">100+ (show the most popular!)</option>
          </select>

          <p><em>{text["points threshold description"]}</em></p>
                  
        </div>

      </MainDiv>
    
    </>
  )

}