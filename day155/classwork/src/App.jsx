import { useEffect, useState } from "react"

export default function app(){
  const [data , setData] = useState([])
  const [city , setCity] = useState("Tbilisi")
  const [search , setSearch] = useState()

  const apiKey = "6790efe7785efeb4b526c91d43b41a10"
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  
  const handleSearch = (e) => {
    e.preventDefault()
    setCity(search)
    console.log(cityNmae)
  }
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(res => setData(res))
  },[API])
  console.log(data)

  return(
    <div className="flex items-center justify-center h-dvh">
      <div className="w-auto h-auto bg-slate-600 text-white flex items-center justify-center gap-4 flex-col text-xl rounded-xl p-10">
        <h1>City: {data?.name}</h1>
        <h1>temperature: {data?.["main"]?.temp}</h1>
        <input onChange={e => setSearch(e.target.value)} value={search} type="text" name="city-name" placeholder="City" id="cityName"  className="border-white border-2 w-[70%] p-2" />
        <button onClick={(e) => handleSearch(e)} className="bg-slate-700 p-3 rounded-lg">Submit</button>
      </div>
    </div>
  )
}