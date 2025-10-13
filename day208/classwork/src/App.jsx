import { useEffect, useState } from 'react'

export default function App() {
  const [data , setData] = useState([])
  useEffect( () =>{
    const url = "https://api.unsplash.com/photos/?client_id=XbEJOUoxJe7b9p4tEpyKwVnoHIDfMPizJom48MkO95o"
    const apiPost = async ()=>{
      try {
        const req = await fetch(url, {
          method: "GET",
          param: {page: 1 , per_page: 20},
          header:{
            Authorization: `Client-ID XbEJOUoxJe7b9p4tEpyKwVnoHIDfMPizJom48MkO95o`
          }
        })
        if(!req.ok){
          throw new Error(`response status ${res.status}`)
        }
        const res = await req.json()
        setData(res)
        console.log(res)
      } catch (error) {
        
      }

    }
    apiPost()
  },[])
  return(
    <div>
      {data.map(photo => photo?.slug)}
    </div>
  )
}
