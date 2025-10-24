/*
data by @jonchius
/util/data.tsx
- fetch data from hn.algolia.com API
- date calculation utility functions
*/

export async function getData(
  slug: string = '',
  page: number = 0,
  points: number = 10,
  pointsOp: string = '>=',
  after: number = 0,
  before: number = getNextYear()
) {

  const root = `https://hn.algolia.com/api/v1/`
  const endpoint = `search_by_date`
  const tag = `tags=story`
  const term = `&query=${slug}`
  const pg = `&page=${page}`
  const pts = `points${pointsOp}${points}`
  const earliest = `created_at_i>=${after}`
  const latest = `created_at_i<=${before}`
  const url = `${root}${endpoint}?${tag}${term}${pg}&numericFilters=${pts},${earliest},${latest}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch!')
  }

  return res.json()

}

export function getNextYear() {

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const nextYear = new Date(Date.UTC(currentYear + 1, 0, 1))

  return nextYear.valueOf() / 1000

}

export function getThisYear() {

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const thisYear = new Date(Date.UTC(currentYear, 0, 1))

  return thisYear.valueOf() / 1000

}

export function getSomeYear(year: string) {

  const yearNum = Number(year)
  const isYearNumGood = Number.isInteger(yearNum)
  const yearStart = isYearNumGood
    ? new Date(Date.UTC(yearNum, 0, 1)).valueOf() / 1000
    : getThisYear()
  const yearEnd = isYearNumGood
    ? new Date(Date.UTC(yearNum + 1, 0, 1)).valueOf() / 1000
    : getNextYear()

  return { yearStart, yearEnd }

}

export function getUnixDate(date) {

  const unixDate = new Date(date).valueOf() / 1000
  return unixDate

}

export function getTodaysDate() {

  let today = new Date()
  return today.toISOString().split('T')[0]

}