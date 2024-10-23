import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='mainDiv'>
      <div id='displayDiv'>
        <h2>computer choose</h2>
        <h1 id='computerChoice'></h1>
      </div>
      <div id='menu'>
        <button className="choices">rock</button>
        <button className="choices">paper</button>
        <button className="choices">scissors</button>
      </div>
    </div>
  )
}

export default App
