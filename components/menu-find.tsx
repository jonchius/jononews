import { useState } from 'react'
import { useRouter } from "next/navigation"
import { text } from './text'

interface MenuFindProps {
  inputName: string,
  placeholder: string
}

export const MenuFind = ({ inputName, placeholder }: MenuFindProps) => {

  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    router.push(`/term/${decodeURIComponent(searchTerm)}`)  

  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  return (
    <div className="head-find w-full text-center text-xs md:text-xl">
      <form onSubmit={handleSubmit}>
        <input type="text" name={inputName} id={inputName} className={`p-2 text-black dark:text-white`} placeholder={placeholder} onChange={handleSearchChange} />
        <input type="submit" className={`p-2 px-5 bg-green-500 text-black`} value={text['search go button']} />
      </form>
    </div>
  )

}