'use client'

import { useState } from 'react'
import { MainDiv } from '../../components/main'
import { setCookie } from './cook'

export default function Main() {

  // const defaultPointsThreshold = localStorage.getItem("jn-points") ?? 0
  const [pointsThreshold, setPointsThreshold] = useState(0)
  // const [topicsMenu, setTopicsMenu] = useState([])

  const handlePointInputChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    event.preventDefault()
    setPointsThreshold(Number(event.target.value))
    localStorage.setItem("jn-points", event.target.value)
    setCookie("jn-points", event.target.value, 30)
    
  }

  return (
    <MainDiv>
      <h2 className="text-5xl mb-5">Configuration</h2>
      <p>These settings will be saved on your browser in the form of cookies - using this page implies you agree to have these cookies on your computer!</p>
      <form className="border border-gray-200 mt-5 p-5 flex items-center gap-5">
        <label htmlFor="points" className="text-xl"><strong>Points threshold</strong> (how many points does an article must have to appear on this site?)</label>
        <select name="points" className="border text-xl p-2" value={pointsThreshold} onChange={handlePointInputChange}>
          <option value="0">0+ (everything!)</option>
          <option value="10">10+</option>
          <option value="20">20+</option>
          <option value="30">30+</option>
          <option value="40">40+</option>
          <option value="50">50+</option>
          <option value="100">100+ (only the most liked!)</option>
        </select>
      </form>          
    </MainDiv>
  )

}