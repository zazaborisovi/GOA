import React, { useState } from 'react'

export default function App() {
  const [userId , setUserId] = useState("")
  const handleDel = async () =>{
    try {
      const res = await fetch(`http://localhost:6969/delete-post/${userId}`,{
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        }
      })
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <div>
      <input type="text"
      value={userId}
      onChange={(e) => setUserId(e.target.value)}
      placeholder="Enter user ID"/>
      <button onClick={handleDel}>rah</button>
    </div>
  )
}
