import React, { useEffect } from 'react'
import axios from "axios"

export default function App() {
  const [data , setData] = []
  useEffect(() => {
    const resp = axios.get("http:/localhost:5173")
    setData(resp)
  }, [])
  console.log(data)
  
  return (
    <div>
      
    </div>
  )
}
