import Image from 'next/image'
import HomePage from './component/HomePage'

async function getCountries() {
  const data = await fetch('https://restcountries.com/v3.1/all')
  return data.json()
}

export default async function Home() {
  const data = await getCountries()
  return (
   <div>
    <HomePage data = {data} />
   </div>
  )
}
