import React, { useEffect, useState } from 'react'
const originalUser = {
  name: "zaza",
  surname: "borisovi"
}
export default function App() {
  
  const [user , setUser] = useState({})
  const [isloading , setLoading] = useState(true)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("originalUser")) || []
    setTimeout(() => {
      setUser(user)
      if(user.length === 0){
        setLoading(true)
      }
      else{
        setLoading(false)
      }
    }, 2000);
  },[user , setUser])  
  function handleAddUser(){
    const user = JSON.parse(localStorage.getItem("originalUser")) || []
    localStorage.setItem("users" , JSON.stringify([...user, originalUser]))
  }
  console.log(user)
  return (
    <div className='h-screen flex items-center justify-center flex-col bg-blue-800 gap-2'>
      <div className='flex flex-col items-center justify-center border-2 p-5 rounded-xl bg-blue-700 gap-2 shadow-lg shadow-blue-500'>
        <h1 className='text-2xl text-white'>add user</h1>
        <button className='p-5 cursor-cursor bg-black text-white border-2 border-white rounded-xl text-xl hover:text-black hover:bg-white hower hover:border-black transition-all'
        onClick={() => handleAddUser()}>add user</button>
      </div>
      {!isloading ?(
        <div className='flex flex-col items-center justify-center border-2 p-5 rounded-xl bg-blue-700 gap-2 shadow-lg shadow-blue-500 w-[12%] *:text-2xl *:text-white'>
          <h1>{user.name}</h1>
          <h1>{user.surname}</h1>
        </div>
      ): <div className='w-10 h-10 rounded-full border-2 border-green-50 border-t-black animate-spin'> </div>}
    </div>
  )
}
