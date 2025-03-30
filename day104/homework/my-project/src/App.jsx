import React from "react"
import MyButton from "./../components/myButton"
import { useState } from "react"

export default function App(){
  const [count , setClick] = useState(0)
  function ClickAdd(){
    setClick(count + 1)
  }
  function Reset(){
    setClick(count - count)
  }
  return(
    <div className="flex flex-col items-center gap-10">
      <p>{count}</p>
      <MyButton onClick={ClickAdd}>1 point</MyButton>
      <MyButton onClick={Reset}>reset</MyButton>
    </div>
  )
}