import React, { useEffect, useState } from 'react'
import { Eclipse, Moon , Sun } from 'lucide-react'

export default function App() {
  const [isDark , setIsDark] = useState(true)
  const [isDarkMode , setIsDarkMode] = useState("")
  
  const handleDarkMode = () =>{
    setIsDark(!isDark)
    localStorage.getItem("dark" , true)
    console.log(localStorage.getItem("dark"))
    if(localStorage.getItem("dark") === true){
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("gray")
    }else{
      document.documentElement.classList.remove("gray")
      document.documentElement.classList.remove("dark")
    }
  }
  return (
    <>
      <div className='bg-slate-300 flex justify-between dark:bg-black text-white p-4 gray:bg-gray-600 gray:text-yellow-400'>
      <p className='text-2xl dark:text-white text-black'>hello world</p>

      <Eclipse className='gray:hidden' onClick={() => document.documentElement.classList.add("gray")} />
      <button className='hidden gray:block' onClick={() => document.documentElement.classList.remove("gray")}>remove gray mode</button>
      <div className='flex relative' onClick={ () => handleDarkMode()}>
        <Moon size={30} className='top-0 right-0 absolute hidden dark:block text-white'/>
        <Sun size={30} className='dark:hidden text-white'/>
      </div>
      </div>
    </>
  )
}
