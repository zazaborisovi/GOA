import { useState } from 'react'
import NavLinks from '../components/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavLinks />
    </>
  )
}

export default App
