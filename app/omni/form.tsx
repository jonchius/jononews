'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation"
import { text } from "../../components/text"
import { getTodaysDate } from '../../util/data'

interface OmniFormProps {
  currentTerm: string,
  currentPoints: number,
  currentAfter: string,
  currentBefore: string
}

export function OmniForm({currentTerm = '', currentPoints = 0, currentAfter = '2006-01-01', currentBefore = getTodaysDate()}: OmniFormProps) {
  
  const router = useRouter()

  const [ term, setTerm ] = useState(currentTerm)
  const [ points, setPoints ] = useState(currentPoints)
  const [ dateAfter, setDateAfter ] = useState(currentAfter)
  const [ dateBefore, setDateBefore ] = useState(currentBefore)

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    router.push(`/omni/?term=${term}&points=${points}&after=${dateAfter}&before=${dateBefore}`)
  }

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setTerm(event.target.value)
    
  }

  const handlePointsChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    event.preventDefault()
    setPoints(Number(event.target.value))
  }

  const handleDateAfterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setDateAfter(event.target.value)
  }

  const handleDateBeforeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setDateBefore(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="omni-form my-10">
      <div className="omni-form-grid grid grid-cols-2 md:grid-cols-5 gap-5 items-end justify-between">
        
        <div className="omni-term flex flex-col">
          <label htmlFor="omniterm">{text['search term']}</label>
          <input type="text" onChange={handleTermChange} name="omniterm" className="border p-2" value={term}></input>
        </div>
        
        <div className="omni-points flex flex-col">
          <label htmlFor="omnipoints">{text['minimum points']}</label>
          <select onChange={handlePointsChange} name="omnipoints" className="border p-2" value={points}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>        
        </div>

        <div className="omni-after flex flex-col">
          <label htmlFor="omniafter">{text['article dated on or after']}</label>
          <input onChange={handleDateAfterChange} name="omniafter" type="date" className="border p-2" min="2006-01-01" max={dateBefore} value={dateAfter}></input>
        </div>

        <div className="omni-before flex flex-col">
          <label htmlFor="omnibefore">{text['article dated on or before']}</label>
          <input onChange={handleDateBeforeChange} name="omnibefore" type="date" className="border p-2" min={dateAfter} value={dateBefore}></input>
        </div>

        <div className="omni-submit">
          <input type="submit" className="bg-black text-white py-3 px-5 w-full" value="Submit" />
        </div>      
  
      </div>  
      
    </form>
  )

}

