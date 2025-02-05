import React from 'react'
import { X , Menu } from 'lucide-react'
import { useState } from 'react'

export default function App() {
  const [isActive , setActive] = useState(false)
  const handleActive = () =>{
    setActive(!isActive)
  }
const menulist = [
      {li: "About"},
      {li: "Home"},
      {li: "More"}
    ]
  const menu = () =>{
    const handleColorMode = (color) =>{
      if (color != "default"){
        document.documentElement.classList.remove(...document.documentElement.classList)
        document.documentElement.classList.add(color)
      }
      else{
        document.documentElement.classList.remove(...document.documentElement.classList)
      }
    }
    if(isActive){
      return(
        <div className='absolute'>
          <X size={35} className='block absolute right-[0px] text-red-700 bg-white rounded-2xl
          dark:bg-black red:bg-red-500 green:bg-green-500 blue:bg-blue-500
          ' onClick={() => handleActive()}/>
          <div className='
          w-60 h-72 border-2 border-black rounded-bl-4xl rounded-tr-[50px]  
          flex justify-center gap-[30px] items-center
          *:border-2 *:w-[75px] *:h-[50px] flex-wrap *:flex *:items-center *:justify-center
          *:rounded-tr-[30px] *:rounded-[10px] *:border-black
          dark:border-white *:dark:border-white'>
            <div className='text-black bg-white' onClick={() => handleColorMode("default")}>Default</div>
            <div className='text-white bg-black' onClick={() => handleColorMode("dark")}>Dark</div>
            <div className='text-white bg-red-600' onClick={() => handleColorMode("red")}>Red</div>
            <div className='text-white bg-green-600' onClick={() => handleColorMode("green")}>Green</div>
            <div className='text-white bg-blue-600' onClick={() => handleColorMode("blue")}>Blue</div>
          </div>       
        </div>
    )
    }
    else{
      return <Menu size={35} className='absolute' onClick={() => handleActive()}/>
    }
  }
  return (
    <div className='flex text-black flex-row justify-between p-5 h-screen
    dark:bg-black dark:text-white
    red:bg-red-500 red:text-white
    green:bg-green-500 green:text-white
    blue:bg-blue-500 blue:text-white'>
      <h1 className='text-2xl'>site name</h1>
      <ul className='flex gap-[30px] text-l'>
        {
          menulist.map((item , index) =>(
            <li key={`_names-${index}`}>{item.li}</li>
          ))
        }
      </ul>
      <div className='flex flex-col items-end gap-4'>
        {menu()}
      </div>
    </div>
  )
}
