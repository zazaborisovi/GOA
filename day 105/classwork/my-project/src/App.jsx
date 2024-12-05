import React from "react"
import Button from "./../components/Button"
import ButtonUi from "./../components/ButtonUi"

export default function App() {
  const myinfo = "information"
  return (
    <div className="container">
      <Button value={"12"} level={"15"}/>
      <ButtonUi>Click</ButtonUi>
      <ButtonUi>Click 2</ButtonUi>
    </div>
  )
}