import React, { useState } from 'react'
import axios from "axios"

export default function App() {
  const [sendData , setData] = useState({
    username: "",
    password: ""
  })
  const handleSendData = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:6969/api/register")
  }
  console.log(sendData)
  return (
    <div>
      <h1>register</h1>
      <input type="text" placeholder='UserName' onChange={e => setData(... sendData , username: e.target.value)} value={sendData.username} />
      <input type="password" placeholder='password' />
      <button type='submit' onClick={handleSendData}>submit</button>
    </div>
  )
}
