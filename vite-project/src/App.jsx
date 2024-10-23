import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div><h1>Group 5</h1></div>
      <ul>
        <li>about</li>
        <li>services</li>
        <li>home</li>
        <li>FAQs</li>
      </ul>
    </div>
  )
}

export default App
