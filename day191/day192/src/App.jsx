import React, { useEffect } from 'react'
const HOST = "http://localhost:8000/daisy"
import axios from "axios"

export default function App() {
  useEffect(()=>{
    const asyncData = async(params) =>{
      const getHost = await axios.get(HOST)
      const data = await getHost
      console.log(data)
    }
  })
  return(
    <div>{data}</div>
  )
}
