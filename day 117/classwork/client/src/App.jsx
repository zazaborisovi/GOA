import React, { useEffect, useState } from 'react'
const api = "http://localhost:6969"

export default function App() {
  const [user , setUser] = useState({})

  useEffect(() =>{
    fetch(`${api}/user`)
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h1>name</h1>
      <h2>{user.name}</h2>
    </div>
  )
}
